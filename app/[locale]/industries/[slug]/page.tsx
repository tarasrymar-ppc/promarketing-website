import { type Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Clients from "@/components/sections/Clients";
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
import { INDUSTRY_LABELS, INDUSTRY_PAGES } from "@/lib/industryPages";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { isLocale, localizedAlternates } from "@/lib/seo";
import { SERVICE_PAGE_LABELS } from "@/lib/servicePages";
import { setRequestLocale } from "next-intl/server";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return Object.keys(INDUSTRY_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const industry = INDUSTRY_PAGES[slug];
  if (!industry) return {};
  const safeLocale = isLocale(locale) ? locale : "uk";
  const page = industry[safeLocale];
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: localizedAlternates(safeLocale, `/industries/${slug}`),
  };
}

export default async function IndustryPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const industry = INDUSTRY_PAGES[slug];
  if (!industry) notFound();

  const safeLocale = isLocale(locale) ? locale : "uk";
  const page = industry[safeLocale];
  const labels = SERVICE_PAGE_LABELS[safeLocale];
  const industryLabels = INDUSTRY_LABELS[safeLocale];
  const path = `/industries/${slug}`;

  return (
    <>
      <JsonLd
        data={serviceSchema({
          locale: safeLocale,
          path,
          name: page.card.title,
          description: page.metaDescription,
          price: industry.price,
        })}
      />
      <JsonLd data={faqSchema(page.faq)} />
      <JsonLd
        data={breadcrumbSchema(safeLocale, page.name, path, {
          name: industryLabels.indexName,
          path: "/industries",
        })}
      />
      <Header />
      <main className="bg-white pt-16 md:pt-[68px]">
        <ServiceHero page={page} labels={labels} />
        <IndustryChallenges page={page} eyebrow={industryLabels.challengesEyebrow} />
        <ServiceDeliverables page={page} labels={labels} />
        <ServiceProcess page={page} labels={labels} />
        <ServiceTimeline page={page} />
        <ServiceFAQ heading={labels.faqHeading} items={page.faq} />
        <RelatedLinks
          heading={industryLabels.relatedHeading}
          groups={[
            {
              label: industryLabels.relatedServices,
              links: industry.relatedServices
                .filter((href) => SERVICE_LINK_NAMES[href])
                .map((href) => ({ href, title: SERVICE_LINK_NAMES[href][safeLocale] })),
            },
            {
              label: industryLabels.relatedPosts,
              links: industry.relatedPosts
                .filter((postSlug) => BLOG_POSTS[postSlug])
                .map((postSlug) => ({
                  href: `/blog/${postSlug}`,
                  title: BLOG_POSTS[postSlug][safeLocale].title,
                })),
            },
          ]}
        />
        <ServiceForm source={`${industry.en.name} industry page`} sub={page.formSub} />
        <Clients />
      </main>
      <Footer />
    </>
  );
}
