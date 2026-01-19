import { Highlight } from "@/components/highlight";
import { VAs } from "@/components/VAs";
import Image from "next/image";
import "../globals.css";
import Reviews from "@/components/reviews";
import { reviews } from "../reviews";

export default function HomeCareLanding() {
  return (
    <>
      <main className="h-dvh p-5 flex flex-col justify-center items-center gap-5">
        <Image
          src={"/iw-icon.png"}
          alt={"iw-icon"}
          quality={100}
          height={1080}
          width={1080}
          className="w-min max-h-20 object-contain flip-logo"
        />
        <h1
          className="font-medium text-center md:text-4xl text-3xl"
          style={{ lineHeight: 1 }}
        >
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
        <video
          src="https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68e67aadffda8d5fed213422.mp4"
          autoPlay
          loop
          muted
          className="w-min md:h-1/3 h-1/4 object-cover rounded-2xl"
        />
        <p className="text-center max-md:text-sm" style={{ lineHeight: 1.2 }}>
          Save time, reduce costs, and improve patient
          <br />
          satisfaction with bilingual virtual assistants who
          <br />
          understand the home care industry.
        </p>
        <button className="bg-[#56DBB5] text-[#191919] font-medium px-4 py-2 rounded-2xl md:text-4xl text-xl">
          Book Your Free
          <br className="max-md:hidden" />
          15-Minute Call
        </button>
      </main>
      <section className="w-full p-10">
        <Reviews reviews={reviews} />
      </section>
      <VAs
        header={
          <>
            Our{" "}
            <Highlight color="#191919" bgColor="#56DBB5">
              Home Care
            </Highlight>{" "}
            VAs
          </>
        }
        VAs={[
          { name: "Care Coordinators" },
          { name: "HR Specialist" },
          { name: "Intake Coordinators" },
          { name: "Bilingual Support Specialist" },
          { name: "Service Coordinators" },
        ]}
        tags={[
          "HIPPA requirements",
          "Proactive Communication",
          "Bilingual English/Spanish",
        ]}
      />
      <div className="md:px-10 px-5 pb-10 flex justify-center">
        <div
          className="bg-[#56DBB5] text-[#191919] font-medium px-10 py-8 rounded-2xl md:text-6xl sm:text-4xl text-3xl text-center"
          style={{ lineHeight: 1 }}
        >
          Ready to{" "}
          <Highlight color="#ffffff" bgColor="#191919">
            Simplify
          </Highlight>{" "}
          Your
          <br />
          <Highlight color="#ffffff" bgColor="#191919">
            Home Care
          </Highlight>{" "}
          Operations?
          <div className="flex justify-center pt-5">
            <button
              className="text-white bg-[#191919] md:text-5xl sm:text-4xl text-3 rounded-2xl px-6 py-3 cursor-pointer hover:scale-109 transition-all duration-300
            active:bg-white active:text-[#191919] active:scale-95"
            >
              Book Your Free
              <br />
              15-Minute Call
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
