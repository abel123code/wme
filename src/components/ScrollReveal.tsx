"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Delay in ms before animation starts (e.g. for stagger) */
  delay?: number;
  /** Minimum fraction of element visible to trigger (0–1) */
  threshold?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  threshold = 0.1,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-fade-in-up" : "opacity-0"} ${className}`}
      style={
        isVisible && delay > 0
          ? { animationDelay: `${delay}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
