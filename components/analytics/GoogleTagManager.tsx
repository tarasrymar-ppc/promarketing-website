"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  type CookieConsentState,
  getCookieConsent,
} from "@/lib/cookieConsent";

export default function GoogleTagManager() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      ((...args: unknown[]) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(args);
      });

    window.gtag("consent", "default", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      functionality_storage: "granted",
      security_storage: "granted",
    });

    setHasConsent(getCookieConsent() === "accepted");

    function onConsentUpdated(event: Event) {
      const detail = (event as CustomEvent<{ value: CookieConsentState }>).detail;
      const accepted = detail.value === "accepted";

      setHasConsent(accepted);
      window.gtag?.("consent", "update", {
        ad_storage: accepted ? "granted" : "denied",
        analytics_storage: accepted ? "granted" : "denied",
        ad_user_data: accepted ? "granted" : "denied",
        ad_personalization: accepted ? "granted" : "denied",
        functionality_storage: "granted",
        security_storage: "granted",
      });
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, onConsentUpdated);
    return () =>
      window.removeEventListener(COOKIE_CONSENT_EVENT, onConsentUpdated);
  }, []);

  if (!gtmId || !hasConsent) return null;

  return (
    <>
      <Script id="google-consent-update" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'update', {
            ad_storage: 'granted',
            analytics_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
            functionality_storage: 'granted',
            security_storage: 'granted'
          });
          window.dataLayer.push({
            event: 'cookie_consent_granted',
            cookie_consent: 'accepted'
          });
        `}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}
      </Script>
    </>
  );
}
