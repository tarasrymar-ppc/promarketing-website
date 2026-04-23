"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "Google Ads акаунт на ваше ім'я",
    text: "Ви — власник акаунту. Якщо завершуємо співпрацю, ви продовжуєте рекламу без перебоїв.",
  },
  {
    title: "Ведення рекламних кампаній",
    text: "Search, Shopping, Performance Max, YouTube — типи обираємо під ваш бізнес.",
  },
  {
    title: "Щотижневий звіт",
    text: "PDF на email щопонеділка до 12:00 + цілодобовий доступ до Looker Studio.",
  },
  {
    title: "Пряма комунікація",
    text: "Чат у Telegram (відповідь до 2 годин) + щомісячна онлайн-зустріч з оглядом результатів.",
  },
];

export default function GADeliverables() {
  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
              Що входить
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D]">
              Що ви отримуєте
            </h2>
          </div>
          <p className="text-base text-[#6B6B6B] max-w-xs leading-relaxed">
            Конкретні речі, які ви отримуєте щомісяця.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
                zIndex: 10,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative flex flex-col justify-center bg-[#F4F4F4] p-8 md:p-10"
            >
              <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-3">
                0{i + 1}
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-[#0D0D0D] mb-2 leading-snug">
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
