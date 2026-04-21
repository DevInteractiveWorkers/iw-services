"use client";
import { useRef, useState } from "react";
import InteractiveIcon from "./icon/interactive-icons/interactive-icon";
import { useRouter } from "next/navigation";

interface VAsProps {
  name: string;
  href?: string;
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

      <div
        className={`md:grid flex flex-col gap-5 ${VAs.length <= 2 ? "" : "grid-cols-2"} flex-wrap justify-center items-center`}
      >
        {VAs.map((va, i) => (
          <VAItem
            key={i}
            name={va.name}
            href={va.href}
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
}: VAsProps & {
  className?: string;
}) {
  const router = useRouter();
  const path = window.location.toString() + "/" + href;

  const ref = useRef<HTMLDivElement>(null);
  const [side, setSide] = useState<"left" | "right">("left");

  const dropSide = (clientX: number) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const localX = clientX - rect.left;
    const midpoint = rect.width / 2;

    setSide(localX < midpoint ? "left" : "right");
  };
  return (
    <div
      className={`relative ${href ? "group/va-link" : ""}`}
      onClick={() => {
        if (href) router.push(path);
      }}
    >
      <div
        ref={ref}
        onMouseMove={(e) => dropSide(e.clientX)}
        className={`relative border-2 py-3 px-6 rounded-2xl text-center 
          ${className} ${side === "left" ? "hover:rotate-2" : "hover:-rotate-2"} 
          ${href ? "group/va-link cursor-pointer active:rotate-0" : "cursor-default"} 
          transition-transform duration-300 hover:scale-105 max-md:w-full overflow-hidden`}
      >
        <div className={"absolute top-0 left-0 w-full -z-10 h-full bg-white"} />
        {href && (
          <div
            className={
              "absolute top-0 left-0 w-0 -z-10 h-full bg-[#DD272D] group-active/va-link:w-full transition-all duration-150"
            }
          />
        )}
        <span className="md:text-2xl font-medium z-10 group-active/va-link:text-white transition-all duration-150">
          {name}
        </span>
      </div>
      {href && (
        <svg
          width="35"
          height="35"
          viewBox="0 0 43 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-full -translate-y-1/2 right-0 -translate-x-full hover:scale-90 transition-all duration-100 border-2 rounded-full cursor-pointer"
        >
          <circle cx="21.5" cy="21.5" r="21.5" fill="white" />
          <path
            d="M32.7071 22.2071C33.0976 21.8166 33.0976 21.1834 32.7071 20.7929L26.3431 14.4289C25.9526 14.0384 25.3195 14.0384 24.9289 14.4289C24.5384 14.8195 24.5384 15.4526 24.9289 15.8431L30.5858 21.5L24.9289 27.1569C24.5384 27.5474 24.5384 28.1805 24.9289 28.5711C25.3195 28.9616 25.9526 28.9616 26.3431 28.5711L32.7071 22.2071ZM11 21.5L11 22.5L32 22.5L32 21.5L32 20.5L11 20.5L11 21.5Z"
            fill="#DD272D"
          />
        </svg>
      )}
    </div>
  );
}
