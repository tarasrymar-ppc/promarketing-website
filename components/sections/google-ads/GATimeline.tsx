const TIMELINE = [
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
];

export default function GATimeline() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-3">
          Коли буде результат.
        </h2>
        <p className="text-base text-[#6B6B6B] mb-12 max-w-lg">
          Реальний таймлайн для Search кампаній. Без обіцянок.
        </p>

        <div className="divide-y divide-[#E0E0E0] border-y border-[#E0E0E0]">
          {TIMELINE.map(({ time, title, text }) => (
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
