"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";

const ITEMS = [
  {
    number: "01",
    title: "Команда замість одного",
    description:
      "На вашому проєкті працює 5–6 спеціалістів: таргетолог, SEO-спеціаліст, розробник, дизайнер, копірайтер і контент-мейкер. Ви отримуєте повну команду за ціною одного підрядника.",
  },
  {
    number: "02",
    title: "Офісна синергія",
    description:
      "Вся команда працює з офісу і обговорює ваш проєкт разом. Спеціаліст з реклами спілкується з дизайнером і копірайтером в режимі реального часу — це покращує якість і кінцевий результат.",
  },
  {
    number: "03",
    title: "Завжди на зв'язку",
    description:
      "Маркетинг — наша основна діяльність, не підробіток. Ви можете звернутися в робочий час за будь-якими змінами або питаннями — команда реагує швидко.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <AnimatedSection className="mb-16">
          <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
            Як ми працюємо
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] leading-[1.06]">
            Чому обирають нас
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">
          {ITEMS.map(({ number, title, description }, i) => (
            <AnimatedSection key={number} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
                  zIndex: 10,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-full bg-white p-8 md:p-10 group hover:bg-[#F4F4F4] transition-colors duration-300 cursor-default"
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
