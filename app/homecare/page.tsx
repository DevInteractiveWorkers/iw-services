import { Highlight } from "@/components/highlight";
import Image from "next/image";

export default function HomeCareLanding() {
  return (
    <main className="h-dvh p-5 flex flex-col justify-center items-center gap-5">
      <Image
        src={"/iw-icon.png"}
        alt={"iw-icon"}
        quality={100}
        height={1080}
        width={1080}
        className="w-min max-h-56 object-contain"
      />
      <h1 className="font-medium text-center text-5xl">
        Cut Admin Time, Not Quality of Care
        <br />
        We can fill any{" "}
        <Highlight color="#191919" bgColor="#56DBB5">
          HIPAA
        </Highlight>{" "}
        requirements
        <br />
        for Home Care
      </h1>
    </main>
  );
}
