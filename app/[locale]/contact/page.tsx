import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { isLocale, localizedAlternates } from "@/lib/seo";
import PageTitle from "@/components/common/PageTitle";

const meta = {
  uk: {
    title: "Контакти — Ужгород, вул. Фединця 2",
    description:
      "Зв'яжіться з PRO Marketing# в Ужгороді. Залиште заявку онлайн або подзвоніть — зв'яжемось і запропонуємо оптимальний формат співпраці.",
  },
  en: {
    title: "Contact — Uzhhorod, Fedyntsia St. 2",
    description:
      "Get in touch with PRO Marketing# in Uzhhorod. Submit a request online or call us — we'll get back to you and propose the best way to work together.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uk";

  return {
    title: meta[safeLocale].title,
    description: meta[safeLocale].description,
    alternates: localizedAlternates(safeLocale, "/contact"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requestLocale } = await params;
  setRequestLocale(requestLocale);
  const t = await getTranslations("contact");

  const locale = await getLocale();
  const crumbLocale = isLocale(locale) ? locale : "uk";

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(crumbLocale, crumbLocale === "uk" ? "Контакти" : "Contact", "/contact")}
      />
      <Header />
      <main className="min-h-screen bg-white pt-16 md:pt-[68px] flex flex-col">

        {/* ── EDITORIAL HERO TITLE ── */}
        <div className="border-b border-[#E0E0E0]">
          <div className="max-w-6xl mx-auto px-6">
            <PageTitle title={t("title")} keyword={t("h1")} />
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="flex-1 max-w-6xl mx-auto w-full px-6 py-16 md:py-20">
          <ContactForm />
        </div>

      </main>
      <Footer />
    </>
  );
}
