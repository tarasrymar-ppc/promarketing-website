import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import AnalyticsEvents from "@/components/analytics/AnalyticsEvents";
import CookieConsentBanner from "@/components/analytics/CookieConsentBanner";
import GoogleConsentUpdater from "@/components/analytics/GoogleConsentUpdater";
import {
  GoogleTagManagerBody,
  GoogleTagManagerHead,
} from "@/components/analytics/GoogleTagManager";
import MobileCTABar from "@/components/layout/MobileCTABar";
import JsonLd from "@/components/seo/JsonLd";
import { routing } from "@/i18n/routing";
import { siteGraphSchema } from "@/lib/schema";
import { isLocale, localizedAlternates, SITE_URL } from "@/lib/seo";
import "../globals.css";

const CONSENT_MARKER_SCRIPT = `try{var v=localStorage.getItem("pm_cookie_consent_v1");if(v==="accepted"||v==="rejected")document.documentElement.setAttribute("data-pm-consent",v)}catch(e){}`;

// Pre-render every page for both locales at build time, so visitors get cached
// HTML from the CDN edge instead of a server render in a US region.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uk";

  const meta = {
    uk: {
      default: "PRO Marketing# — Маркетинг під ключ в Ужгороді",
      description:
        "Маркетингове агентство в Ужгороді з 2019 року. Google Ads, Meta Ads, SEO, SMM, розробка сайтів. Реальні продажі, не просто контент.",
    },
    en: {
      default: "PRO Marketing# — Full-service Marketing Agency in Uzhhorod",
      description:
        "Marketing agency in Uzhhorod since 2019. Google Ads, Meta Ads, SEO, SMM, and web development. Real sales, not just content.",
    },
  } as const;

  return {
    title: {
      default: meta[safeLocale].default,
      template: "%s | PRO Marketing#",
    },
    description: meta[safeLocale].description,
    metadataBase: new URL(SITE_URL),
    alternates: localizedAlternates(safeLocale),
    openGraph: {
      siteName: "PRO Marketing#",
      locale: safeLocale === "uk" ? "uk_UA" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "PRO Marketing#",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/og-image.png"],
    },
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
    verification: {
      other: {
        "msvalidate.01": "B04940E5406D20035CF76F182DC4DF3D",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "uk" | "en")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    // suppressHydrationWarning: the inline consent script below may add
    // data-pm-consent to <html> before React hydrates.
    <html lang={locale} className="h-full" suppressHydrationWarning>
      <head>
        <script
          // Runs before first paint: hide the cookie banner for visitors who
          // already chose, so the server-rendered banner never flashes.
          dangerouslySetInnerHTML={{ __html: CONSENT_MARKER_SCRIPT }}
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <GoogleTagManagerHead />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleTagManagerBody />
        <GoogleConsentUpdater />
        <AnalyticsEvents />
        <JsonLd data={siteGraphSchema(locale === "en" ? "en" : "uk")} />
        <NextIntlClientProvider messages={messages}>
          {children}
          <MobileCTABar />
          <CookieConsentBanner locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
