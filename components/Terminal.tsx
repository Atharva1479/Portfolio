import React, { useEffect, useState } from 'react';

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ children, className }) => {
  return (
    <div className={`w-full rounded-xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col ${className}`}>
      <div className="flex-none flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/50 border border-red-500/20" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/50 border border-yellow-500/20" />
          <div className="h-3 w-3 rounded-full bg-green-500/50 border border-green-500/20" />
        </div>
        <div className="text-[10px] font-mono text-zinc-500 opacity-50">~bash</div>
      </div>
      <div className="flex-1 p-6 font-mono text-sm space-y-3 overflow-y-auto text-zinc-300 selection:bg-zinc-800">
        {children}
      </div>
    </div>
  );
};

export const TypingAnimation: React.FC<{ children: string; className?: string; delay?: number; onClick?: () => void }> = ({
  children,
  className = "text-zinc-100",
  delay = 0,
  onClick
}) => {
  const [text, setText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < children.length) {
        setText(children.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30); // Typing speed
    return () => clearInterval(interval);
  }, [started, children]);

  if (!started) return null;

  return (
    <div
      className={`flex items-center gap-2 ${onClick ? 'cursor-pointer group' : ''}`}
      onClick={onClick}
    >
      <span className="text-blue-500 shrink-0">➜</span>
      <span className={`transition-all duration-300 ${className}`}>
        {text}
      </span>
      {onClick && text === children && (
        <span className="animate-pulse inline-block w-2 h-4 bg-emerald-500/50 ml-1 align-middle"></span>
      )}
    </div>
  );
};

export const AnimatedSpan: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
  children,
  className,
  delay = 0
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return null;

  return (
    <div className={`opacity-0 animate-fade-in flex items-center gap-2 ${className}`}>
      {children}
    </div>
  );
};