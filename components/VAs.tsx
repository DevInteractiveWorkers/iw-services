"use client";
import { useRef, useState } from "react";
import InteractiveIcon from "./interactive-icons/interactive-icon";
import Link from "next/link";

interface VAsProps {
  name: string;
}

export function VAs({
  header,
  VAs,
  tags,
  service,
}: {
  header: any;
  VAs: VAsProps[];
  tags?: string[];
  service?: string;
}) {
  return (
    <section
      id="our-vas"
      className="w-full md:p-10 px-4 flex flex-col items-center gap-5"
    >
      <h2
        className="font-medium text-center md:text-4xl text-3xl"
        style={{ lineHeight: 1 }}
      >
        {header}
      </h2>

      <div className="md:grid flex flex-col gap-5 grid-cols-2 flex-wrap justify-center items-center">
        {VAs.map((va, i) => (
          <VAItem
            key={i}
            name={va.name}
            className={
              (i + 1) % 2 && i === VAs.length - 1 ? "md:translate-x-1/2" : ""
            }
          />
        ))}
      </div>
      <div className="flex flex-col items-center py-5 w-full">
        {service && <InteractiveIcon service={service} />}
        {tags && (
          <p className="py-5 text-xl font-medium text-center">
            {tags.join(" • ")}
          </p>
        )}
      </div>
    </section>
  );
}

export function VAItem({
  name,
  className,
  href = "",
}: {
  name: string;
  className?: string;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [side, setSide] = useState<"left" | "right">("left");

  const dropSide = (clientX: number) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const localX = clientX - rect.left; // mouse X inside SVG

    const svgWidth = rect.width;
    if (localX < svgWidth / 2) {
      setSide("left");
    } else {
      setSide("right");
    }
  };
  return (
    <div
      ref={ref}
      className={`relative ${side === "left" ? "hover:rotate-2" : "hover:-rotate-2"} 
      active:rotate-0 relative transition-transform duration-300 hover:scale-105 group/va-link`}
    >
      <div
        onMouseMove={(e) => dropSide(e.clientX)}
        className={`border-2 py-3 px-6 rounded-2xl text-center ${className} 
        cursor-default relative
        max-md:w-full overflow-hidden
      `}
      >
        <div className={"absolute top-0 left-0 w-full -z-10 h-full bg-white"} />
        {href && (
          <div
            className={
              "absolute top-0 left-0 w-0 -z-10 h-full bg-[#c7c7c7] group-active/va-link:w-full transition-all duration-150"
            }
          />
        )}
        <span className="md:text-2xl font-medium z-10">{name}</span>
      </div>
      {href && (
        <Link href={href}>
          <svg
            width="35"
            height="35"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-full -translate-y-1/2 right-0 -translate-x-full hover:scale-90 transition-all duration-100"
          >
            <circle cx="21.5" cy="21.5" r="21.5" fill="#2E4582" />
            <path
              d="M32.7071 22.2071C33.0976 21.8166 33.0976 21.1834 32.7071 20.7929L26.3431 14.4289C25.9526 14.0384 25.3195 14.0384 24.9289 14.4289C24.5384 14.8195 24.5384 15.4526 24.9289 15.8431L30.5858 21.5L24.9289 27.1569C24.5384 27.5474 24.5384 28.1805 24.9289 28.5711C25.3195 28.9616 25.9526 28.9616 26.3431 28.5711L32.7071 22.2071ZM11 21.5L11 22.5L32 22.5L32 21.5L32 20.5L11 20.5L11 21.5Z"
              fill="white"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}
