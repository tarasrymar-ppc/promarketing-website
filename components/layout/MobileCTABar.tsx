"use client";

import { ArrowRight, Phone } from "lucide-react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { CONTACT } from "@/lib/constants";

const copy = {
  uk: { request: "Залишити заявку", call: "Подзвонити" },
  en: { request: "Leave a request", call: "Call us" },
} as const;

// Sticky call-to-action bar for phones. It slides in after the first screen
// (CSS scroll-driven animation, `.mobile-cta-bar` in app/globals.css) and
// points to the form on the current page when there is one.
export default function MobileCTABar() {
  const locale = useLocale() === "en" ? "en" : "uk";
  const pathname = usePathname();
  const t = copy[locale];

  if (pathname === "/contact" || pathname === "/privacy") return null;

  const hasForm = pathname.startsWith("/services/") || pathname.startsWith("/industries/");
  const hasContactSection = pathname === "/" || pathname === "/about";
  const anchor = hasForm ? "#form" : hasContactSection ? "#contact" : null;
  const requestClass =
    "flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-[#E5202E] active:bg-[#C0111D] text-white text-sm font-semibold";

  return (
    <>
      <div aria-hidden="true" className="h-[76px] md:hidden bg-[#0D0D0D]" />
      <div className="mobile-cta-bar md:hidden fixed inset-x-0 bottom-0 z-40 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] bg-white/90 backdrop-blur-md border-t border-[#E0E0E0]">
        <div className="flex gap-2">
          {anchor ? (
            <a href={anchor} className={requestClass}>
              {t.request}
              <ArrowRight size={15} />
            </a>
          ) : (
            <Link href="/contact" className={requestClass}>
              {t.request}
              <ArrowRight size={15} />
            </Link>
          )}
          <a
            href={`tel:${CONTACT.phone}`}
            aria-label={t.call}
            className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full border border-[#0D0D0D] text-[#0D0D0D] text-sm font-semibold"
          >
            <Phone size={16} />
            {t.call}
          </a>
        </div>
      </div>
    </>
  );
}
