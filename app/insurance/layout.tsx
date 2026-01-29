import BookACall from "@/components/book-a-call";
import { Highlight } from "@/components/highlight";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual Assistants for Insurance Agencies | InteractiveWorkers",
  description:
    "Process claims, manage calls & client data with trained Insurance VAs. Save time & money today.",
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
            Book a Free
            <br className="max-lg:hidden" />
            Strategy Call
          </>
        }
      >
        <Highlight color="#ffffff" bgColor="#191919">
          Fast
        </Highlight>{" "}
        Response, Lower
        <br className="max-lg:hidden" />
        Costs-
        <Highlight color="#ffffff" bgColor="#191919">
          Starting
        </Highlight>{" "}
        Today
      </BookACall>
    </>
  );
}
