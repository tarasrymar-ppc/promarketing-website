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
import Clients from "@/components/sections/Clients";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { isLocale, localizedAlternates } from "@/lib/seo";

const meta = {
  uk: {
    title: "Google Ads — налаштування і ведення від 10 000 грн/міс | PRO Marketing#",
    description:
      "Налаштування та ведення Google Ads для e-commerce і сервісного бізнесу. Від 10 000 грн/міс, перші заявки за 1–2 тижні, без обов'язкового контракту. Акаунт — на ваше ім'я.",
  },
  en: {
    title: "Google Ads — setup and management from UAH 10,000/mo | PRO Marketing#",
    description:
      "Setup and management of Google Ads for e-commerce and service businesses. From UAH 10,000/mo, first leads in 1–2 weeks, no mandatory contract. The account stays in your name.",
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
    alternates: localizedAlternates(safeLocale, "/services/google-ads"),
  };
}

export default async function GoogleAdsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uk";

  return (
    <>
      <JsonLd
        data={serviceSchema({
          locale: safeLocale,
          path: "/services/google-ads",
          name: "Google Ads",
          description: meta[safeLocale].description,
        })}
      />
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
        <Clients />

      </main>
      <Footer />
    </>
  );
}
