"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

type Industry = "all" | "real_estate" | "medical" | "ecommerce" | "other";

interface CaseItem {
  id: string;
  industry: "real_estate" | "medical" | "ecommerce" | "other";
  industry_label: string;
  title: string;
  description: string;
  featured: boolean;
}

// Per-industry gradient configs
const INDUSTRY_STYLES: Record<string, { gradient: string; accent: string }> = {
  real_estate: {
    gradient: "from-[#0D0D0D] via-[#1a1a2e] to-[#0f0f1a]",
    accent: "bg-[#E5202E]",
  },
  medical: {
    gradient: "from-[#0a1628] via-[#0d1f3c] to-[#071020]",
    accent: "bg-[#2563EB]",
  },
  ecommerce: {
    gradient: "from-[#0D0D0D] via-[#1a0a00] to-[#1a0505]",
    accent: "bg-[#E5202E]",
  },
  other: {
    gradient: "from-[#0D0D0D] via-[#111811] to-[#0a120a]",
    accent: "bg-[#4B5563]",
  },
};

function CaseCard({ item, featured = false, viewLabel }: { item: CaseItem; featured?: boolean; viewLabel: string }) {
  const style = INDUSTRY_STYLES[item.industry];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-[#E8E8E8] hover:border-[#0D0D0D]/20 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* ── Image area ── */}
      <div
        className={`relative overflow-hidden ${featured ? "aspect-[16/7]" : "aspect-[4/3]"}`}
      >
        {/* Gradient placeholder — replace with <Image> when ready */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${style.gradient} transition-transform duration-500 group-hover:scale-[1.03]`}
        />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,#fff 39px,#fff 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,#fff 39px,#fff 40px)",
          }}
        />

        {/* Corner arrow — appears on hover */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <ArrowUpRight size={16} className="text-white" />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        {/* Industry tag */}
        <span className={`self-start text-[10px] font-semibold uppercase tracking-widest text-white px-2.5 py-1 rounded-full ${style.accent}`}>
          {item.industry_label}
        </span>

        <div className="flex flex-col gap-2 flex-1">
          <h3 className={`font-semibold tracking-tight text-[#0D0D0D] group-hover:text-[#E5202E] transition-colors duration-200 ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
            {item.title}
          </h3>
          <p className="text-sm text-[#6B6B6B] leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Footer link */}
        <div className="flex items-center gap-1.5 pt-2 text-sm font-medium text-[#0D0D0D]/40 group-hover:text-[#E5202E] transition-colors duration-200">
          <span>{viewLabel}</span>
          <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.article>
  );
}

export default function CasesGrid() {
  const t = useTranslations("cases");
  const allItems = t.raw("items") as CaseItem[];
  const viewLabel = t("view");

  const [active, setActive] = useState<Industry>("all");

  const FILTERS: { key: Industry; label: string }[] = [
    { key: "all",          label: t("filter_all")          },
    { key: "real_estate",  label: t("filter_real_estate")  },
    { key: "medical",      label: t("filter_medical")      },
    { key: "ecommerce",    label: t("filter_ecommerce")    },
    { key: "other",        label: t("filter_other")        },
  ];

  const filtered =
    active === "all" ? allItems : allItems.filter((i) => i.industry === active);

  // Featured card only when showing all
  const featured = filtered.find((i) => i.featured && active === "all");
  const rest = featured ? filtered.filter((i) => !i.featured) : filtered;

  return (
    <div>
      {/* ── Filter tabs ── */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              active === key
                ? "bg-[#0D0D0D] text-white"
                : "bg-[#F4F4F4] text-[#6B6B6B] hover:bg-[#E8E8E8] hover:text-[#0D0D0D]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── Cards grid ── */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">
          {featured && (
            <CaseCard key={featured.id} item={featured} featured viewLabel={viewLabel} />
          )}
          {rest.map((item) => (
            <CaseCard key={item.id} item={item} viewLabel={viewLabel} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
