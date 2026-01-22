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
      <Landing
        title={
          <>
            End-ti-End Insurance
            <br />
            <Highlight>Operations</Highlight> Support
            <br />
            Every Remote Worker
            <br />
            You Need Under One Roof
          </>
        }
        subtitle={
          <>
            Speed up claims, reduce admin costs, and delight policyholders
            <br className="max-md:hidden" /> with bilingual administrative
            remote workers
          </>
        }
      />
      <section className="w-full p-10">
        <Reviews reviews={reviews} />
      </section>
      <VAs
        header={
          <>
            Our <Highlight>Insurance</Highlight> Company VAs
          </>
        }
        VAs={[
          { name: "Case Coordinartors" },
          { name: "Insurance Agents" },
          { name: "Translators" },
          { name: "Intake Specialist" },
          { name: "Customer Service Representative" },
        ]}
        tags={[
          "24/7 Adaptability",
          "Proactive Communication",
          "Bilingual English/Spanish",
        ]}
        service="insurance"
      />
    </>
  );
}
