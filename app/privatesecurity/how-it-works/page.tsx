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
              Our Support =<br />
              <Highlight>More Solutions</Highlight> <br />
              We Cover Every Shift
            </>
          }
          paragraph={
            <>
              Scale coverage instantly with bilingual,
              <br className="max-md:hidden" /> security-trained VAs who handle
              calls,
              <br className="max-md:hidden" /> dispatch, and scheduling around
              the clock.
            </>
          }
          imageSrc={[
            "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/69736fd19683af457c871cdb.png",
            "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/69736fd115885e28e3c99666.png",
          ]}
          alt="private-security-va"
          reverse
        />
      </section>
      <section
        id="benefits"
        className="w-full px-10 flex flex-col justify-around items-center min-h-dvh"
      >
        <BenefitsList
          src="https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/69736fd1a87bebde16503ffc.png"
          title={
            <>
              24/7 Dispatch <br />
              You Can Depend On
            </>
          }
          text={
            <>
              With <strong>InteractiveWorkers</strong>, you can scale your
              dispatc coverage at a fraction of the cost of hiring in-housem
              withour compromising on reliability or secuirity.
            </>
          }
        >
          <ListItem icon="24-7">
            <strong>24/7 call handling</strong>
            <br /> without butnout or overtime
          </ListItem>
          <ListItem icon="direct-access">
            <strong>Instant guard deployment remote support</strong>
            <br /> for emergencies and after-hours incidents
          </ListItem>
          <ListItem icon="tech-support">
            <strong>Accurate shift scheduling</strong>
            <br />
            to avoid coverage gaps
          </ListItem>
          <ListItem icon="serve-speaking">
            <strong>Seamless communication</strong>
            <br />
            between yout office, guards, and clients
          </ListItem>
        </BenefitsList>
        <BenefitsList>
          <ListItem icon="24-7">
            <strong>Reduce missing calls and response</strong>
            <br />
            delays by up to 50% with dedicated virtual
            <br /> dispatchers.
          </ListItem>
          <ListItem icon="direct-access">
            <strong>Cut overtime and payroll costs while</strong>
            <br />
            maintaining round the-clock coverage
          </ListItem>
          <ListItem icon="tech-support">
            <strong>Scale instantly during emergencies or</strong>
            <br />
            contract expansions without recruiting headaches.
          </ListItem>
          <ListItem icon="serve-speaking">
            <strong>Access bilingual, secuirity-trained VAs</strong>
            <br />
            who understand industry protocols.
          </ListItem>
          <ListItem icon="check-page">
            <strong>On-site Virtual Assistance</strong>
            <br />
            (Full commitment and confidentiality)
          </ListItem>
          <ListItem icon="direct-access">
            <strong>Direct Access to Efficiency Trackers</strong>
            <br />
            and CCTV Footage
          </ListItem>
          <ListItem icon="tech-support">
            <strong>Included Tech Support</strong>
          </ListItem>
        </BenefitsList>
      </section>
      <FAQRenderer section="privatesecurity" />
    </>
  );
}
