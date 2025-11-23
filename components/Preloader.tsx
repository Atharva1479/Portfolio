
import React, { useEffect, useState } from 'react';
import { Code2, Server, BrainCircuit, Sparkles, Layers, Database } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const STEPS = [
  { label: "Synthesizing Frontend Architecture...", icon: Code2 },
  { label: "Connecting Backend Services...", icon: Server },
  { label: "Hydrating Vector Database...", icon: Database },
  { label: "Initializing Generative Models...", icon: BrainCircuit },
  { label: "Optimizing User Experience...", icon: Layers },
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Lock Body Scroll
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';

    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, []);

  useEffect(() => {
    const totalDuration = 2200; // Slightly faster for better UX
    const intervalTime = 20;
    const stepsCount = totalDuration / intervalTime;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / stepsCount) * 100), 100);
      setProgress(newProgress);

      // Cycle through steps based on progress
      const stepDuration = 100 / STEPS.length;
      const currentStepIndex = Math.min(
        Math.floor(newProgress / stepDuration),
        STEPS.length - 1
      );
      setStepIndex(currentStepIndex);

      if (currentStep >= stepsCount) {
        clearInterval(timer);
        setIsExiting(true);
        setTimeout(onComplete, 600);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  const CurrentIcon = STEPS[stepIndex].icon;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isExiting ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
        }`}
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">

        {/* Animated Icon Container */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full opacity-50 animate-pulse"></div>
          <div className="relative w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 transform">
            <CurrentIcon
              className={`w-8 h-8 text-white transition-all duration-300 ${isExiting ? 'scale-0' : 'scale-100'}`}
              strokeWidth={1.5}
            />
          </div>

          {/* Floating Particles */}
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-4 h-4 text-emerald-500 animate-spin-slow opacity-80" />
          </div>
        </div>

        {/* Identity & Progress */}
        <div className="text-center w-full space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight mb-2">
              Yash Pandav
            </h1>
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
              Full Stack Developer & AI Engineer
            </p>
          </div>

          {/* Modern Progress Bar */}
          <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden border border-zinc-800/50">
            <div
              className="h-full bg-white transition-all duration-75 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Dynamic Status Text */}
          <div className="h-6 flex items-center justify-center">
            <p className="text-xs font-mono text-zinc-400 animate-fade-in transition-all duration-300">
              {STEPS[stepIndex].label}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
