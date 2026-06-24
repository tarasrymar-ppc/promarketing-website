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
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { isLocale, localizedAlternates } from "@/lib/seo";

const meta = {
  uk: {
    title: "Meta Ads — таргетована реклама Facebook та Instagram від 15 000 грн/міс | PRO Marketing#",
    description:
      "Таргетована реклама у Facebook та Instagram. Від 15 000 грн/міс, перші заявки в день запуску, без обов'язкового контракту. Ретаргетинг, Lookalike аудиторії, два майданчики в одному кабінеті.",
  },
  en: {
    title: "Meta Ads — targeted Facebook and Instagram advertising from UAH 15,000/mo | PRO Marketing#",
    description:
      "Targeted advertising on Facebook and Instagram. From UAH 15,000/mo, first leads on launch day, no mandatory contract. Retargeting, Lookalike audiences, two platforms in one account.",
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
    alternates: localizedAlternates(safeLocale, "/services/meta-ads"),
  };
}

export default async function MetaAdsPage({
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
          path: "/services/meta-ads",
          name: "Meta Ads",
          description: meta[safeLocale].description,
        })}
      />
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
