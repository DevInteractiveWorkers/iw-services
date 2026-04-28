"use client";

import React, { useRef, useState, useEffect } from "react";

type Direction = "next" | "prev";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const items = Array.isArray(children) ? children : [children];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const [offset, setOffset] = useState(0);

  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);

  const total = items.length;

  const slideNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const slidePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  // 👉 AUTOPLAY
  useEffect(() => {
    if (!autoplay || isDragging.current) return;

    const id = setInterval(slideNext, 3000);
    return () => clearInterval(id);
  }, [autoplay, total]);

  // 👉 DRAG START
  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    setIsDraggingState(true);

    startX.current = e.clientX;
    currentX.current = e.clientX;

    setAutoplay(false);
  };

  // 👉 DRAG MOVE
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;

    currentX.current = e.clientX;
    const delta = currentX.current - startX.current;

    setOffset(delta);
  };

  // 👉 DRAG END
  const onPointerUp = () => {
    if (!isDragging.current) return;

    const delta = currentX.current - startX.current;

    isDragging.current = false;
    setIsDraggingState(false);

    const threshold = 60;

    if (delta < -threshold) slideNext();
    else if (delta > threshold) slidePrev();

    setOffset(0);
  };

  if (!items.length) return null;

  return (
    <section className="w-full flex items-center relative">
      <MoveButton onClick={slidePrev} direction="prev" />

      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <div
          className="flex w-full"
          style={{
            transform: `translateX(calc(-${current * 100}% + ${offset}px))`,
            transition: isDraggingState ? "none" : "transform 400ms ease",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`min-w-full max-w-full h-min select-none 
                ${
                  isDraggingState
                    ? "scale-90 opacity-50"
                    : current === index
                      ? "opacity-100"
                      : "opacity-0 scale-90"
                } transition-all duration-200 group`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <MoveButton onClick={slideNext} direction="next" />
    </section>
  );
}

// 👉 BUTTON
function MoveButton({
  onClick,
  direction,
}: {
  onClick: () => void;
  direction: Direction;
}) {
  return (
    <button
      onClick={onClick}
      className={`z-10 cursor-pointer absolute ${
        direction === "prev"
          ? "left-2 md:-translate-x-full"
          : "right-2 md:translate-x-full"
      }`}
    >
      <svg className="w-6 h-6 text-[#191919]" viewBox="0 0 24 24" fill="none">
        {direction === "prev" ? (
          <path
            d="m15 19-7-7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="m9 5 7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}
