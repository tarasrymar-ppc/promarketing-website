import { type Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceFAQ from "@/components/sections/service/ServiceFAQ";
import ServiceForm from "@/components/sections/service/ServiceForm";
import {
  ServiceDeliverables,
  ServiceHero,
  ServiceProcess,
  ServiceTimeline,
} from "@/components/sections/service/ServiceSections";
import {
  IndustryChallenges,
  RelatedLinks,
} from "@/components/sections/industry/IndustrySections";
import JsonLd from "@/components/seo/JsonLd";
import { BLOG_POSTS, SERVICE_LINK_NAMES } from "@/lib/blogPosts";
import { LVIV } from "@/lib/cityPages";
import { INDUSTRY_LABELS, INDUSTRY_PAGES } from "@/lib/industryPages";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { isLocale, localizedAlternates } from "@/lib/seo";
import { SERVICE_PAGE_LABELS } from "@/lib/servicePages";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uk";
  const page = LVIV[safeLocale];
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: localizedAlternates(safeLocale, LVIV.path),
  };
}

export default async function LvivPage({ params }: { params: Params }) {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uk";
  const page = LVIV[safeLocale];
  const labels = SERVICE_PAGE_LABELS[safeLocale];
  const industryLabels = INDUSTRY_LABELS[safeLocale];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          locale: safeLocale,
          path: LVIV.path,
          name: page.card.title,
          description: page.metaDescription,
          areaServed: LVIV.areaServed[safeLocale],
        })}
      />
      <JsonLd data={faqSchema(page.faq)} />
      <JsonLd data={breadcrumbSchema(safeLocale, page.name, LVIV.path)} />
      <Header />
      <main className="bg-white pt-16 md:pt-[68px]">
        <ServiceHero page={page} labels={labels} />
        <IndustryChallenges page={page} eyebrow={page.name} />
        <ServiceDeliverables page={page} labels={labels} />
        <ServiceProcess page={page} labels={labels} />
        <ServiceTimeline page={page} />
        <ServiceFAQ heading={labels.faqHeading} items={page.faq} />
        <RelatedLinks
          heading={industryLabels.relatedHeading}
          groups={[
            {
              label: industryLabels.relatedServices,
              links: LVIV.relatedServices
                .filter((href) => SERVICE_LINK_NAMES[href])
                .map((href) => ({ href, title: SERVICE_LINK_NAMES[href][safeLocale] })),
            },
            {
              label: industryLabels.indexName,
              links: LVIV.relatedIndustries
                .filter((slug) => INDUSTRY_PAGES[slug])
                .map((slug) => ({
                  href: `/industries/${slug}`,
                  title: INDUSTRY_PAGES[slug][safeLocale].card.title,
                })),
            },
            {
              label: industryLabels.relatedPosts,
              links: LVIV.relatedPosts
                .filter((slug) => BLOG_POSTS[slug])
                .map((slug) => ({
                  href: `/blog/${slug}`,
                  title: BLOG_POSTS[slug][safeLocale].title,
                })),
            },
          ]}
        />
        <ServiceForm source="Lviv city page" sub={page.formSub} />
      </main>
      <Footer />
    </>
  );
}
