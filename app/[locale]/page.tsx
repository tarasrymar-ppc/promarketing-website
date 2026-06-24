import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";
import Partners from "@/components/sections/Partners";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import { isLocale, localizedAlternates } from "@/lib/seo";

const meta = {
  uk: {
    title: "Маркетингове агентство в Ужгороді — PRO Marketing#",
    description:
      "Маркетингове агентство в Ужгороді: налаштування реклами Google Ads і Meta, SEO, SMM, розробка сайтів та брендинг. Більше заявок і продажів від однієї команди.",
  },
  en: {
    title: "Marketing Agency in Uzhhorod — PRO Marketing#",
    description:
      "Marketing agency in Uzhhorod, Ukraine: Google Ads & Meta advertising, SEO, SMM, web development and branding. More leads and sales from one in-house team.",
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
    title: { absolute: meta[safeLocale].title },
    description: meta[safeLocale].description,
    alternates: localizedAlternates(safeLocale),
  };
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Hero />
        <Problem />
        <div className="flex flex-col gap-[10px] pt-[10px] pb-[10px]">
          <Solution />
          <Services />
          <Clients />
          <Process />
          <Partners />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
