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
    title: "Режим згоди на аналітику",
    body:
      "Ми не запускаємо аналітику без вашого дозволу. Якщо погодитесь, ми збиратимемо анонімні події сайту: які сторінки переглядають, на які кнопки натискають і чи працюють форми. Це допомагає покращувати сайт і рекламу. Дані з форм в аналітику не передаємо.",
    accept: "Дозволити аналітику",
    reject: "Лише необхідні",
    privacy: "Політика конфіденційності",
  },
  en: {
    title: "Analytics consent mode",
    body:
      "We do not run analytics without your permission. If you agree, we collect anonymous website events: which pages people view, which buttons they click, and whether forms work. This helps us improve the website and advertising. Form data is not sent to analytics.",
    accept: "Allow analytics",
    reject: "Necessary only",
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
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-4xl rounded-[8px] border border-[#2B2B2B] bg-[#0D0D0D] text-white shadow-2xl"
      role="dialog"
      aria-live="polite"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-6">
        <div className="max-w-2xl">
          <p id="cookie-consent-title" className="text-base font-semibold tracking-tight">{text.title}</p>
          <p id="cookie-consent-description" className="mt-2 text-sm leading-relaxed text-white/70">
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
            className="h-11 rounded-[6px] border border-white/20 px-5 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            {text.reject}
          </button>
          <button
            type="button"
            onClick={acceptCookies}
            className="h-11 rounded-[6px] bg-[#E5202E] px-5 text-sm font-semibold text-white transition hover:bg-[#C0111D] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
          >
            {text.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
