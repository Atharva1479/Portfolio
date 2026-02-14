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

  const magnetizedRef = useRef<Set<HTMLElement>>(new Set());

  useEffect(() => {
    // Skip magnetic effect on touch devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      positionRef.current = { x: e.clientX, y: e.clientY };

      // Update main cursor instantly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Magnetic effect on nearby interactive elements
      const magnetTargets = document.querySelectorAll<HTMLElement>('a, button, [data-magnetic]');
      magnetTargets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50 && distance > 1) {
          const strength = (1 - distance / 50) * 6;
          const moveX = (dx / distance) * strength;
          const moveY = (dy / distance) * strength;
          el.style.transform = `translate(${moveX}px, ${moveY}px)`;
          el.style.transition = 'transform 0.15s ease-out';
          magnetizedRef.current.add(el);
        } else if (magnetizedRef.current.has(el)) {
          el.style.transition = 'transform 0.3s ease-out';
          el.style.transform = '';
          magnetizedRef.current.delete(el);
        }
      });
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
      // Reset all magnetized elements
      magnetizedRef.current.forEach((el) => {
        el.style.transform = '';
        el.style.transition = '';
      });
      magnetizedRef.current.clear();
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
