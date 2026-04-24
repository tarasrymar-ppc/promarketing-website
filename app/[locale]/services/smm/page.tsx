import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SMMHero from "@/components/sections/smm/SMMHero";
import SMMBundle from "@/components/sections/smm/SMMBundle";
import SMMDeliverables from "@/components/sections/smm/SMMDeliverables";
import SMMTeam from "@/components/sections/smm/SMMTeam";
import SMMProcess from "@/components/sections/smm/SMMProcess";
import SMMPricing from "@/components/sections/smm/SMMPricing";
import SMMFAQ from "@/components/sections/smm/SMMFAQ";
import SMMForm from "@/components/sections/smm/SMMForm";

export const metadata: Metadata = {
  title: "SMM — ведення соціальних мереж + Meta Ads від 35 000 грн/міс | PRO Marketing#",
  description:
    "Комплексний SMM пакет: ведення Instagram, Facebook, Google Business + таргетована реклама Meta Ads. Копірайтер, дизайнер і контент-мейкер під ваш бізнес. Від 35 000 грн/міс.",
  alternates: {
    canonical: "https://promarketing-website.vercel.app/uk/services/smm",
    languages: {
      uk: "https://promarketing-website.vercel.app/uk/services/smm",
      en: "https://promarketing-website.vercel.app/en/services/smm",
    },
  },
};

export default function SMMPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-16 md:pt-[68px]">

        <SMMHero />
        <SMMBundle />
        <SMMDeliverables />
        <SMMTeam />
        <SMMProcess />
        <SMMPricing />
        <SMMFAQ />
        <SMMForm />

      </main>
      <Footer />
    </>
  );
}
