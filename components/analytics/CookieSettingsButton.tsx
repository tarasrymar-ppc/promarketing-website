"use client";

import { clearCookieConsent } from "@/lib/cookieConsent";

export default function CookieSettingsButton({ locale }: { locale: string }) {
  const isEnglish = locale === "en";

  return (
    <button
      type="button"
      onClick={clearCookieConsent}
      className="mb-12 inline-flex h-11 items-center justify-center rounded-[6px] bg-[#0D0D0D] px-5 text-sm font-semibold text-white transition hover:bg-[#E5202E] focus:outline-none focus:ring-2 focus:ring-[#E5202E]/40"
    >
      {isEnglish ? "Change cookie choice" : "Змінити вибір cookies"}
    </button>
  );
}
