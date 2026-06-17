"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  type CookieConsentState,
  getCookieConsent,
  setCookieConsent,
} from "@/lib/cookieConsent";
import { trackEvent } from "@/lib/analytics";

type Locale = "uk" | "en";

const copy: Record<
  Locale,
  {
    title: string;
    body: string;
    accept: string;
    reject: string;
    privacy: string;
  }
> = {
  uk: {
    title: "Cookies та аналітика",
    body:
      "Аналітика та маркетингові теги через Google Tag Manager працюють тільки після вашої згоди.",
    accept: "Прийняти",
    reject: "Відхилити",
    privacy: "Політика конфіденційності",
  },
  en: {
    title: "Cookies and analytics",
    body:
      "Analytics and marketing tags through Google Tag Manager run only after your consent.",
    accept: "Accept",
    reject: "Reject",
    privacy: "Privacy Policy",
  },
};

export default function CookieConsentBanner({ locale }: { locale: string }) {
  const safeLocale: Locale = locale === "en" ? "en" : "uk";
  const text = copy[safeLocale];
  const [consent, setConsent] = useState<CookieConsentState | "loading">(
    "loading"
  );

  useEffect(() => {
    setConsent(getCookieConsent());

    function onConsentUpdated(event: Event) {
      const detail = (event as CustomEvent<{ value: CookieConsentState }>).detail;
      setConsent(detail.value);
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, onConsentUpdated);
    return () =>
      window.removeEventListener(COOKIE_CONSENT_EVENT, onConsentUpdated);
  }, []);

  if (consent !== null) return null;

  function acceptCookies() {
    setCookieConsent("accepted");
    trackEvent("cookie_consent_accepted", {
      consent_choice: "accepted",
    });
  }

  function rejectCookies() {
    setCookieConsent("rejected");
  }

  return (
    <div
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-4xl rounded-[8px] border border-[#2B2B2B] bg-[#0D0D0D] text-white shadow-2xl md:inset-x-4 md:bottom-4"
      role="dialog"
      aria-live="polite"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="flex flex-col gap-3 p-3 md:flex-row md:items-center md:justify-between md:gap-5 md:p-6">
        <div className="max-w-2xl">
          <p id="cookie-consent-title" className="text-sm font-semibold tracking-tight md:text-base">{text.title}</p>
          <p id="cookie-consent-description" className="mt-1 text-xs leading-relaxed text-white/70 md:mt-2 md:text-sm">
            {text.body}{" "}
            <Link
              href={`/${safeLocale}/privacy`}
              className="font-medium text-white underline decoration-[#E5202E] underline-offset-4 transition hover:text-[#FF3B35]"
            >
              {text.privacy}
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:flex md:shrink-0">
          <button
            type="button"
            onClick={rejectCookies}
            className="h-10 rounded-[6px] border border-white/20 px-4 text-xs font-semibold text-white transition hover:border-white/45 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 md:h-11 md:px-5 md:text-sm"
          >
            {text.reject}
          </button>
          <button
            type="button"
            onClick={acceptCookies}
            className="h-10 rounded-[6px] bg-[#E5202E] px-4 text-xs font-semibold text-white transition hover:bg-[#C0111D] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] md:h-11 md:px-5 md:text-sm"
          >
            {text.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
