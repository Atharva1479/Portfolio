'use client';

import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center">
                {/* 404 Number */}
                <div className="relative mb-8">
                    <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600 leading-none">
                        404
                    </h1>
                    <div className="absolute inset-0 blur-3xl bg-emerald-500/20 -z-10"></div>
                </div>

                {/* Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Page Not Found
                </h2>
                <p className="text-zinc-400 text-lg mb-8 max-w-md mx-auto">
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/"
                        className="group px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95"
                    >
                        <Home className="h-4 w-4" />
                        Back to Home
                    </a>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3.5 border border-zinc-700 text-zinc-300 rounded-xl text-sm font-medium hover:bg-zinc-800 hover:text-white hover:border-zinc-600 transition-all flex items-center justify-center gap-2 backdrop-blur-sm bg-zinc-900/50"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Go Back
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="mt-16 flex items-center justify-center gap-2 text-zinc-600 text-sm font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Error Code: 404</span>
                </div>
            </div>
        </div>
    );
}
