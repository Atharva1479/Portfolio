'use client';

import React, { useEffect, useRef, useState } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className,
  delay = 0,
  speed = 40,
}) => {
  const [display, setDisplay] = useState(() =>
    text.replace(/[^ ]/g, '\u00A0')
  );
  const frameRef = useRef<number>(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (startedRef.current) return;
      startedRef.current = true;

      let resolvedCount = 0;
      let lastResolveTime = performance.now();

      const step = (now: number) => {
        if (resolvedCount >= text.length) return;

        const elapsed = now - lastResolveTime;
        if (elapsed >= speed) {
          resolvedCount++;
          lastResolveTime = now;
        }

        const result = text
          .split('')
          .map((char, i) => {
            if (i < resolvedCount) return char;
            if (char === ' ') return ' ';
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');

        setDisplay(result);

        if (resolvedCount < text.length) {
          frameRef.current = requestAnimationFrame(step);
        }
      };

      frameRef.current = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frameRef.current);
    };
  }, [text, delay, speed]);

  return <span className={className}>{display}</span>;
};

export default TextScramble;
