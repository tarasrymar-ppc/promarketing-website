import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutGeography from "@/components/sections/about/AboutGeography";
import Clients from "@/components/sections/Clients";
import CTA from "@/components/sections/CTA";
import { isLocale, localizedAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uk";

  return {
    title: "Про нас — PRO Marketing#",
    description:
      "Команда з 12 років досвіду в Ужгороді та Львові. 5–6 спеціалістів на кожному проєкті: реклама, SEO, SMM, розробка, дизайн і контент в одних руках.",
    alternates: localizedAlternates(safeLocale, "/about"),
  };
}

export default function AboutPage() {
  return (
    <>
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
