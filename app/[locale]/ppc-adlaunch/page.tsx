import type { Metadata } from "next";
import Image from "next/image";
import {
  Search,
  ListFilter,
  Megaphone,
  BarChart3,
  Wallet,
  BadgeCheck,
  Check,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { isLocale, localizedAlternates, type Locale } from "@/lib/seo";

type Item = { title: string; desc: string };

const WHAT_ICONS = [Search, ListFilter, Megaphone, BarChart3, Wallet];

const SCREENS: { src: string; alt: string; uk: string; en: string }[] = [
  {
    src: "/ppc-adlaunch/dashboard.png",
    alt: "PPC AdLaunch dashboard",
    uk: "Дашборд — остання активність по акаунтах клієнтів, які ми ведемо.",
    en: "Dashboard — recent activity across the client accounts we manage.",
  },
  {
    src: "/ppc-adlaunch/campaign-builder.png",
    alt: "PPC AdLaunch campaign builder",
    uk: "Конструктор кампаній — введення даних і генерація кампанії.",
    en: "Campaign Builder — campaign input and generation.",
  },
  {
    src: "/ppc-adlaunch/generated-campaign.png",
    alt: "PPC AdLaunch generated campaign",
    uk: "Згенерована кампанія — розподіл бюджету та перевірка політик Google Ads.",
    en: "Generated campaign — budget intelligence and Google Ads policy compliance.",
  },
  {
    src: "/ppc-adlaunch/reporting.png",
    alt: "PPC AdLaunch search terms reporting",
    uk: "Аналіз пошукових запитів — автоматизація звітності.",
    en: "Search Terms analysis — reporting automation.",
  },
];

const API_SERVICES = [
  "GoogleAdsService.searchStream",
  "CampaignService",
  "CampaignBudgetService",
  "AdGroupService",
  "AdGroupAdService",
  "KeywordPlanIdeaService",
  "KeywordPlanService",
];

const content: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    lead: string;
    pills: string[];
    whatEyebrow: string;
    whatHeading: string;
    whatItDoes: Item[];
    brandTitle: string;
    brandDesc: string;
    screensEyebrow: string;
    screensHeading: string;
    apiEyebrow: string;
    apiHeading: string;
    apiIntro: string;
    apiBullets: string[];
    apiClosing: string;
    apiServicesLabel: string;
    internalHeading: string;
    internalUse: string[];
  }
