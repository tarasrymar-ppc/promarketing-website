"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const words = t.raw("words") as string[];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#0D0D0D] leading-[1.06]">
          {t("headline")}
          <br />
          <span className="inline-flex items-center justify-center overflow-hidden h-[1.1em] relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-[#E5202E] inline-block whitespace-nowrap"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
      </motion.div>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-8 text-lg md:text-xl text-[#6B6B6B] leading-relaxed"
      >
        {t("sub1")}
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 bg-[#E5202E] hover:bg-[#C0111D] text-white text-base font-semibold px-7 py-4 rounded-full transition-colors duration-200"
        >
          {t("cta_primary")}
          <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
        <Link
          href="/cases"
          className="inline-flex items-center gap-2 border border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white text-[#0D0D0D] text-base font-semibold px-7 py-4 rounded-full transition-all duration-200"
        >
          {t("cta_secondary")}
        </Link>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#6B6B6B] uppercase tracking-widest">{t("scroll")}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#6B6B6B] to-transparent"
        />
      </motion.div>

    </section>
  );
}
