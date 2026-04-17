"use client";
import Image from "next/image";
import SignUp from "./sign-up";

export default function Footer() {
  return (
    <footer className="w-full py-10 md:gap-10 gap-5 flex flex-col justify-center items-center text-[#191919] bottom-0">
      <SignUp />
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
