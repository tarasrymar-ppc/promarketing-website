const CREDENTIALS = [
  { label: "Досвід", value: "12+ років у маркетингу" },
  { label: "Платформи", value: "Facebook · Instagram · Messenger" },
  { label: "Формати", value: "Lead Ads · Каталоги · Ретаргетинг · Lookalike" },
];

export default function MetaSpecialist() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-12">
          Хто веде ваш акаунт.
        </h2>

        <div className="bg-[#F4F4F4] border border-[#E0E0E0] rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

            <div>
              <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-3">
                Таргетолог
              </p>
              <p className="text-3xl md:text-4xl font-semibold text-[#0D0D0D] mb-4 leading-tight">
                Тетяна Басараб
              </p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-md">
                Особисто керує всіма процесами по таргетованій рекламі.
                Відповідає за стратегію, налаштування кампаній та результат.
                Пряма комунікація — без посередників.
              </p>
            </div>

            <div className="flex flex-col gap-px bg-[#E0E0E0] rounded-xl overflow-hidden">
              {CREDENTIALS.map(({ label, value }) => (
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
