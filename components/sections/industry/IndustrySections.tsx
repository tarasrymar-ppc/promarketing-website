import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { IndustryPageContent } from "@/lib/industryPages";

// Server-rendered blocks used by industry landing pages and blog articles.
// Markup follows the service page sections so the design stays consistent.

const cardHover =
  "transition-[transform,box-shadow] duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] hover:z-10";

export function IndustryChallenges({
  page,
  eyebrow,
}: {
  page: IndustryPageContent;
  eyebrow: string;
}) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
              {eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] max-w-2xl">
              {page.challenges.heading}
            </h2>
          </div>
          <p className="text-base text-[#6B6B6B] max-w-xs leading-relaxed">
            {page.challenges.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">
          {page.challenges.items.map((item) => (
            <div
              key={item.title}
              className={`relative flex flex-col bg-white p-8 md:p-10 ${cardHover}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5202E] mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-[#0D0D0D] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export type RelatedGroup = {
  label: string;
  links: { title: string; href: string }[];
};

export function RelatedLinks({
  heading,
  groups,
}: {
  heading: string;
  groups: RelatedGroup[];
}) {
  const visible = groups.filter((group) => group.links.length > 0);
  if (visible.length === 0) return null;

  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-12">
          {heading}
        </h2>
        <div className={`grid grid-cols-1 gap-10 ${visible.length > 1 ? "md:grid-cols-2" : ""}`}>
          {visible.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
                {group.label}
              </p>
              <ul className="divide-y divide-[#E0E0E0] border-y border-[#E0E0E0]">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between gap-4 py-4 text-base font-medium text-[#0D0D0D] hover:text-[#E5202E] transition-colors duration-200"
                    >
                      {link.title}
                      <ArrowRight
                        size={16}
                        className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
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

export function CardGrid({
  items,
  more,
}: {
  items: { title: string; text: string; href: string; meta?: string }[];
  more: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`group relative flex flex-col bg-[#F4F4F4] p-8 md:p-10 ${cardHover}`}
        >
          {item.meta && (
            <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-3">
              {item.meta}
            </p>
          )}
          <h2 className="text-lg md:text-xl font-semibold text-[#0D0D0D] group-hover:text-[#E5202E] mb-2 leading-snug transition-colors duration-200">
            {item.title}
          </h2>
          <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">{item.text}</p>
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#E5202E]">
            {more}
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  );
}
