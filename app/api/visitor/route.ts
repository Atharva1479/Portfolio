import 'server-only';
import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const ALLOWED_ORIGINS = [
    'https://atharva-jamdar.vercel.app',
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '',
].filter(Boolean);

if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    throw new Error('Redis credentials (KV_REST_API_URL, KV_REST_API_TOKEN) are not configured');
}

const redis = new Redis({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
});

const COUNTER_KEY = 'portfolio:visitor_count';

// In-memory rate limiter for visitor endpoint
const visitorRateMap = new Map<string, { count: number; resetTime: number }>();
const VISITOR_RATE_MAX = 5; // max 5 requests per window
const VISITOR_RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function isVisitorRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = visitorRateMap.get(ip);
    if (!entry || now > entry.resetTime) {
        visitorRateMap.set(ip, { count: 1, resetTime: now + VISITOR_RATE_WINDOW });
        return false;
    }
    entry.count++;
    return entry.count > VISITOR_RATE_MAX;
}

export async function GET(request: Request) {
    try {
        // CORS origin check
        const origin = request.headers.get('origin');
        if (origin && !ALLOWED_ORIGINS.includes(origin)) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        // Get visitor IP with priority: Vercel > Cloudflare > x-forwarded-for > fallback
        const ip =
            request.headers.get('x-real-ip') ||
            request.headers.get('cf-connecting-ip') ||
            request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
            'unknown';

        // Rate limit to prevent counter inflation
        if (isVisitorRateLimited(ip)) {
            const count = (await redis.get<number>(COUNTER_KEY)) || 0;
            return NextResponse.json({ count });
        }

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
