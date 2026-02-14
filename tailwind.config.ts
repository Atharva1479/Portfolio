import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                mono: ['var(--font-jetbrains)', 'monospace'],
                serif: ['var(--font-playfair)', 'serif'],
            },
            colors: {
                bg: '#09090b',
                card: '#18181b',
                border: '#27272a',
                text: '#a1a1aa',
                heading: '#f4f4f5',
                primary: '#fafafa',
                accent: '#10b981',
            },
            animation: {
                'cursor-blink': 'blink 1s step-end infinite',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'spin-slow': 'spin 3s linear infinite',
                'bounce-slow': 'bounce 3s infinite',
                'blob-drift-1': 'blobDrift1 20s ease-in-out infinite',
                'blob-drift-2': 'blobDrift2 25s ease-in-out infinite',
                'blob-drift-3': 'blobDrift3 30s ease-in-out infinite',
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                blobDrift1: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
                    '66%': { transform: 'translate(-20px, 15px) scale(0.95)' },
                },
                blobDrift2: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(-25px, 20px) scale(0.95)' },
                    '66%': { transform: 'translate(20px, -25px) scale(1.05)' },
                },
                blobDrift3: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(20px, 25px) scale(1.05)' },
                    '66%': { transform: 'translate(-30px, -15px) scale(0.95)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
