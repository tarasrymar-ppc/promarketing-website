import { ArrowRight } from "lucide-react";

const FACTS = [
  "від 15 000 грн/міс",
  "перші заявки в день запуску",
  "Facebook + Instagram",
];

export default function MetaHero() {
  return (
    <section className="flex flex-col min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-68px)]">

      <div className="border-b border-[#E0E0E0]">
        <div className="max-w-6xl mx-auto px-6">
          <h1
            className="font-semibold tracking-tighter text-[#0D0D0D] leading-none py-6 md:py-8"
            style={{ fontSize: "clamp(56px, 14vw, 180px)" }}
          >
            Meta Ads<span className="text-[#E5202E]">.</span>
          </h1>
        </div>
      </div>

      <div className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-end">

            <p className="text-2xl md:text-4xl font-medium text-[#0D0D0D] leading-snug">
              Таргетована реклама у Facebook та Instagram для бізнесів, яким потрібні клієнти — а не просто охоплення.
            </p>

            <div className="flex flex-col gap-8">
              <p className="text-base text-[#6B6B6B] leading-relaxed max-w-sm">
                Знаходимо вашу аудиторію за інтересами, поведінкою та даними.
                Ретаргетинг, Lookalike, каталоги — все під ваш бізнес.
              </p>
              <a
                href="#form"
                className="group self-start inline-flex items-center gap-2 bg-[#E5202E] hover:bg-[#C0111D] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
              >
                Отримати консультацію
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="border-t border-[#E0E0E0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            {FACTS.map((fact, i) => (
              <div
                key={fact}
                className={`flex items-center gap-2.5 py-4 md:py-5 text-sm text-[#6B6B6B] ${
                  i < FACTS.length - 1
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
