"use client";

import { useEffect, useRef } from "react";

interface HighlightProps {
  children: React.ReactNode;
  color?: string;
  bgColor?: string;
}

export const Highlight = ({ children, color, bgColor }: HighlightProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationPlayState = "running";
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className="highlight inline-block relative z-10"
      style={{
        // ✅ component-scoped CSS variables
        ["--service-color" as any]: color,
        ["--service-bg" as any]: bgColor,
      }}
    >
      {children}
    </span>
  );
};
