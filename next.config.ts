import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['placehold.co', 'media.licdn.com'],
    },
};

export default nextConfig;
