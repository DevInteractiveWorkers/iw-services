import BookACall from "@/components/book-a-call";
import FAQ, { Question } from "@/components/faq";
import { Highlight } from "@/components/highlight";
import { ListItem } from "@/components/list-item";
import Image from "next/image";

export default function HowItWorksPage() {
  return (
    <>
      <section className="md:p-10 p-4 flex justify-center ">
        <div className="lg:w-9/12 h-min">
          <div className="grid md:grid-cols-2 h-min">
            <div>
              <h1
                className="font-medium lg:text-6xl md:text-5xl text-4xl"
                style={{ lineHeight: 1 }}
              >
                Your <Highlight>Time</Highlight> Should
                <br /> Go to Patiens,
                <br /> Not Paperwork
              </h1>
              <p className="py-4">
                Recruitment, compliance, billing, and patient
                <br className="max-md:hidden" /> coordination all compete for
                your limited
                <br className="max-md:hidden" /> resources. The result?
                Overworked staff, slower
                <br className="max-md:hidden" /> response times, and lost
                revenue opportunities.
              </p>
            </div>
            <Image
              className="rounded-2xl object-cover object-top-right h-min max-h-75"
              src={
                "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/696f7f2aa5a12ea16c760168.png"
              }
              height={1080}
              width={1080}
              alt="homecare-patient"
            />
          </div>
          <Image
            className="rounded-2xl object-cover object-bottom h-1/2 w-full mt-10"
            src={
              "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68d19540fefaa978564796a0.jpeg"
            }
            height={1080}
            width={1080}
            alt="homecare-patient"
          />
        </div>
      </section>
      <section
        id="benefits"
        className="w-full p-10 flex justify-center min-h-dvh"
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
          </ul>
          <Image
            className="rounded-2xl object-cover object-center h-1/3 max-h-75 w-full mt-10"
            src={
              "https://storage.googleapis.com/msgsndr/dtfCxBE6SEYaCMFTlgu5/media/68d1954004a3696eabf23233.jpeg"
            }
            height={1080}
            width={1080}
            alt="homecare-patient"
          />
        </div>
      </section>
      <FAQ>
        <Question question="What is a Home Care Virtual Assistant?">
          A Home Care Virtual Assistant (VA) is a trained, remote professional
          who supports your agency with tasks such as scheduling caregivers,
          coordinating services, managing intakes, billing support, and client
          communication—so your on-site team can focus on patient care.
        </Question>
        <Question question="Are your VAs experienced in the home care industry?">
          Yes. We recruit bilingual, industry-specific professionals who
          understand the unique workflows and compliance requirements of home
          care agencies.
        </Question>
        <Question question="Is patient information secure and HIPAA-compliant?">
          Absolutely. We have the resources, secure data systems, and advanced
          tech equipment to keep your client information private and compliant.
          Every VA is trained in confidentiality and HIPAA protocols, so you can
          trust that sensitive data stays protected.
        </Question>
        <Question question="Can a VA handle scheduling across multiple locations?">
          Yes. Our VAs are skilled at managing complex schedules for
          multi-location or multi-disciplinary teams, ensuring seamless
          communication between caregivers, clients, and administrators.
        </Question>
        <Question question="Do you offer bilingual or multilingual support?">
          We do. All of our VAs are bilingual (English/Spanish) and can support
          agencies that serve diverse client populations.
        </Question>
        <Question question="How quickly can we get started?">
          Most agencies are matched with a qualified VA within a few business
          days. After a brief onboarding call, your VA can begin handling tasks
          immediately.
        </Question>
        <Question question="How much does a Home Care VA cost compared to hiring in-house staff?">
          Hiring a VA through InteractiveWorkers is a cost-effective alternative
          to adding full-time staff. You get experienced support without the
          overhead of benefits, payroll taxes, or long hiring cycles.
        </Question>
      </FAQ>
      <BookACall>
        Ready to{" "}
        <Highlight color="#ffffff" bgColor="#191919">
          Simplify
        </Highlight>{" "}
        Your
        <br />
        <Highlight color="#ffffff" bgColor="#191919">
          Home Care
        </Highlight>{" "}
        Operations?
      </BookACall>
    </>
  );
}
