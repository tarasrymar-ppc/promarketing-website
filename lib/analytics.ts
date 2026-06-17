"use client";

import { hasAnalyticsConsent } from "@/lib/cookieConsent";

type EventProperties = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, properties: EventProperties = {}) {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    page_location: window.location.href,
    page_path: window.location.pathname,
    ...properties,
  });
}
