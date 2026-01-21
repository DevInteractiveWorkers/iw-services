import "./colors.css";
import { reviews } from "../reviews";
import { VAs } from "@/components/VAs";
import Landing from "@/components/landing";
import Reviews from "@/components/reviews";
import BookACall from "@/components/book-a-call";
import { Highlight } from "@/components/highlight";

export default function HomeCareLanding() {
  return (
    <>
      <Landing videoUrl="https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68e67aadffda8d5fed213422.mp4">
        Cut Admin Time, Not Quality of Care
        <br />
        We can fill any <Highlight>HIPAA</Highlight> requirements
        <br />
        for Home Care
      </Landing>
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
