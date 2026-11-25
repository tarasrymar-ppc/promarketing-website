import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const handleI18n = createMiddleware(routing);

const LOCALE_PREFIX = new RegExp(`^/(${routing.locales.join("|")})(/|$)`);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Unprefixed URLs ("/", "/services/seo", ...) have no content of their own.
  // Send them permanently (308) to the Ukrainian version so search engines
  // consolidate signals on the /uk URL instead of keeping the unprefixed one.
  if (!LOCALE_PREFIX.test(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url, 308);
  }

  return handleI18n(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
