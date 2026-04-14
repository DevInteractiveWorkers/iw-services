import BookACall from "@/components/book-a-call";
import { Highlight } from "@/components/highlight";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cost-Effective Home Care Virtual Assistants | InteractiveWorkers",
  description:
    "Streamline scheduling, billing & care coordination with trained Home Care VAs. Cut costs, boost efficiency & improve patient service today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <BookACall>
        <Highlight color="#ffffff" bgColor="#191919">
          More Quality
        </Highlight>
        , Less Overload
        <br className="max-lg:hidden" /> Discover Reliable VAs
      </BookACall>
    </>
  );
}
