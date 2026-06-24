"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useLocale } from "next-intl";

const content = {
  uk: {
    heading: "Часті питання.",
    items: [
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
          "Якщо після 2 місяців роботи не бачимо стабільної динаміки — обговорюємо ситуацію чесно і завершуємо співпрацю без взаємних претензій.",
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
    ],
  },
  en: {
    heading: "FAQ.",
    items: [
      {
        question: "Is this my Google Ads account?",
        answer:
          "Yes. The account is created in your name or your business name — you own it. If we stop working together, you keep running ads without interruption: we hand access to a new specialist, or you run it yourself.",
      },
      {
        question: "Is a mandatory contract required?",
        answer:
          "No. We work month to month and you can stop at any time — just give us a week's notice.",
      },
      {
        question: "What if there are no results in 1–2 months?",
        answer:
          "If after 2 months we don't see steady progress, we discuss the situation honestly and end the collaboration with no hard feelings on either side.",
      },
      {
        question: "How do I receive the report?",
        answer:
          "Every Monday by 12:00 — a PDF report to your email with the key metrics for the week. Plus 24/7 access to Looker Studio, where you see all the data in real time.",
      },
      {
        question: "I already have an account set up — what do I do?",
        answer:
          "We run a free audit — reviewing your current structure, campaigns and budget. If we see room to grow, we take it on. If everything is already working well, we'll tell you honestly.",
      },
      {
        question: "Is the ad budget separate from the service fee?",
        answer:
          "Yes. You pay Google directly from your own card — that's your ad budget. Our management service is separate. You always see exactly how much is actually spent on ads.",
      },
    ],
  },
} as const;

export default function GAFAQ() {
  const locale = useLocale();
  const t = locale === "en" ? content.en : content.uk;
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-12">
          {t.heading}
        </h2>

        <div className="divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]">
          {t.items.map((item, i) => {
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
