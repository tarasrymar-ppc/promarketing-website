import { type Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import Header from "@/components/layout/Header";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { isLocale, localizedAlternates } from "@/lib/seo";
import PageTitle from "@/components/common/PageTitle";

const meta = {
  uk: {
    title: "FAQ — питання та відповіді",
    description:
      "Відповіді на найпоширеніші запитання про послуги PRO Marketing#: ціни, терміни, звітність та процес роботи.",
  },
  en: {
    title: "FAQ — questions and answers",
    description:
      "Answers to the most frequently asked questions about PRO Marketing# services: pricing, timelines, reporting, and how we work.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uk";

  return {
    title: meta[safeLocale].title,
    description: meta[safeLocale].description,
    alternates: localizedAlternates(safeLocale, "/faq"),
  };
}

export default async function FAQPage() {
  const t = await getTranslations("faq");
  const items = t.raw("items") as { question: string; answer: string }[];

  const locale = await getLocale();
  const crumbLocale = isLocale(locale) ? locale : "uk";

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(crumbLocale, crumbLocale === "uk" ? "FAQ" : "FAQ", "/faq")}
      />
      <JsonLd data={faqSchema(items)} />
      <Header />
      <main className="pt-16 md:pt-[68px]">

        {/* Editorial hero title */}
        <div className="border-b border-[#E0E0E0]">
          <div className="max-w-6xl mx-auto px-6">
            <PageTitle title="FAQ" keyword={t("h1")} />
          </div>
        </div>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
