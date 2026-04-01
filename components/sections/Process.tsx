"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/common/AnimatedSection";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

export default function Process() {
  const t = useTranslations("process");
  const items = t.raw("items") as StepItem[];

  return (
    <section className="py-24 md:py-32 bg-[#F4F4F4] rounded-3xl overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection className="mb-16 text-center">
          <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
            {t("label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D]">
            {t("title")}
          </h2>
        </AnimatedSection>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">
          {items.map((step, i) => (
            <AnimatedSection key={step.number} delay={0.08 * i} className="h-full">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
                  zIndex: 10,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative h-full bg-[#F4F4F4] p-8 md:p-10 group hover:bg-white transition-colors duration-300 cursor-default"
              >
                {/* Decorative large number */}
                <span
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[120px] md:text-[140px] font-bold leading-none select-none pointer-events-none text-[#E0E0E0] group-hover:text-[#E5202E]/8 transition-colors duration-300"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <span className="text-xs font-semibold text-[#E5202E] tracking-widest tabular-nums">
                    {step.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0D0D0D] mt-3 mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#6B6B6B] leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
