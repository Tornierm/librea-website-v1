import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.RESEND_API_KEY;

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }

  const res = await fetch('https://api.resend.com/contacts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    console.error('Resend error:', res.status, body);
    return NextResponse.json({ error: 'resend_error' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
