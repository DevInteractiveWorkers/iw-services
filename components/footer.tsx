import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-10 md:gap-10 gap-5 flex flex-col justify-center items-center text-[#191919]">
      <button className="text-white bg-[#DD272D] px-6 py-3 md:text-2xl rounded-2xl">
        Sign up for our Newsletter
      </button>
      <div className="flex justify-around items-center max-md:flex-col">
        <Image
          src={"/iw-red-black-logo.png"}
          quality={100}
          alt={""}
          height={1080}
          width={1080}
          className="w-min max-h-8 object-contain"
        />{" "}
        <span className="text-center">
          &copy; Copyright 2006 - {new Date().getFullYear()} InteractiveWorkes.
          All rights reserved.
        </span>
      </div>
    </footer>
  );
}
