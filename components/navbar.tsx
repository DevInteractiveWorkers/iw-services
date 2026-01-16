import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const Item = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    return (
      <Link href={href} className="cursor-pointer group relative py-5">
        {children}
        <div className="bg-[#191919] h-px w-0 absolute left-1/2 group-hover:left-0 group-hover:w-full transition-all duration-300"></div>
      </Link>
    );
  };

  return (
    <nav className="w-full flex justify-center items-center gap-5 z-10 absolute top-0 left-0">
      <Image
        src={"/InteractiveWorkers-logo.png"}
        quality={100}
        alt={""}
        height={1080}
        width={1080}
        className="w-min max-h-4 object-contain"
      />
      <Item href={"/"}>Home</Item>
      <Item href={"/how-it-works"}>See How it Works</Item>
      <Item href={"#our-vas"}>Our VAs</Item>
      <Item href={"/how-it-works#benefits"}>Benefits</Item>
      <Item href={"/how-it-works#faq"}>FAQ</Item>
      <Link
        href={"/sign-up"}
        className="hover:underline cursor-pointer text-white bg-[#191919] px-4 py-1 rounded-md"
      >
        Sign Up for our Newsletter
      </Link>
    </nav>
  );
}
