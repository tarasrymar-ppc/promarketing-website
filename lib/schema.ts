import { CONTACT, SOCIAL } from "@/lib/constants";
import { localizedUrl, SITE_URL, type Locale } from "@/lib/seo";

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const localBusinessId = `${SITE_URL}/#localbusiness`;

const BUSINESS_DESCRIPTION = {
  uk: "PRO Marketing# — маркетингове агентство повного циклу в Ужгороді. З 2019 року допомагаємо бізнесу залучати клієнтів і збільшувати продажі через Google Ads, Meta Ads, TikTok Ads, SMM, SEO, AEO та розробку сайтів.",
  en: "PRO Marketing# is a full-service marketing agency in Uzhhorod, Ukraine. Since 2019 we help businesses attract clients and grow sales through Google Ads, Meta Ads, TikTok Ads, SMM, SEO, AEO, and web development.",
} as const;

const GOOGLE_PARTNER_URL = "https://www.google.com/partners/agency?id=7339068295";

// Topics the agency is an authority on. Helps search and AI engines connect
// the brand entity with the services people ask about.
const KNOWS_ABOUT = [
  "Google Ads",
  "Meta Ads",
  "Facebook Ads",
  "Instagram Ads",
  "TikTok Ads",
  "SMM",
  "SEO",
  "Answer Engine Optimization",
  "Website development",
  "Logo design",
  "Branding",
  "Digital marketing",
];

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

const SERVICES_CATALOG = [
  { path: "/services/google-ads", name: { uk: "Налаштування Google Ads", en: "Google Ads management" } },
  { path: "/services/meta-ads", name: { uk: "Таргетована реклама Meta Ads (Facebook, Instagram)", en: "Meta Ads (Facebook, Instagram)" } },
  { path: "/services/tiktok-ads", name: { uk: "Реклама в TikTok", en: "TikTok Ads" } },
  { path: "/services/smm", name: { uk: "SMM — ведення соцмереж", en: "SMM — social media management" } },
  { path: "/services/seo", name: { uk: "SEO-просування сайтів", en: "SEO" } },
  { path: "/services/aeo", name: { uk: "AEO — оптимізація під AI-пошук", en: "AEO — AI search optimization" } },
  { path: "/services/website-development", name: { uk: "Розробка сайтів і лендінгів", en: "Website development" } },
  { path: "/services/logo-branding", name: { uk: "Розробка логотипа та брендинг", en: "Logo & branding" } },
  { path: "/services/complex-marketing", name: { uk: "Комплексний маркетинг під ключ", en: "Full-service marketing" } },
] as const;

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
    sameAs: [SOCIAL.facebook, SOCIAL.linkedin, SOCIAL.google, GOOGLE_PARTNER_URL],
    award: "Google Partner",
    knowsAbout: KNOWS_ABOUT,
    knowsLanguage: ["uk", "en"],
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
    "@type": ["LocalBusiness", "ProfessionalService"],
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "17:30",
      },
    ],
    hasMap: CONTACT.mapUrl,
    knowsAbout: KNOWS_ABOUT,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "uk" ? "Маркетингові послуги" : "Marketing services",
      itemListElement: SERVICES_CATALOG.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name[locale],
          url: localizedUrl(locale, service.path),
        },
      })),
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
  price,
  areaServed,
}: {
  locale: Locale;
  path: string;
  name: string;
  description: string;
  /** Overrides the default Uzhhorod/Zakarpattia area, e.g. for city pages. */
  areaServed?: readonly { "@type": string; name: string }[];
  /** Starting monthly price in UAH, when the page publishes one. */
  price?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${localizedUrl(locale, path)}#service`,
    name,
    description,
    url: localizedUrl(locale, path),
    inLanguage: locale,
    areaServed: areaServed ?? AREA_SERVED[locale],
    provider: {
      "@id": localBusinessId,
    },
    serviceType: name,
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "UAH",
            price,
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price,
              priceCurrency: "UAH",
              unitText: locale === "uk" ? "місяць" : "month",
            },
            url: localizedUrl(locale, path),
          },
        }
      : {}),
  };
}

const HOME_LABEL = { uk: "Головна", en: "Home" } as const;

// BreadcrumbList for inner pages: Home > [parent >] current page.
export function breadcrumbSchema(
  locale: Locale,
  name: string,
  path: string,
  parent?: { name: string; path: string }
) {
  const items = [
    { name: HOME_LABEL[locale], path: "" },
    ...(parent ? [parent] : []),
    { name, path },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: localizedUrl(locale, item.path),
    })),
  };
}

// BlogPosting for articles. The agency is both author and publisher so the
// article is tied to the same entity search and AI engines already know.
export function articleSchema({
  locale,
  path,
  headline,
  description,
  datePublished,
  dateModified,
}: {
  locale: Locale;
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
}) {
  const url = localizedUrl(locale, path);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline,
    description,
    url,
    mainEntityOfPage: url,
    inLanguage: locale,
    datePublished,
    dateModified: dateModified ?? datePublished,
    image: `${SITE_URL}/og-image.png`,
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
    isPartOf: { "@id": websiteId },
  };
}

// ItemList for index pages (blog, industries), so crawlers see the full set.
export function itemListSchema(
  locale: Locale,
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: localizedUrl(locale, item.path),
    })),
  };
}
