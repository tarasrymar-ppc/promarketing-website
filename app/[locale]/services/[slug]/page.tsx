import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// --- Service map ---

const SERVICES: Record<string, string> = {
  "google-ads":          "Google Ads",
  "meta-ads":            "Meta Ads",
  "tiktok-ads":          "TikTok Ads",
  "smm":                 "SMM",
  "seo":                 "SEO",
  "aeo":                 "AEO",
  "website-development": "Розробка сайтів",
  "photo-video":         "Фото та відео",
  "complex-marketing":   "Комплексний маркетинг",
};

// --- Metadata ---

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const name = SERVICES[slug];
  if (!name) return {};
  return {
    title: `${name} — PRO Marketing#`,
    description: `Сторінка послуги ${name} у процесі створення. PRO Marketing# — маркетинг під ключ.`,
  };
}

// --- Page ---

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const name = SERVICES[slug];
  if (!name) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0D0D0D] flex flex-col pt-16 md:pt-[68px]">

        {/* Center content */}
        <div className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="max-w-xl w-full text-center">

            {/* Pulsing indicator */}
            <div className="flex items-center justify-center gap-2.5 mb-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5202E] opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E5202E]" />
              </span>
              <span className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest">
                У процесі створення
              </span>
            </div>

            {/* Service name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.04] mb-6">
              {name}
            </h1>

            {/* Divider */}
            <div className="w-12 h-px bg-[#E5202E] mx-auto mb-8" />

            {/* Message */}
            <p className="text-base md:text-lg text-white/50 leading-relaxed mb-3">
              Ми вже працюємо над цією сторінкою.
            </p>
            <p className="text-sm text-white/30 leading-relaxed mb-12 max-w-sm mx-auto">
              Вибачаємось за тимчасові незручності — контент буде додаватись поступово.
              Поки що ви можете залишити заявку, і ми розкажемо про послугу особисто.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 bg-[#E5202E] hover:bg-[#C0111D] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                Залишити заявку
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 text-white/60 hover:text-white text-sm font-medium px-6 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap"
              >
                <ArrowLeft size={15} />
                На головну
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom decoration — subtle grid pattern */}
        <div
          className="h-px w-full"
          style={{
            background: "linear-gradient(to right, transparent, #E5202E30, transparent)",
          }}
        />

      </main>
      <Footer />
    </>
  );
}
