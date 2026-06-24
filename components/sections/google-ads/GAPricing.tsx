import { ArrowRight } from "lucide-react";
import { getLocale } from "next-intl/server";

const content = {
  uk: {
    heading: "Ціна.",
    serviceLabel: "Послуга ведення",
    priceMain: "від 10 000 грн",
    priceUnit: "/міс",
    factorsIntro: "Фінальна ціна залежить від:",
    factors: [
      "Тип бізнесу (e-commerce, послуги, локальний)",
      "Регіон реклами (місто, Україна, міжнародна)",
      "Кількість рекламних кампаній",
    ],
    cta: "Отримати розрахунок",
    budgetLabel: "Оплачується окремо",
    budgetTitle: "Рекламний бюджет у Google",
    budgetText1:
      "Ви платите Google напряму зі своєї банківської карти. Цей платіж не проходить через нас — ви завжди бачите скільки реально витрачено на рекламу.",
    budgetText2:
      "Рекомендований мінімум — від 15 000 грн/міс рекламного бюджету для стабільних результатів.",
  },
  en: {
    heading: "Pricing.",
    serviceLabel: "Management service",
    priceMain: "from UAH 10,000",
    priceUnit: "/mo",
    factorsIntro: "The final price depends on:",
    factors: [
      "Type of business (e-commerce, services, local)",
      "Ad region (city, Ukraine, international)",
      "Number of ad campaigns",
    ],
    cta: "Get a quote",
    budgetLabel: "Billed separately",
    budgetTitle: "Ad budget in Google",
    budgetText1:
      "You pay Google directly from your own bank card. This payment doesn't go through us — you always see exactly how much is actually spent on ads.",
    budgetText2:
      "Recommended minimum — from UAH 15,000/mo of ad budget for stable results.",
  },
} as const;

export default async function GAPricing() {
  const locale = await getLocale();
  const t = locale === "en" ? content.en : content.uk;

  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-12">
          {t.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Service fee */}
          <div className="bg-white border border-[#E0E0E0] rounded-xl p-8 md:p-10">
            <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-4">
              {t.serviceLabel}
            </p>
            <p className="text-4xl md:text-5xl font-semibold text-[#0D0D0D] mb-5 leading-none">
              {t.priceMain}
              <span className="text-xl text-[#6B6B6B] font-normal">{t.priceUnit}</span>
            </p>
            <p className="text-sm text-[#6B6B6B] mb-5 leading-relaxed">
              {t.factorsIntro}
            </p>
            <ul className="flex flex-col gap-2 mb-8">
              {t.factors.map((factor) => (
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
              {t.cta}
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Separate — ad budget */}
          <div className="bg-[#E5202E] rounded-xl p-8 md:p-10">
            <p className="text-[10px] text-white/60 uppercase tracking-widest mb-4">
              {t.budgetLabel}
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight">
              {t.budgetTitle}
            </p>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              {t.budgetText1}
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              {t.budgetText2}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
