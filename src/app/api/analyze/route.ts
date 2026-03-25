import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { query } = await request.json();
    
    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    // Mock analysis logic
    const score = Math.floor(Math.random() * 40) + 60; // 60-100
    const status = score > 80 ? 'trusted' : score > 70 ? 'suspicious' : 'misleading';

    return NextResponse.json({
      score,
      status,
      sentiment: 'Neutral',
      virality: 'Low',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
