import type { Metadata } from "next";

export const SITE_URL = "https://promarketing-agency.com.ua";
export const LOCALES = ["uk", "en"] as const;
export const DEFAULT_LOCALE = "uk";

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
    languages: localizedLanguages(path),
  };
}

// hreflang map shared by page metadata and the sitemap. `x-default` points to
// the default (Ukrainian) version for visitors whose language matches neither.
export function localizedLanguages(path = ""): Record<string, string> {
  return {
    ...Object.fromEntries(
      LOCALES.map((item) => [item, localizedUrl(item, path)])
    ),
    "x-default": localizedUrl(DEFAULT_LOCALE, path),
  };
}
