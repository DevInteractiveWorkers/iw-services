import "./colors.css";
import { reviews } from "../reviews";
import { VAs } from "@/components/VAs";
import Landing from "@/components/landing";
import Reviews from "@/components/reviews";
import BookACall from "@/components/book-a-call";
import { Highlight } from "@/components/highlight";

export default function InsuranceLanding() {
  return (
    <>
      <Landing>
        Professional administrative support,
        <br />
        at a Fraction of the Cost - We Provide
        <br />
        Every <Highlight>Virtual Assistant</Highlight> Your
        <br />
        Law Firm Requires
      </Landing>
      <section className="w-full p-10">
        <Reviews reviews={reviews} />
      </section>
      <VAs
        header={
          <>
            Our <Highlight>Law Firm</Highlight> VAs
          </>
        }
        VAs={[
          { name: "Legal Assistants" },
          { name: "Translators" },
          { name: "Appointment Setters" },
          { name: "Call Center Agents" },
          { name: "Customer Service Agents" },
        ]}
        tags={["24/7 Adaptability", "Translators", "Bilingual English/Spanish"]}
      />
      <BookACall
        customMessage={
          <>
            Book a <br />
            Consultation
          </>
        }
      >
        Start{" "}
        <Highlight color="#ffffff" bgColor="#191919">
          Saving
        </Highlight>{" "}
        Billable
        <br />
        <Highlight color="#ffffff" bgColor="#191919">
          Hours
        </Highlight>{" "}
        Today
      </BookACall>
    </>
  );
}
