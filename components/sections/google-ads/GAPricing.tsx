import { ArrowRight } from "lucide-react";

const FACTORS = [
  "Тип бізнесу (e-commerce, послуги, локальний)",
  "Регіон реклами (місто, Україна, міжнародна)",
  "Кількість рекламних кампаній",
];

export default function GAPricing() {
  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-12">
          Ціна.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Service fee */}
          <div className="bg-white border border-[#E0E0E0] rounded-xl p-8 md:p-10">
            <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-4">
              Послуга ведення
            </p>
            <p className="text-4xl md:text-5xl font-semibold text-[#0D0D0D] mb-5 leading-none">
              від 10 000 грн
              <span className="text-xl text-[#6B6B6B] font-normal">/міс</span>
            </p>
            <p className="text-sm text-[#6B6B6B] mb-5 leading-relaxed">
              Фінальна ціна залежить від:
            </p>
            <ul className="flex flex-col gap-2 mb-8">
              {FACTORS.map((factor) => (
                <li
                  key={factor}
                  className="flex items-start gap-2 text-sm text-[#0D0D0D]"
                >
                  <span className="text-[#E5202E] mt-0.5 flex-shrink-0 font-bold">·</span>
                  {factor}
                </li>
              ))}
            </ul>
            <a
              href="#form"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#E5202E] hover:text-[#C0111D] transition-colors duration-200"
            >
              Отримати розрахунок
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Separate — ad budget */}
          <div className="bg-[#0D0D0D] rounded-xl p-8 md:p-10">
            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-4">
              Оплачується окремо
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight">
              Рекламний бюджет у Google
            </p>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Ви платите Google напряму зі своєї банківської карти. Цей платіж
              не проходить через нас — ви завжди бачите скільки реально
              витрачено на рекламу.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Рекомендований мінімум — від 15 000 грн/міс рекламного бюджету для
              стабільних результатів.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
