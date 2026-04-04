import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CasesGrid from "@/components/sections/CasesGrid";

export const metadata: Metadata = {
  title: "Кейси — Реальні результати клієнтів",
  description:
    "Проєкти PRO Marketing# в медицині, нерухомості, б'юті та e-commerce. Дивіться конкретні результати наших рекламних кампаній.",
  alternates: {
    canonical: "https://promarketing-website.vercel.app/uk/cases",
    languages: {
      uk: "https://promarketing-website.vercel.app/uk/cases",
      en: "https://promarketing-website.vercel.app/en/cases",
    },
  },
};

export default async function CasesPage() {
  const t = await getTranslations("cases");

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
                {t("title")}<span className="text-[#E5202E]">.</span>
              </h1>
              <p className="text-base text-[#6B6B6B] md:pb-2 md:max-w-xs leading-relaxed">
                {t("subtitle")}
              </p>
            </div>
          </div>
        </div>

        {/* ── CASES GRID ── */}
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <CasesGrid />
        </div>

      </main>
      <Footer />
    </>
  );
}
