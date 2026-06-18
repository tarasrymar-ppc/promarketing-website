"use client";

import { useTranslations } from "next-intl";

function MarqueeRow({
  items,
  reverse = false,
  duration,
}: {
  items: string[];
  reverse?: boolean;
  duration: number;
}) {
  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ width: "max-content", animationDuration: `${duration}s` }}
      >
        {repeated.map((text, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            <span className="text-base md:text-lg font-medium text-white/70 whitespace-nowrap px-6">
              {text}
            </span>
            <span className="text-white/20 text-sm select-none">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Problem() {
  const t = useTranslations("problem");
  const row1 = t.raw("row1") as string[];
  const row2 = t.raw("row2") as string[];

  return (
    <section className="py-16 md:py-20 bg-[#0D0D0D] overflow-hidden">

      {/* Label */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <p className="text-5xl md:text-6xl font-semibold tracking-tight">
          <span className="text-white">{t("heading")}</span>
          <span className="text-[#E5202E]">?</span>
        </p>
      </div>

      {/* Marquee rows — different speeds */}
      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} duration={50} />
        <MarqueeRow items={row2} reverse duration={38} />
      </div>

      {/* Closing */}
      <div className="max-w-6xl mx-auto px-6 mt-14 text-center">
        <p className="text-xl md:text-2xl text-white/40 leading-snug">
          {t("closing_text")}{" "}
          <span className="text-white font-medium">
            {t("closing_accent")}
          </span>
        </p>
      </div>

    </section>
  );
}
