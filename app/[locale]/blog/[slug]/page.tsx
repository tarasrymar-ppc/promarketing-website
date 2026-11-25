import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceFAQ from "@/components/sections/service/ServiceFAQ";
import { RelatedLinks } from "@/components/sections/industry/IndustrySections";
import JsonLd from "@/components/seo/JsonLd";
import { Link } from "@/i18n/navigation";
import { BLOG_LABELS, BLOG_POSTS, SERVICE_LINK_NAMES } from "@/lib/blogPosts";
import { INDUSTRY_PAGES } from "@/lib/industryPages";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { isLocale, localizedAlternates } from "@/lib/seo";
import { setRequestLocale } from "next-intl/server";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = BLOG_POSTS[slug];
  if (!post) return {};
  const safeLocale = isLocale(locale) ? locale : "uk";
  const content = post[safeLocale];
  return {
    title: content.metaTitle,
    description: content.description,
    alternates: localizedAlternates(safeLocale, `/blog/${slug}`),
    openGraph: {
      type: "article",
      title: content.metaTitle,
      description: content.description,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PRO Marketing#" }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = BLOG_POSTS[slug];
  if (!post) notFound();

  const safeLocale = isLocale(locale) ? locale : "uk";
  const content = post[safeLocale];
  const labels = BLOG_LABELS[safeLocale];
  const path = `/blog/${slug}`;
  const date = new Intl.DateTimeFormat(safeLocale === "uk" ? "uk-UA" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(post.datePublished));

  return (
    <>
      <JsonLd
        data={articleSchema({
          locale: safeLocale,
          path,
          headline: content.title,
          description: content.description,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
        })}
      />
      <JsonLd data={faqSchema(content.faq)} />
      <JsonLd
        data={breadcrumbSchema(safeLocale, content.title, path, {
          name: labels.name,
          path: "/blog",
        })}
      />
      <Header />
      <main className="bg-white pt-16 md:pt-[68px]">
        <article>
          {/* Title */}
          <header className="border-b border-[#E0E0E0]">
            <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
              <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#6B6B6B]">
                <Link href="/blog" className="hover:text-[#E5202E] transition-colors duration-200">
                  {labels.name}
                </Link>
              </nav>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-[#0D0D0D] max-w-4xl">
                {content.title}
                <span className="text-[#E5202E]">.</span>
              </h1>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#6B6B6B]">
                <span>
                  {labels.published}{" "}
                  <time dateTime={post.datePublished}>{date}</time>
                </span>
                <span className="w-1 h-1 rounded-full bg-[#E5202E]" />
                <span>
                  {content.readingMinutes} {labels.minutes}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#E5202E]" />
                <span>PRO Marketing#</span>
              </p>
            </div>
          </header>

          <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
            <div className="max-w-3xl">
              {/* Short answer */}
              <section className="bg-[#F4F4F4] rounded-2xl p-8 md:p-10 mb-12">
                <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
                  {labels.shortAnswer}
                </p>
                <p className="text-lg md:text-xl font-medium text-[#0D0D0D] leading-relaxed">
                  {content.summary}
                </p>
              </section>

              {content.sections.map((section) => (
                <section key={section.heading} className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0D0D0D] mb-5">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base md:text-lg text-[#3D3D3D] leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="flex flex-col gap-3 mt-2">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-base md:text-lg text-[#3D3D3D] leading-relaxed">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#E5202E] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.table && (
                    <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E0E0E0]">
                      <table className="w-full text-left text-sm md:text-base">
                        <thead className="bg-[#F4F4F4]">
                          <tr>
                            {section.table.head.map((cell, i) => (
                              <th key={i} scope="col" className="px-4 py-3 font-semibold text-[#0D0D0D]">
                                {cell}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E0E0E0]">
                          {section.table.rows.map((row) => (
                            <tr key={row[0]}>
                              {row.map((cell, i) =>
                                i === 0 ? (
                                  <th key={i} scope="row" className="px-4 py-3 font-medium text-[#0D0D0D] align-top">
                                    {cell}
                                  </th>
                                ) : (
                                  <td key={i} className="px-4 py-3 text-[#3D3D3D] align-top">
                                    {cell}
                                  </td>
                                )
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}

              {/* CTA */}
              <section className="bg-[#E5202E] rounded-2xl p-8 md:p-10 text-white">
                <p className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                  {labels.ctaTitle}
                </p>
                <p className="text-base text-white/80 mb-6">{labels.ctaText}</p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-white text-[#E5202E] text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#F4F4F4] transition-colors duration-200"
                >
                  {labels.ctaButton}
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </section>
            </div>
          </div>
        </article>

        <ServiceFAQ heading={labels.faqHeading} items={content.faq} />
        <RelatedLinks
          heading={labels.relatedHeading}
          groups={[
            {
              label: labels.relatedServices,
              links: post.relatedServices
                .filter((href) => SERVICE_LINK_NAMES[href])
                .map((href) => ({ href, title: SERVICE_LINK_NAMES[href][safeLocale] })),
            },
            {
              label: labels.relatedIndustries,
              links: post.relatedIndustries
                .filter((s) => INDUSTRY_PAGES[s])
                .map((s) => ({ href: `/industries/${s}`, title: INDUSTRY_PAGES[s][safeLocale].card.title })),
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
