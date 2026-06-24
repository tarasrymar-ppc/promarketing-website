import { getLocale } from "next-intl/server";

const content = {
  uk: {
    eyebrow: "Чому разом",
    headingLine1: "Контент без реклами —",
    headingLine2: "це 5% охоплення.",
    intro: "Алгоритми Facebook та Instagram органічно показують пости лише невеликій частині підписників. Щоб соцмережі реально приносили клієнтів — потрібна синергія контенту і реклами.",
    withoutLabel: "Тільки SMM без реклами",
    withLabel: "SMM + Meta Ads разом",
    without: [
      "Органічне охоплення — до 5% підписників",
      "Контент бачать ті, хто вже підписаний",
      "Важко залучати нових клієнтів",
    ],
    with: [
      "Контент формує довіру і впізнаваність бренду",
      "Реклама щодня приводить нову аудиторію",
      "Ретаргетинг підігріває тих, хто вже бачив вас",
    ],
  },
  en: {
    eyebrow: "Why together",
    headingLine1: "Content without ads —",
    headingLine2: "that's 5% reach.",
    intro: "Facebook and Instagram algorithms organically show posts to only a small share of your followers. For social media to actually bring in clients, you need the synergy of content and advertising.",
    withoutLabel: "SMM only, no ads",
    withLabel: "SMM + Meta Ads together",
    without: [
      "Organic reach — up to 5% of followers",
      "Only existing followers see your content",
      "Hard to attract new clients",
    ],
    with: [
      "Content builds trust and brand recognition",
      "Ads bring in new audiences every day",
      "Retargeting warms up those who've already seen you",
    ],
  },
} as const;

export default async function SMMBundle() {
  const locale = await getLocale();
  const t = locale === "en" ? content.en : content.uk;

  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
            {t.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-4">
            {t.headingLine1}<br className="hidden md:block" /> {t.headingLine2}
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-xl leading-relaxed">
            {t.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">

          <div className="bg-[#0D0D0D] p-8 md:p-10">
            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-6">
              {t.withoutLabel}
            </p>
            <ul className="flex flex-col gap-4">
              {t.without.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-white/20 mt-0.5 flex-shrink-0 font-bold text-lg leading-none">×</span>
                  <span className="text-sm text-white/50 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F4F4F4] p-8 md:p-10">
            <p className="text-[10px] text-[#E5202E] font-semibold uppercase tracking-widest mb-6">
              {t.withLabel}
            </p>
            <ul className="flex flex-col gap-4">
              {t.with.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#E5202E] mt-0.5 flex-shrink-0 font-bold">·</span>
                  <span className="text-sm text-[#0D0D0D] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
