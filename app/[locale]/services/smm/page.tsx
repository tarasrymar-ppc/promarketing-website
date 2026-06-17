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
import Clients from "@/components/sections/Clients";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { isLocale, localizedAlternates } from "@/lib/seo";

const title = "SMM — ведення соціальних мереж + Meta Ads від 35 000 грн/міс | PRO Marketing#";
const description =
  "Комплексний SMM пакет: ведення Instagram, Facebook, Google Business + таргетована реклама Meta Ads. Копірайтер, дизайнер і контент-мейкер під ваш бізнес. Від 35 000 грн/міс.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uk";

  return {
    title,
    description,
    alternates: localizedAlternates(safeLocale, "/services/smm"),
  };
}

export default async function SMMPage({
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
          path: "/services/smm",
          name: "SMM",
          description,
        })}
      />
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
        <Clients />

      </main>
      <Footer />
    </>
  );
}
