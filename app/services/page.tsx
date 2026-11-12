"use client";

import BenefitsList from "@/components/benefits-list";
import BookACall from "@/components/book-a-call";
import { Highlight } from "@/components/highlight";
import Landing from "@/components/landing";
import { ListItem } from "@/components/list-item";
import { VAs } from "@/components/VAs";
import { useIsMobile } from "@/lib/useMobile";

export default function ServicesPage() {
  const isMobile = useIsMobile();
  return (
    <>
      <Landing
        title={
          <>
            Reduce Overload, Not Quality
            <br /> We give you Reliable Virtual <br />
            Assistants for Every Business
          </>
        }
        // subtitle={
        //   <>
        //     Delegate your daily tasks and focus on what drives growth.
        //     <br />
        //     Our professional Virtual Assistants handle the rest - from admin
        //     <br /> to customer support.
        //   </>
        // }
        videoUrl="https://s3.interactiveworkers.com/demo/ee6cfa06-b65b-4335-9ee7-dc54f214ba09.mp4"
        thumbnail="https://s3.interactiveworkers.com/landings/thumbnail_general%20landing.jpg"
      />
      <VAs
        header={<>Why Us?</>}
        VAs={[
          { name: "Full confidentiality of your data, end-to-end encrypted" },
          {
            name: "Bilingual (English and Spanish)",
            href: "/who-we-are#what-we-offer",
          },
          { name: "24/7 Adaptability" },
          { name: "Proactive Communication" },
          { name: "Hours covered onsite from our satellite offices" },
        ]}
        tags={["Find the right virtual assistant for every task."]}
        // tags={[
        //   "24/7 Adaptability",
        //   "Proactive Comunnication",
        //   "Bilingual English/Spanish",
        // ]}
        service="general"
      />
      <section
        id="positions"
        className="w-full md:p-10 px-4 flex flex-col items-center gap-5"
      >
        <h3 className="font-medium lg:text-6xl md:text-5xl text-4xl text-center capitalize">
          Stop doing it all by yourself
          <br className="max-md:hidden" /> We've got the{" "}
          <Highlight>right support</Highlight>
        </h3>
        <div className="w-full grid md:grid-cols-2 md:justify-items-center">
          <BenefitsList align={isMobile ? "start" : "end"}>
            <ListItem icon={"24-7"} viewBox="3 1 24 24" color="white">
              Dispatchers
            </ListItem>
            <ListItem
              icon={"scalable-support"}
              viewBox={"5 4 30 30"}
              color="white"
            >
              General Virtual Assistants
            </ListItem>
            <ListItem icon={"calendar"} viewBox={"3 2 25 25"} color="white">
              Schedulers
            </ListItem>
            <ListItem icon={"thumb-up"} viewBox={"7 10 40 40"} color="white">
              Customer Care
            </ListItem>
            <ListItem icon={"suitcase"} viewBox={"0 0 39 32"} color="white">
              Intake Specialists
            </ListItem>
          </BenefitsList>
          <BenefitsList>
            <ListItem icon={"tech-support"} viewBox={"4 2 20 20"} color="white">
              Social Media Managers
            </ListItem>
            <ListItem icon={"computer"} viewBox={"0 0 38 33"} color="white">
              Graphic Designers
            </ListItem>
            <ListItem icon={"web-status"} viewBox={"-5 0 80 50"} color="white">
              Web Developers
            </ListItem>
            <ListItem
              icon={"play"}
              viewBox={"4.5 4.5 15 15"}
              filled={false}
              color="white"
            >
              Video Editors
            </ListItem>
            <ListItem icon={"human-plus"} viewBox={"0 12 68 39"} color="white">
              Many more...
            </ListItem>
          </BenefitsList>
        </div>
      </section>
      <BookACall
        customMessage={
          <>
            Book a Free
            <br className="max-md:hidden" /> Discovery Call
          </>
        }
      >
        <Highlight color="#ffffff" bgColor="#191919">
          More Quality
        </Highlight>
        , Less Overload
        <br className="max-lg:hidden" /> Discover Reliable VAs
      </BookACall>
    </>
  );
}
