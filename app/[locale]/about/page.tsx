import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Про нас — PRO Marketing#",
  description:
    "Маркетингове агентство в Ужгороді, засноване у 2019 році. Працюємо з медициною, нерухомістю, б'юті та e-commerce. Рахуємо результат у продажах.",
  alternates: {
    canonical: "https://promarketing-website.vercel.app/uk/about",
    languages: {
      uk: "https://promarketing-website.vercel.app/uk/about",
      en: "https://promarketing-website.vercel.app/en/about",
    },
  },
};

export default async function AboutPage() {
  const t = await getTranslations("about");
  const tc = await getTranslations("under_construction");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0D0D0D] flex flex-col pt-16 md:pt-[68px]">
        <div className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="max-w-xl w-full text-center">

            {/* Pulsing indicator */}
            <div className="flex items-center justify-center gap-2.5 mb-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5202E] opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E5202E]" />
              </span>
              <span className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest">
                {tc("badge")}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.04] mb-6">
              {t("title")}
            </h1>

            <div className="w-12 h-px bg-[#E5202E] mx-auto mb-8" />

            <p className="text-base md:text-lg text-white/50 leading-relaxed mb-3">
              {t("message")}
            </p>
            <p className="text-sm text-white/30 leading-relaxed mb-12 max-w-sm mx-auto">
              {t("apology")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 bg-[#E5202E] hover:bg-[#C0111D] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                {tc("cta_primary")}
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 text-white/60 hover:text-white text-sm font-medium px-6 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap"
              >
                <ArrowLeft size={15} />
                {tc("cta_secondary")}
              </Link>
            </div>

          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E5202E]/[0.19] to-transparent" />
      </main>
      <Footer />
    </>
  );
}
