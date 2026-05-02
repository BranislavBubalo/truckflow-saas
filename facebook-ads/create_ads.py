from PIL import Image, ImageDraw, ImageFont
import os

def create_variant_1():
    # Create image 1200x628
    img = Image.new('RGB', (1200, 628), color='#1a2332')
    draw = ImageDraw.Draw(img)
    
    # Try to use system font, fallback to default
    try:
        font_large = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 70)
        font_medium = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 32)
        font_small = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 24)
    except:
        font_large = ImageFont.load_default()
        font_medium = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # Draw headline
    draw.text((600, 80), "STOP PAYING", fill='white', font=font_large, anchor='mm')
    draw.text((600, 150), "10-15% DISPATCH FEES", fill='white', font=font_large, anchor='mm')
    
    # Draw boxes
    # BEFORE box (left)
    draw.rectangle([150, 250, 500, 480], outline='#e74c3c', width=3, fill='#2d3e50')
    draw.text((325, 280), "❌ BEFORE", fill='white', font=font_medium, anchor='mm')
    draw.text((325, 330), "$3,000 load", fill='white', font=font_small, anchor='mm')
    draw.text((325, 370), "-$450 (15%)", fill='white', font=font_small, anchor='mm')
    draw.text((325, 430), "Keep: $2,550", fill='#ff6b35', font=font_medium, anchor='mm')
    
    # AFTER box (right)
    draw.rectangle([700, 250, 1050, 480], outline='#27ae60', width=3, fill='#2d3e50')
    draw.text((875, 280), "✅ AFTER", fill='white', font=font_medium, anchor='mm')
    draw.text((875, 330), "$3,000 load", fill='white', font=font_small, anchor='mm')
    draw.text((875, 370), "-$30 (1%)", fill='white', font=font_small, anchor='mm')
    draw.text((875, 430), "Keep: $2,970", fill='#ff6b35', font=font_medium, anchor='mm')
    
    # Badge
    draw.rounded_rectangle([350, 510, 850, 560], radius=25, fill='#ff6b35')
    draw.text((600, 535), "🔥 FIRST 100 DRIVERS: 1% FOR LIFE", fill='white', font=font_small, anchor='mm')
    
    # Footer
    draw.text((600, 590), "FleetExpedite | AI-Powered Self-Dispatch", fill='#888888', font=font_small, anchor='mm')
    
    img.save('variant-1-calculator.jpg', quality=95)
    print("✅ Created: variant-1-calculator.jpg")

def create_variant_2():
    # Create gradient background
    img = Image.new('RGB', (1200, 628))
    draw = ImageDraw.Draw(img)
    
    # Gradient background (purple)
    for y in range(628):
        r = int(102 + (118 - 102) * y / 628)
        g = int(126 + (75 - 126) * y / 628)
        b = int(234 + (162 - 234) * y / 628)
        draw.rectangle([0, y, 1200, y+1], fill=(r, g, b))
    
    try:
        font_huge = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 80)
        font_large = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 60)
        font_medium = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 32)
        font_small = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 24)
    except:
        font_huge = ImageFont.load_default()
        font_large = ImageFont.load_default()
        font_medium = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # Content
    draw.text((600, 100), "OWNER OPERATORS", fill='white', font=font_small, anchor='mm')
    draw.text((600, 200), "SELF-DISPATCH.", fill='white', font=font_huge, anchor='mm')
    draw.text((600, 270), "KEEP YOUR MONEY.", fill='white', font=font_huge, anchor='mm')
    
    draw.text((600, 340), "1% commission vs 10-15% industry average", fill='white', font=font_medium, anchor='mm')
    
    # Stats
    draw.text((300, 420), "$420", fill='white', font=font_large, anchor='mm')
    draw.text((300, 470), "Saved Per Load", fill='white', font=font_small, anchor='mm')
    
    draw.text((600, 420), "1%", fill='white', font=font_large, anchor='mm')
    draw.text((600, 470), "Commission", fill='white', font=font_small, anchor='mm')
    
    draw.text((900, 420), "24/7", fill='white', font=font_large, anchor='mm')
    draw.text((900, 470), "AI Matching", fill='white', font=font_small, anchor='mm')
    
    # CTA
    draw.rounded_rectangle([400, 530, 800, 590], radius=15, fill='white')
    draw.text((600, 560), "DOWNLOAD FREE →", fill='#667eea', font=font_medium, anchor='mm')
    
    img.save('variant-2-minimal.jpg', quality=95)
    print("✅ Created: variant-2-minimal.jpg")

def create_variant_3():
    # Split design - red left, black right
    img = Image.new('RGB', (1200, 628))
    draw = ImageDraw.Draw(img)
    
    # Left side (red)
    draw.rectangle([0, 0, 600, 628], fill='#ff6b35')
    # Right side (black)
    draw.rectangle([600, 0, 1200, 628], fill='#000000')
    
    try:
        font_huge = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 140)
        font_large = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 50)
        font_medium = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 36)
        font_small = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 28)
    except:
        font_huge = ImageFont.load_default()
        font_large = ImageFont.load_default()
        font_medium = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # Left side content
    draw.text((300, 150), "OLD WAY", fill='white', font=font_medium, anchor='mm')
    draw.text((300, 280), "15%", fill='white', font=font_huge, anchor='mm')
    draw.text((300, 380), "COMMISSION", fill='white', font=font_medium, anchor='mm')
    draw.text((300, 500), "Lose $450", fill='white', font=font_large, anchor='mm')
    draw.text((300, 550), "per $3k load", fill='white', font=font_small, anchor='mm')
    
    # Right side content
    draw.text((900, 150), "NEW WAY", fill='white', font=font_medium, anchor='mm')
    draw.text((900, 280), "1%", fill='#10b981', font=font_huge, anchor='mm')
    draw.text((900, 380), "COMMISSION", fill='white', font=font_medium, anchor='mm')
    draw.text((900, 470), "🔥 First 100 Drivers", fill='white', font=font_small, anchor='mm')
    draw.text((900, 510), "Lock 1% FOR LIFE", fill='#10b981', font=font_medium, anchor='mm')
    draw.text((900, 570), "DOWNLOAD FREE", fill='white', font=font_small, anchor='mm')
    
    img.save('variant-3-bold.jpg', quality=95)
    print("✅ Created: variant-3-bold.jpg")

# Create all variants
print("🎨 Creating Facebook ad designs...")
create_variant_1()
create_variant_2()
create_variant_3()
print("\n✅ All ads created in: /Users/Bran/TruckFlow/truckflow-saas/facebook-ads/")
print("\nFiles:")
print("  - variant-1-calculator.jpg")
print("  - variant-2-minimal.jpg")
print("  - variant-3-bold.jpg")
