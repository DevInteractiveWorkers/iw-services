"use client";
import Image from "next/image";
import SignUp from "./sign-up";
import { useSubdomain } from "@/lib/useLocation";
import { usePathname } from "next/navigation";

export default function Footer() {
  const path = usePathname();
  const subdomain = useSubdomain();
  const isWhoWeAre = subdomain === "services" && path.includes("who-we-are");
  return (
    <footer className="w-full py-10 md:gap-10 gap-5 flex flex-col justify-center items-center text-[#191919] bottom-0">
      <SignUp
        className={
          isWhoWeAre
            ? "px-6 py-3 md:text-2xl rounded-2xl bg-[#191919] text-white active:bg-[#DD272D] active:text-[#191919] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300"
            : undefined
        }
      />
      <div className="flex justify-around items-center max-md:flex-col w-full gap-5">
        <Image
          src={"/iw-red-black-logo.png"}
          quality={100}
          alt={""}
          height={1080}
          width={1080}
          className="w-min max-h-8 object-contain"
        />{" "}
        <span className="text-center max-md:px-4">
          &copy; Copyright 2006 - {new Date().getFullYear()} InteractiveWorkes.
          All rights reserved.
        </span>
      </div>
    </footer>
  );
}
