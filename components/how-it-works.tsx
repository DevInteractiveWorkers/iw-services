import Image from "next/image";

interface HowItWorksProps {
  title: string | React.ReactNode;
  paragraph: string | React.ReactNode;
  imageSrc: string | string[];
  reverse?: boolean;
  alt?: string;
}

export default function HowItWorks({
  title,
  paragraph,
  imageSrc,
  reverse,
  alt = "service",
}: HowItWorksProps) {
  return (
    <div className="lg:[@media(min-height:800px)]:w-9/12 md:w-11/12 [@media(min-height:800px)]:max-h-svh flex flex-col justify-around">
      <div
        className={`flex h-min ${reverse && "md:flex-row-reverse"} max-md:flex-col-reverse gap-5`}
      >
        <div className={`${imageSrc && "md:w-1/2"}`}>
          <h1
            className="font-medium xl:text-6xl md:text-5xl text-4xl"
            style={{ lineHeight: 1 }}
          >
            {title}
          </h1>
          <p className="py-4">{paragraph}</p>
        </div>
        {imageSrc && (
          <Image
            className="rounded-2xl object-cover object-top-right h-full md:w-1/2 max-h-80"
            src={Array.isArray(imageSrc) ? imageSrc[0] : imageSrc}
            height={1080}
            width={1080}
            alt={alt}
          />
        )}
      </div>
      {Array.isArray(imageSrc) && imageSrc.length === 2 && (
        <Image
          className="rounded-2xl object-cover [@media(min-height:800px)]:object-top [@media(max-height:800px)]:mt-5 max-h-1/2 w-full"
          src={imageSrc[1]}
          height={1080}
          width={1080}
          alt={alt + "-2"}
        />
      )}
    </div>
  );
}
