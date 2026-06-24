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
import JsonLd from "@/components/seo/JsonLd";
import { routing } from "@/i18n/routing";
import { siteGraphSchema } from "@/lib/schema";
import { isLocale, localizedAlternates, SITE_URL } from "@/lib/seo";
import "../globals.css";

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
    <html lang={locale} className="h-full">
      <head>
        <GoogleTagManagerHead />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleTagManagerBody />
        <GoogleConsentUpdater />
        <AnalyticsEvents />
        <JsonLd data={siteGraphSchema(locale === "en" ? "en" : "uk")} />
        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieConsentBanner locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
