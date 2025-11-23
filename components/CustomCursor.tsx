'use client'
import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use refs for position to avoid re-renders on every mousemove
  const positionRef = useRef({ x: 0, y: 0 });
  const trailerPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      positionRef.current = { x: e.clientX, y: e.clientY };

      // Update main cursor instantly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target is clickable (link, button, or explicitly actionable)
      const isClickable =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);

    // Animation loop for smooth trailer
    let animationFrameId: number;

    const animateTrailer = () => {
      const { x: targetX, y: targetY } = positionRef.current;
      const { x: currentX, y: currentY } = trailerPositionRef.current;

      // Lerp (Linear Interpolation) for smooth trailing effect
      // 0.15 is the speed factor (lower = slower/smoother lag)
      const ease = 0.15;
      const newX = currentX + (targetX - currentX) * ease;
      const newY = currentY + (targetY - currentY) * ease;

      trailerPositionRef.current = { x: newX, y: newY };

      if (trailerRef.current) {
        trailerRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animateTrailer);
    };

    animateTrailer();

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      {/* Global Style to force hide cursor on all elements */}
      <style>{`
        * {
          cursor: none !important;
        }
        /* Restore cursor for mobile/touch devices where custom cursor usually fails UX */
        @media (hover: none) and (pointer: coarse) {
          * {
            cursor: auto !important;
          }
          .custom-cursor {
            display: none !important;
          }
        }
      `}</style>

      {/* Main Dot Cursor */}
      <div
        ref={cursorRef}
        className={`custom-cursor fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        style={{
          marginTop: '-4px',
          marginLeft: '-4px',
          willChange: 'transform'
        }}
      />

      {/* Trailing Ring */}
      <div
        ref={trailerRef}
        className={`custom-cursor fixed top-0 left-0 pointer-events-none z-[9998] border border-white/30 rounded-full transition-all duration-300 ease-out will-change-transform flex items-center justify-center ${isVisible ? 'opacity-100' : 'opacity-0'
          } ${isHovering
            ? 'w-12 h-12 border-white/80'
            : 'w-8 h-8'
          } ${isClicking ? 'scale-75 border-emerald-500' : 'scale-100'
          }`}
      >
        {/* Inner crosshair effect on hover */}
        <div className={`transition-all duration-300 ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
          <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
        </div>
      </div>
    </>
  );
};
