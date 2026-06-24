import { getLocale } from "next-intl/server";
import AnimatedSection from "@/components/common/AnimatedSection";

const content = {
  uk: {
    eyebrow: "Де ми знаходимось",
    headingLine1: "Локальні.",
    headingLine2: "Глобальні.",
    body: "Якщо ваш бізнес знаходиться в іншій локації — ми організуємо всю роботу так, щоб ви не витрачали час на маркетинг. Всю відповідальність за результат беремо на себе.",
    officesLabel: "Основні офіси",
    contractorsLabel: "Підрядники по Європі",
    andOthers: "та інші",
    offices: [
      { city: "Ужгород", country: "Україна", primary: true },
      { city: "Львів",   country: "Україна", primary: true },
    ],
    contractors: ["Братислава", "Прага", "Варшава", "Мадейра"],
  },
  en: {
    eyebrow: "Where we are",
    headingLine1: "Local.",
    headingLine2: "Global.",
    body: "If your business is located elsewhere, we organize all the work so you don't waste time on marketing. We take full responsibility for the result.",
    officesLabel: "Main offices",
    contractorsLabel: "Contractors across Europe",
    andOthers: "and more",
    offices: [
      { city: "Uzhhorod", country: "Ukraine", primary: true },
      { city: "Lviv",     country: "Ukraine", primary: true },
    ],
    contractors: ["Bratislava", "Prague", "Warsaw", "Madeira"],
  },
} as const;

export default async function AboutGeography() {
  const locale = await getLocale();
  const t = locale === "en" ? content.en : content.uk;

  return (
    <section className="py-24 md:py-32 bg-[#F4F4F4]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          <AnimatedSection>
            <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
              {t.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] leading-[1.06] mb-6">
              {t.headingLine1}<br />{t.headingLine2}
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed">
              {t.body}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="flex flex-col gap-10">

            <div>
              <p className="text-[10px] font-semibold text-[#ADADAD] uppercase tracking-widest mb-5">
                {t.officesLabel}
              </p>
              <div className="flex flex-col gap-3">
                {t.offices.map(({ city, country }) => (
                  <div key={city} className="flex items-center justify-between py-3 border-b border-[#E0E0E0]">
                    <span className="text-base font-medium text-[#0D0D0D]">{city}</span>
                    <span className="text-sm text-[#6B6B6B]">{country}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold text-[#ADADAD] uppercase tracking-widest mb-5">
                {t.contractorsLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.contractors.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-[#E0E0E0] text-sm text-[#6B6B6B]"
                  >
                    {city}
                  </span>
                ))}
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-[#E0E0E0] text-sm text-[#ADADAD]">
                  {t.andOthers}
                </span>
              </div>
            </div>

          </AnimatedSection>

        </div>

      </div>
    </section>
  );
}
