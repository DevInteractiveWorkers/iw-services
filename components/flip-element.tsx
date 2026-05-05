"use client";

import { useEffect, useRef, useState } from "react";

type FlipElementProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  onView?: boolean | number;
};

export default function FlipElement({
  children,
  backgroundColor,
  className = "",
  onView = true,
}: FlipElementProps) {
  const [isAnimationRunning, setIsAnimationRunning] = useState<boolean>(false);
  const delay = typeof onView === "number" ? onView : 0;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !onView) return;

    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("flip-once");
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const runAnimation = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isAnimationRunning) return;
    setIsAnimationRunning(true);
    const el = e.currentTarget;

    // restart animation
    el.classList.remove("flip-once");
    void el.offsetWidth; // force reflow
    el.classList.add("flip-once");
    setTimeout(() => setIsAnimationRunning(false), 1200);
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
