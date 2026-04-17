"use client";

import Link from "next/link";
import SignUp from "./sign-up";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSubdomain } from "@/lib/useSubdomain";

export default function Header() {
  return (
    <header>
      <NavBar />
    </header>
  );
}

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const subdomain = useSubdomain();
  const isServices = subdomain === "services";

  const Item = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    return (
      <li>
        <Link
          href={href}
          className="cursor-pointer group relative w-full max-md:block py-4"
          onClick={() => setIsOpen(false)}
        >
          {children}
          <div className="bg-[#191919] h-px w-0 absolute left-1/2 group-hover:left-0 group-hover:w-full transition-all duration-300"></div>
        </Link>
      </li>
    );
  };

  return (
    <nav
      className={`w-full flex md:justify-center justify-around items-center gap-5 z-50 pt-5 ${pathname === "/" && "absolute top-0 left-0"}`}
    >
      <Link target="_blank" href={"https://interactiveworkers.com/"}>
        <Image
          src={"/InteractiveWorkers-logo.png"}
          quality={100}
          alt={"InteractiveWorkers"}
          height={1080}
          width={1080}
          className="w-min max-h-4 object-contain hover:scale-95 transition-all duration-150"
        />
      </Link>
      {/* max-lg:hidden */}
      <ul
        className={`flex gap-5 z-10 top-0 max-lg:fixed max-lg:flex-col max-lg:bg-white max-lg:shadow-lg 
          max-lg:h-dvh max-lg:w-2/3 max-lg:pt-5 max-lg:px-10 max-md:px-5
          ${isOpen ? "max-lg:right-0" : "max-lg:-right-full"} transition-all duration-300`}
      >
        <li className="flex justify-end">
          <MenuButton onClick={() => setIsOpen(!isOpen)} icon="close" />
        </li>
        {isServices ? (
          <>
            <Item href={"/"}>Home</Item>
            <Item href={"/who-we-are"}>Who We Are</Item>
            <Item href={"/who-we-are#key-highlights"}>Key Highlights</Item>
            <Item href={"/who-we-are#benefits"}>Benefits</Item>
          </>
        ) : (
          <>
            <Item href={"/"}>Home</Item>
            <Item href={"/how-it-works"}>See How it Works</Item>
            <Item href={"/#our-vas"}>Our VAs</Item>
            <Item href={"/how-it-works#benefits"}>Benefits</Item>
            <Item href={"/how-it-works#faq"}>FAQ</Item>
          </>
        )}
      </ul>
      <SignUp dark />
      <MenuButton onClick={() => setIsOpen(!isOpen)} />
    </nav>
  );
}

function MenuButton({
  className = "",
  onClick,
  icon = "bars",
}: {
  className?: string;
  onClick?: () => void;
  icon?: "bars" | "close";
}) {
  return (
    <button className="cursor-pointer lg:hidden" onClick={onClick}>
      {icon === "bars" ? (
        <svg
          className={`w-6 h-6 text-[#191919] ${className}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-[#191919]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg>
      )}
    </button>
  );
}
