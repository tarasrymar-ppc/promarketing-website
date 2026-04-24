const ITEMS = [
  {
    label: "01",
    title: "Ви знаходите людей — не чекаєте",
    text: "У Google Ads люди самі шукають ваш продукт. У Meta Ads ви показуєте рекламу тим, хто ще не шукав — але точно зацікавлений. Таргетинг по інтересах, поведінці, віку та локації.",
  },
  {
    label: "02",
    title: "Facebook і Instagram — одночасно",
    text: "Один рекламний кабінет охоплює обидва майданчики. Стрічка, Stories, Reels, Messenger — реклама там, де ваша аудиторія проводить час щодня.",
  },
  {
    label: "03",
    title: "Ретаргетинг і Lookalike",
    text: "Повертаємо тих, хто вже був на вашому сайті або взаємодіяв з рекламою. Знаходимо нових клієнтів, схожих на ваших найкращих — через Lookalike аудиторії.",
  },
];

export default function MetaHow() {
  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
              Як це працює
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D]">
              Meta Ads vs Google Ads
            </h2>
          </div>
          <p className="text-base text-[#6B6B6B] max-w-xs leading-relaxed">
            Різні інструменти — різна логіка. Ось у чому суть.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">
          {ITEMS.map((item) => (
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
