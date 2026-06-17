import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { isLocale, localizedAlternates } from "@/lib/seo";

const SERVICES: Record<string, string> = {
  "google-ads":          "Google Ads",
  "meta-ads":            "Meta Ads",
  "tiktok-ads":          "TikTok Ads",
  "smm":                 "SMM",
  "seo":                 "SEO",
  "aeo":                 "AEO",
  "website-development": "Розробка сайтів",
  "logo-branding":       "Лого та брендинг",
  "complex-marketing":   "Комплексний маркетинг",
};

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; slug: string }> }
): Promise<Metadata> {
  const { locale, slug } = await params;
  const name = SERVICES[slug];
  if (!name) return {};
  const safeLocale = isLocale(locale) ? locale : "uk";
  return {
    title: `${name} — PRO Marketing#`,
    description: `Сторінка послуги ${name} у процесі створення. PRO Marketing# — маркетинг під ключ.`,
    alternates: localizedAlternates(safeLocale, `/services/${slug}`),
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const name = SERVICES[slug];
  if (!name) notFound();

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
                У процесі підготовки
              </span>
            </div>

            <p className="text-2xl md:text-3xl font-medium text-[#0D0D0D] leading-snug mb-6">
              Готуємо детальну сторінку про цю послугу.
            </p>

            <p className="text-base text-[#6B6B6B] leading-relaxed mb-10">
              Скоро тут з&apos;явиться повна інформація — що входить, як працюємо і скільки коштує. Поки що ви можете залишити заявку, і ми розкажемо про послугу особисто.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#E5202E] hover:bg-[#C0111D] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              Залишити заявку
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
