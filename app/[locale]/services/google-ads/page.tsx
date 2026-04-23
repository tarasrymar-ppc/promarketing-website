import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GAHeroContent from "@/components/sections/google-ads/GAHeroContent";
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

        {/* Editorial H1 — same style as FAQ & Contact */}
        <div className="border-b border-[#E0E0E0]">
          <div className="max-w-6xl mx-auto px-6">
            <h1
              className="font-semibold tracking-tighter text-[#0D0D0D] leading-none py-6 md:py-8"
              style={{ fontSize: "clamp(56px, 14vw, 180px)" }}
            >
              Google Ads<span className="text-[#E5202E]">.</span>
            </h1>
          </div>
        </div>

        <GAHeroContent />
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
