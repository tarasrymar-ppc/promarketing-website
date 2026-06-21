import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const handleI18n = createMiddleware(routing);

// Resolve the locale purely from the visitor's country.
// Vercel injects `x-vercel-ip-country` automatically on every request.
// Ukraine -> Ukrainian; every other country (and unknown, e.g. localhost) -> English.
function geoLocale(request: NextRequest): (typeof routing.locales)[number] {
  const country = request.headers.get("x-vercel-ip-country");
  return country === "UA" ? "uk" : "en";
}

export default function proxy(request: NextRequest) {
  // Seed next-intl's cookie-based detection with the geo locale so the country
  // always decides the language at the unprefixed entry point ("/"), taking
  // priority over the browser's Accept-Language header.
  // Explicit /uk and /en URLs still win, so the in-page language switcher works.
  request.cookies.set("NEXT_LOCALE", geoLocale(request));
  return handleI18n(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
