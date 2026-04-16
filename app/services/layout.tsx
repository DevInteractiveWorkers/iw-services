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
  return <>{children}</>;
}
