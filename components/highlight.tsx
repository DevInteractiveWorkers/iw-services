"use client";
import { useEffect, useRef, useState } from "react";

interface HighlightProps {
  children: React.ReactNode;
  color?: string;
  bgColor?: string;
  animate?: boolean;
}

export const Highlight = ({
  children,
  color = "white",
  bgColor = "#DD272D",
  animate = true,
}: HighlightProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el); // ✅ run only once
          }
        });
      },
      { threshold: 0.5 } // 0.5 = 50% visible before triggering
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className="text-bogue relative text-center inline-block z-10"
      style={{ color }}
    >
      <span
        className={`absolute w-[97.5%] h-[80%] -z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ${
          visible ? "animate-open" : ""
        }`}
        style={{ backgroundColor: bgColor }}
      />
      {children}
    </span>
  );
};
