import React, { useEffect, useRef, useState } from 'react';

type AnimationVariant = 'fade-up' | 'blur-in' | 'scale-up' | 'slide-left' | 'slide-right';

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // in ms
    variant?: AnimationVariant;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
    children,
    className = "",
    delay = 0,
    variant = 'fade-up'
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.disconnect();
            }
        };
    }, []);

    const getVariantClasses = () => {
        switch (variant) {
            case 'blur-in':
                return isVisible
                    ? 'opacity-100 blur-0 scale-100'
                    : 'opacity-0 blur-md scale-95';
            case 'scale-up':
                return isVisible
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95';
            case 'slide-left':
                return isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-12';
            case 'slide-right':
                return isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-12';
            case 'fade-up':
            default:
                return isVisible
                    ? 'opacity-100 translate-y-0 blur-0'
                    : 'opacity-0 translate-y-12 blur-sm';
        }
    };

    return (
        <div
            ref={ref}
            className={`transform transition-all duration-1000 ease-[cubic-bezier(0.17,0.55,0.55,1)] ${getVariantClasses()} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;
