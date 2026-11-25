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
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { isLocale, localizedAlternates } from "@/lib/seo";
import { SERVICE_PAGE_LABELS, SERVICE_PAGES } from "@/lib/servicePages";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; slug: string }> }
): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = SERVICE_PAGES[slug];
  if (!service) return {};
  const safeLocale = isLocale(locale) ? locale : "uk";
  const page = service[safeLocale];
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: localizedAlternates(safeLocale, `/services/${slug}`),
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ locale: string; slug: string }> }
) {
  const { locale, slug } = await params;
  const service = SERVICE_PAGES[slug];
  if (!service) notFound();

  const safeLocale = isLocale(locale) ? locale : "uk";
  const page = service[safeLocale];
  const labels = SERVICE_PAGE_LABELS[safeLocale];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          locale: safeLocale,
          path: `/services/${slug}`,
          name: page.name,
          description: page.metaDescription,
        })}
      />
      <JsonLd data={faqSchema(page.faq)} />
      <JsonLd
        data={breadcrumbSchema(safeLocale, page.name, `/services/${slug}`)}
      />
      <Header />
      <main className="bg-white pt-16 md:pt-[68px]">
        <ServiceHero page={page} labels={labels} />
        <ServiceDeliverables page={page} labels={labels} />
        <ServiceProcess page={page} labels={labels} />
        <ServiceTimeline page={page} />
        <ServiceFAQ heading={labels.faqHeading} items={page.faq} />
        <ServiceForm source={`${service.en.name} service page`} sub={page.formSub} />
        <Clients />
      </main>
      <Footer />
    </>
  );
}
