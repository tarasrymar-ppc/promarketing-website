import { redirect } from "next/navigation";

export function generateStaticParams() {
  const slugs = [
    "google-ads", "meta-ads", "tiktok-ads", "smm",
    "seo", "aeo", "website-development", "photo-video", "complex-marketing",
  ];
  return slugs.map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/uk/services/${slug}`);
}
