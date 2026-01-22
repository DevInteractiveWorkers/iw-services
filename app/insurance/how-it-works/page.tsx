import BookACall from "@/components/book-a-call";
import FAQ, { Question } from "@/components/faq";
import { Highlight } from "@/components/highlight";
import { ListItem } from "@/components/list-item";
import Image from "next/image";
import "../colors.css";
import HowItWorks from "@/components/how-it-works";

export default function HowItWorksPage() {
  return (
    <>
      <section className="md:p-10 p-4 flex justify-center max-h-dvh overflow-hidden">
        <HowItWorks
          title={
            <>
              When <Highlight>Policyholders</Highlight> <br />
              Wait, Satisfaction
              <br />
              Drops
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
        <div className="lg:min-w-9/12 h-min flex flex-col gap-5 md:py-10 py-4 min-h-dvh justify-around">
          <h2 className="font-medium lg:text-6xl md:text-5xl text-4xl">
            Here's How InteractiveWorkers Scales
            <br />
            Your <Highlight>Insurance Companies</Highlight> Operations:
          </h2>
          <ul className="grid grid-cols-1 gap-5 md:w-9/12">
            <ListItem icon="check-page">
              On-site Virtual Assistance
              <br /> (Full commitment and confidentiality)
            </ListItem>
            <ListItem icon="direct-access">
              Direct Access to Efficiency
              <br /> Trackers and CCTV Footage
            </ListItem>
            <ListItem icon="tech-support">Included Tech Support</ListItem>
            <ListItem icon="serve-speaking">
              Reduce Service Times & <br />
              Backlogs
            </ListItem>
          </ul>
          <Image
            className="rounded-2xl object-cover object-center h-1/3 max-h-75 w-full"
            src={
              "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68d58e7b4cbd20b0c007088f.png"
            }
            height={1080}
            width={1080}
            alt="homecare-patient"
          />
        </div>
      </section>
      <FAQ>
        <Question question="How can InteractiveWorkers’ Remote workers help my insurance company manage claims more efficiently?">
          Our Remote workers handle claim intake, documentation, follow-ups, and
          customer communication, helping you reduce backlogs and process claims
          faster without hiring additional staff.
        </Question>
        <Question question="Are your virtual assistants familiar with insurance compliance standards?">
          Yes. All our Remote workers are familiar with insurance industry
          protocols and follow strict data security and confidentiality policies
          to protect sensitive client information.
        </Question>
        <Question question="Do you offer bilingual support for policyholders?">
          Absolutely. We provide English- and Spanish-speaking Remote workers so
          you can serve a wider client base seamlessly without language
          barriers.
        </Question>
        <Question question="Can your Remote workers assist with customer service as well as claims?">
          Yes. In addition to claims coordination, our Remote workers handle
          inbound calls, policyholder inquiries, and follow-ups, freeing your
          licensed staff to focus on higher-value tasks.
        </Question>
        <Question question="How do you ensure quality and accuracy in claims support?">
          We use real-time productivity and reporting tools to track tasks,
          maintain accuracy, and keep you informed—without micromanaging.
        </Question>
        <Question question="How does working with InteractiveWorkers save my insurance company money?">
          You reduce recruitment, training, and overhead expenses while gaining
          skilled, ready-to-work professionals. Many clients cut admin costs by
          40–60%.
        </Question>
      </FAQ>
    </>
  );
}
