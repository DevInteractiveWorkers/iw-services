import BenefitsList from "@/components/benefits-list";
import { FAQRenderer } from "@/components/faq-renderer";
import { Highlight } from "@/components/highlight";
import HowItWorks from "@/components/how-it-works";
import { ListItem } from "@/components/list-item";
import { VAItem } from "@/components/VAs";

export default function WhoWeArePage() {
  return (
    <>
      <section className="md:p-10 p-4 flex justify-center max-h-dvh overflow-hidden">
        <HowItWorks
          title={
            <>
              Who
              <Highlight>We Are</Highlight>
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
            "https://assets.cdn.filesafe.space/dtfCxBE6SEYaCMFTlgu5/media/69dfcb8327c94c7e4e68fc60.png",
            "https://assets.cdn.filesafe.space/dtfCxBE6SEYaCMFTlgu5/media/69dfcb8306cfeed5501ea4b8.png",
          ]}
          alt="private-security-va"
          reverse
        />
      </section>
      <section id="highlights" className="w-full px-10 flex justify-around">
        <BenefitsList
          title={
            <>
              Key <Highlight>Highlights:</Highlight>
            </>
          }
        >
          <ListItem icon="check" filled size={24}>
            <VAItem name={"100% Trained and vetted proffesionals"} />
          </ListItem>
          <ListItem icon="check" filled size={24}>
            <VAItem name={"English and bilingual (Spanish) support options"} />
          </ListItem>
          <ListItem icon="check" filled size={24}>
            <VAItem name={"Secure, reliable, and fully remote integrations"} />
          </ListItem>
          <ListItem icon="check" filled size={24}>
            <VAItem
              name={"Scalable Support - from part-time to full-time VAs"}
            />
          </ListItem>
        </BenefitsList>
      </section>
      <section id="what-we-offer" className="w-full px-10 flex justify-around">
        <div className={`lg:w-9/12 md:w-11/12 flex flex-col`}>
          <h3 className="font-medium lg:text-6xl md:text-5xl text-4xl">
            What We Offer
          </h3>
          <p className="lg:text-5xl md:text-4xl text-3xl">
            Our <Highlight>Virtual Assistants</Highlight> Handle the Details,
            <br /> so - You Don't Have To
          </p>
        </div>
      </section>
      <FAQRenderer section="privatesecurity" />
    </>
  );
}
