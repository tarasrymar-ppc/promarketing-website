import { type Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTitle from "@/components/common/PageTitle";
import { CardGrid } from "@/components/sections/industry/IndustrySections";
import JsonLd from "@/components/seo/JsonLd";
import { INDUSTRY_LABELS, INDUSTRY_PAGES, INDUSTRY_SLUGS } from "@/lib/industryPages";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { isLocale, localizedAlternates } from "@/lib/seo";
import { setRequestLocale } from "next-intl/server";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uk";
  const labels = INDUSTRY_LABELS[safeLocale];
  return {
    title: labels.indexMetaTitle,
    description: labels.indexMetaDescription,
    alternates: localizedAlternates(safeLocale, "/industries"),
  };
}

export default async function IndustriesPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const safeLocale = isLocale(locale) ? locale : "uk";
  const labels = INDUSTRY_LABELS[safeLocale];
  const items = INDUSTRY_SLUGS.map((slug) => ({
    href: `/industries/${slug}`,
    title: INDUSTRY_PAGES[slug][safeLocale].card.title,
    text: INDUSTRY_PAGES[slug][safeLocale].card.text,
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(safeLocale, labels.indexName, "/industries")} />
      <JsonLd data={itemListSchema(safeLocale, items.map((i) => ({ name: i.title, path: i.href })))} />
      <Header />
      <main className="bg-white pt-16 md:pt-[68px]">
        <div className="border-b border-[#E0E0E0]">
          <div className="max-w-6xl mx-auto px-6">
            <PageTitle title={labels.indexName} keyword={labels.indexKeyword} />
          </div>
        </div>
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-2xl md:text-3xl font-medium text-[#0D0D0D] leading-snug max-w-3xl mb-12">
              {labels.indexLead}
            </p>
            <CardGrid items={items} more={labels.more} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
