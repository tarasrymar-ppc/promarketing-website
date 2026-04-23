"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const ITEMS = [
  {
    question: "Чи це мій Google Ads акаунт?",
    answer:
      "Так. Акаунт створюється на ваше ім'я або ваш бізнес — ви власник. Якщо завершуємо співпрацю, ви продовжуєте рекламу без перебоїв: передаємо доступ новому спеціалісту або ведете самостійно.",
  },
  {
    question: "Чи потрібен обов'язковий контракт?",
    answer:
      "Ні. Працюємо помісячно, можна припинити в будь-який момент — достатньо попередити за тиждень.",
  },
  {
    question: "Що якщо не буде результату за 1–2 місяці?",
    answer:
      "Якщо після 2 місяців роботи не бачимо стабільної динаміки — обговорюємо варіанти: завершуємо без взаємних претензій або повертаємо частину оплати за невиконані задачі.",
  },
  {
    question: "Як я отримую звіт?",
    answer:
      "Щопонеділка до 12:00 — PDF-звіт на email з ключовими метриками за тиждень. Плюс цілодобовий доступ до Looker Studio, де ви бачите всі дані у реальному часі.",
  },
  {
    question: "У мене вже є налаштований акаунт — що робити?",
    answer:
      "Робимо безкоштовний аудит — аналізуємо поточну структуру, кампанії, бюджет. Якщо бачимо точки зростання — беремо в роботу. Якщо все працює добре — чесно скажемо.",
  },
  {
    question: "Бюджет на рекламу — це окремо від ціни послуги?",
    answer:
      "Так. Ви платите Google напряму зі своєї карти — це ваш рекламний бюджет. Наша послуга ведення — окремо. Ви завжди бачите скільки реально витрачено на рекламу.",
  },
];

export default function GAFAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-12">
          Часті питання.
        </h2>

        <div className="divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]">
          {ITEMS.map((item, i) => {
            const isOpen = active === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="group w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={`text-base md:text-lg font-medium transition-colors duration-200 ${
                      isOpen ? "text-[#E5202E]" : "text-[#0D0D0D] group-hover:text-[#E5202E]"
                    }`}
                  >
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-[#E8E8E8] flex items-center justify-center group-hover:border-[#E5202E] transition-colors duration-200"
                  >
                    <Plus
                      size={16}
                      className={`transition-colors duration-200 ${
                        isOpen ? "text-[#E5202E]" : "text-[#0D0D0D] group-hover:text-[#E5202E]"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm md:text-base text-[#6B6B6B] leading-relaxed max-w-3xl">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
