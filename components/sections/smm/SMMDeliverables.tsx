"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";

const content = {
  uk: {
    eyebrow: "Що входить",
    heading: "Що ви отримуєте",
    sub: "Повний цикл — від стратегії до зйомки і реклами.",
    items: [
      {
        title: "Ведення Instagram + Facebook",
        text: "Контент-план, пости, Stories, Reels — регулярно і в єдиному стилі бренду.",
      },
      {
        title: "Meta Ads — включено",
        text: "Таргетована реклама у Facebook та Instagram входить у пакет. Окремо не тарифікується.",
      },
      {
        title: "Google Business Profile",
        text: "Актуальна інформація, фото, публікації. Ваш бізнес виглядає на Google Картах — живим.",
      },
      {
        title: "Копірайтинг під вашу нішу",
        text: "Тексти пише профільний копірайтер, який розуміє вашу аудиторію та мову вашого бізнесу.",
      },
      {
        title: "Дизайн і візуальна концепція",
        text: "Дизайнер розробляє креативи для реклами, оформляє сторінку і будує розкладку контенту.",
      },
      {
        title: "Зйомка контенту",
        text: "Фото та відео для постів, Stories і реклами. Контент-мейкер знімає під ваш продукт або послугу.",
      },
    ],
  },
  en: {
    eyebrow: "What's included",
    heading: "What you get",
    sub: "A full cycle — from strategy to shooting and advertising.",
    items: [
      {
        title: "Instagram + Facebook management",
        text: "Content plan, posts, Stories, Reels — consistently and in one brand style.",
      },
      {
        title: "Meta Ads — included",
        text: "Targeted advertising on Facebook and Instagram is part of the bundle. No separate charge.",
      },
      {
        title: "Google Business Profile",
        text: "Up-to-date info, photos, posts. Your business looks alive on Google Maps.",
      },
      {
        title: "Copywriting for your niche",
        text: "Copy is written by a specialist who understands your audience and the language of your business.",
      },
      {
        title: "Design and visual concept",
        text: "A designer creates ad creatives, styles your page, and builds the content layout.",
      },
      {
        title: "Content shooting",
        text: "Photos and videos for posts, Stories, and ads. The content creator shoots for your product or service.",
      },
    ],
  },
} as const;

export default function SMMDeliverables() {
  const locale = useLocale();
  const t = locale === "en" ? content.en : content.uk;

  return (
    <section className="bg-white py-16 md:py-24">
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
            {t.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">
          {t.items.map((item, i) => (
            <motion.div
              key={item.title}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
                zIndex: 10,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative flex flex-col bg-white p-8 md:p-10"
            >
              <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-3">
                0{i + 1}
              </p>
              <h3 className="text-lg font-semibold text-[#0D0D0D] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
