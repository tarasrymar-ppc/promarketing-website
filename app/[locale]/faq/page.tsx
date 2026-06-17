import { type Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Header from "@/components/layout/Header";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { isLocale, localizedAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uk";

  return {
    title: "FAQ — Питання та відповіді | PRO Marketing#",
    description:
      "Відповіді на найпоширеніші запитання про послуги PRO Marketing#: ціни, терміни, звітність та процес роботи.",
    alternates: localizedAlternates(safeLocale, "/faq"),
  };
}

export default async function FAQPage() {
  const t = await getTranslations("faq");
  const items = t.raw("items") as { question: string; answer: string }[];

  return (
    <>
      <JsonLd data={faqSchema(items)} />
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
