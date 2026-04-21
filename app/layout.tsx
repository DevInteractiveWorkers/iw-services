import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ParticlesBG } from "@/components/particles-bg";
import Footer from "@/components/footer";
import Header from "@/components/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Virtual Assistant Services for Businesses | Hire Reliable VAs | InteractiveWorkers",
  description:
    "Hire trained virtual assistants to handle admin, customer support, scheduling, and daily operations. Reduce costs, save time, and scale your business with InteractiveWorkers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className + " scroll-smooth overflow-x-hidden"}>
        <ParticlesBG id={"iw-particles"} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
