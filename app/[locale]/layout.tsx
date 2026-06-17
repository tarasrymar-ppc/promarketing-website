import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import AnalyticsEvents from "@/components/analytics/AnalyticsEvents";
import CookieConsentBanner from "@/components/analytics/CookieConsentBanner";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";
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

  return {
    title: {
      default: "PRO Marketing# — Маркетинг під ключ в Ужгороді",
      template: "%s | PRO Marketing#",
    },
    description:
      "Маркетингове агентство в Ужгороді з 2019 року. Google Ads, Meta Ads, SEO, SMM, розробка сайтів. Реальні продажі, не просто контент.",
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

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full">
      <body className="min-h-full flex flex-col">
        <GoogleTagManager />
        <AnalyticsEvents />
        <JsonLd data={siteGraphSchema()} />
        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieConsentBanner locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
