import BookACall from "@/components/book-a-call";
import { Highlight } from "@/components/highlight";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Virtual Assistants for Law Firms | InteractiveWorkers",
  description:
    "Cut admin costs & boost efficiency with trained Legal VAs. Case prep, client calls & scheduling done for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}

      <BookACall
        customMessage={
          <>
            Book a <br className="max-lg:hidden" /> Consultation
          </>
        }
      >
        Start{" "}
        <Highlight color="#ffffff" bgColor="#191919">
          Saving
        </Highlight>{" "}
        Billable
        <br className="max-lg:hidden" />{" "}
        <Highlight color="#ffffff" bgColor="#191919">
          Hours
        </Highlight>{" "}
        Today
      </BookACall>
    </>
  );
}
