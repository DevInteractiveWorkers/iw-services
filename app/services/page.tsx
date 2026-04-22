import BookACall from "@/components/book-a-call";
import { Highlight } from "@/components/highlight";
import Landing from "@/components/landing";
import { VAs } from "@/components/VAs";

export default function ServicesPage() {
  return (
    <>
      <Landing
        videoUrl="https://assets.cdn.filesafe.space/dtfCxBE6SEYaCMFTlgu5/media/69e9186ba1636a6c65402e79.mp4"
        title={
          <>
            Reduce Overload, Not Quality
            <br /> We give you Reliable Virtual <br />
            Assistants for Every Business
          </>
        }
        subtitle={
          <>
            Delegate your daily tasks and focus on what drives growth.
            <br />
            Our professional Virtual Assistants handle the rest - from admin
            <br /> to customer support.
          </>
        }
      />
      <VAs
        header={<>Who We Are & Why It Matters</>}
        VAs={[
          { name: "100% Trained and vetted professionals" },
          {
            name: "English and Bilingual (Spanish) Support options",
            href: "/who-we-are#what-we-offer",
          },
        ]}
        tags={[
          "24/7 Adaptability",
          "Proactive Comunnication",
          "Bilingual English/Spanish",
        ]}
        service="general"
      />
      <BookACall
        customMessage={
          <>
            Book a Free
            <br className="max-md:hidden" /> Strategy Call
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
