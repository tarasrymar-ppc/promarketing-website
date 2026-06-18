import Script from "next/script";

const DEFAULT_GTM_ID = "GTM-5NC4V5B3";
const COOKIE_CONSENT_STORAGE_KEY = "pm_cookie_consent_v1";

function getGtmId() {
  return process.env.NEXT_PUBLIC_GTM_ID || DEFAULT_GTM_ID;
}

export function GoogleTagManagerHead() {
  const gtmId = getGtmId();

  return (
    <Script
      id="google-tag-manager"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          var analyticsConsent = 'denied';
          try {
            analyticsConsent = window.localStorage.getItem('${COOKIE_CONSENT_STORAGE_KEY}') === 'accepted'
              ? 'granted'
              : 'denied';
          } catch (error) {}

          gtag('consent', 'default', {
            ad_storage: analyticsConsent,
            analytics_storage: analyticsConsent,
            ad_user_data: analyticsConsent,
            ad_personalization: analyticsConsent,
            functionality_storage: 'granted',
            security_storage: 'granted'
          });

          window.dataLayer.push({
            event: 'cookie_consent_default',
            cookie_consent: analyticsConsent === 'granted' ? 'accepted' : 'denied'
          });

          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `,
      }}
    />
  );
}

export function GoogleTagManagerBody() {
  const gtmId = getGtmId();

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

export default function GoogleTagManager() {
  return (
    <>
      <GoogleTagManagerHead />
      <GoogleTagManagerBody />
    </>
  );
}
