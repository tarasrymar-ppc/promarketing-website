import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GAHero from "@/components/sections/google-ads/GAHero";
import GADeliverables from "@/components/sections/google-ads/GADeliverables";
import GAProcess from "@/components/sections/google-ads/GAProcess";
import GAPricing from "@/components/sections/google-ads/GAPricing";
import GATimeline from "@/components/sections/google-ads/GATimeline";
import GASpecialist from "@/components/sections/google-ads/GASpecialist";
import GAFAQ from "@/components/sections/google-ads/GAFAQ";
import GAForm from "@/components/sections/google-ads/GAForm";

export const metadata: Metadata = {
  title: "Google Ads — налаштування і ведення від 10 000 грн/міс | PRO Marketing#",
  description:
    "Налаштування та ведення Google Ads для e-commerce і сервісного бізнесу. Від 10 000 грн/міс, перші заявки за 1–2 тижні, без обов'язкового контракту. Акаунт — на ваше ім'я.",
  alternates: {
    canonical: "https://promarketing-website.vercel.app/uk/services/google-ads",
    languages: {
      uk: "https://promarketing-website.vercel.app/uk/services/google-ads",
      en: "https://promarketing-website.vercel.app/en/services/google-ads",
    },
  },
};

export default function GoogleAdsPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-16 md:pt-[68px]">

        <GAHero />
        <GADeliverables />
        <GAProcess />
        <GAPricing />
        <GATimeline />
        <GASpecialist />
        <GAFAQ />
        <GAForm />

      </main>
      <Footer />
    </>
  );
}
