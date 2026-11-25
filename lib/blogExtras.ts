import type { Locale } from "@/lib/seo";

// Presentation extras for blog articles: the generated cover (no photos, drawn
// as inline SVG so it costs no image request) and the "key takeaways" box.
// Takeaways only restate what each article already says.

export type CoverMotif =
  | "bars"
  | "versus"
  | "growth"
  | "nodes"
  | "checklist"
  | "grid"
  | "pin"
  | "reels"
  | "pages"
  | "funnel"
  | "orbit";

export type CoverTone = "dark" | "red" | "grey";

export type BlogExtra = {
  motif: CoverMotif;
  tone: CoverTone;
  kicker: Record<Locale, string>;
  takeaways: Record<Locale, string[]>;
};

export const BLOG_EXTRA_LABELS = {
  uk: { toc: "Зміст", takeaways: "Головне зі статті", example: "Приклад розрахунку" },
  en: { toc: "Contents", takeaways: "Key takeaways", example: "Worked example" },
} as const;

export const BLOG_EXTRAS: Record<string, BlogExtra> = {
  "google-ads-cost-2026": {
    motif: "bars",
    tone: "dark",
    kicker: { uk: "Google Ads · бюджет", en: "Google Ads · budget" },
    takeaways: {
      uk: [
        "Вартість складається з рекламного бюджету (платите Google напряму) і оплати ведення.",
        "Ведення в PRO Marketing# — від 10 000 грн на місяць, рекомендований бюджет — від 15 000 грн.",
        "Бюджет рахуйте від потрібної кількості заявок: ціна кліка ÷ конверсія сайту.",
      ],
      en: [
        "The cost is the ad budget (paid to Google directly) plus the management fee.",
        "Management at PRO Marketing# starts at UAH 10,000 a month, with a recommended budget from UAH 15,000.",
        "Work the budget out from the number of leads you need: cost per click ÷ site conversion rate.",
      ],
    },
  },
  "meta-ads-vs-google-ads": {
    motif: "versus",
    tone: "red",
    kicker: { uk: "Meta Ads чи Google Ads", en: "Meta Ads or Google Ads" },
    takeaways: {
      uk: [
        "Google Ads ловить готовий попит: людей, які вже шукають ваш продукт.",
        "Meta Ads показує продукт за інтересами і формує новий попит.",
        "Найкраще працює поєднання: Google збирає попит, Meta створює його і повертає зацікавлених.",
      ],
      en: [
        "Google Ads captures existing demand: people already searching for your product.",
        "Meta Ads shows the product by interests and creates new demand.",
        "The combination works best: Google captures demand, Meta builds it and brings back interested people.",
      ],
    },
  },
  "how-long-seo-takes": {
    motif: "growth",
    tone: "grey",
    kicker: { uk: "SEO · терміни", en: "SEO · timelines" },
    takeaways: {
      uk: [
        "Перші зміни в Google Search Console видно через кілька тижнів.",
        "Стабільне зростання трафіку і заявок — від 2–3 місяців.",
        "Швидкість залежить від технічного стану сайту, конкуренції, сторінок і довіри інших ресурсів.",
      ],
      en: [
        "First changes show in Google Search Console within a few weeks.",
        "Steady growth in traffic and leads takes 2–3 months or more.",
        "Speed depends on the site's technical state, competition, pages and trust from other sites.",
      ],
    },
  },
  "what-is-aeo": {
    motif: "nodes",
    tone: "dark",
    kicker: { uk: "AEO · AI-пошук", en: "AEO · AI search" },
    takeaways: {
      uk: [
        "AEO — оптимізація під відповіді ChatGPT, Gemini, Perplexity і AI-оглядів Google.",
        "Мета — щоб асистент назвав ваш бізнес у відповідь на питання клієнта.",
        "Потрібні чіткі відповіді на сайті, структуровані дані й однакова інформація про бізнес усюди.",
      ],
      en: [
        "AEO optimises for answers from ChatGPT, Gemini, Perplexity and Google AI Overviews.",
        "The goal is for the assistant to name your business when a customer asks.",
        "You need clear answers on the site, structured data and consistent business details everywhere.",
      ],
    },
  },
  "how-to-choose-marketing-agency": {
    motif: "checklist",
    tone: "grey",
    kicker: { uk: "Вибір агенції", en: "Choosing an agency" },
    takeaways: {
      uk: [
        "З'ясуйте, на кого оформлені рекламні акаунти і чи йде бюджет напряму платформі.",
        "Домовтеся про цифри у звіті, частоту звітів і хто конкретно веде проєкт.",
        "Чесна агенція прямо відповідає на ці питання ще до підписання договору.",
      ],
      en: [
        "Find out whose name the ad accounts are in and whether the budget goes straight to the platform.",
        "Agree on the report metrics, how often you get reports and who exactly runs the project.",
        "An honest agency answers these questions plainly before you sign.",
      ],
    },
  },
  "smm-cost": {
    motif: "grid",
    tone: "red",
    kicker: { uk: "SMM · ціни", en: "SMM · pricing" },
    takeaways: {
      uk: [
        "Ціна SMM залежить від складу робіт: контент, дизайн, зйомка, реклама, Google-профіль.",
        "Пакет SMM з таргетом у PRO Marketing# — від 35 000 грн на місяць.",
        "Рекламний бюджет Meta оплачується окремо, рекомендований мінімум — від 10 000 грн.",
      ],
      en: [
        "SMM pricing depends on the scope: content, design, shoots, ads, Google profile.",
        "The SMM package with ads at PRO Marketing# starts at UAH 35,000 a month.",
        "The Meta ad budget is paid separately, with a recommended minimum of UAH 10,000.",
      ],
    },
  },
  "google-business-profile": {
    motif: "pin",
    tone: "dark",
    kicker: { uk: "Google Карти", en: "Google Maps" },
    takeaways: {
      uk: [
        "Потрібен підтверджений і повністю заповнений Google Бізнес-профіль.",
        "Важливі основна категорія, точна адреса, години роботи, послуги і свіжі фото.",
        "На позицію впливають відповідність запиту, відстань і відомість: відгуки, рейтинг, згадки.",
      ],
      en: [
        "You need a verified and fully completed Google Business Profile.",
        "The main category, exact address, hours, services and fresh photos all matter.",
        "Ranking depends on relevance, distance and prominence: reviews, rating, mentions.",
      ],
    },
  },
  "tiktok-ads-for-business": {
    motif: "reels",
    tone: "grey",
    kicker: { uk: "TikTok Ads", en: "TikTok Ads" },
    takeaways: {
      uk: [
        "TikTok підходить, якщо продукт можна показати в коротких відео і аудиторія там.",
        "Реклама тримається на відео в стилі платформи, тож знімати треба регулярно.",
        "Перед запуском встановіть піксель TikTok, щоб рахувати заявки, а не лише перегляди.",
      ],
      en: [
        "TikTok suits products you can show in short videos, with an audience that is there.",
        "Ads rely on platform-native videos, so you need to shoot regularly.",
        "Install the TikTok pixel before launch to count leads, not just views.",
      ],
    },
  },
  "landing-page-or-website": {
    motif: "pages",
    tone: "red",
    kicker: { uk: "Лендінг чи сайт", en: "Landing page or website" },
    takeaways: {
      uk: [
        "Лендінг — одна сторінка під одну пропозицію, добре працює з рекламою.",
        "Багатосторінковий сайт потрібен для багатьох послуг і клієнтів з пошуку Google.",
        "Часто найкраще — сайт, де кожна сторінка послуги працює як лендінг.",
      ],
      en: [
        "A landing page is one page for one offer and works well with ads.",
        "A multi-page site is needed for many services and for customers from Google search.",
        "Often the best option is a site where each service page works as a landing page.",
      ],
    },
  },
  "conversion-tracking": {
    motif: "funnel",
    tone: "dark",
    kicker: { uk: "Аналітика · конверсії", en: "Analytics · conversions" },
    takeaways: {
      uk: [
        "Конверсії показують, які кампанії приводять заявки, дзвінки і продажі.",
        "Мінімум: події GA4, імпорт конверсій у Google Ads і піксель Meta на сайті.",
        "Без цього системи оптимізують кліки, а вартість клієнта ви не бачите.",
      ],
      en: [
        "Conversions show which campaigns bring leads, calls and sales.",
        "The minimum: GA4 events, conversions imported into Google Ads and the Meta pixel on the site.",
        "Without it, ad platforms optimise for clicks and you can't see the cost per customer.",
      ],
    },
  },
  "performance-max": {
    motif: "orbit",
    tone: "grey",
    kicker: { uk: "Google Ads · PMax", en: "Google Ads · PMax" },
    takeaways: {
      uk: [
        "Performance Max показує рекламу в усіх каналах Google, бюджет розподіляє алгоритм.",
        "Працює, коли є конверсії з цінністю, достатньо даних і якісні матеріали.",
        "Без цього часто витрачає бюджет на дешеві нецільові покази.",
      ],
      en: [
        "Performance Max runs ads across all Google channels, and the algorithm splits the budget.",
        "It works when you have valued conversions, enough data and good assets.",
        "Without them it often spends the budget on cheap, untargeted impressions.",
      ],
    },
  },
};
