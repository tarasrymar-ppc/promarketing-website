"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const ITEMS = [
  {
    question: "Чому SMM і Meta Ads завжди разом?",
    answer:
      "Органічне охоплення в Facebook та Instagram — до 5% підписників. Без реклами контент бачать лише ті, хто вже на вас підписаний. Реклама забезпечує постійний приплив нової аудиторії, а контент її прогріває і конвертує. Окремо — обидва інструменти значно слабші.",
  },
  {
    question: "Чи є окремий SMM без реклами?",
    answer:
      "Ні. Ми свідомо не надаємо SMM без Meta Ads — це не дає клієнту реального результату. Наша мета — заявки і клієнти, а не просто пости у стрічці.",
  },
  {
    question: "Хто пише тексти для моїх соцмереж?",
    answer:
      "Профільний копірайтер, який спеціалізується на вашій ніші. Перед стартом проводимо бриф — щоб тексти звучали як ваш бренд, а не шаблонно.",
  },
  {
    question: "Як виглядає процес затвердження контенту?",
    answer:
      "Щомісяця готуємо контент-план і надсилаємо вам на погодження. Ви бачите всі пости наперед і можете вносити правки до публікації.",
  },
  {
    question: "TikTok теж входить у пакет?",
    answer:
      "Ні. TikTok — це окрема послуга з окремою командою і підходом. Якщо вас цікавить TikTok — обговоримо окремо.",
  },
  {
    question: "Рекламний бюджет Meta — це окремо від ціни пакету?",
    answer:
      "Так. Ви поповнюєте рекламний кабінет напряму. Цей платіж не проходить через нас — ви завжди бачите скільки реально витрачено на рекламу.",
  },
];

export default function SMMFAQ() {
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
