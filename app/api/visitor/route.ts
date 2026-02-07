import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = new Redis({
    url: process.env.KV_REST_API_URL!,
    token: process.env.KV_REST_API_TOKEN!,
});

const COUNTER_KEY = 'portfolio:visitor_count';

export async function GET(request: Request) {
    try {
        // Get visitor IP for deduplication
        const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
        const ipKey = `portfolio:ip:${ip}`;

        // Check if this IP already visited today
        const alreadyVisited = await redis.get(ipKey);

        let count: number;

        if (!alreadyVisited) {
            // New visitor today — increment counter and mark IP with 24h expiry
            count = await redis.incr(COUNTER_KEY);
            await redis.set(ipKey, '1', { ex: 86400 }); // expires in 24 hours
        } else {
            // Already visited — just return current count
            count = (await redis.get<number>(COUNTER_KEY)) || 0;
        }

        return NextResponse.json({ count });
    } catch (error) {
        console.error('Visitor counter error:', error);
        return NextResponse.json({ count: 0 }, { status: 500 });
    }
}
