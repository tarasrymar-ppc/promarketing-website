import { CONTACT, SOCIAL } from "@/lib/constants";
import { localizedUrl, SITE_URL, type Locale } from "@/lib/seo";

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const localBusinessId = `${SITE_URL}/#localbusiness`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: "PRO Marketing#",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [SOCIAL.instagram, SOCIAL.facebook],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phone,
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
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: CONTACT.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "Ужгород",
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
