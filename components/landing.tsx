"use client";
import Link from "next/link";
import Image from "next/image";
import VideoPlayer from "./videoplayer";
import SignUp from "./sign-up";
import { useEffect, useRef } from "react";

interface LandingProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  videoUrl?: string;
}

export default function Landing({ title, subtitle, videoUrl }: LandingProps) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("flip-once");
          observer.disconnect();
          setTimeout(() => el.classList.remove("flip-once"), 1200);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="h-svh px-5 flex flex-col justify-center items-center gap-5">
      <Image
        ref={ref}
        src={"/iw-icon.png"}
        alt={"iw-icon"}
        quality={100}
        height={1080}
        width={1080}
        className="w-min [@media(min-height:800px)]:max-h-20 max-h-10 object-contain flip-logo"
      />
      <h1
        className={`font-medium text-center ${videoUrl ? "[@media(min-height:800px)]:md:text-4xl [@media(min-height:800px)]:text-3xl text-2xl" : "lg:text-6xl md:text-5xl sm:text-4xl text-3xl "}`}
        style={{ lineHeight: 1 }}
      >
        {title}
      </h1>
      {videoUrl && (
        <div className="xl:max-w-3xl lg:max-w-2xl sm:max-w-xl md:h-1/3 h-1/4 object-cover rounded-2xl overflow-hidden">
          <VideoPlayer videoUrl={videoUrl} />
        </div>
      )}
      {subtitle && (
        <p
          className="text-center max-md:text-sm [@media(min-height:800px)]:landing"
          style={{ lineHeight: 1.2 }}
        >
          {subtitle}
        </p>
      )}
      <div className="grid grid-cols-1 gap-2">
        <Link
          target="_blank"
          href={"https://calendly.com/interactiveworkersgm/30min"}
          className="bg-(--service-bg) text-(--service-color) font-medium px-4 py-2 rounded-2xl [@media(min-height:800px)]:md:text-4xl text-xl cursor-pointer
            hover:scale-109 transition-all duration-300 active:bg-(--service-color) active:text-(--service-bg) active:scale-95"
        >
          Book Your Free{" "}
          <br className="max-md:hidden [@media(max-height:800px)]:hidden" />{" "}
          15-Minute Call
        </Link>
        <SignUp
          className="bg-[#191919] text-white font-medium px-4 py-2 rounded-2xl text-xl cursor-pointer md:hidden
            hover:scale-109 transition-all duration-300 active:text-[#191919] active:bg-white active:scale-95"
        />
      </div>
    </main>
  );
}
