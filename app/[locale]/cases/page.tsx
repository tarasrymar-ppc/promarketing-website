import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { isLocale, localizedAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uk";

  return {
    title: "Кейси — Реальні результати клієнтів",
    description:
      "Проєкти PRO Marketing# в медицині, нерухомості, б'юті та e-commerce. Дивіться конкретні результати наших рекламних кампаній.",
    alternates: localizedAlternates(safeLocale, "/cases"),
  };
}

export default function CasesPage() {
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
                Кейси<span className="text-[#E5202E]">.</span>
              </h1>
              <p className="text-base text-[#6B6B6B] md:pb-2 md:max-w-xs leading-relaxed">
                Проєкти, якими ми пишаємось
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
                У процесі підготовки
              </span>
            </div>

            <p className="text-2xl md:text-3xl font-medium text-[#0D0D0D] leading-snug mb-6">
              Готуємо детальні кейси з реальними цифрами.
            </p>

            <p className="text-base text-[#6B6B6B] leading-relaxed mb-10">
              Скоро тут з&apos;являться реальні проєкти — з бюджетами, результатами і ROAS. Поки що ви можете залишити заявку, і ми розкажемо про релевантні кейси особисто.
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
