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
              When <Highlight>Policyholders</Highlight>{" "}
              <br className="max-lg:hidden" /> Wait, Satisfaction
              <br className="max-lg:hidden" /> Drops
            </>
          }
          paragraph={
            <>
              Delays and call backlogs cost you renewals.
              <br className="max-md:hidden" /> Our virtual assistants clear
              claims queues,
              <br className="max-md:hidden" /> manage calls, and support
              Spanish-Speaking
              <br className="max-md:hidden" /> clients so your team can focus on
              high-value tasks.
            </>
          }
          imageSrc={[
            "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68d58e7bc80edf6760ce7e32.png",
            "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68d58e7bc80edf73f2ce7e33.png",
          ]}
          alt="insurance-va"
          reverse
        />
      </section>
      <section
        id="benefits"
        className="w-full px-10 flex justify-center min-h-dvh"
      >
        <BenefitsList
          title={
            <>
              Here's How InteractiveWorkers Scales
              <br className="max-lg:hidden" /> Your{" "}
              <Highlight>Insurance Companies</Highlight> Operations:
            </>
          }
          src={
            "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68d58e7b4cbd20b0c007088f.png"
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
          <ListItem icon="tech-support">Included Tech Support</ListItem>
          <ListItem icon="serve-speaking">
            Reduce Service Times & <br className="max-lg:hidden" /> Backlogs
          </ListItem>
        </BenefitsList>
      </section>
      <FAQRenderer section="insurance" />
    </>
  );
}
