import Landing from "@/components/landing";
import { VAs } from "@/components/VAs";

export default function ServicesPage() {
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
          { name: "English and Bilingual (Spansih) Support options" },
        ]}
        tags={[
          "24/7 Adaptability",
          "Proactive Comunnication",
          "Bilingual English/Spanish",
        ]}
        service="general"
      />
    </>
  );
}
