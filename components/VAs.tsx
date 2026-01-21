import InteractiveIcon from "./interactive-icon";

interface VAsProps {
  name: string;
}

export function VAs({
  header,
  VAs,
  tags,
  service,
}: {
  header: any;
  VAs: VAsProps[];
  tags?: string[];
  service?: string;
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
        {service && <InteractiveIcon service={service} />}
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
