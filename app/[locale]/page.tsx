import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";
import Partners from "@/components/sections/Partners";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PRO Marketing# — Маркетинг під ключ в Ужгороді",
  description:
    "Маркетингове агентство в Ужгороді з 2019 року. Google Ads, Meta Ads, SEO, SMM, розробка сайтів. Реальні продажі — не просто контент.",
  alternates: {
    canonical: "https://promarketing-website.vercel.app/uk",
    languages: {
      uk: "https://promarketing-website.vercel.app/uk",
      en: "https://promarketing-website.vercel.app/en",
    },
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Hero />
        <Problem />
        <div className="flex flex-col gap-[10px] pt-[10px] pb-[10px]">
          <Solution />
          <Services />
          <Clients />
          <Process />
          <Partners />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
