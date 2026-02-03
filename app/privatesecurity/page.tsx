import "./colors.css";
import { reviews } from "../reviews";
import { VAs } from "@/components/VAs";
import Landing from "@/components/landing";
import Reviews from "@/components/reviews";
import { Highlight } from "@/components/highlight";

export default function PriavetSecurityLanding() {
  return (
    <>
      <Landing
        title={
          <>
            24/7 Remote Dispatch
            <br className="max-lg:hidden" /> for Every Operation,
            <br className="max-lg:hidden" />{" "}
            <Highlight>Ready to Deploy</Highlight>
          </>
        }
        subtitle={
          <>
            Boost response times, reduce overtime, and scale operations
            <br className="max-md:hidden" /> with trained virtual dispatchers
            and schedulers for private
            <br className="max-md:hidden" /> security companies.
          </>
        }
      />
      <section className="w-full p-10">
        <Reviews reviews={reviews} />
      </section>
      <VAs
        header={
          <>
            Our <Highlight>Private Security</Highlight> Remote Workers
          </>
        }
        VAs={[
          { name: "Case Coordinartors" },
          { name: "Insurance Agents" },
          { name: "Translators" },
          { name: "Intake Specialist" },
          { name: "Dispatcher" },
          { name: "Schedulers" },
        ]}
        tags={[
          "Trained in Confidentiality and Security Protocols",
          "24/7 Adaptability",
          "Proactive Communication",
          "Bilingual English/Spanish",
        ]}
        service="security"
      />
    </>
  );
}
