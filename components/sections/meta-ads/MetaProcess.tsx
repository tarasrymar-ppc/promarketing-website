"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";

const content = {
  uk: {
    eyebrow: "Процес",
    heading: "Як ми працюємо",
    intro: "Покроково — що відбувається після старту співпраці.",
    steps: [
      {
        label: "Тиждень 1",
        title: "Стратегія і запуск",
        items: [
          "Аналіз ніші, конкурентів, аудиторій",
          "Налаштування Meta Pixel і подій конверсії",
          "Створення оголошень і креативів",
          "Запуск перших кампаній",
        ],
      },
      {
        label: "Тиждень 2–4",
        title: "Оптимізація",
        items: [
          "Щоденний моніторинг показників",
          "A/B тести оголошень і аудиторій",
          "Відключення слабких оголошень",
          "Масштабування ефективних кампаній",
        ],
      },
      {
        label: "Щомісяця",
        title: "Масштабування",
        items: [
          "Перегляд KPI і цілей",
          "Lookalike і ретаргетинг аудиторії",
          "Оновлення креативів під сезонність",
          "Онлайн-зустріч (опційно)",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Process",
    heading: "How we work",
    intro: "Step by step — what happens after we start working together.",
    steps: [
      {
        label: "Week 1",
        title: "Strategy and launch",
        items: [
          "Analysis of niche, competitors, audiences",
          "Meta Pixel and conversion event setup",
          "Creating ads and creatives",
          "Launching the first campaigns",
        ],
      },
      {
        label: "Weeks 2–4",
        title: "Optimization",
        items: [
          "Daily monitoring of metrics",
          "A/B tests of ads and audiences",
          "Turning off weak ads",
          "Scaling effective campaigns",
        ],
      },
      {
        label: "Monthly",
        title: "Scaling",
        items: [
          "Reviewing KPIs and goals",
          "Lookalike and retargeting audiences",
          "Refreshing creatives for seasonality",
          "Online meeting (optional)",
        ],
      },
    ],
  },
} as const;

export default function MetaProcess() {
  const locale = useLocale();
  const t = locale === "en" ? content.en : content.uk;

  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
              {t.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D]">
              {t.heading}
            </h2>
          </div>
          <p className="text-base text-[#6B6B6B] max-w-xs leading-relaxed">
            {t.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">
          {t.steps.map((step) => (
            <motion.div
              key={step.label}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
                zIndex: 10,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative flex flex-col bg-[#F4F4F4] p-8 md:p-10"
            >
              <p className="text-[10px] text-[#E5202E] font-semibold uppercase tracking-widest mb-4">
                {step.label}
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-[#0D0D0D] mb-5 leading-snug">
                {step.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[#6B6B6B] leading-relaxed"
                  >
                    <span className="text-[#E5202E] mt-0.5 flex-shrink-0 font-bold">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
