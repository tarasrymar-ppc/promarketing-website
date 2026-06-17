import AnimatedSection from "@/components/common/AnimatedSection";

const OFFICES = [
  { city: "Ужгород", country: "Україна", primary: true },
  { city: "Львів",   country: "Україна", primary: true },
];

const CONTRACTORS = [
  "Братислава",
  "Прага",
  "Варшава",
  "Мадейра",
];

export default function AboutGeography() {
  return (
    <section className="py-24 md:py-32 bg-[#F4F4F4]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          <AnimatedSection>
            <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
              Де ми знаходимось
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] leading-[1.06] mb-6">
              Локальні.<br />Глобальні.
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed">
              Якщо ваш бізнес знаходиться в іншій локації — ми організуємо всю роботу так, щоб ви не витрачали час на маркетинг. Всю відповідальність за результат беремо на себе.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="flex flex-col gap-10">

            <div>
              <p className="text-[10px] font-semibold text-[#ADADAD] uppercase tracking-widest mb-5">
                Основні офіси
              </p>
              <div className="flex flex-col gap-3">
                {OFFICES.map(({ city, country }) => (
                  <div key={city} className="flex items-center justify-between py-3 border-b border-[#E0E0E0]">
                    <span className="text-base font-medium text-[#0D0D0D]">{city}</span>
                    <span className="text-sm text-[#6B6B6B]">{country}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold text-[#ADADAD] uppercase tracking-widest mb-5">
                Підрядники по Європі
              </p>
              <div className="flex flex-wrap gap-2">
                {CONTRACTORS.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-[#E0E0E0] text-sm text-[#6B6B6B]"
                  >
                    {city}
                  </span>
                ))}
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-[#E0E0E0] text-sm text-[#ADADAD]">
                  та інші
                </span>
              </div>
            </div>

          </AnimatedSection>

        </div>

      </div>
    </section>
  );
}
