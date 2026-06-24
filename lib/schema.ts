import { CONTACT, SOCIAL } from "@/lib/constants";
import { localizedUrl, SITE_URL, type Locale } from "@/lib/seo";

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const localBusinessId = `${SITE_URL}/#localbusiness`;

const BUSINESS_DESCRIPTION = {
  uk: "PRO Marketing# — маркетингове агентство повного циклу в Ужгороді. З 2019 року допомагаємо бізнесу залучати клієнтів і збільшувати продажі через Google Ads, Meta Ads, TikTok Ads, SMM, SEO, AEO та розробку сайтів.",
  en: "PRO Marketing# is a full-service marketing agency in Uzhhorod, Ukraine. Since 2019 we help businesses attract clients and grow sales through Google Ads, Meta Ads, TikTok Ads, SMM, SEO, AEO, and web development.",
} as const;

const AREA_SERVED = {
  uk: [
    { "@type": "City", name: "Ужгород" },
    { "@type": "AdministrativeArea", name: "Закарпатська область" },
    { "@type": "Country", name: "Україна" },
  ],
  en: [
    { "@type": "City", name: "Uzhhorod" },
    { "@type": "AdministrativeArea", name: "Zakarpattia Oblast" },
    { "@type": "Country", name: "Ukraine" },
  ],
} as const;

const ADDRESS = {
  uk: {
    streetAddress: CONTACT.address,
    addressLocality: "Ужгород",
    addressRegion: "Закарпатська область",
  },
  en: {
    streetAddress: "Fedyntsia St., 2, 3rd floor, office 6",
    addressLocality: "Uzhhorod",
    addressRegion: "Zakarpattia Oblast",
  },
} as const;

export function organizationSchema(locale: Locale) {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: "PRO Marketing#",
    alternateName: "PRO Marketing Agency",
    description: BUSINESS_DESCRIPTION[locale],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    foundingDate: "2019",
    areaServed: AREA_SERVED[locale],
    sameAs: [SOCIAL.facebook, SOCIAL.linkedin, SOCIAL.google],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phone,
      email: CONTACT.email,
      contactType: "customer service",
      availableLanguage: ["uk", "en"],
    },
  };
}

export function localBusinessSchema(locale: Locale) {
  return {
    "@type": "LocalBusiness",
    "@id": localBusinessId,
    name: "PRO Marketing#",
    alternateName: "PRO Marketing Agency",
    description: BUSINESS_DESCRIPTION[locale],
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "$$",
    foundingDate: "2019",
    areaServed: AREA_SERVED[locale],
    sameAs: [SOCIAL.facebook, SOCIAL.linkedin, SOCIAL.google],
    address: {
      "@type": "PostalAddress",
      ...ADDRESS[locale],
      addressCountry: "UA",
    },
    parentOrganization: {
      "@id": organizationId,
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: "PRO Marketing#",
    url: SITE_URL,
    publisher: {
      "@id": organizationId,
    },
    inLanguage: ["uk", "en"],
  };
}

export function siteGraphSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(locale),
      localBusinessSchema(locale),
      websiteSchema(),
    ],
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema({
  locale,
  path,
  name,
  description,
}: {
  locale: Locale;
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: localizedUrl(locale, path),
    areaServed: {
      "@type": "Country",
      name: "Ukraine",
    },
    provider: {
      "@id": organizationId,
    },
    serviceType: name,
  };
}
