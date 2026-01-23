import FAQ, { Question } from "@/components/faq";
import { Highlight } from "@/components/highlight";
import { ListItem } from "@/components/list-item";
import Image from "next/image";
import "../colors.css";

export default function HowItWorksPage() {
  return (
    <>
      <section className="md:p-10 p-4 flex justify-center max-h-dvh overflow-hidden">
        <div className="lg:w-9/12">
          <div className="grid md:grid-cols-2 h-min">
            <div>
              <h1
                className="font-medium lg:text-6xl md:text-5xl text-4xl"
                style={{ lineHeight: 1 }}
              >
                FREE Your
                <br /> <Highlight>Attorneys</Highlight> From <br />
                Low-Value Tasks
              </h1>
              <p className="py-4">
                Client intake, follow-ups, scheduling, translations
                <br className="max-md:hidden" /> your lawyers shouldn’t be doing
                this. Our
                <br className="max-md:hidden" /> administrative VAs handle it
                all under strict
                <br className="max-md:hidden" /> confidentiality, so you can
                maximize profitability.
              </p>
            </div>
            <Image
              className="rounded-2xl object-cover object-top-right h-min max-h-75"
              src={
                "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68d55ed814d8cf6fe5867f05.png"
              }
              height={1080}
              width={1080}
              alt="homecare-patient"
            />
          </div>
          <Image
            className="rounded-2xl object-cover object-top max-h-1/2 w-full mt-10"
            src={
              "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68d55ed88da2ad6a4bdcc943.png"
            }
            height={1080}
            width={1080}
            alt="homecare-patient"
          />
        </div>
      </section>
      <section
        id="benefits"
        className="w-full px-10 flex justify-center min-h-dvh"
      >
        <div className="lg:min-w-9/12 h-min">
          <h2 className="font-medium lg:text-6xl md:text-5xl text-4xl">
            Here's How InteractiveWorkers
            <br />
            Makes <Highlight>Home Care</Highlight> Easier:
          </h2>
          <ul className="grid grid-cols-1 gap-5 w-9/12">
            <ListItem icon="check-page">
              On-site Virtual Assistance
              <br /> (Full commitment and confidentiality)
            </ListItem>
            <ListItem icon="direct-access">
              Direct Access to Efficiency
              <br /> Trackers and CCTV Footage
            </ListItem>
            <ListItem icon="tech-support">
              Included Tech Support and HR Crew
            </ListItem>
            <ListItem icon="serve-speaking">
              Serve Spanish-Speaking
              <br /> Policyholders Seamsleesly
            </ListItem>
            <ListItem icon="scaling">Cut Hiring & Training Costs</ListItem>
            <ListItem icon="24-7">24/7 Adaptabilty</ListItem>
          </ul>
          <Image
            className="rounded-2xl object-cover object-center h-1/3 max-h-75 w-full mt-10"
            src={
              "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68d55ed871c31ec04982e7d5.png"
            }
            height={1080}
            width={1080}
            alt="homecare-patient"
          />
        </div>
      </section>
      <FAQ>
        <Question question="Are your virtual assistants trained for legal tasks?">
          Absolutely. Our legal VAs are experienced in law firm operations such
          as client intake, appointment scheduling, translation, call handling,
          and administrative support. They’re trained to understand legal
          terminology and workflows, so your attorneys spend less time
          explaining and more time practicing law.
        </Question>
        <Question question="Can your VAs work with case management and legal software?">
          Yes. Our assistants are proficient in common legal platforms (Clio,
          MyCase, PracticePanther, etc.) and can quickly adapt to your firm’s
          specific tools to ensure seamless integration into your existing
          processes.
        </Question>
        <Question question="Are your VAs bilingual?">
          Yes. We specialize in bilingual English-Spanish professionals so your
          firm can expand its reach, improve client service, and capture more
          opportunities without language barriers.
        </Question>
        <Question question="Can your VAs support my firm after hours or across time zones?">
          Absolutely. Our VAs are adaptable to your firm’s schedule — including
          evenings, weekends, or multiple time zones. This 24/7 availability
          means your clients never feel neglected, and your team can rest
          knowing support continues around the clock.
        </Question>
        <Question question="Is hiring a VA cost-effective compared to in-house staff?">
          Definitely. Our legal-trained VAs deliver top-tier support at a
          fraction of the cost of full-time in-house employees, helping you cut
          non-billable hours by up to 60%.
        </Question>
        <Question question="Can we scale the number of VAs as our firm grows?">
          Yes. InteractiveWorkers is designed to scale with your firm. You can
          add or adjust support as your caseload changes without worrying about
          extra overhead or long-term contracts.
        </Question>
        <Question question="How do we get started?">
          Simply schedule a free consultation or request a customized VA
          staffing plan. We’ll evaluate your firm’s needs, recommend the right
          VA roles, and handle onboarding so you can start delegating securely
          and confidently.
        </Question>
      </FAQ>
    </>
  );
}
