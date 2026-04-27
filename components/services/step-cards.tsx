"use client";

import { useEffect, useRef } from "react";
import TiltCard from "../tilt-card";

type StepsProps = {
  children: React.ReactNode;
  step: number;
};

export default function StepCard({ children, step }: StepsProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.width = "100%";
          observer.disconnect(); // run once
        }
      },
      { threshold: 1 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);
  return (
    <TiltCard className="rounded-2xl bg-[#191919] text-white w-full h-full overflow-hidden flex flex-col justify-between gap-4 relative">
      <div className="p-4 w-1/2">{children ?? ""}</div>
      <label className="absolute text-9xl font-medium right-0 bottom-0 pr-4">
        {step.toLocaleString().length === 1 ? `0${step}` : step}
      </label>
      <span className="w-full px-4 py-2 text-xl font-medium relative">
        STEP
        <span
          ref={ref}
          className="bg-[#dd272d] absolute w-0 h-full top-0 left-0 -z-10 transition-all duration-500"
        />
      </span>
    </TiltCard>
  );
}
