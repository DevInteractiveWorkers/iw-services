import Image from "next/image";

interface VAsProps {
  name: string;
}

export function VAs({
  header,
  VAs,
  tags,
}: {
  header: any;
  VAs: VAsProps[];
  tags?: string[];
}) {
  return (
    <section
      id="our-vas"
      className="w-full md:p-10 px-4 flex flex-col items-center gap-5"
    >
      <h2
        className="font-medium text-center md:text-4xl text-3xl"
        style={{ lineHeight: 1 }}
      >
        {header}
      </h2>

      <div className="md:grid flex flex-col gap-5 grid-cols-2 flex-wrap justify-center items-center">
        {VAs.map((va, i) => (
          <VAItem
            key={i}
            name={va.name}
            className={i === VAs.length - 1 ? "md:translate-x-1/2" : ""}
          />
        ))}
      </div>
      <div className="flex flex-col items-center py-5 w-full">
        <div className="relative group z-10 my-8">
          <svg
            className="absolute animate-flip heart"
            width="128"
            height="128"
            viewBox="0 0 98 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M60 35.5L49 45.5L44 39.5L33.5 30L25.5 23.5L23 17.5L25.5 7.5L36 3L44 5.5L49 10L58.5 3H64.5L70.5 6.5L74 12V17.5L70.5 23.5L60 35.5Z"
                fill="var(--service-bg)"
              />
              <path
                d="M49 9.64115L45.9813 6.62248C40.9795 1.62065 32.8702 1.62065 27.8686 6.62248C22.8667 11.6239 22.8667 19.7334 27.8686 24.7351L30.8872 27.7539L49 45.8667L67.1128 27.7539L70.1314 24.7351C75.1333 19.7334 75.1333 11.6239 70.1314 6.62248C65.1298 1.62065 57.0205 1.62065 52.0187 6.62248L49 9.64115Z"
                stroke="#191919"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <svg
            width="128"
            height="128"
            viewBox="0 0 98 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                className="group-hover:rotate-2 group-hover:-translate-y-1 transition-transform duration-150"
                d="M55.9189 95.1289H79.8166V81.7305L93.2003 61.6548C94.458 59.7685 95.1291 57.5518 95.1291 55.2844V24.3086C95.1291 21.1374 92.5581 18.5664 89.3869 18.5664C86.2157 18.5664 83.6447 21.1374 83.6447 24.3086V47.9343C83.6447 49.9647 82.8381 51.9121 81.4022 53.348L70.2463 64.5039 M55.9189 95.1289V67.3469C55.9189 64.3008 57.129 61.38 59.2827 59.2263L72.3925 46.1163C74.635 43.8738 78.2708 43.8738 80.5133 46.1163C82.7556 48.3586 82.7556 51.9945 80.5133 54.2369L70.2463 64.5039"
                stroke="#191919"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="group-hover:-rotate-2 transition-transform duration-150"
                d="M42.0812 95.1289H18.1836V81.7305L4.79989 61.6548C3.54216 59.7685 2.87109 57.5518 2.87109 55.2844V24.3086C2.87109 21.1374 5.44206 18.5664 8.61328 18.5664C11.7845 18.5664 14.3555 21.1374 14.3555 24.3086V47.9343C14.3555 49.9647 15.1621 51.9121 16.598 53.348L27.7539 64.5039 M42.0808 95.1289V67.3469C42.0808 64.3008 40.8707 61.38 38.717 59.2263L25.6072 46.1163C23.3647 43.8738 19.7289 43.8738 17.4864 46.1163C15.2441 48.3586 15.2441 51.9945 17.4864 54.2369L27.7535 64.5039"
                stroke="#191919"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>

        {tags && (
          <p className="py-5 text-xl font-medium text-center">
            {tags.join(" • ")}
          </p>
        )}
      </div>
    </section>
  );
}

function VAItem({ name, className }: { name: string; className?: string }) {
  return (
    <div
      className={`border-2 py-3 px-6 rounded-2xl text-center ${className}
        hover:scale-105 transition-transform duration-300 hover:rotate-2 bg-white cursor-default
        max-md:w-full
      `}
    >
      <span className="md:text-2xl font-medium">{name}</span>
    </div>
  );
}
