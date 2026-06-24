import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { isLocale, localizedAlternates } from "@/lib/seo";

const SERVICES: Record<string, { uk: string; en: string }> = {
  "google-ads":          { uk: "Google Ads",            en: "Google Ads" },
  "meta-ads":            { uk: "Meta Ads",              en: "Meta Ads" },
  "tiktok-ads":          { uk: "TikTok Ads",            en: "TikTok Ads" },
  "smm":                 { uk: "SMM",                   en: "SMM" },
  "seo":                 { uk: "SEO",                   en: "SEO" },
  "aeo":                 { uk: "AEO",                   en: "AEO" },
  "website-development": { uk: "Розробка сайтів",       en: "Website Development" },
  "logo-branding":       { uk: "Лого та брендинг",      en: "Logo & Branding" },
  "complex-marketing":   { uk: "Комплексний маркетинг", en: "Complex Marketing" },
};

const content = {
  uk: {
    metaDescription: (name: string) =>
      `Сторінка послуги ${name} у процесі створення. PRO Marketing# — маркетинг під ключ.`,
    inProgress: "У процесі підготовки",
    heading: "Готуємо детальну сторінку про цю послугу.",
    paragraph:
      "Скоро тут з'явиться повна інформація — що входить, як працюємо і скільки коштує. Поки що ви можете залишити заявку, і ми розкажемо про послугу особисто.",
    cta: "Залишити заявку",
  },
  en: {
    metaDescription: (name: string) =>
      `The ${name} service page is in progress. PRO Marketing# — full-service marketing.`,
    inProgress: "In progress",
    heading: "We're preparing a detailed page for this service.",
    paragraph:
      "Full information will appear here soon — what's included, how we work, and how much it costs. For now, you can submit a request and we'll tell you about the service in person.",
    cta: "Submit a request",
  },
} as const;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; slug: string }> }
): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = SERVICES[slug];
  if (!service) return {};
  const safeLocale = isLocale(locale) ? locale : "uk";
  const name = service[safeLocale];
  const t = content[safeLocale];
  return {
    title: `${name} — PRO Marketing#`,
    description: t.metaDescription(name),
    alternates: localizedAlternates(safeLocale, `/services/${slug}`),
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = SERVICES[slug];
  if (!service) notFound();

  const locale = await getLocale();
  const safeLocale = locale === "en" ? "en" : "uk";
  const name = service[safeLocale];
  const t = content[safeLocale];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16 md:pt-[68px]">

        {/* Editorial hero title */}
        <div className="border-b border-[#E0E0E0]">
          <div className="max-w-6xl mx-auto px-6">
            <h1
              className="font-semibold tracking-tighter text-[#0D0D0D] leading-none py-6 md:py-8"
              style={{ fontSize: "clamp(56px, 14vw, 180px)" }}
            >
              {name}<span className="text-[#E5202E]">.</span>
            </h1>
          </div>
        </div>

        {/* In progress */}
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-lg">

            <div className="flex items-center gap-2.5 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5202E] opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E5202E]" />
              </span>
              <span className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest">
                {t.inProgress}
              </span>
            </div>

            <p className="text-2xl md:text-3xl font-medium text-[#0D0D0D] leading-snug mb-6">
              {t.heading}
            </p>

            <p className="text-base text-[#6B6B6B] leading-relaxed mb-10">
              {t.paragraph}
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#E5202E] hover:bg-[#C0111D] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              {t.cta}
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
