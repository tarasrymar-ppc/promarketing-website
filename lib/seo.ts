import type { Metadata } from "next";

export const SITE_URL = "https://promarketing-agency.com.ua";
export const LOCALES = ["uk", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export function isLocale(locale: string): locale is Locale {
  return (LOCALES as readonly string[]).includes(locale);
}

export function localizedUrl(locale: Locale, path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}/${locale}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function localizedAlternates(
  locale: Locale,
  path = ""
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: localizedUrl(locale, path),
    languages: Object.fromEntries(
      LOCALES.map((item) => [item, localizedUrl(item, path)])
    ),
  };
}
