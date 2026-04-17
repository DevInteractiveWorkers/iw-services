import Image from "next/image";
import { Icon } from "../icon";

type CardProps = {
  title: string;
  description: string;
  src?: string;
  icon?: string;
};
export default function WhatWeOfferCard({
  title,
  description,
  src,
  icon = "check",
}: CardProps) {
  return (
    <div
      className={`p-4 min-w-full md:h-[50svh] md:max-h-[70svh] h-min select-none rounded-xl flex gap-2 group-even:justify-between
        group-even:bg-[#dd272d] group-even:flex-col-reverse bg-[#191919] flex-col`}
    >
      {src && (
        <div className="relative overflow-hidden">
          <Image
            src={src}
            alt={"img-" + title}
            width={1080}
            height={1080}
            className="max-h-[50svh] w-full object-cover select-none rounded-2xl"
          />
          <div className="absolute p-4 flex items-center justify-center rounded-full flip-logo bottom-4 right-4 group-even:bg-white bg-[#dd272d] text-white group-even:text-[#dd272d]">
            <Icon icon={icon} filled={true} color={"currentColor"} />
          </div>
        </div>
      )}
      <p className="text-lg flex flex-col gap-2 text-white">
        <label className="text-xl font-medium">{title}</label>
        {description}
      </p>
    </div>
  );
}
