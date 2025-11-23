import React from 'react';

interface TextAnimateProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextAnimate: React.FC<TextAnimateProps> = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");

  return (
    <p className={`inline-block ${className}`}>
      {words.map((word, i) => {
        // Check if word is wrapped in asterisks for highlighting
        // Handles cases like *Word* or *Word*,
        const isHighlighted = word.includes('*');
        const cleanWord = word.replace(/\*/g, '');

        return (
          <span
            key={i}
            className={`inline-block mr-[0.25em] opacity-0 translate-y-2 ${isHighlighted ? 'text-emerald-400 font-medium' : 'text-zinc-400'}`}
            style={{
              animation: `slideUp 0.5s ease-out forwards`,
              animationDelay: `${delay + (i * 0.03)}s`
            }}
          >
            {cleanWord}
          </span>
        );
      })}
    </p>
  );
};