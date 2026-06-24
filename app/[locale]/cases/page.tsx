import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { isLocale, localizedAlternates } from "@/lib/seo";

const meta = {
  uk: {
    title: "Кейси — Реальні результати клієнтів",
    description:
      "Проєкти PRO Marketing# в медицині, нерухомості, б'юті та e-commerce. Дивіться конкретні результати наших рекламних кампаній.",
  },
  en: {
    title: "Cases — Real client results",
    description:
      "PRO Marketing# projects in healthcare, real estate, beauty, and e-commerce. See the concrete results of our advertising campaigns.",
  },
} as const;

const content = {
  uk: {
    heroTitle: "Кейси",
    heroSubtitle: "Проєкти, якими ми пишаємось",
    badge: "У процесі підготовки",
    heading: "Готуємо детальні кейси з реальними цифрами.",
    paragraph:
      "Скоро тут з'являться реальні проєкти — з бюджетами, результатами і ROAS. Поки що ви можете залишити заявку, і ми розкажемо про релевантні кейси особисто.",
    cta: "Залишити заявку",
  },
  en: {
    heroTitle: "Cases",
    heroSubtitle: "Projects we're proud of",
    badge: "In preparation",
    heading: "We're preparing detailed cases with real numbers.",
    paragraph:
      "Real projects will appear here soon — with budgets, results, and ROAS. For now, submit a request and we'll walk you through the most relevant cases in person.",
    cta: "Submit a request",
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
    alternates: localizedAlternates(safeLocale, "/cases"),
  };
}

export default async function CasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uk";
  const page = content[safeLocale];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16 md:pt-[68px]">

        {/* ── EDITORIAL HERO TITLE ── */}
        <div className="border-b border-[#E0E0E0]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="py-6 md:py-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h1
                className="font-semibold tracking-tighter text-[#0D0D0D] leading-none"
                style={{ fontSize: "clamp(56px, 14vw, 180px)" }}
              >
                {page.heroTitle}<span className="text-[#E5202E]">.</span>
              </h1>
              <p className="text-base text-[#6B6B6B] md:pb-2 md:max-w-xs leading-relaxed">
                {page.heroSubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* ── IN PROGRESS ── */}
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-lg">

            <div className="flex items-center gap-2.5 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5202E] opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E5202E]" />
              </span>
              <span className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest">
                {page.badge}
              </span>
            </div>

            <p className="text-2xl md:text-3xl font-medium text-[#0D0D0D] leading-snug mb-6">
              {page.heading}
            </p>

            <p className="text-base text-[#6B6B6B] leading-relaxed mb-10">
              {page.paragraph}
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#E5202E] hover:bg-[#C0111D] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              {page.cta}
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
