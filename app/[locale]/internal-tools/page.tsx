import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { isLocale, localizedAlternates } from "@/lib/seo";

const ABOUT =
  "PPC AdLaunch is an internal tool built and used exclusively by the PRO Marketing team — a verified Google Partner agency — to plan, build, optimize, and report on Google Ads Search campaigns for the client accounts we manage. Client accounts are linked under our manager account (MCC) with the account owners' authorization. It replaces a manual, CSV-based workflow with direct, policy-compliant operations.";

const WHAT_IT_DOES = [
  {
    title: "Keyword Research",
    desc: "Generate keyword ideas, search volume and competition for a client's market, then cluster them into themed ad groups.",
  },
  {
    title: "Search Terms Analysis",
    desc: "Review search-terms performance to surface new negative keywords, wasteful queries, and high-performing terms to add.",
  },
  {
    title: "Campaign Building",
    desc: "Assemble complete Search campaigns — ad groups, responsive search ads, keywords, negatives, and extensions.",
  },
  {
    title: "Reporting",
    desc: "Automate recurring client performance reports: clicks, cost, conversions, and ROAS.",
  },
  {
    title: "Budget Monitoring",
    desc: "Track budget pacing and recommend budget allocation across markets.",
  },
];

const API_INTEGRATION = [
  {
    title: "Reporting",
    desc: "Read campaign, ad group, and keyword metrics and the Search Terms report (GoogleAdsService.searchStream).",
  },
  {
    title: "Campaign Management",
    desc: "Create and maintain Search campaigns, ad groups, responsive search ads, keywords, negatives, and extensions.",
  },
  {
    title: "Keyword Planning",
    desc: "Keyword ideas, search volume, competition, and bid estimates (KeywordPlanIdeaService).",
  },
];

const INTERNAL_USE =
  "PPC AdLaunch is used only by the internal PRO Marketing team. It is not distributed, sold, licensed, or made available to any third party or external user. All API operations run solely on client Google Ads accounts authorized through our manager account (MCC), in accordance with the Google Ads API Terms & Conditions and Google Ads policies.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "en";

  return {
    title: "PPC AdLaunch — Internal Tool | PRO Marketing#",
    description:
      "PPC AdLaunch is an internal Google Ads tool used exclusively by the PRO Marketing team to build, manage, and report on client Search campaigns.",
    alternates: localizedAlternates(safeLocale, "/internal-tools"),
    robots: "noindex, follow",
  };
}

function ItemList({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.title} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#E5202E] flex-shrink-0" />
          <p className="text-sm md:text-base leading-relaxed">
            <span className="font-semibold text-[#0D0D0D]">{item.title}</span>
            <span className="text-[#6B6B6B]"> — {item.desc}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function InternalToolsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16 md:pt-[68px]">
        <div className="border-b border-[#E0E0E0]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest pt-8 md:pt-10">
              Internal Tools
            </p>
            <h1
              className="font-semibold tracking-tighter text-[#0D0D0D] leading-none pb-6 md:pb-8 pt-2"
              style={{ fontSize: "clamp(44px, 9vw, 120px)" }}
            >
              PPC AdLaunch<span className="text-[#E5202E]">.</span>
            </h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 flex flex-col gap-12">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0D0D0D] mb-4">
              About PPC AdLaunch
            </h2>
            <p className="text-sm md:text-base text-[#6B6B6B] leading-relaxed">
              {ABOUT}
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0D0D0D] mb-4">
              What It Does
            </h2>
            <ItemList items={WHAT_IT_DOES} />
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0D0D0D] mb-4">
              Google Ads API Integration
            </h2>
            <ItemList items={API_INTEGRATION} />
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0D0D0D] mb-4">
              Internal Use Only
            </h2>
            <p className="text-sm md:text-base text-[#6B6B6B] leading-relaxed">
              {INTERNAL_USE}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
