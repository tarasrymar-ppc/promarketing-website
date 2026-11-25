import { MetadataRoute } from "next";
import { BLOG_POSTS, BLOG_SLUGS } from "@/lib/blogPosts";
import { INDUSTRY_SLUGS } from "@/lib/industryPages";
import { localizedLanguages, localizedUrl, LOCALES } from "@/lib/seo";

const STATIC_ROUTES = [
  "",
  "/cases",
  "/about",
  "/contact",
  "/faq",
  "/privacy",
  "/industries",
  "/blog",
  "/lviv",
];

const SERVICE_SLUGS = [
  "google-ads",
  "meta-ads",
  "tiktok-ads",
  "smm",
  "seo",
  "aeo",
  "website-development",
  "logo-branding",
  "complex-marketing",
];

// A fixed date: a lastmod that changes on every request tells Google nothing
// and makes it ignore lastmod for the whole sitemap. Bump it when content changes.
const LAST_MODIFIED = new Date("2026-11-25");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const locale of LOCALES) {
    for (const route of STATIC_ROUTES) {
      entries.push({
        url: localizedUrl(locale, route),
        lastModified: LAST_MODIFIED,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: localizedLanguages(route),
        },
      });
    }

    // Service pages
    for (const slug of SERVICE_SLUGS) {
      entries.push({
        url: localizedUrl(locale, `/services/${slug}`),
        lastModified: LAST_MODIFIED,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: localizedLanguages(`/services/${slug}`),
        },
      });
    }

    // Industry landing pages
    for (const slug of INDUSTRY_SLUGS) {
      entries.push({
        url: localizedUrl(locale, `/industries/${slug}`),
        // Fixed date so lastmod only changes when the content does.
        lastModified: new Date("2026-11-25"),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: localizedLanguages(`/industries/${slug}`),
        },
      });
    }

    // Blog articles
    for (const slug of BLOG_SLUGS) {
      const post = BLOG_POSTS[slug];
      entries.push({
        url: localizedUrl(locale, `/blog/${slug}`),
        lastModified: new Date(post.dateModified ?? post.datePublished),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: localizedLanguages(`/blog/${slug}`),
        },
      });
    }
  }

  return entries;
}
