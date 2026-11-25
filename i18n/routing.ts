import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["uk", "en"],
  defaultLocale: "uk",
  // Every page lives under an explicit /uk or /en prefix. Unprefixed URLs are
  // permanently redirected to /uk in proxy.ts, so Google never sees a
  // language-dependent temporary redirect (it indexed "/" with the English
  // content and dropped /en as a duplicate of it).
  localeDetection: false,
  // hreflang is already emitted in each page's <head> and in the sitemap.
  // next-intl's extra HTTP Link header pointed x-default at unprefixed URLs
  // that redirect, which contradicted the HTML tags.
  alternateLinks: false,
});
