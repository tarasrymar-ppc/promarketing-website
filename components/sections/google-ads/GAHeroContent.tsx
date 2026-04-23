import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "850 000 грн", label: "керований бюджет",          sub: "Q1 2026" },
  { value: "5 910",       label: "конверсій",                 sub: "за 3 місяці" },
  { value: "144 грн",     label: "середня вартість конверсії", sub: "" },
];

const FACTS = [
  "від 10 000 грн/міс",
  "перші заявки за 1–2 тижні",
  "без обов'язкового контракту",
];

export default function GAHeroContent() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <p className="text-xl md:text-2xl font-medium text-[#0D0D0D] leading-snug max-w-2xl mb-10">
          Налаштування та ведення реклами в Google для e-commerce і сервісного бізнесу.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
          {FACTS.map((fact) => (
            <div key={fact} className="flex items-center gap-2 text-sm text-[#6B6B6B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5202E] flex-shrink-0" />
              {fact}
            </div>
          ))}
        </div>

        <a
          href="#form"
          className="group inline-flex items-center gap-2 bg-[#E5202E] hover:bg-[#C0111D] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
        >
          Отримати консультацію
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Stats bar — facts only */}
      <div className="border-y border-[#E0E0E0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-[#E0E0E0]">
            {STATS.map(({ value, label, sub }) => (
              <div key={label} className="py-6 px-4 md:px-8">
                <p className="text-2xl md:text-3xl font-semibold text-[#0D0D0D] leading-none mb-2">
                  {value}
                </p>
                <p className="text-xs text-[#6B6B6B] leading-tight">{label}</p>
                {sub && (
                  <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mt-1">{sub}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
