import { ArrowRight } from "lucide-react";
import type { ServicePageContent } from "@/lib/servicePages";
import PageTitle from "@/components/common/PageTitle";

// Server-rendered sections for the data-driven service pages. Markup and
// classes mirror the Google Ads page so all service pages share one design.

const cardHover =
  "transition-[transform,box-shadow] duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] hover:z-10";

type Labels = {
  cta: string;
  deliverablesEyebrow: string;
  deliverablesHeading: string;
  processEyebrow: string;
  processHeading: string;
};

export function ServiceHero({
  page,
  labels,
}: {
  page: ServicePageContent;
  labels: Labels;
}) {
  return (
    <section className="flex flex-col min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-68px)]">

      {/* Editorial H1 */}
      <div className="border-b border-[#E0E0E0]">
        <div className="max-w-6xl mx-auto px-6">
          <PageTitle title={page.name} keyword={page.h1} />
        </div>
      </div>

      {/* Main content — fills remaining space */}
      <div className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-end">

            <p className="text-2xl md:text-4xl font-medium text-[#0D0D0D] leading-snug">
              {page.lead}
            </p>

            <div className="flex flex-col gap-8">
              <p className="text-base text-[#6B6B6B] leading-relaxed max-w-sm">
                {page.sub}
              </p>
              <a
                href="#form"
                className="group self-start inline-flex items-center gap-2 bg-[#E5202E] hover:bg-[#C0111D] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
              >
                {labels.cta}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom facts strip */}
      <div className="border-t border-[#E0E0E0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            {page.facts.map((fact, i) => (
              <div
                key={fact}
                className={`flex items-center gap-2.5 py-4 md:py-5 text-sm text-[#6B6B6B] ${
                  i < page.facts.length - 1
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

export function ServiceDeliverables({
  page,
  labels,
}: {
  page: ServicePageContent;
  labels: Labels;
}) {
  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
              {labels.deliverablesEyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D]">
              {labels.deliverablesHeading}
            </h2>
          </div>
          <p className="text-base text-[#6B6B6B] max-w-xs leading-relaxed">
            {page.deliverables.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">
          {page.deliverables.items.map((item, i) => (
            <div
              key={item.title}
              className={`relative flex flex-col justify-center bg-[#F4F4F4] p-8 md:p-10 ${cardHover}`}
            >
              <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-3">
                0{i + 1}
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-[#0D0D0D] mb-2 leading-snug">
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

export function ServiceProcess({
  page,
  labels,
}: {
  page: ServicePageContent;
  labels: Labels;
}) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
              {labels.processEyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D]">
              {labels.processHeading}
            </h2>
          </div>
          <p className="text-base text-[#6B6B6B] max-w-xs leading-relaxed">
            {page.process.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">
          {page.process.steps.map((step) => (
            <div
              key={step.label}
              className={`relative flex flex-col bg-white p-8 md:p-10 ${cardHover}`}
            >
              <p className="text-[10px] text-[#E5202E] font-semibold uppercase tracking-widest mb-4">
                {step.label}
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-[#0D0D0D] mb-5 leading-snug">
                {step.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[#6B6B6B] leading-relaxed"
                  >
                    <span className="text-[#E5202E] mt-0.5 flex-shrink-0 font-bold">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export function ServiceTimeline({ page }: { page: ServicePageContent }) {
  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-3">
          {page.timeline.heading}
        </h2>
        <p className="text-base text-[#6B6B6B] mb-12 max-w-lg">
          {page.timeline.intro}
        </p>

        <div className="divide-y divide-[#E0E0E0] border-y border-[#E0E0E0]">
          {page.timeline.items.map(({ time, title, text }) => (
            <div
              key={time}
              className="py-8 md:grid md:grid-cols-[200px_1fr] md:gap-16 items-start"
            >
              <p className="text-sm font-semibold text-[#E5202E] mb-2 md:mb-0">
                {time}
              </p>
              <div>
                <p className="text-base font-semibold text-[#0D0D0D] mb-1">
                  {title}
                </p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
