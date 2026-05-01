import BenefitsList from "@/components/benefits-list";
import BookACall from "@/components/book-a-call";
import Carousel from "@/components/carousel";
import { Highlight } from "@/components/highlight";
import HowItWorks from "@/components/how-it-works";
import { ListItem } from "@/components/list-item";
import StepCard from "@/components/services/step-cards";
import WhatWeOfferCard from "@/components/services/what-we-offer-card";
import WhyUsCard from "@/components/services/why-us-card";
import { VAItem, VAs } from "@/components/VAs";
import Image from "next/image";

export default function WhoWeArePage() {
  return (
    <>
      <section className="md:p-10 p-4 flex justify-center md:max-h-dvh overflow-hidden">
        <HowItWorks
          title={
            <>
              Who <Highlight>We Are</Highlight>
            </>
          }
          paragraph={
            <>
              At <strong>InteractiveWorkers</strong>, we connect business
              <br className="max-md:hidden" />
              with highly skilled Virtual Assistants (VAs)
              <br className="max-md:hidden" />
              trained to manage administrative, operational,
              <br className="max-md:hidden" />
              and client-facing tasks.
              <br />
              <br />
              Our VAs adapt to your workflow — integrating
              <br className="max-md:hidden" />
              seamlessly into your existing systems and
              <br className="max-md:hidden" />
              helping you stay focused on growth, not
              <br className="max-md:hidden" />
              paperwork.
            </>
          }
          imageSrc={[
            "https://assets.cdn.filesafe.space/dtfCxBE6SEYaCMFTlgu5/media/69f4c29107cf68d3e59467ca.webp",
            "https://assets.cdn.filesafe.space/dtfCxBE6SEYaCMFTlgu5/media/69f4c2910cd613c4f18faa71.webp",
          ]}
          alt="services"
          reverse
          href="/"
        />
      </section>
      <section
        id="key-highlights"
        className="w-full md:px-10 px-4 flex justify-around"
      >
        <VAs
          header={
            <span className="font-medium lg:text-6xl md:text-5xl text-4xl">
              Key <Highlight>Highlights</Highlight>
            </span>
          }
          VAs={[
            { name: "100% Trained and vetted proffesionals" },
            { name: "Bilingual (English and Spanish)" },
            { name: "Secure, reliable, and fully remote integrations" },
            { name: "Scalable Support - from part-time to full-time VAs" },
          ]}
        ></VAs>
      </section>
      <section
        id="what-we-offer"
        className="w-full md:p-10 p-4 flex flex-col justify-around items-center"
      >
        <div className={`lg:w-10/12 md:w-11/12 flex flex-col`}>
          <h3 className="font-medium lg:text-6xl md:text-5xl text-4xl">
            What We Offer
          </h3>
          <p className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
            Our <Highlight>Virtual Assistants</Highlight> Handle the Details,
            <br className="max-xl:hidden" /> so - You Don't Have To
          </p>
        </div>
        <div className="lg:w-10/12 md:w-11/12 grid md:grid-cols-2 grid-cols-1 md:gap-10 md:py-10 py-4 max-md:px-2 gap-4 md:h-[50svh] items-stretch">
          <div className="relative h-full w-full">
            <Image
              className="rounded-2xl object-cover object-center"
              src="https://assets.cdn.filesafe.space/dtfCxBE6SEYaCMFTlgu5/media/69f4c291bbacf0a0560b594a.webp"
              alt={"what-we-offer"}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <Carousel>
            <WhatWeOfferCard
              icon="folder"
              viewBox={"0 0 37 25"}
              title="Administrative Support"
              description="Inbox management, calendar coordination, data entry, and report preparation - our VAs keep your operations running smoothly behind the scenes."
              src="https://assets.cdn.filesafe.space/dtfCxBE6SEYaCMFTlgu5/media/69f4c2910cd613c4f18faa76.webp"
            />
            <WhatWeOfferCard
              icon="phone"
              viewBox={"-3 -2 30 43"}
              title="Customer Service & Communication"
              description="Professional call handling, client follow-ups, and bilingual support to ensure your customers always feel heard and cared for."
              src="https://assets.cdn.filesafe.space/dtfCxBE6SEYaCMFTlgu5/media/69f11576eecc3af70a04a226.webp"
            />
            <WhatWeOfferCard
              icon="calendar"
              viewBox={"0 0 35 29"}
              title="Scheduling & Coordination"
              description="Appointment setting, meeting logistics, and workflow organization - because your time should go where it matters most."
              src="https://assets.cdn.filesafe.space/dtfCxBE6SEYaCMFTlgu5/media/69f4c29107cf68d3e59467c9.webp"
            />
            <WhatWeOfferCard
              icon="laptop"
              viewBox={"0 0 43 26"}
              title="Sales & Lead Management"
              description="CRM updates, lead tracking, and pipeline coordination that help your team convert faster and stay organized."
              src="https://assets.cdn.filesafe.space/dtfCxBE6SEYaCMFTlgu5/media/69f4c2910cd613c4f18faa75.webp"
            />
            <WhatWeOfferCard
              icon="chat"
              viewBox={"0 0 39 26"}
              title="Bilingual & Translation Support"
              description="Break barriers with English/Spanish bilingual VAs trained to communicate effectively with your clients and partners."
              src="https://assets.cdn.filesafe.space/dtfCxBE6SEYaCMFTlgu5/media/69f4c2918831cb2c6c7eac99.webp"
            />
          </Carousel>
        </div>
      </section>
      <section
        id="benefits"
        className="w-full md:p-10 p-4 flex flex-col justify-around items-center"
      >
        <div className="lg:w-10/12 md:w-11/12 grid grid-cols-1 md:gap-10 max-md:px-2 gap-4">
          <h4 className="font-medium lg:text-6xl md:text-5xl text-4xl">
            Why Businesses Choose
            <br className="max-md:hidden" /> InteractiveWorkers
          </h4>
          <p className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
            We help you <Highlight>reclaim time, reduce costs</Highlight>,
            <br className="max-md:hidden" /> and <Highlight>simplify</Highlight>{" "}
            operations - all with a human touch.
            <br className="max-xl:hidden" />
          </p>
          <div className="w-full flex items-center justify-center">
            <div className="group grid md:grid-cols-2 grid-cols-1 xl:w-3/5 md:w-9/12 gap-5">
              <WhyUsCard
                icon="suitcase"
                viewBox={"0 0 39 32"}
                title={"Cost-Efficient Growth:"}
                description={"Save up to 70% compared to in-house hires."}
                className="bg-[#2B2B2B] rounded-2xl"
              />
              <WhyUsCard
                icon="clock"
                viewBox={"0 0 35 40"}
                title={"More Time, Less Stress:"}
                description={"Focus on strategy, not admin."}
                className="bg-[#2B2B2B] rounded-2xl"
              />
              <WhyUsCard
                icon="human-plus"
                viewBox={"0 12 68 39"}
                title={"Human Connection:"}
                description={
                  "Real professionals, not bots - trained to represent your brand."
                }
                className="bg-[#2B2B2B] rounded-2xl"
              />
              <WhyUsCard
                icon="scalable-support"
                viewBox={"0 2 41 36"}
                title={"Scalable & Flexible:"}
                description={"Add or adjust support as your business evolves."}
                className="bg-[#2B2B2B] rounded-2xl"
              />
              <WhyUsCard
                icon="computer"
                viewBox={"0 0 38 33"}
                title={"Reliable & Secure:"}
                description={"Trained in confidentiality and data compliance."}
                className="bg-[#2B2B2B] rounded-2xl md:translate-x-1/2"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="getting-started"
        className="w-full md:p-10 p-4 flex flex-col justify-around items-center"
      >
        <div className="lg:w-10/12 md:w-11/12 grid grid-cols-1 md:gap-10 md:py-10 py-4 max-md:px-2 gap-4 justify-items-center">
          <h5 className="font-medium lg:text-6xl md:text-5xl text-4xl text-center">
            Getting Started is <Highlight>Simple</Highlight>
          </h5>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 md:w-10/12">
            <StepCard step={1}>
              Tell us what you need - fill out a quick discovery form.
            </StepCard>
            <StepCard step={2}>
              We match you with trained VAs that fit your goals and workflow.
            </StepCard>
            <StepCard step={3}>Get started in days - not weeks.</StepCard>
          </div>
          <h6 className="font-medium lg:text-6xl md:text-5xl text-4xl text-center">
            Let's Build Your Dream
            <br className="max-md:hidden" /> Support Team
          </h6>
          <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center">
            Our Virtual Assistants help your
            <br className="max-md:hidden" /> business grow faster - with less
            stress
            <br className="max-md:hidden" /> and more results.
          </p>
          <BookACall
            customMessage={
              <>
                Book Your
                <br className="max-md:hidden" /> Discovery Call Today
              </>
            }
          />
        </div>
      </section>
    </>
  );
}
