import Image from "next/image";
import Link from "next/link";

interface HowItWorksProps {
  title: string | React.ReactNode;
  paragraph: string | React.ReactNode;
  imageSrc: string | string[];
  reverse?: boolean;
  alt?: string;
  href?: string;
}

export default function HowItWorks({
  title,
  paragraph,
  imageSrc,
  reverse,
  alt = "service",
  href,
}: HowItWorksProps) {
  return (
    <div className="lg:[@media(min-height:800px)]:w-9/12 md:w-11/12 [@media(min-height:800px)]:max-h-svh flex flex-col justify-around gap-5">
      <div
        className={`flex items-stretch h-min ${
          reverse && "md:flex-row-reverse"
        } max-md:flex-col-reverse gap-5`}
      >
        <div className={`${imageSrc && "md:w-1/2"} h-full flex flex-col`}>
          <h1
            className="font-medium xl:text-6xl md:text-5xl text-4xl"
            style={{ lineHeight: 1 }}
          >
            {title}
          </h1>
          <p className="py-4 flex-1 md:text-xl">{paragraph}</p>
        </div>
        {imageSrc && (
          <div className="h-full md:w-1/2 relative">
            <Image
              className="rounded-2xl object-cover object-[0_30%]"
              src={Array.isArray(imageSrc) ? imageSrc[0] : imageSrc}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              quality={100}
              alt={alt}
            />
            {href && (
              <Link href={href}>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 z-10 translate-y-full right-0 translate-x-1/2 hover:-scale-90 transition-all duration-100 -scale-100"
                >
                  <circle cx="21.5" cy="21.5" r="21.5" fill="#DD272D" />
                  <path
                    d="M32.7071 22.2071C33.0976 21.8166 33.0976 21.1834 32.7071 20.7929L26.3431 14.4289C25.9526 14.0384 25.3195 14.0384 24.9289 14.4289C24.5384 14.8195 24.5384 15.4526 24.9289 15.8431L30.5858 21.5L24.9289 27.1569C24.5384 27.5474 24.5384 28.1805 24.9289 28.5711C25.3195 28.9616 25.9526 28.9616 26.3431 28.5711L32.7071 22.2071ZM11 21.5L11 22.5L32 22.5L32 21.5L32 20.5L11 20.5L11 21.5Z"
                    fill="white"
                  />
                </svg>
              </Link>
            )}
          </div>
        )}
      </div>
      {Array.isArray(imageSrc) && imageSrc.length === 2 && (
        <Image
          className="rounded-2xl object-cover [@media(min-height:800px)]:object-center [@media(max-height:800px)]:mt-5 max-h-1/2 w-full"
          src={imageSrc[1]}
          height={1080}
          width={1080}
          alt={alt + "-2"}
        />
      )}
    </div>
  );
}
