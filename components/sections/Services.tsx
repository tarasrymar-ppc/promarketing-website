"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/common/AnimatedSection";

const SERVICE_HREFS = [
  "/services/google-ads",
  "/services/meta-ads",
  "/services/tiktok-ads",
  "/services/smm",
  "/services/seo",
  "/services/aeo",
  "/services/website-development",
  "/services/photo-video",
  "/services/complex-marketing",
];

interface ServiceItem {
  title: string;
  description: string;
  popular: boolean;
}

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as ServiceItem[];

  return (
    <section className="py-24 md:py-32 bg-[#F4F4F4] rounded-3xl overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
              {t("label")}
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D]">
              {t("title")}
            </h2>
          </div>
          <p className="text-base text-[#6B6B6B] max-w-xs leading-relaxed">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#E0E0E0] rounded-t-2xl overflow-hidden">
          {items.map((service, i) => (
            <AnimatedSection key={SERVICE_HREFS[i]} delay={0.05 * i} className={`h-full${i === items.length - 1 ? " col-span-2 md:col-span-1" : ""}`}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
                  zIndex: 10,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative flex flex-col justify-center h-full bg-[#F4F4F4] p-6 md:p-8 cursor-default"
              >
                {/* Popular badge */}
                {service.popular && (
                  <span className="absolute top-3 right-3 text-[10px] font-semibold text-[#E5202E] bg-[#E5202E]/8 px-2 py-0.5 rounded-full tracking-wide">
                    {t("popular")}
                  </span>
                )}

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold text-[#0D0D0D] mb-2 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {service.description}
                </p>

              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA strip */}
        <AnimatedSection delay={0.18}>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl px-8 py-6">
            <p className="text-sm text-[#6B6B6B]">
              {t("cta_text")}{" "}
              <span className="text-[#0D0D0D] font-medium">
                {t("cta_bold")}
              </span>
            </p>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[#E5202E] hover:bg-[#C0111D] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap flex-shrink-0"
            >
              {t("cta_btn")}
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
