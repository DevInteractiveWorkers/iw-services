import { Highlight } from "@/components/highlight";
import { VAs } from "@/components/VAs";
import Image from "next/image";
import Reviews from "@/components/reviews";
import { reviews } from "../reviews";
import Link from "next/link";
import BookACall from "@/components/book-a-call";
import "./colors.css";

export default function HomeCareLanding() {
  return (
    <>
      <main className="max-h-dvh max-md:min-h-dvh px-5 flex flex-col justify-start items-center gap-5">
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
          We can fill any <Highlight>HIPAA</Highlight> requirements
          <br />
          for Home Care
        </h1>
        <video
          src="https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68e67aadffda8d5fed213422.mp4"
          autoPlay
          loop
          muted
          className="xl:max-w-3xl lg:max-w-2xl sm:max-w-xl w-min md:h-1/3 h-1/4 object-cover rounded-2xl"
        />
        <p className="text-center max-md:text-sm" style={{ lineHeight: 1.2 }}>
          Save time, reduce costs, and improve patient
          <br />
          satisfaction with bilingual virtual assistants who
          <br />
          understand the home care industry.
        </p>
        <Link
          target="_blank"
          href={"https://calendly.com/interactiveworkersgm/30min"}
          className="bg-[#56DBB5] text-[#191919] font-medium px-4 py-2 rounded-2xl md:text-4xl text-xl cursor-pointer
            hover:scale-109 transition-all duration-300 active:bg-[#191919] active:text-[#56DBB5] active:scale-95"
        >
          Book Your Free
          <br className="max-md:hidden" />
          15-Minute Call
        </Link>
        <Link
          target="_blank"
          href={"https://calendly.com/interactiveworkersgm/30min"}
          className="bg-[#191919] text-white font-medium px-4 py-2 rounded-2xl text-xl cursor-pointer md:hidden
            hover:scale-109 transition-all duration-300 active:bg-[#191919] active:text-[#56DBB5] active:scale-95"
        >
          Book Your Free 15-Minute Call
        </Link>
      </main>
      <section className="w-full p-10">
        <Reviews reviews={reviews} />
      </section>
      <VAs
        header={
          <>
            Our <Highlight>Home Care</Highlight> VAs
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
      <BookACall>
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
      </BookACall>
    </>
  );
}
