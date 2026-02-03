import "../colors.css";
import { Highlight } from "@/components/highlight";
import { ListItem } from "@/components/list-item";
import HowItWorks from "@/components/how-it-works";
import BenefitsList from "@/components/benefits-list";
import { FAQRenderer } from "@/components/faq-renderer";

export default function HowItWorksPage() {
  return (
    <>
      <section className="md:p-10 p-4 flex justify-center max-h-dvh overflow-hidden">
        <HowItWorks
          title={
            <>
              Your <Highlight>Time</Highlight> Should
              <br className="max-lg:hidden" /> Go to Patients,
              <br className="max-lg:hidden" /> Not Paperwork
            </>
          }
          paragraph={
            <>
              Recruitment, compliance, billing, and patient
              <br className="max-md:hidden" /> coordination all compete for your
              limited
              <br className="max-md:hidden" /> resources. The result? Overworked
              staff, slower
              <br className="max-md:hidden" /> response times, and lost revenue
              opportunities.
            </>
          }
          imageSrc={[
            "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/696f7f2aa5a12ea16c760168.png",
            "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68d19540fefaa978564796a0.jpeg",
          ]}
          alt="homecare-va"
        />
      </section>
      <section
        id="benefits"
        className="w-full px-10 flex justify-center min-h-dvh"
      >
        <BenefitsList
          title={
            <>
              Here's How InteractiveWorkers
              <br className="max-lg:hidden" /> Makes{" "}
              <Highlight>Home Care</Highlight> Easier:
            </>
          }
          src={
            "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68d1954004a3696eabf23233.jpeg"
          }
        >
          <ListItem icon="check-page">
            On-site Virtual Assistance
            <br className="max-lg:hidden" /> (Full commitment and
            confidentiality)
          </ListItem>
          <ListItem icon="direct-access">
            Direct Access to Efficiency
            <br className="max-lg:hidden" /> Trackers and CCTV Footage
          </ListItem>
          <ListItem icon="tech-support">
            Included Tech Support and HR Crew
          </ListItem>
          <ListItem icon="serve-speaking">
            Serve Spanish-Speaking
            <br className="max-lg:hidden" /> Policyholders Seamsleesly
          </ListItem>
          <ListItem icon="scaling">Cut Hiring & Training Costs</ListItem>
        </BenefitsList>
      </section>
      <FAQRenderer section="homecare" />
    </>
  );
}
