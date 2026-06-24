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
        question: "Чим Meta Ads відрізняється від Google Ads?",
        answer:
          "Google Ads показує рекламу людям, які самі шукають ваш продукт. Meta Ads — ви знаходите аудиторію за інтересами, поведінкою і демографією. Обидва канали ефективні, але вирішують різні задачі. Часто працюємо з ними одночасно.",
      },
      {
        question: "Чи потрібна бізнес-сторінка у Facebook?",
        answer:
          "Так. Для запуску реклами потрібна Facebook-сторінка бізнесу і, бажано, Instagram-акаунт. Якщо немає — допоможемо створити і налаштувати до старту.",
      },
      {
        question: "Який мінімальний рекламний бюджет?",
        answer:
          "Рекомендуємо від 10 000 грн/міс рекламного бюджету. Менше — алгоритм навчається повільно і результат нестабільний.",
      },
      {
        question: "Коли будуть перші результати?",
        answer:
          "Перші заявки — в день запуску або протягом перших днів. Стабільний і прогнозований результат — після 2–4 тижнів навчання алгоритму.",
      },
      {
        question: "У мене вже є рекламний кабінет — що робити?",
        answer:
          "Робимо безкоштовний аудит — аналізуємо поточні кампанії, аудиторії, оголошення. Якщо бачимо точки зростання — беремо в роботу. Якщо все добре — чесно скажемо.",
      },
      {
        question: "Рекламний бюджет — це окремо від ціни послуги?",
        answer:
          "Так. Ви поповнюєте рекламний кабінет напряму — цей платіж не проходить через нас. Наша послуга ведення — окремо. Ви завжди бачите скільки реально витрачено на рекламу.",
      },
    ],
  },
  en: {
    heading: "FAQ.",
    items: [
      {
        question: "How is Meta Ads different from Google Ads?",
        answer:
          "Google Ads shows your ads to people who are already searching for your product. With Meta Ads, you find your audience by interests, behavior and demographics. Both channels are effective, but they solve different tasks. We often run them together.",
      },
      {
        question: "Do I need a Facebook business page?",
        answer:
          "Yes. To run ads you need a Facebook business page and, ideally, an Instagram account. If you don't have them, we'll help you create and set them up before launch.",
      },
      {
        question: "What's the minimum ad budget?",
        answer:
          "We recommend from UAH 10,000/mo in ad budget. With less, the algorithm learns slowly and results are unstable.",
      },
      {
        question: "When will I see the first results?",
        answer:
          "First leads come on launch day or within the first few days. Stable, predictable results come after 2–4 weeks of algorithm learning.",
      },
      {
        question: "I already have an ad account — what should I do?",
        answer:
          "We run a free audit — analyzing your current campaigns, audiences and ads. If we see room to grow, we take it on. If everything's fine, we'll tell you honestly.",
      },
      {
        question: "Is the ad budget separate from the service price?",
        answer:
          "Yes. You fund the ad account directly — that payment doesn't go through us. Our management service is separate. You always see exactly how much is actually spent on ads.",
      },
    ],
  },
} as const;

export default function MetaFAQ() {
  const locale = useLocale();
  const t = locale === "en" ? content.en : content.uk;
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
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
