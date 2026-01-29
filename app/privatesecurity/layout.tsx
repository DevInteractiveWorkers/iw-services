import BookACall from "@/components/book-a-call";
import { Highlight } from "@/components/highlight";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliable Virtual Assistants for Security Firms | InteractiveWorkers",
  description:
    "Dispatch, scheduling & client calls handled by trained Security VAs. Lower costs, faster response.",
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
        Start{" "}
        <Highlight color="#ffffff" bgColor="#191919">
          Saving
        </Highlight>{" "}
        Billable
        <br className="max-lg:hidden" />
        Hours{" "}
        <Highlight color="#ffffff" bgColor="#191919">
          Today{" "}
        </Highlight>
      </BookACall>
    </>
  );
}
