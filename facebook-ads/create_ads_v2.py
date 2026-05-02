from PIL import Image, ImageDraw, ImageFont

def create_complete_ad():
    img = Image.new('RGB', (1200, 628))
    draw = ImageDraw.Draw(img)
    
    # Gradient background
    for y in range(628):
        r = int(26 + (45 - 26) * y / 628)
        g = int(35 + (62 - 35) * y / 628)
        b = int(50 + (80 - 50) * y / 628)
        draw.rectangle([0, y, 1200, y+1], fill=(r, g, b))
    
    try:
        font_huge = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 90)
        font_xlarge = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 48)
        font_large = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 38)
        font_medium = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 28)
        font_small = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 22)
    except:
        font_huge = font_xlarge = font_large = font_medium = font_small = ImageFont.load_default()
    
    # Top badge
    draw.rounded_rectangle([40, 30, 400, 80], radius=25, fill='#ff6b35')
    draw.text((220, 55), "📱 OWNER OPERATOR APP", fill='white', font=font_medium, anchor='mm')
    
    # Main headline
    draw.text((600, 140), "STOP LOSING", fill='white', font=font_huge, anchor='mm')
    draw.text((600, 210), "$420 PER LOAD", fill='#ff6b35', font=font_huge, anchor='mm')
    
    # Subheadline
    draw.text((600, 270), "Self-Dispatch App • 1% Commission", fill='white', font=font_large, anchor='mm')
    
    # Three boxes with info
    boxes = [
        {
            'x': 80, 
            'title': '❌ OLD WAY',
            'lines': ['Traditional Dispatch', '10-15% Commission', '$450 per $3k load', 'Someone else profits'],
            'color': '#e74c3c'
        },
        {
            'x': 450,
            'title': '✅ NEW WAY',
            'lines': ['FleetExpedite App', '1% Commission', '$30 per $3k load', 'You keep $2,970'],
            'color': '#10b981'
        },
        {
            'x': 820,
            'title': '🔥 BONUS',
            'lines': ['First 100 Drivers:', '1% FOR LIFE', 'Regular: 2.5%', 'Save $1,500/month'],
            'color': '#f59e0b'
        }
    ]
    
    y_start = 330
    for box in boxes:
        # Box background
        draw.rounded_rectangle(
            [box['x'], y_start, box['x'] + 300, y_start + 200],
            radius=15,
            fill='#3d4f5c',
            outline=box['color'],
            width=3
        )
        
        # Title
        draw.text((box['x'] + 150, y_start + 30), box['title'], 
                 fill='white', font=font_medium, anchor='mm')
        
        # Lines
        for i, line in enumerate(box['lines']):
            draw.text((box['x'] + 150, y_start + 75 + (i * 30)), line,
                     fill='white', font=font_small, anchor='mm')
    
    # CTA Button
    draw.rounded_rectangle([380, 560, 820, 610], radius=15, fill='#ff6b35')
    draw.text((600, 585), "DOWNLOAD FREE iOS APP →", fill='white', font=font_large, anchor='mm')
    
    img.save('complete-ad.jpg', quality=95)
    print("✅ Created: complete-ad.jpg")

create_complete_ad()
print("\n🎉 Open folder to see the new ad!")
