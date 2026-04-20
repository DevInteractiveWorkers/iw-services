"use client";
import { useSubdomain } from "@/lib/useSubdomain";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  const subdomain = useSubdomain();

  const ServiceLink = () => {
    const link =
      subdomain !== ""
        ? `https://${subdomain}.interactiveworkers.com/`
        : "https://services.interactiveworkers.com/";
    return (
      <Link
        href={link}
        className="hover:underline hover:text-[#DD272D] transition-all duration-150"
      >
        {subdomain} services
      </Link>
    );
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <label className="text-[#DD272D] font-black text-7xl select-none">
          4
          <Image
            src={"/iw-icon.png"}
            alt={"0"}
            quality={100}
            height={1080}
            width={1080}
            className="w-min [@media(min-height:800px)]:max-h-20 max-h-10 object-contain flip-logo"
          />
          4
        </label>
        <h1
          className="font-medium text-center md:text-4xl text-3xl"
          style={{ lineHeight: 1 }}
        >
          Not Found
        </h1>
        <p>
          Go to{" "}
          <Link
            href={"https://interactiveworkers.com/"}
            className="hover:underline hover:text-[#DD272D] transition-all duration-150"
          >
            interactiveworkers.com
          </Link>{" "}
          or explore more of our <ServiceLink />.
        </p>
      </div>
    </section>
  );
}
