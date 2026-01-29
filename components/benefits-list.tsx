import Image from "next/image";
import { ListItem } from "./list-item";

interface BenefitsListProps {
  title?: string | React.ReactNode;
  children: React.ReactNode;
  text?: string | React.ReactNode;
  src?: string;
}

export default function BenefitsList({
  title,
  children,
  text,
  src,
}: BenefitsListProps) {
  return (
    <div
      className={`lg:w-9/12 md:w-11/12 flex flex-col ${text || src ? "min-h-dvh justify-around py-10" : "h-min"}`}
    >
      {title && (
        <h2 className="font-medium lg:text-6xl md:text-5xl text-4xl">
          {title}
        </h2>
      )}
      <ul className="grid grid-cols-1 gap-5 md:w-9/12 my-5">{children}</ul>
      {text && <p className="lg:text-5xl md:text-4xl text-3xl">{text}</p>}
      {src && (
        <Image
          className="rounded-2xl object-cover object-center h-1/3 max-h-96 w-full"
          src={src}
          height={1080}
          width={1080}
          alt="homecare-patient"
        />
      )}
    </div>
  );
}
