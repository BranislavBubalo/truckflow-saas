import { neon } from '@neondatabase/serverless';
import { NextRequest, NextResponse } from 'next/server';

const VALID_PINS = ['TF001', 'TF002', 'TF003', 'TF004', 'TF005', 'TF006'];

export async function POST(request: NextRequest) {
  try {
    const { pin } = await request.json();
    const clientIP = request.headers.get('x-forwarded-for')?.split(',')[0] || 
                     request.headers.get('x-real-ip') || 'unknown';

    if (!VALID_PINS.includes(pin)) {
      return NextResponse.json({ success: false, message: 'Invalid PIN' }, { status: 401 });
    }

    const sql = neon(process.env.DATABASE_URL!);

    // Kreiraj tabelu ako ne postoji
    await sql`
      CREATE TABLE IF NOT EXISTS pin_access (
        pin TEXT PRIMARY KEY,
        ip_address TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Proveri postojeći PIN
    const result = await sql`SELECT ip_address FROM pin_access WHERE pin = ${pin}`;

    if (result.length === 0) {
      // Prvi put - sačuvaj
      await sql`INSERT INTO pin_access (pin, ip_address) VALUES (${pin}, ${clientIP})`;
      return NextResponse.json({ success: true, message: 'Access granted' });
    }

    const storedIP = result[0].ip_address;

    if (storedIP === clientIP) {
      return NextResponse.json({ success: true, message: 'Access granted' });
    }

    return NextResponse.json(
      { success: false, message: 'This PIN is already in use from another location' },
      { status: 403 }
    );
  } catch (error) {
    console.error('PIN verification error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
