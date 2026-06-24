import { getLocale } from "next-intl/server";

const content = {
  uk: {
    heading: "Коли буде результат.",
    intro: "Реальний таймлайн для Search кампаній. Без обіцянок.",
    timeline: [
      {
        time: "День 1",
        title: "Кампанії запущені",
        text: "Реклама вже показується у пошуку Google.",
      },
      {
        time: "Тиждень 1–2",
        title: "Перші заявки",
        text: "Search кампанії починають приносити конверсії.",
      },
      {
        time: "Місяць 1–2",
        title: "Стабілізація",
        text: "Виходимо на цільовий CPL або ROAS. Оптимізуємо оголошення і ставки.",
      },
      {
        time: "Місяць 3+",
        title: "Масштабування",
        text: "Додаємо нові кампанії, типи реклами, регіони, аудиторії.",
      },
    ],
  },
  en: {
    heading: "When you'll see results.",
    intro: "A realistic timeline for Search campaigns. No empty promises.",
    timeline: [
      {
        time: "Day 1",
        title: "Campaigns live",
        text: "Your ads are already showing in Google Search.",
      },
      {
        time: "Week 1–2",
        title: "First leads",
        text: "Search campaigns start bringing in conversions.",
      },
      {
        time: "Month 1–2",
        title: "Stabilization",
        text: "We reach your target CPL or ROAS. We optimize ads and bids.",
      },
      {
        time: "Month 3+",
        title: "Scaling",
        text: "We add new campaigns, ad types, regions and audiences.",
      },
    ],
  },
} as const;

export default async function GATimeline() {
  const locale = await getLocale();
  const t = locale === "en" ? content.en : content.uk;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-3">
          {t.heading}
        </h2>
        <p className="text-base text-[#6B6B6B] mb-12 max-w-lg">
          {t.intro}
        </p>

        <div className="divide-y divide-[#E0E0E0] border-y border-[#E0E0E0]">
          {t.timeline.map(({ time, title, text }) => (
            <div
              key={time}
              className="py-8 md:grid md:grid-cols-[200px_1fr] md:gap-16 items-start"
            >
              <p className="text-sm font-semibold text-[#E5202E] mb-2 md:mb-0">
                {time}
              </p>
              <div>
                <p className="text-base font-semibold text-[#0D0D0D] mb-1">
                  {title}
                </p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
