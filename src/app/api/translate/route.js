// API Route para tradução fake (Next.js App Router)
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  const { q, source, target } = body;
  try {
    const res = await fetch('https://libretranslate.de/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q, source, target, format: 'text' })
    });
    const data = await res.json();
    return NextResponse.json({ translatedText: data.translatedText });
  } catch (err) {
    return NextResponse.json({ translatedText: '' }, { status: 500 });
  }
}
