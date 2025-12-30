import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  try {
    const data = await request.json();
    
    await resend.emails.send({
      from: 'FleetExpedite <contact@fleetexpedite.com>',
      to: 'contact@fleetexpedite.com',
      subject: '🚚 New Early Adopter - Owner Operator Registration',
      html: `
        <h2>New Owner-Operator Early Adopter!</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>MC Number:</strong> ${data.mcNumber || 'N/A'}</p>
        <p><strong>Truck Type:</strong> ${data.truckType || 'N/A'}</p>
        <hr>
        <p><em>1% Commission Early Adopter Program</em></p>
      `
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Early adopter registration error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send registration' },
      { status: 500 }
    );
  }
}
