import "./colors.css";
import { reviews } from "../reviews";
import { VAs } from "@/components/VAs";
import Landing from "@/components/landing";
import Reviews from "@/components/reviews";
import { Highlight } from "@/components/highlight";

export default function HomeCareLanding() {
  return (
    <>
      <Landing
        title={
          <>
            Cut Admin Time, Not Quality of Care
            <br className="max-lg:hidden" /> We can fill any{" "}
            <Highlight>HIPAA</Highlight> requirements
            <br className="max-lg:hidden" /> for Home Care
          </>
        }
        subtitle={
          <>
            Save time, reduce costs, and improve patient
            <br className="max-lg:hidden" /> satisfaction with bilingual virtual
            assistants who
            <br className="max-lg:hidden" /> understand the home care industry.
          </>
        }
        videoUrl="https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/69820688cf8ac032935b5dfe.webm"
      />
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
        service="homecare"
      />
    </>
  );
}
