"use client";

import React, { useRef, useState, useEffect } from "react";

type Direction = "next" | "prev";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const items = Array.isArray(children) ? children : [children];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const startX = useRef(0);
  const deltaX = useRef(0);
  const isDragging = useRef(false);

  const total = items.length;

  // 👉 NEXT
  const slideNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  // 👉 PREV
  const slidePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  // 👉 AUTOPLAY
  useEffect(() => {
    if (!autoplay) return;

    const id = setInterval(slideNext, 3000);
    return () => clearInterval(id);
  }, [autoplay, total]);

  // 👉 DRAG START
  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    deltaX.current = 0;
    setAutoplay(false);
  };

  // 👉 DRAG MOVE
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    deltaX.current = e.clientX - startX.current;
  };

  // 👉 DRAG END
  const onPointerUp = () => {
    if (!isDragging.current) return;

    isDragging.current = false;

    if (Math.abs(deltaX.current) > 50) {
      if (deltaX.current < 0) slideNext();
      else slidePrev();
    }

    deltaX.current = 0;
  };

  if (!items.length) return null;

  return (
    <section className="w-full flex items-center relative">
      <MoveButton onClick={slidePrev} direction="prev" />
      <div
        className="overflow-x-hidden cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <div
          className="flex w-full "
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: "transform 500ms ease",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`min-w-full max-w-full h-min select-none ${current === index ? "opacity-100" : "opacity-0 scale-90"} transition-all duration-150 group`}
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
      className={`z-10 cursor-pointer absolute ${direction === "prev" ? "left-0 -translate-x-full" : "right-0 translate-x-full"}`}
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
