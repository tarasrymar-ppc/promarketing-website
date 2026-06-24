import { getLocale } from "next-intl/server";

const content = {
  uk: {
    heading: "Хто веде ваш акаунт.",
    role: "Таргетолог",
    name: "Тетяна Басараб",
    bio: "Особисто керує всіма процесами по таргетованій рекламі. Відповідає за стратегію, налаштування кампаній та результат. Пряма комунікація — без посередників.",
    credentials: [
      { label: "Досвід", value: "12+ років у маркетингу" },
      { label: "Платформи", value: "Facebook · Instagram · Messenger" },
      { label: "Формати", value: "Lead Ads · Каталоги · Ретаргетинг · Lookalike" },
    ],
  },
  en: {
    heading: "Who runs your account.",
    role: "Media buyer",
    name: "Tetiana Basarab",
    bio: "Personally manages every part of your targeted advertising. Responsible for strategy, campaign setup and results. Direct communication — no middlemen.",
    credentials: [
      { label: "Experience", value: "12+ years in marketing" },
      { label: "Platforms", value: "Facebook · Instagram · Messenger" },
      { label: "Formats", value: "Lead Ads · Catalogs · Retargeting · Lookalike" },
    ],
  },
} as const;

export default async function MetaSpecialist() {
  const locale = await getLocale();
  const t = locale === "en" ? content.en : content.uk;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-12">
          {t.heading}
        </h2>

        <div className="bg-[#F4F4F4] border border-[#E0E0E0] rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

            <div>
              <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-3">
                {t.role}
              </p>
              <p className="text-3xl md:text-4xl font-semibold text-[#0D0D0D] mb-4 leading-tight">
                {t.name}
              </p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-md">
                {t.bio}
              </p>
            </div>

            <div className="flex flex-col gap-px bg-[#E0E0E0] rounded-xl overflow-hidden">
              {t.credentials.map(({ label, value }) => (
                <div key={label} className="bg-[#F4F4F4] px-6 py-5">
                  <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-[#0D0D0D]">{value}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
