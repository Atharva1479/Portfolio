// This page is a client component
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import Starfield from '@/components/Starfield';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Lazy‑load heavy components
const Projects = dynamic(() => import('@/components/Projects'), {
    loading: () => <div className="min-h-screen" />,
});
// const Education = dynamic(() => import('@/components/Education'), {
//     loading: () => <div className="min-h-[300px]" />,
// });
const Experience = dynamic(() => import('@/components/Experience'), {
    loading: () => <div className="min-h-[300px]" />,
});
const Achievements = dynamic(() => import('@/components/Achievements'), {
    loading: () => <div className="min-h-screen" />,
});
const Contact = dynamic(() => import('@/components/Contact').then(m => ({ default: m.Contact })), {
    loading: () => <div className="min-h-[400px]" />,
});
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/CustomCursor').then(mod => mod.CustomCursor), { ssr: false });

export default function Home() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
            {/* Custom cursor – client‑only */}
            <CustomCursor />
            <Analytics />
            <SpeedInsights />

            <Starfield />
            <div className="relative z-10 animate-[fadeIn_1s_ease-out_forwards] overflow-x-hidden">
                <Navbar />
                <main className="space-y-0">
                    <Hero onOpenChat={() => setIsChatOpen(true)} />
                    <RevealOnScroll variant="blur-in"><About /></RevealOnScroll>
                    <RevealOnScroll variant="slide-left"><Experience /></RevealOnScroll>
                    <RevealOnScroll variant="slide-right"><Skills /></RevealOnScroll>
                    {/* <RevealOnScroll variant="blur-in"><Education /></RevealOnScroll> */}
                    <RevealOnScroll variant="blur-in"><Projects /></RevealOnScroll>
                    <RevealOnScroll variant="slide-left"><Achievements /></RevealOnScroll>
                </main>
                <RevealOnScroll variant="scale-up"><Contact /></RevealOnScroll>
                <ChatWidget isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
            </div>
        </div>
    );
}
