import type { IndustryPageContent } from "@/lib/industryPages";
import type { Locale } from "@/lib/seo";

// City landing pages, rendered by app/[locale]/<city>/page.tsx. They reuse the
// industry page shape (hero, challenges, deliverables, process, timeline, FAQ)
// so the design stays the same as the service and industry pages.
//
// Only add a city where the agency really works: Search Console data and real
// clients, not a list of towns. Uzhhorod is covered by the service pages.

export type CityPage = {
  path: string;
  /** schema.org areaServed for this page. */
  areaServed: Record<Locale, { "@type": string; name: string }[]>;
  relatedServices: string[];
  /** Industry slugs to link; ones that don't exist yet are skipped. */
  relatedIndustries: string[];
  relatedPosts: string[];
} & Record<Locale, IndustryPageContent>;

export const LVIV: CityPage = {
  path: "/lviv",
  areaServed: {
    uk: [
      { "@type": "City", name: "Львів" },
      { "@type": "AdministrativeArea", name: "Львівська область" },
    ],
    en: [
      { "@type": "City", name: "Lviv" },
      { "@type": "AdministrativeArea", name: "Lviv Oblast" },
    ],
  },
  relatedServices: [
    "/services/google-ads",
    "/services/meta-ads",
    "/services/seo",
    "/services/website-development",
    "/services/complex-marketing",
  ],
  relatedIndustries: ["medical-clinics", "dental-clinics", "beauty-salons", "real-estate"],
  relatedPosts: ["google-ads-cost-2026", "how-long-seo-takes"],
  uk: {
    name: "Львів",
    card: {
      title: "Маркетингове агентство у Львові",
      text: "Реклама в Google і Meta, SEO та сайти для бізнесу у Львові.",
    },
    metaTitle: "Маркетингове агентство у Львові — реклама, SEO, сайти",
    metaDescription:
      "Маркетинг для бізнесу у Львові: Google Ads, таргетована реклама, SEO-просування і розробка сайтів. Працюємо з клієнтами у Львові понад 2 роки. Безкоштовний аналіз.",
    h1: "Маркетингове агентство для бізнесу у Львові",
    lead: "Реклама в Google, Instagram і Facebook, SEO-просування і сайти для компаній у Львові та області.",
    sub: "Понад два роки ведемо маркетинг офтальмологічної клініки Дмитра Горячева у Львові. Беремо на себе весь маркетинг або окремий напрям і звітуємо заявками, а не охопленнями.",
    facts: [
      "офтальмологічна клініка Дмитра Горячева — понад 2 роки співпраці",
      "Google Ads — від 10 000 грн/міс",
      "вартість SEO — після безкоштовного аналізу",
    ],
    challenges: {
      heading: "Чим львівський ринок відрізняється",
      intro: "Що ми враховуємо, коли запускаємо маркетинг для бізнесу у Львові.",
      items: [
        {
          title: "Висока конкуренція в пошуку",
          text: "У Львові за запитами на кшталт «клініка», «ремонт» чи «доставка» конкурують десятки компаній. Виграє той, хто точніше розділяє запити і веде людину на сторінку конкретної послуги.",
        },
        {
          title: "Місто туристів і місцевих",
          text: "Частина попиту в Львові — це приїжджі. Рекламу для них і для мешканців міста налаштовуємо окремо: інша географія, мова оголошень і сезонність.",
        },
        {
          title: "Медицина і правила реклами",
          text: "Ми ведемо рекламу офтальмологічної клініки Дмитра Горячева у Львові і знаємо обмеження Google та Meta для медичних тем. Оголошення пишемо так, щоб вони проходили модерацію.",
        },
        {
          title: "Карти і відгуки",
          text: "Для локальних запитів у Львові люди дивляться на Google Карти. Профіль компанії з фото, відгуками і правильними категоріями часто дає більше звернень, ніж ще одна кампанія.",
        },
      ],
    },
    deliverables: {
      intro: "Що робимо для бізнесу у Львові — разом або окремо.",
      items: [
        {
          title: "Google Ads у Львові",
          text: "Пошукові кампанії під конкретні послуги з географією на Львів і область, відстеження дзвінків і заявок.",
        },
        {
          title: "Таргетована реклама",
          text: "Meta Ads в Instagram і Facebook для мешканців Львова: прогрів, заявки, ретаргетинг на тих, хто вже цікавився.",
        },
        {
          title: "SEO-просування сайту",
          text: "Сторінки під запити з назвою міста, технічна оптимізація, профіль компанії в Google і місцеві згадки.",
        },
        {
          title: "Сайти і лендінги",
          text: "Сторінка під кожну ключову послугу, швидка мобільна версія, форма і кнопка дзвінка, підключена аналітика.",
        },
        {
          title: "Аналітика і CRM",
          text: "GA4, цілі в рекламних кабінетах, передача заявок у CRM. Видно, скільки коштує клієнт із кожного каналу.",
        },
        {
          title: "Звіт без води",
          text: "Скільки заявок, з яких каналів і за якою ціною. Один звіт для власника і менеджера.",
        },
      ],
    },
    process: {
      intro: "Як починаємо роботу з компанією у Львові.",
      steps: [
        {
          label: "01 — Аналіз",
          title: "Розбираємося в бізнесі",
          items: [
            "Дзвінок і бриф",
            "Аудит сайту і рекламних кабінетів",
            "Аналіз конкурентів у Львові",
          ],
        },
        {
          label: "02 — Запуск",
          title: "Налаштовуємо канали",
          items: [
            "Стратегія і бюджет по каналах",
            "Налаштування аналітики і цілей",
            "Запуск реклами, план SEO",
          ],
        },
        {
          label: "03 — Ріст",
          title: "Оптимізуємо щотижня",
          items: [
            "Чистка запитів і аудиторій",
            "Нові оголошення і сторінки",
            "Регулярні звіти та дзвінки",
          ],
        },
      ],
    },
    timeline: {
      heading: "Коли чекати результат.",
      intro: "Реклама дає заявки швидко, SEO — пізніше, але стабільніше.",
      items: [
        {
          time: "Тиждень 1–2",
          title: "Запуск реклами",
          text: "Кампанії в Google і Meta працюють, налаштоване відстеження заявок.",
        },
        {
          time: "Місяць 1",
          title: "Перші висновки",
          text: "Видно, які послуги і канали дають найдешевші заявки. Перерозподіляємо бюджет.",
        },
        {
          time: "Місяць 2–4",
          title: "SEO набирає обертів",
          text: "Сторінки під львівські запити з'являються у видачі, зростає органічний трафік.",
        },
      ],
    },
    faq: [
      {
        question: "Ви з Ужгорода. Як працюєте з бізнесом у Львові?",
        answer:
          "Наш офіс в Ужгороді, а з клієнтами у Львові ми працюємо понад два роки. Більшість роботи йде онлайн: дзвінки, спільні звіти, доступ до кабінетів і CRM. Для реклами і SEO фізична присутність не потрібна, важливі доступи і швидкий зв'язок.",
      },
      {
        question: "Скільки коштує реклама для бізнесу у Львові?",
        answer:
          "Ведення Google Ads — від 10 000 грн на місяць, Meta Ads — від 15 000 грн на місяць, плюс рекламний бюджет. Вартість SEO називаємо після безкоштовного аналізу сайту.",
      },
      {
        question: "Чи працюєте ви з медичними клініками у Львові?",
        answer:
          "Так, медицина — одна з наших сильних ніш. Понад два роки ми працюємо з офтальмологічною клінікою Дмитра Горячева у Львові і знаємо правила Google та Meta для медичних тем.",
      },
      {
        question: "Чи можна замовити тільки один напрям, наприклад SEO?",
        answer:
          "Так. Можна взяти окремо рекламу, SEO, SMM чи сайт, а можна весь маркетинг під ключ.",
      },
    ],
    formSub:
      "Розкажіть про ваш бізнес у Львові. Подивимось на сайт і рекламу та скажемо, з чого почати.",
  },
  en: {
    name: "Lviv",
    card: {
      title: "Marketing agency for Lviv",
      text: "Google and Meta ads, SEO and websites for businesses in Lviv.",
    },
    metaTitle: "Marketing agency for businesses in Lviv — ads, SEO, websites",
    metaDescription:
      "Marketing for businesses in Lviv: Google Ads, Meta Ads, SEO and website development. We have worked with clients in Lviv for over 2 years. Free analysis.",
    h1: "Marketing agency for businesses in Lviv",
    lead: "Google, Instagram and Facebook advertising, SEO and websites for companies in Lviv and the region.",
    sub: "For more than two years we have run marketing for Dmytro Horiachev's ophthalmology clinic in Lviv. We take on all of your marketing or a single channel and report in leads, not reach.",
    facts: [
      "Dmytro Horiachev's ophthalmology clinic: 2+ years",
      "Google Ads from UAH 10,000/mo",
      "SEO pricing after a free analysis",
    ],
    challenges: {
      heading: "What makes the Lviv market different",
      intro: "What we take into account when we launch marketing for a business in Lviv.",
      items: [
        {
          title: "Strong competition in search",
          text: "In Lviv, dozens of companies compete for searches like “clinic”, “renovation” or “delivery”. The winner splits queries precisely and sends people to the page for that exact service.",
        },
        {
          title: "A city of tourists and locals",
          text: "Part of the demand in Lviv comes from visitors. We set up ads for them and for residents separately: different geography, ad language and seasonality.",
        },
        {
          title: "Healthcare and ad rules",
          text: "We run ads for Dmytro Horiachev's ophthalmology clinic in Lviv and know Google's and Meta's restrictions on healthcare topics. We write ads that pass review.",
        },
        {
          title: "Maps and reviews",
          text: "For local searches in Lviv people look at Google Maps. A business profile with photos, reviews and the right categories often brings more enquiries than another campaign.",
        },
      ],
    },
    deliverables: {
      intro: "What we do for businesses in Lviv, together or separately.",
      items: [
        {
          title: "Google Ads in Lviv",
          text: "Search campaigns for specific services targeted at Lviv and the region, with call and lead tracking.",
        },
        {
          title: "Meta Ads",
          text: "Instagram and Facebook ads for Lviv residents: warming up, lead generation, retargeting people who already showed interest.",
        },
        {
          title: "SEO",
          text: "Pages for city-specific searches, technical optimisation, a Google business profile and local mentions.",
        },
        {
          title: "Websites and landing pages",
          text: "A page for each key service, a fast mobile version, a form and a call button, analytics connected.",
        },
        {
          title: "Analytics and CRM",
          text: "GA4, conversion goals in ad accounts, leads passed to your CRM. You see what a customer costs from each channel.",
        },
        {
          title: "A plain report",
          text: "How many leads, from which channels and at what cost. One report for the owner and the manager.",
        },
      ],
    },
    process: {
      intro: "How we start working with a company in Lviv.",
      steps: [
        {
          label: "01 — Analysis",
          title: "Understanding the business",
          items: [
            "Call and brief",
            "Website and ad account audit",
            "Competitor analysis in Lviv",
          ],
        },
        {
          label: "02 — Launch",
          title: "Setting up channels",
          items: [
            "Strategy and budget by channel",
            "Analytics and conversion setup",
            "Ad launch, SEO plan",
          ],
        },
        {
          label: "03 — Growth",
          title: "Weekly optimisation",
          items: [
            "Cleaning up queries and audiences",
            "New ads and pages",
            "Regular reports and calls",
          ],
        },
      ],
    },
    timeline: {
      heading: "When to expect results.",
      intro: "Ads bring leads quickly; SEO takes longer but lasts.",
      items: [
        {
          time: "Week 1–2",
          title: "Ads go live",
          text: "Google and Meta campaigns are running and lead tracking is in place.",
        },
        {
          time: "Month 1",
          title: "First conclusions",
          text: "We see which services and channels bring the cheapest leads and reallocate the budget.",
        },
        {
          time: "Month 2–4",
          title: "SEO picks up",
          text: "Pages for Lviv searches appear in results and organic traffic grows.",
        },
      ],
    },
    faq: [
      {
        question: "You're based in Uzhhorod. How do you work with businesses in Lviv?",
        answer:
          "Our office is in Uzhhorod, and we have worked with clients in Lviv for more than two years. Most of the work happens online: calls, shared reports, access to ad accounts and the CRM. Ads and SEO don't need a physical presence, they need access and quick communication.",
      },
      {
        question: "How much does advertising for a Lviv business cost?",
        answer:
          "Google Ads management starts at UAH 10,000 per month and Meta Ads at UAH 15,000 per month, plus the ad budget. We quote SEO after a free website analysis.",
      },
      {
        question: "Do you work with medical clinics in Lviv?",
        answer:
          "Yes, healthcare is one of our strongest niches. For more than two years we have worked with Dmytro Horiachev's ophthalmology clinic in Lviv and know Google's and Meta's rules for healthcare topics.",
      },
      {
        question: "Can I order just one channel, for example SEO?",
        answer:
          "Yes. You can take ads, SEO, SMM or a website separately, or all of your marketing as one package.",
      },
    ],
    formSub:
      "Tell us about your business in Lviv. We'll look at your website and ads and tell you where to start.",
  },
};
