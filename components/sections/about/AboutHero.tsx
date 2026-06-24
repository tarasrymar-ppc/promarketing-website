import { getLocale } from "next-intl/server";

const content = {
  uk: {
    title: "Про нас",
    lead: "Команда, яка бере повну відповідальність за результат вашого маркетингу.",
    sub: "Ми не фрілансери і не одна людина на всі задачі. PRO Marketing# — команда маркетологів в Ужгороді з 12-річним досвідом: вузькі спеціалісти, які працюють разом над кожним проєктом.",
    facts: [
      "12 років досвіду",
      "5–6 спеціалістів на проєкті",
      "Ужгород · Львів · Європа",
    ],
  },
  en: {
    title: "About us",
    lead: "A team that takes full responsibility for the results of your marketing.",
    sub: "We're not freelancers or one person doing everything. PRO Marketing# is a team of marketers in Uzhhorod with 12 years of experience — focused specialists working together on every project.",
    facts: [
      "12 years of experience",
      "5–6 specialists per project",
      "Uzhhorod · Lviv · Europe",
    ],
  },
} as const;

export default async function AboutHero() {
  const locale = await getLocale();
  const t = locale === "en" ? content.en : content.uk;

  return (
    <section className="flex flex-col min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-68px)]">

      <div className="border-b border-[#E0E0E0]">
        <div className="max-w-6xl mx-auto px-6">
          <h1
            className="font-semibold tracking-tighter text-[#0D0D0D] leading-none py-6 md:py-8"
            style={{ fontSize: "clamp(56px, 14vw, 180px)" }}
          >
            {t.title}<span className="text-[#E5202E]">.</span>
          </h1>
        </div>
      </div>

      <div className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-end">

            <p className="text-2xl md:text-4xl font-medium text-[#0D0D0D] leading-snug">
              {t.lead}
            </p>

            <div className="flex flex-col gap-8">
              <p className="text-base text-[#6B6B6B] leading-relaxed max-w-sm">
                {t.sub}
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="border-t border-[#E0E0E0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            {t.facts.map((fact, i) => (
              <div
                key={fact}
                className={`flex items-center gap-2.5 py-4 md:py-5 text-sm text-[#6B6B6B] ${
                  i < t.facts.length - 1
                    ? "border-b md:border-b-0 md:border-r border-[#E0E0E0] md:pr-8"
                    : ""
                } ${i > 0 ? "md:pl-8" : ""}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5202E] flex-shrink-0" />
                {fact}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
