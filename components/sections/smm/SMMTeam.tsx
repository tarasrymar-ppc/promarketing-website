const MEMBERS = [
  {
    role: "Стратег і таргетолог",
    name: "Тетяна Басараб",
    description: "Керує проєктом, розробляє стратегію і відповідає за рекламні кампанії. 12+ років у маркетингу.",
  },
  {
    role: "Копірайтер",
    name: "Під вашу нішу",
    description: "Пише тексти, які звучать як ваш бренд. Розуміє аудиторію і мову вашого бізнесу.",
  },
  {
    role: "Дизайнер",
    name: "Візуальна концепція",
    description: "Розробляє креативи для реклами, оформляє сторінку і будує єдину візуальну мову бренду.",
  },
  {
    role: "Контент-мейкер",
    name: "Зйомка і продакшн",
    description: "Знімає фото та відео під ваш продукт або послугу. Контент для постів, Stories і реклами.",
  },
];

export default function SMMTeam() {
  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
              Команда
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D]">
              Хто працює над вашим проєктом
            </h2>
          </div>
          <p className="text-base text-[#6B6B6B] max-w-xs leading-relaxed">
            Не один фрілансер — а чотири спеціалісти під одне завдання.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">
          {MEMBERS.map((member, i) => (
            <div key={member.role} className="bg-[#F4F4F4] p-8 flex flex-col">
              <p className="text-[10px] text-[#E5202E] font-semibold uppercase tracking-widest mb-4">
                0{i + 1}
              </p>
              <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-2">
                {member.role}
              </p>
              <p className="text-lg font-semibold text-[#0D0D0D] mb-3 leading-snug">
                {member.name}
              </p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
