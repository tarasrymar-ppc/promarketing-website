import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceFAQ from "@/components/sections/service/ServiceFAQ";
import { RelatedLinks } from "@/components/sections/industry/IndustrySections";
import JsonLd from "@/components/seo/JsonLd";
import { Link } from "@/i18n/navigation";
import BlogCover from "@/components/blog/BlogCover";
import { BLOG_EXTRAS, BLOG_EXTRA_LABELS } from "@/lib/blogExtras";
import { BLOG_LABELS, BLOG_POSTS, SERVICE_LINK_NAMES } from "@/lib/blogPosts";
import { INDUSTRY_PAGES } from "@/lib/industryPages";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { isLocale, localizedAlternates } from "@/lib/seo";
import { setRequestLocale } from "next-intl/server";

type Params = Promise<{ locale: string; slug: string }>;

const EXAMPLE_PREFIX = /^(Умовний приклад|An illustrative example)/;

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
  const extra = BLOG_EXTRAS[slug];
  const extraLabels = BLOG_EXTRA_LABELS[safeLocale];
  const toc = content.sections.map((section, i) => ({ id: `section-${i + 1}`, heading: section.heading }));
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
      <div aria-hidden="true" className="reading-progress" />
      <main className="bg-white pt-16 md:pt-[68px]">
        <article>
          {/* Title */}
          <header className="border-b border-[#E0E0E0]">
            <div className="max-w-6xl mx-auto px-6 py-10 md:py-16 lg:grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-12 lg:items-center">
              <div>
              <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#6B6B6B]">
                <Link href="/blog" className="hover:text-[#E5202E] transition-colors duration-200">
                  {labels.name}
                </Link>
              </nav>
              <h1 className="text-4xl md:text-6xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.05] text-[#0D0D0D] max-w-4xl">
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
              {extra && (
                <div className="mt-8 lg:mt-0 overflow-hidden rounded-2xl">
                  <BlogCover motif={extra.motif} tone={extra.tone} kicker={extra.kicker[safeLocale]} />
                </div>
              )}
            </div>
          </header>

          <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
            <div className="max-w-[44rem] min-w-0">
              {/* Short answer */}
              <section className="bg-[#F4F4F4] rounded-2xl p-6 md:p-10 mb-10 border-l-4 border-[#E5202E]">
                <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
                  {labels.shortAnswer}
                </p>
                <p className="text-lg md:text-xl font-medium text-[#0D0D0D] leading-relaxed">
                  {content.summary}
                </p>
              </section>

              {/* Table of contents (mobile and tablet) */}
              <details className="lg:hidden group/toc mb-12 rounded-2xl border border-[#E0E0E0]">
                <summary className="flex items-center justify-between cursor-pointer list-none px-6 py-4 text-sm font-semibold text-[#0D0D0D] [&::-webkit-details-marker]:hidden">
                  {extraLabels.toc}
                  <span aria-hidden="true" className="text-[#E5202E] text-lg leading-none transition-transform duration-200 group-open/toc:rotate-45">+</span>
                </summary>
                <ol className="px-6 pb-5 flex flex-col gap-3">
                  {toc.map((item, i) => (
                    <li key={item.id} className="flex gap-3 text-sm leading-snug">
                      <span className="text-[#E5202E] font-semibold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      <a href={`#${item.id}`} className="text-[#3D3D3D] hover:text-[#E5202E] transition-colors duration-200">
                        {item.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>

              {content.sections.map((section, sectionIndex) => (
                <section key={section.heading} id={toc[sectionIndex].id} className="mb-14 scroll-mt-28">
                  <p className="text-xs font-semibold text-[#E5202E] tracking-widest tabular-nums mb-2">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-2xl md:text-[2rem] font-semibold tracking-tight leading-tight text-[#0D0D0D] mb-6">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) =>
                    EXAMPLE_PREFIX.test(paragraph) ? (
                      <aside key={paragraph} className="my-6 rounded-2xl bg-[#FDF1F2] p-6 md:p-7">
                        <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-3">
                          {extraLabels.example}
                        </p>
                        <p className="text-base md:text-[1.0625rem] text-[#0D0D0D] leading-[1.75]">
                          {paragraph.replace(EXAMPLE_PREFIX, "").replace(/^:\s*/, "").replace(/^./, (ch) => ch.toUpperCase())}
                        </p>
                      </aside>
                    ) : (
                      <p key={paragraph} className="text-base md:text-[1.125rem] text-[#3D3D3D] leading-[1.8] mb-5">
                        {paragraph}
                      </p>
                    )
                  )}
                  {section.list && (
                    <ul className="flex flex-col gap-4 mt-2">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-4 text-base md:text-[1.125rem] text-[#3D3D3D] leading-[1.75]">
                          <span className="mt-[0.7em] w-2 h-2 rounded-full bg-[#E5202E] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.table && (
                    <div className="mt-8 overflow-x-auto rounded-2xl border border-[#E0E0E0] [scrollbar-width:thin]">
                      <table className="w-full min-w-[34rem] border-collapse text-left text-sm md:text-base">
                        <thead className="bg-[#0D0D0D] text-white">
                          <tr>
                            {section.table.head.map((cell, i) => (
                              <th
                                key={i}
                                scope="col"
                                className={`px-5 py-4 font-semibold whitespace-nowrap ${i === 0 ? "sticky left-0 bg-[#0D0D0D]" : ""}`}
                              >
                                {cell}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row) => (
                            <tr key={row[0]} className="group/row border-t border-[#E0E0E0] odd:bg-white even:bg-[#FAFAFA] hover:bg-[#FDF1F2] transition-colors duration-150">
                              {row.map((cell, i) =>
                                i === 0 ? (
                                  <th
                                    key={i}
                                    scope="row"
                                    className="sticky left-0 px-5 py-4 font-semibold text-[#0D0D0D] align-top bg-inherit"
                                  >
                                    {cell}
                                  </th>
                                ) : (
                                  <td key={i} className="px-5 py-4 text-[#3D3D3D] align-top leading-relaxed">
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

              {/* Key takeaways */}
              {extra && (
                <section className="reveal mb-12 rounded-2xl bg-[#0D0D0D] text-white p-6 md:p-10">
                  <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-6">
                    {extraLabels.takeaways}
                  </p>
                  <ol className="flex flex-col gap-5">
                    {extra.takeaways[safeLocale].map((item, i) => (
                      <li key={item} className="flex gap-5 text-base md:text-lg leading-relaxed">
                        <span className="text-2xl md:text-3xl font-semibold text-[#E5202E] leading-none tabular-nums pt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

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

            {/* Table of contents (desktop) */}
            <aside className="hidden lg:block">
              <nav aria-label={extraLabels.toc} className="sticky top-28">
                <p className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-widest mb-5">{extraLabels.toc}</p>
                <ol className="flex flex-col gap-3.5 border-l border-[#E0E0E0]">
                  {toc.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="-ml-px flex gap-3 border-l-2 border-transparent pl-4 text-sm leading-snug text-[#6B6B6B] hover:border-[#E5202E] hover:text-[#0D0D0D] transition-colors duration-200"
                      >
                        <span className="text-[#E5202E] font-semibold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                        {item.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
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
