import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, title, company, website, email, phone } = body;

    // Pošalji email tebi
    await resend.emails.send({
      from: 'FleetHub <onboarding@resend.dev>', // Privremeno - kasnije ćemo custom domen
      to: 'contact@fleetexpedite.com',
      subject: 'New FleetHub Registration',
      html: `
        <h2>New Registration Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
