import { type Metadata } from "next";
import Header from "@/components/layout/Header";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "FAQ — Питання та відповіді | PRO Marketing#",
  description:
    "Відповіді на найпоширеніші запитання про послуги PRO Marketing#: ціни, терміни, звітність та процес роботи.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[68px]">

        {/* Editorial hero title */}
        <div className="border-b border-[#E0E0E0]">
          <div className="max-w-6xl mx-auto px-6">
            <h1
              className="font-semibold tracking-tighter text-[#0D0D0D] leading-none py-6 md:py-8"
              style={{ fontSize: "clamp(56px, 14vw, 180px)" }}
            >
              FAQ<span className="text-[#E5202E]">.</span>
            </h1>
          </div>
        </div>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
