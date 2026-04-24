"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    label: "Місяць 1",
    title: "Онбординг і старт",
    items: [
      "Бриф і аналіз вашого бізнесу та конкурентів",
      "Розробка стратегії і візуальної концепції",
      "Перший контент-план і оголошення",
      "Запуск реклами і ведення сторінок",
    ],
  },
  {
    label: "Місяць 2–3",
    title: "Оптимізація",
    items: [
      "Аналіз залученості і реакції аудиторії",
      "A/B тести оголошень і форматів контенту",
      "Коригування стратегії на основі даних",
      "Масштабування ефективних кампаній",
    ],
  },
  {
    label: "Щомісяця",
    title: "Розвиток",
    items: [
      "Нові формати: Reels, колаборації, сезонний контент",
      "Lookalike і ретаргетинг аудиторії",
      "Перегляд KPI і цілей",
      "Онлайн-зустріч з оглядом результатів (опційно)",
    ],
  },
];

export default function SMMProcess() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
              Процес
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D]">
              Як ми працюємо
            </h2>
          </div>
          <p className="text-base text-[#6B6B6B] max-w-xs leading-relaxed">
            Покроково — що відбувається після старту співпраці.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">
          {STEPS.map((step) => (
            <motion.div
              key={step.label}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
                zIndex: 10,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative flex flex-col bg-white p-8 md:p-10"
            >
              <p className="text-[10px] text-[#E5202E] font-semibold uppercase tracking-widest mb-4">
                {step.label}
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-[#0D0D0D] mb-5 leading-snug">
                {step.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#6B6B6B] leading-relaxed">
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
