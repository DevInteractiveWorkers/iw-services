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
              FREE Your
              <br className="max-lg:hidden" /> <Highlight>Attorneys</Highlight>{" "}
              From <br className="max-lg:hidden" />
              Low-Value Tasks
            </>
          }
          paragraph={
            <>
              Client intake, follow-ups, scheduling, translations
              <br className="max-md:hidden" /> your lawyers shouldn’t be doing
              this. Our
              <br className="max-md:hidden" /> administrative VAs handle it all
              under strict
              <br className="max-md:hidden" /> confidentiality, so you can
              maximize profitability.
            </>
          }
          imageSrc={[
            "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68d55ed814d8cf6fe5867f05.png",
            "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68d55ed88da2ad6a4bdcc943.png",
          ]}
          alt="lawfirms-va"
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
              <br className="max-lg:hidden" />
              Makes <Highlight>Home Care</Highlight> Easier:
            </>
          }
          src={
            "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68d55ed871c31ec04982e7d5.png"
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
          <ListItem icon="24-7">24/7 Adaptabilty</ListItem>
        </BenefitsList>
      </section>
      <FAQRenderer section="lawfirms" />
    </>
  );
}
