"use client";

import { useState, useRef } from "react";

type CardProps = { children: React.ReactNode; className?: string };

export default function TiltCard({ children, className }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [delay, setDelay] = useState<number>(100);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setDelay(100);

    // mouse position inside the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // center of the card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // distance from center (-1 to 1)
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    // control intensity here 👇
    const maxTilt = 10;

    setTilt({
      x: percentY * maxTilt, // rotateX
      y: percentX * maxTilt, // rotateY
    });
  };

  const handleMouseLeave = () => {
    setDelay(300);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform ${className}`}
      style={{
        transform: `perspective(500px) rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg)`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
