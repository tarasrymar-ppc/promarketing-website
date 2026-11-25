import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutGeography from "@/components/sections/about/AboutGeography";
import Clients from "@/components/sections/Clients";
import CTA from "@/components/sections/CTA";
import { getLocale } from "next-intl/server";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { isLocale, localizedAlternates } from "@/lib/seo";

const meta = {
  uk: {
    title: "Про нас — маркетингове агентство в Ужгороді",
    description:
      "Команда з 12 років досвіду в Ужгороді та Львові. 5–6 спеціалістів на кожному проєкті: реклама, SEO, SMM, розробка, дизайн і контент в одних руках.",
  },
  en: {
    title: "About us — marketing agency in Uzhhorod",
    description:
      "A team with 12 years of experience in Uzhhorod and Lviv. 5–6 specialists on every project: ads, SEO, SMM, development, design, and content in one place.",
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
    alternates: localizedAlternates(safeLocale, "/about"),
  };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const crumbLocale = isLocale(locale) ? locale : "uk";

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(crumbLocale, crumbLocale === "uk" ? "Про нас" : "About us", "/about")}
      />
      <Header />
      <main className="bg-white pt-16 md:pt-[68px]">
        <AboutHero />
        <AboutValues />
        <AboutGeography />
        <Clients />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
