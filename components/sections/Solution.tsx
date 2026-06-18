"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/common/AnimatedSection";

interface AdvantageItem {
  number: string;
  title: string;
  description: string;
}

export default function Solution() {
  const t = useTranslations("solution");
  const items = t.raw("items") as AdvantageItem[];

  return (
    <section className="py-24 md:py-32 bg-[#F4F4F4] rounded-3xl overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
            {t("label")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0D0D0D] leading-[1.06]">
            {t("title")} <span className="text-[#E5202E]">{t("title_accent")}</span>
          </h2>
          <p className="mt-5 text-base text-[#6B6B6B] leading-relaxed max-w-lg mx-auto">
            {t("description")}
          </p>
        </AnimatedSection>

        {/* Advantages — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">
          {items.map(({ number, title, description }, i) => (
            <AnimatedSection key={number} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
                  zIndex: 10,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-full bg-[#F4F4F4] p-8 md:p-10 group hover:bg-white transition-colors duration-300 cursor-default"
              >
                <span className="text-xs font-semibold text-[#E5202E] tracking-widest tabular-nums">
                  {number}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-[#0D0D0D] mt-4 mb-3 tracking-tight">
                  {title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
