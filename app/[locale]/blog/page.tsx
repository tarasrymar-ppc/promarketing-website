import { type Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTitle from "@/components/common/PageTitle";
import { CardGrid } from "@/components/sections/industry/IndustrySections";
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
            <CardGrid items={items} more={labels.read} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
