import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("hero");
  const words = t.raw("words") as string[];
  const accent = words[1] ?? words[0];

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center bg-white px-6 pb-16 pt-24 text-center md:min-h-[100dvh]">

      <div className="max-w-4xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#0D0D0D] leading-[1.06]">
          {t("headline")}
          <br />
          <span className="block text-[#E5202E]">
            {accent}
          </span>
        </h1>
      </div>

      {/* Subheadline */}
      <p className="mt-6 md:mt-8 text-base md:text-xl text-[#6B6B6B] leading-relaxed max-w-sm md:max-w-none">
        {t("sub1")}
      </p>

      {/* CTA */}
      <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto">
        <Link
          href="/contact"
          className="group inline-flex items-center justify-center gap-2 bg-[#E5202E] hover:bg-[#C0111D] text-white text-sm md:text-base font-semibold px-6 md:px-7 py-3.5 md:py-4 rounded-full transition-colors duration-200 w-full sm:w-auto"
        >
          {t("cta_primary")}
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
        <Link
          href="/cases"
          className="inline-flex items-center justify-center gap-2 border border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white text-[#0D0D0D] text-sm md:text-base font-semibold px-6 md:px-7 py-3.5 md:py-4 rounded-full transition-all duration-200 w-full sm:w-auto"
        >
          {t("cta_secondary")}
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-xs text-[#6B6B6B] uppercase tracking-widest">{t("scroll")}</span>
        <div className="h-8 w-px animate-pulse bg-gradient-to-b from-[#6B6B6B] to-transparent" />
      </div>

    </section>
  );
}
