import BookACall from "@/components/book-a-call";
import FAQ, { Question } from "@/components/faq";
import { Highlight } from "@/components/highlight";
import { ListItem } from "@/components/list-item";
import Image from "next/image";
import "../colors.css";
import HowItWorks from "@/components/how-it-works";
import BenefitsList from "@/components/benefits-list";

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
      <FAQ>
        <Question question="How can InteractiveWorkers’ Remote workers help my insurance company manage claims more efficiently?">
          Our VAs are trained to manage calls, assign guards, coordinate shift
          changes, and update logs in real time. This keeps your operations
          responsive, organized, and client-ready at all times.
        </Question>
        <Question question="Do your VAs understand private security protocols?">
          Yes. All our Remote workers are familiar with insurance industry
          protocols and follow strict data security and confidentiality policies
          to protect sensitive client information.
        </Question>
        <Question question="Can your VAs handle emergencies or last-minute schedule changes?">Absolutely. Our dispatchers and schedulers are experienced in crisis management and can quickly reassign personnel or escalate incidents as needed.</Question>
        <Question question="What types of roles can you fill for a private security company?">We offer dispatchers, schedulers, HR coordinators, and call center agents—covering all back-office and communication needs so your field team can focus on protecting clients.</Question>
        <Question question="Can you provide 24/7 support? How flexible is your coverage?">Definitely. Our legal-trained VAs deliver top-tier support at a fraction of the cost of full-time in-house employees, helping you cut non-billable hours by up to 60%.</Question>
        <Question question="Will our clients know they’re speaking with a virtual assistant?">We integrate seamlessly with your systems and use your company’s scripts and branding so interactions feel like in-house staff—not outsourced support.</Question>
        <Question question="Do your virtual assistants work during holidays and weekends?">Yes. Our trained security VAs provide coverage on holidays and weekends at no extra cost, ensuring your dispatch, scheduling, and call support never misses a beat. This keeps your operations running smoothly 24/7, without unexpected overtime charges.</Question>
        <Question question="How quickly can we scale up or down?">You can add or remove VA support as contracts, events, or emergencies change. We handle recruitment and training, giving you on-demand scalability.</Question>
        <Question question="Is bilingual support available?">Yes. All of our dispatchers and call center agents are bilingual (English/Spanish), enabling you to serve a wider client base effectively.</Question>
        <Question question="What’s the ROI compared to hiring in-house staff?">Our clients typically reduce administrative costs by 30–50% while improving response times. You pay only for the coverage you need—no benefits, overtime fee, or recruitment costs.</Question>
      </FAQ>
    </>
  );
}
