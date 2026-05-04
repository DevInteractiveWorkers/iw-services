"use client";

import { useEffect, useRef, useState } from "react";

type FlipElementProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  onView?: boolean;
};

export default function FlipElement({
  children,
  backgroundColor,
  className = "",
  onView = true,
}: FlipElementProps) {
  const [count, setCount] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !onView) return;

    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("flip-once");
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const runAnimation = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;

    // restart animation
    el.classList.remove("flip-once");
    void el.offsetWidth; // force reflow
    el.classList.add("flip-once");
  };

  return (
    <div
      ref={ref}
      className={`flip-item ${className}`}
      style={{ background: backgroundColor }}
      onMouseEnter={runAnimation}
    >
      {children}
    </div>
  );
}
