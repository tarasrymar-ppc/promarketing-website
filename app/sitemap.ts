import { MetadataRoute } from "next";

const BASE_URL = "https://promarketing-website.vercel.app";

const LOCALES = ["uk", "en"];

const STATIC_ROUTES = [
  "",
  "/cases",
  "/about",
  "/contact",
  "/faq",
];

const SERVICE_SLUGS = [
  "google-ads",
  "meta-ads",
  "tiktok-ads",
  "smm",
  "seo",
  "aeo",
  "website-development",
  "photo-video",
  "complex-marketing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const locale of LOCALES) {
    for (const route of STATIC_ROUTES) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${BASE_URL}/${l}${route}`])
          ),
        },
      });
    }

    // Service pages
    for (const slug of SERVICE_SLUGS) {
      entries.push({
        url: `${BASE_URL}/${locale}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${BASE_URL}/${l}/services/${slug}`])
          ),
        },
      });
    }
  }

  return entries;
}
