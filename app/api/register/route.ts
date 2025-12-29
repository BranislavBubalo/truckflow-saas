import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  // Inicijalizuj Resend UNUTAR funkcije
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  try {
    const data = await request.json();
    
    await resend.emails.send({
      from: 'FleetExpedite <onboarding@resend.dev>',
      to: 'contact@fleetexpedite.com',
      subject: 'New Registration - FleetExpedite',
      html: `
        <h2>New Registration</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
      `
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send registration' },
      { status: 500 }
    );
  }
}