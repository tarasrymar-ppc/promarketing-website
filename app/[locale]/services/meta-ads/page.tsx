import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MetaHero from "@/components/sections/meta-ads/MetaHero";
import MetaHow from "@/components/sections/meta-ads/MetaHow";
import MetaDeliverables from "@/components/sections/meta-ads/MetaDeliverables";
import MetaProcess from "@/components/sections/meta-ads/MetaProcess";
import MetaPricing from "@/components/sections/meta-ads/MetaPricing";
import MetaTimeline from "@/components/sections/meta-ads/MetaTimeline";
import MetaSpecialist from "@/components/sections/meta-ads/MetaSpecialist";
import MetaFAQ from "@/components/sections/meta-ads/MetaFAQ";
import MetaForm from "@/components/sections/meta-ads/MetaForm";
import Clients from "@/components/sections/Clients";

export const metadata: Metadata = {
  title: "Meta Ads — таргетована реклама Facebook та Instagram від 15 000 грн/міс | PRO Marketing#",
  description:
    "Таргетована реклама у Facebook та Instagram. Від 15 000 грн/міс, перші заявки в день запуску, без обов'язкового контракту. Ретаргетинг, Lookalike аудиторії, два майданчики в одному кабінеті.",
  alternates: {
    canonical: "https://promarketing-website.vercel.app/uk/services/meta-ads",
    languages: {
      uk: "https://promarketing-website.vercel.app/uk/services/meta-ads",
      en: "https://promarketing-website.vercel.app/en/services/meta-ads",
    },
  },
};

export default function MetaAdsPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-16 md:pt-[68px]">

        <MetaHero />
        <MetaHow />
        <MetaDeliverables />
        <MetaProcess />
        <MetaPricing />
        <MetaTimeline />
        <MetaSpecialist />
        <MetaFAQ />
        <MetaForm />
        <Clients />

      </main>
      <Footer />
    </>
  );
}
