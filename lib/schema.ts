import { CONTACT, SOCIAL } from "@/lib/constants";
import { localizedUrl, SITE_URL, type Locale } from "@/lib/seo";

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const localBusinessId = `${SITE_URL}/#localbusiness`;

const BUSINESS_DESCRIPTION =
  "PRO Marketing# — маркетингове агентство повного циклу в Ужгороді. З 2019 року допомагаємо бізнесу залучати клієнтів і збільшувати продажі через Google Ads, Meta Ads, TikTok Ads, SMM, SEO, AEO та розробку сайтів.";

const AREA_SERVED = [
  { "@type": "City", name: "Ужгород" },
  { "@type": "AdministrativeArea", name: "Закарпатська область" },
  { "@type": "Country", name: "Україна" },
];

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: "PRO Marketing#",
    alternateName: "PRO Marketing Agency",
    description: BUSINESS_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    foundingDate: "2019",
    areaServed: AREA_SERVED,
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

export function localBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": localBusinessId,
    name: "PRO Marketing#",
    alternateName: "PRO Marketing Agency",
    description: BUSINESS_DESCRIPTION,
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "$$",
    foundingDate: "2019",
    areaServed: AREA_SERVED,
    sameAs: [SOCIAL.facebook, SOCIAL.linkedin, SOCIAL.google],
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "Ужгород",
      addressRegion: "Закарпатська область",
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

export function siteGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), localBusinessSchema(), websiteSchema()],
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
