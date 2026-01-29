import "./colors.css";
import { reviews } from "../reviews";
import { VAs } from "@/components/VAs";
import Landing from "@/components/landing";
import Reviews from "@/components/reviews";
import { Highlight } from "@/components/highlight";

export default function InsuranceLanding() {
  return (
    <>
      <Landing
        title={
          <>
            Professional administrative support,
            <br className="max-lg:hidden" />
            at a Fraction of the Cost - We Provide
            <br className="max-lg:hidden" />
            Every <Highlight>Virtual Assistant</Highlight> Your
            <br className="max-lg:hidden" />
            Law Firm Requires
          </>
        }
        subtitle={
          <>
            Free up your attorneys’ time with administrative virtual
            <br className="max-md:hidden" /> assistants. Confidential,
            bilingual, and cost-effective
            <br className="max-md:hidden" /> support for busy law practices.
          </>
        }
      />
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
        service="lawfirms"
      />
    </>
  );
}