> = {
  uk: {
    metaTitle: "PPC AdLaunch — внутрішній інструмент | PRO Marketing#",
    metaDescription:
      "PPC AdLaunch — внутрішній інструмент Google Ads, який використовує виключно команда PRO Marketing для створення, ведення та звітності по пошукових кампаніях клієнтів.",
    eyebrow: "Внутрішні інструменти",
    lead: "PPC AdLaunch — внутрішній інструмент, який створила й використовує виключно команда PRO Marketing (агентство — партнер Google), щоб планувати, створювати, оптимізувати та звітувати по пошукових кампаніях Google Ads для акаунтів клієнтів, які ми ведемо. Акаунти підключені до нашого менеджер-акаунта (MCC) з дозволу їхніх власників, а ручний процес із експортом у CSV замінюється прямою інтеграцією з Google Ads API, що відповідає політикам Google.",
    pills: [
      "Партнер Google",
      "Google Ads API",
      "Пошукові кампанії",
      "Лише внутрішнє використання",
    ],
    whatEyebrow: "Можливості",
    whatHeading: "Що він робить",
    whatItDoes: [
      {
        title: "Підбір ключових слів",
        desc: "Ідеї ключових слів, обсяг пошуку та конкуренція для ринку клієнта, з групуванням у тематичні групи оголошень.",
      },
      {
        title: "Аналіз пошукових запитів",
        desc: "Знаходимо нові мінус-слова, марнотратні запити та результативні терміни для додавання.",
      },
      {
        title: "Побудова кампаній",
        desc: "Повноцінні пошукові кампанії: групи оголошень, адаптивні оголошення, ключові слова, мінус-слова та розширення.",
      },
      {
        title: "Звітність",
        desc: "Регулярні звіти про ефективність для клієнтів: кліки, витрати, конверсії та ROAS.",
      },
      {
        title: "Контроль бюджету",
        desc: "Відстежуємо темп витрачання бюджету та рекомендуємо його розподіл між ринками.",
      },
    ],
    brandTitle: "Партнер Google",
    brandDesc:
      "Створено й використовується всередині команди PRO Marketing — для авторизованих акаунтів клієнтів.",
    screensEyebrow: "Інтерфейс",
    screensHeading: "Скриншоти",
    apiEyebrow: "Інтеграція",
    apiHeading: "Інтеграція з Google Ads API",
    apiIntro: "PPC AdLaunch використовує Google Ads API для:",
    apiBullets: [
      "Звітності та аналізу ефективності",
      "Створення та керування кампаніями",
      "Дослідження та планування ключових слів",
      "Аналізу пошукових запитів",
      "Контролю та оптимізації бюджету",
    ],
    apiClosing:
      "Платформу використовують виключно співробітники PRO Marketing для ведення авторизованих акаунтів клієнтів, підключених через наш менеджер-акаунт Google Ads (MCC).",
    apiServicesLabel: "Використовувані сервіси Google Ads API:",
    internalHeading: "Лише для внутрішнього використання",
    internalUse: [
      "PPC AdLaunch не є публічним SaaS-продуктом і не продається, не ліцензується та не надається третім сторонам. Доступ мають лише авторизовані учасники команди PRO Marketing.",
      "Усі операції через API виконуються лише на акаунтах клієнтів, авторизованих через наш MCC, відповідно до Умов Google Ads API та політик Google.",
    ],
  },
  en: {
    metaTitle: "PPC AdLaunch — Internal Tool | PRO Marketing#",
    metaDescription:
      "PPC AdLaunch is an internal Google Ads tool used exclusively by the PRO Marketing team to build, manage, and report on client Search campaigns.",
    eyebrow: "Internal Tools",
    lead: "PPC AdLaunch is an internal tool built and used exclusively by the PRO Marketing team — a verified Google Partner agency — to plan, build, optimize, and report on Google Ads Search campaigns for the client accounts we manage. Accounts are linked under our manager account (MCC) with the owners' authorization, replacing a manual, CSV-based workflow with direct, policy-compliant Google Ads API integration.",
    pills: [
      "Google Partner",
      "Google Ads API",
      "Search campaigns",
      "Internal use only",
    ],
    whatEyebrow: "Capabilities",
    whatHeading: "What it does",
    whatItDoes: [
      {
        title: "Keyword Research",
        desc: "Keyword ideas, search volume and competition for a client's market, clustered into themed ad groups.",
      },
      {
        title: "Search Terms Analysis",
        desc: "Surface new negative keywords, wasteful queries, and high-performing terms to add.",
      },
      {
        title: "Campaign Building",
        desc: "Complete Search campaigns — ad groups, responsive search ads, keywords, negatives, and extensions.",
      },
      {
        title: "Reporting",
        desc: "Recurring client performance reports: clicks, cost, conversions, and ROAS.",
      },
      {
        title: "Budget Monitoring",
        desc: "Track budget pacing and recommend budget allocation across markets.",
      },
    ],
    brandTitle: "Verified Google Partner",
    brandDesc:
      "Built, operated, and used in-house by the PRO Marketing team — for authorized client accounts.",
    screensEyebrow: "Interface",
    screensHeading: "Screens",
    apiEyebrow: "Integration",
    apiHeading: "Google Ads API Integration",
    apiIntro: "PPC AdLaunch uses the Google Ads API to support:",
    apiBullets: [
      "Reporting and performance analysis",
      "Campaign creation and management",
      "Keyword research and planning",
      "Search terms analysis",
      "Budget monitoring and optimization",
    ],
    apiClosing:
      "The platform is used exclusively by PRO Marketing employees for managing authorized client accounts connected through our Google Ads manager account (MCC).",
    apiServicesLabel: "Google Ads API services used include:",
    internalHeading: "Internal Use Only",
    internalUse: [
      "PPC AdLaunch is not a public SaaS product and is not sold, licensed, or provided to third parties. Access is restricted to authorized PRO Marketing team members only.",
      "All API operations are performed only on client accounts authorized through our MCC, in accordance with the Google Ads API Terms & Conditions and Google Ads policies.",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uk";
  const page = content[safeLocale];

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: localizedAlternates(safeLocale, "/ppc-adlaunch"),
    robots: "noindex, follow",
  };
}

const EYEBROW = "text-xs font-semibold text-[#E5202E] uppercase tracking-widest";
const H2 =
  "text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D]";

export default async function PpcAdLaunchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "uk";
  const page = content[safeLocale];

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero */}
        <section className="px-6 pt-28 md:pt-36 pb-14 md:pb-20">
          <div className="max-w-6xl mx-auto">
            <p className={`${EYEBROW} mb-5`}>{page.eyebrow}</p>
            <h1
              className="font-semibold tracking-tighter text-[#0D0D0D] leading-[0.95]"
              style={{ fontSize: "clamp(48px, 9vw, 110px)" }}
            >
              PPC AdLaunch<span className="text-[#E5202E]">.</span>
            </h1>
            <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed max-w-3xl mt-7">
              {page.lead}
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {page.pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-[#E0E0E0] bg-[#F4F4F4] px-3.5 py-1.5 text-xs font-medium text-[#6B6B6B]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* What it does */}
        <section className="px-6 py-14 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 md:mb-12">
              <p className={`${EYEBROW} mb-4`}>{page.whatEyebrow}</p>
              <h2 className={H2}>{page.whatHeading}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">
              {page.whatItDoes.map((item, i) => {
                const Icon = WHAT_ICONS[i];
                return (
                  <div
                    key={item.title}
                    className="bg-[#F4F4F4] p-7 md:p-8 transition-colors duration-300 hover:bg-white"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#E5202E]/8 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-[#E5202E]" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-[#0D0D0D] mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
              {/* Brand cell */}
              <div className="bg-[#F4F4F4] p-7 md:p-8 transition-colors duration-300 hover:bg-white">
                <div className="w-11 h-11 rounded-xl bg-[#E5202E] flex items-center justify-center mb-5">
                  <BadgeCheck className="w-5 h-5 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-[#0D0D0D] mb-2 tracking-tight">
                  {page.brandTitle}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {page.brandDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Screens */}
        <section className="px-6 py-4">
          <div className="max-w-6xl mx-auto bg-[#F4F4F4] rounded-3xl px-6 md:px-12 py-16 md:py-20">
            <div className="mb-12 md:mb-14 text-center">
              <p className={`${EYEBROW} mb-4`}>{page.screensEyebrow}</p>
              <h2 className={H2}>{page.screensHeading}</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {SCREENS.map((shot) => (
                <figure key={shot.src}>
                  <div className="rounded-2xl border border-[#E0E0E0] bg-white shadow-[0_16px_50px_rgba(0,0,0,0.08)] overflow-hidden">
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#E0E0E0]">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#D9D9D9]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#D9D9D9]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#D9D9D9]" />
                    </div>
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={1800}
                      height={1250}
                      className="w-full h-auto block"
                      sizes="(max-width: 1024px) 100vw, 600px"
                    />
                  </div>
                  <figcaption className="text-xs md:text-sm text-[#6B6B6B] mt-4 text-center">
                    {safeLocale === "uk" ? shot.uk : shot.en}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Google Ads API Integration */}
        <section className="px-6 py-14 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#0D0D0D] rounded-3xl p-8 md:p-14">
              <p className={`${EYEBROW} mb-4`}>{page.apiEyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                {page.apiHeading}
              </h2>
              <p className="text-base text-[#ADADAD] leading-relaxed max-w-2xl mb-9">
                {page.apiIntro}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl">
                {page.apiBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#E5202E]/15 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E5202E]" strokeWidth={3} />
                    </span>
                    <span className="text-sm md:text-base text-white/90 leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#ADADAD] leading-relaxed max-w-2xl mt-9 pt-8 border-t border-white/10">
                {page.apiClosing}
              </p>

              <div className="mt-8">
                <p className="text-xs text-[#ADADAD] mb-3">
                  {page.apiServicesLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {API_SERVICES.map((svc) => (
                    <code
                      key={svc}
                      className="text-xs font-mono text-white/90 bg-white/[0.06] border border-white/10 rounded-md px-2.5 py-1.5"
                    >
                      {svc}
                    </code>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Use Only */}
        <section className="px-6 pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl border border-[#E0E0E0] bg-[#F4F4F4] p-8 md:p-12 flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-[#E5202E]/8 flex items-center justify-center">
                  <ShieldCheck
                    className="w-6 h-6 text-[#E5202E]"
                    strokeWidth={1.8}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0D0D0D] mb-3">
                  {page.internalHeading}
                </h2>
                <div className="flex flex-col gap-3 max-w-3xl">
                  {page.internalUse.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm md:text-base text-[#6B6B6B] leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
