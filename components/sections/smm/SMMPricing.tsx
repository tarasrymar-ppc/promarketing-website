import { ArrowRight } from "lucide-react";
import { getLocale } from "next-intl/server";

const content = {
  uk: {
    heading: "Ціна.",
    planLabel: "Пакет SMM + Meta Ads",
    price: "від 35 000 грн",
    perMonth: "/міс",
    includesLabel: "У пакет входить:",
    included: [
      "Ведення Instagram + Facebook",
      "Meta Ads (таргетована реклама)",
      "Google Business Profile",
      "Копірайтинг під вашу нішу",
      "Дизайн креативів і сторінки",
      "Зйомка контенту",
    ],
    cta: "Отримати розрахунок",
    separateLabel: "Оплачується окремо",
    budgetTitle: "Рекламний бюджет у Meta",
    budgetText1: "Ви поповнюєте рекламний кабінет напряму — цей платіж не проходить через нас. Ви завжди бачите скільки реально витрачено на рекламу.",
    budgetText2: "Рекомендований мінімум — від 10 000 грн/міс рекламного бюджету для стабільних результатів.",
  },
  en: {
    heading: "Pricing.",
    planLabel: "SMM + Meta Ads bundle",
    price: "from UAH 35,000",
    perMonth: "/mo",
    includesLabel: "What's included:",
    included: [
      "Instagram + Facebook management",
      "Meta Ads (targeted advertising)",
      "Google Business Profile",
      "Copywriting for your niche",
      "Creative and page design",
      "Content shooting",
    ],
    cta: "Get a quote",
    separateLabel: "Paid separately",
    budgetTitle: "Meta ad budget",
    budgetText1: "You top up the ad account directly — this payment doesn't go through us. You always see exactly how much is actually spent on ads.",
    budgetText2: "Recommended minimum — from UAH 10,000/mo in ad budget for stable results.",
  },
} as const;

export default async function SMMPricing() {
  const locale = await getLocale();
  const t = locale === "en" ? content.en : content.uk;

  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-12">
          {t.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white border border-[#E0E0E0] rounded-xl p-8 md:p-10">
            <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-4">
              {t.planLabel}
            </p>
            <p className="text-4xl md:text-5xl font-semibold text-[#0D0D0D] mb-5 leading-none">
              {t.price}
              <span className="text-xl text-[#6B6B6B] font-normal">{t.perMonth}</span>
            </p>
            <p className="text-sm text-[#6B6B6B] mb-5 leading-relaxed">
              {t.includesLabel}
            </p>
            <ul className="flex flex-col gap-2 mb-8">
              {t.included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#0D0D0D]">
                  <span className="text-[#E5202E] mt-0.5 flex-shrink-0 font-bold">·</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#form"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#E5202E] hover:text-[#C0111D] transition-colors duration-200"
            >
              {t.cta}
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="bg-[#E5202E] rounded-xl p-8 md:p-10">
            <p className="text-[10px] text-white/60 uppercase tracking-widest mb-4">
              {t.separateLabel}
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
