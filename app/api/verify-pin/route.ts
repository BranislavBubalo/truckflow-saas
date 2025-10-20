import { NextRequest, NextResponse } from 'next/server';

const VALID_PINS = ['TF001', 'TF002', 'TF003', 'TF004', 'TF005', 'TF006'];

export async function POST(request: NextRequest) {
  try {
    const { pin } = await request.json();

    if (!VALID_PINS.includes(pin)) {
      return NextResponse.json({ success: false, message: 'Invalid PIN' }, { status: 401 });
    }

    // TEST MODE - bez IP tracking
    return NextResponse.json({ success: true, message: 'Access granted' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'API is running. Use POST with PIN.' 
  });
}
