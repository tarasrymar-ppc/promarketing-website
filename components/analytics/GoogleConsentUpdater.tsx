"use client";

import { useEffect } from "react";
import {
  COOKIE_CONSENT_EVENT,
  type CookieConsentState,
} from "@/lib/cookieConsent";

export default function GoogleConsentUpdater() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      ((...args: unknown[]) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(args);
      });

    function onConsentUpdated(event: Event) {
      const detail = (event as CustomEvent<{ value: CookieConsentState }>).detail;
      const accepted = detail.value === "accepted";

      window.gtag?.("consent", "update", {
        ad_storage: accepted ? "granted" : "denied",
        analytics_storage: accepted ? "granted" : "denied",
        ad_user_data: accepted ? "granted" : "denied",
        ad_personalization: accepted ? "granted" : "denied",
        functionality_storage: "granted",
        security_storage: "granted",
      });

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: accepted ? "cookie_consent_granted" : "cookie_consent_denied",
        cookie_consent: detail.value ?? "unset",
      });
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, onConsentUpdated);
    return () =>
      window.removeEventListener(COOKIE_CONSENT_EVENT, onConsentUpdated);
  }, []);

  return null;
}
