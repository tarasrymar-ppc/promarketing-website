const WITHOUT = [
  "Органічне охоплення — до 5% підписників",
  "Контент бачать ті, хто вже підписаний",
  "Важко залучати нових клієнтів",
];

const WITH = [
  "Контент формує довіру і впізнаваність бренду",
  "Реклама щодня приводить нову аудиторію",
  "Ретаргетинг підігріває тих, хто вже бачив вас",
];

export default function SMMBundle() {
  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
            Чому разом
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-4">
            Контент без реклами —<br className="hidden md:block" /> це 5% охоплення.
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-xl leading-relaxed">
            Алгоритми Facebook та Instagram органічно показують пости лише невеликій частині підписників.
            Щоб соцмережі реально приносили клієнтів — потрібна синергія контенту і реклами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">

          <div className="bg-[#0D0D0D] p-8 md:p-10">
            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-6">
              Тільки SMM без реклами
            </p>
            <ul className="flex flex-col gap-4">
              {WITHOUT.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-white/20 mt-0.5 flex-shrink-0 font-bold text-lg leading-none">×</span>
                  <span className="text-sm text-white/50 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F4F4F4] p-8 md:p-10">
            <p className="text-[10px] text-[#E5202E] font-semibold uppercase tracking-widest mb-6">
              SMM + Meta Ads разом
            </p>
            <ul className="flex flex-col gap-4">
              {WITH.map((item) => (
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
