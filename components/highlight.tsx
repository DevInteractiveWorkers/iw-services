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
}: HighlightProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // ✅ Cast to HTMLElement so .style exists
            const el = entry.target as HTMLElement;
            el.style.animationPlayState = "running";

            observer.unobserve(el); // run once
          }
        });
      },
      {
        threshold: 0.2, // 20% visible
      },
    );

    // Observe all elements with class 'highlight'
    document.querySelectorAll(".highlight").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <>
      <style>
        {`:root{
        --highlight-color: ${color};
        --highlight-bg: ${bgColor};
        }
        `}
      </style>
      <span className="text-bogue relative text-center inline-block z-10 highlight">
        {children}
      </span>
    </>
  );
};
