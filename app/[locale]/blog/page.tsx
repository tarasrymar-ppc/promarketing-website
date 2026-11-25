import { type Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTitle from "@/components/common/PageTitle";
import { ArrowRight } from "lucide-react";
import BlogCover from "@/components/blog/BlogCover";
import { blogCover } from "@/lib/blogCovers";
import { Link } from "@/i18n/navigation";
import { BLOG_EXTRAS } from "@/lib/blogExtras";
import JsonLd from "@/components/seo/JsonLd";
import { BLOG_LABELS, BLOG_POSTS, BLOG_SLUGS } from "@/lib/blogPosts";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { isLocale, localizedAlternates } from "@/lib/seo";
import { setRequestLocale } from "next-intl/server";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uk";
  const labels = BLOG_LABELS[safeLocale];
  return {
    title: labels.indexMetaTitle,
    description: labels.indexMetaDescription,
    alternates: localizedAlternates(safeLocale, "/blog"),
  };
}

export default async function BlogPage({ params }: { params: Params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const safeLocale = isLocale(locale) ? locale : "uk";
  const labels = BLOG_LABELS[safeLocale];
  const items = BLOG_SLUGS.map((slug) => {
    const post = BLOG_POSTS[slug][safeLocale];
    return {
      href: `/blog/${slug}`,
      title: post.title,
      text: post.description,
      meta: `${post.readingMinutes} ${labels.minutes}`,
      extra: BLOG_EXTRAS[slug],
      image: blogCover(slug, safeLocale),
    };
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema(safeLocale, labels.name, "/blog")} />
      <JsonLd data={itemListSchema(safeLocale, items.map((i) => ({ name: i.title, path: i.href })))} />
      <Header />
      <main className="bg-white pt-16 md:pt-[68px]">
        <div className="border-b border-[#E0E0E0]">
          <div className="max-w-6xl mx-auto px-6">
            <PageTitle title={labels.name} keyword={labels.indexKeyword} />
          </div>
        </div>
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-2xl md:text-3xl font-medium text-[#0D0D0D] leading-snug max-w-3xl mb-12">
              {labels.indexLead}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {items.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`reveal group flex flex-col ${i === 0 ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center" : ""}`}
                >
                  {item.extra && (
                    <div className={`overflow-hidden rounded-2xl mb-6 ${i === 0 ? "lg:mb-0" : ""}`}>
                      <BlogCover
                        image={item.image}
                        sizes={i === 0 ? "(min-width: 1024px) 550px, 100vw" : "(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"}
                        motif={item.extra.motif}
                        tone={item.extra.tone}
                        kicker={item.extra.kicker[safeLocale]}
                        className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-1">
                    <p className="text-xs text-[#6B6B6B] uppercase tracking-widest mb-3">{item.meta}</p>
                    <h2
                      className={`font-semibold text-[#0D0D0D] group-hover:text-[#E5202E] mb-3 leading-snug tracking-tight transition-colors duration-200 ${
                        i === 0 ? "text-2xl md:text-4xl" : "text-xl"
                      }`}
                    >
                      {item.title}
                    </h2>
                    <p className={`text-[#6B6B6B] leading-relaxed mb-5 ${i === 0 ? "text-base md:text-lg" : "text-sm"}`}>
                      {item.text}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#E5202E]">
                      {labels.read}
                      <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
