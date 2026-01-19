"use client";

import { useEffect, useRef, useState } from "react";
import ReviewComponent, { ReviewProps } from "./review-component";

type Direction = "next" | "prev";

export default function Reviews({ reviews }: { reviews?: ReviewProps[] }) {
  const [items, setItems] = useState<ReviewProps[]>(reviews ?? []);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState<Direction>("next");
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const isDragging = useRef(false);
  type Phase = "idle" | "animating";
  const [phase, setPhase] = useState<Phase>("idle");
  const [offset, setOffset] = useState(0); // -1 | 0

  const slideNext = () => {
    if (phase !== "idle") return;

    setDirection("next");
    setPhase("animating");
    setOffset(-1);
  };

  const slidePrev = () => {
    if (phase !== "idle") return;

    setDirection("prev");

    setItems((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, -1)];
    });

    // start from -100%, animate to 0
    setOffset(-1);

    requestAnimationFrame(() => {
      setPhase("animating");
      setOffset(0);
    });
  };

  useEffect(() => {
    if (!autoplay) return;

    const id = setInterval(slideNext, 3000);
    return () => clearInterval(id);
  }, [autoplay, isAnimating]);

  const handleTransitionEnd = () => {
    if (direction === "next") {
      setItems((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }

    // reset instantly
    setPhase("idle");
    setOffset(0);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (isAnimating) return;

    isDragging.current = true;
    startX.current = e.clientX;
    deltaX.current = 0;

    setAutoplay(false);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    deltaX.current = e.clientX - startX.current;
  };

  const onPointerUp = () => {
    if (!isDragging.current) return;

    isDragging.current = false;

    if (Math.abs(deltaX.current) > 50) {
      if (deltaX.current < 0) {
        slideNext();
      } else {
        slidePrev();
      }
    }

    deltaX.current = 0;
  };

  const pauseAutoplay = () => setAutoplay(false);
  const resumeAutoplay = () => setAutoplay(true);

  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="w-full flex justify-center items-center p-5">
      <MoveButton onClick={slidePrev} direction="prev" />
      <div
        ref={containerRef}
        onTransitionEnd={handleTransitionEnd}
        className="flex w-full cursor-grab active:cursor-grabbing"
        style={{
          transform: `translateX(${offset * 100}%)`,
          transition: phase === "animating" ? "transform 500ms ease" : "none",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onMouseEnter={pauseAutoplay}
        onMouseLeave={resumeAutoplay}
      >
        {items.map((review, index) => (
          <div key={index} className="min-w-full select-none">
            <ReviewComponent review={review} />
          </div>
        ))}
      </div>

      <MoveButton onClick={slideNext} direction="next" />
    </section>
  );
}

function MoveButton({
  onClick,
  direction = "next",
}: {
  onClick: () => void;
  direction: Direction;
}) {
  return (
    <button onClick={onClick} className="z-10 cursor-pointer">
      <svg
        className="w-6 h-6 text-[#191919]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        {direction === "prev" ? (
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m15 19-7-7 7-7"
          />
        ) : (
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m9 5 7 7-7 7"
          />
        )}
      </svg>
    </button>
  );
}
