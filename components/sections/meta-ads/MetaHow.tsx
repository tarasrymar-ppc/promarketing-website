import { getLocale } from "next-intl/server";

const content = {
  uk: {
    eyebrow: "Як це працює",
    heading: "Meta Ads vs Google Ads",
    intro: "Різні інструменти — різна логіка. Ось у чому суть.",
    items: [
      {
        label: "01",
        title: "Ви знаходите людей — не чекаєте",
        text: "У Google Ads люди самі шукають ваш продукт. У Meta Ads ви показуєте рекламу тим, хто ще не шукав — але точно зацікавлений. Таргетинг по інтересах, поведінці, віку та локації.",
      },
      {
        label: "02",
        title: "Facebook, Instagram і Threads — одночасно",
        text: "Один рекламний кабінет охоплює обидва майданчики. Стрічка, Stories, Reels, Messenger — реклама там, де ваша аудиторія проводить час щодня.",
      },
      {
        label: "03",
        title: "Ретаргетинг і Lookalike",
        text: "Повертаємо тих, хто вже був на вашому сайті або взаємодіяв з рекламою. Знаходимо нових клієнтів, схожих на ваших найкращих — через Lookalike аудиторії.",
      },
    ],
  },
  en: {
    eyebrow: "How it works",
    heading: "Meta Ads vs Google Ads",
    intro: "Different tools — different logic. Here's the essence.",
    items: [
      {
        label: "01",
        title: "You reach people — you don't wait",
        text: "On Google Ads, people search for your product themselves. On Meta Ads, you show ads to those who aren't searching yet — but are clearly interested. Targeting by interests, behavior, age and location.",
      },
      {
        label: "02",
        title: "Facebook, Instagram and Threads — all at once",
        text: "One ad account covers both platforms. Feed, Stories, Reels, Messenger — ads where your audience spends time every day.",
      },
      {
        label: "03",
        title: "Retargeting and Lookalike",
        text: "We bring back those who already visited your site or engaged with your ads. We find new customers similar to your best ones — through Lookalike audiences.",
      },
    ],
  },
} as const;

export default async function MetaHow() {
  const locale = await getLocale();
  const t = locale === "en" ? content.en : content.uk;

  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
              {t.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D]">
              {t.heading}
            </h2>
          </div>
          <p className="text-base text-[#6B6B6B] max-w-xs leading-relaxed">
            {t.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">
          {t.items.map((item) => (
            <div key={item.label} className="bg-[#F4F4F4] p-8 md:p-10">
              <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-4">
                {item.label}
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-[#0D0D0D] mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
