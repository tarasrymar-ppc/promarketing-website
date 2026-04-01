import { getTranslations } from "next-intl/server";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16 md:pt-[68px] flex flex-col">

        {/* ── EDITORIAL HERO TITLE ── */}
        <div className="border-b border-[#E0E0E0]">
          <div className="max-w-6xl mx-auto px-6">
            <h1
              className="font-semibold tracking-tighter text-[#0D0D0D] leading-none py-6 md:py-8"
              style={{ fontSize: "clamp(56px, 14vw, 180px)" }}
            >
              {t("title")}<span className="text-[#E5202E]">.</span>
            </h1>
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
