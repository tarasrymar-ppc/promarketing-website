const descriptions: Record<string, { uk: string; en: string }> = {
  "google-ads-cost-2026": {
    uk: "Лупа та стоси жетонів різної висоти як образ рекламного аукціону.",
    en: "A magnifying glass and stacks of bidding tokens represent an ad auction.",
  },
  "meta-ads-vs-google-ads": {
    uk: "Товар між картками соцмереж і рядком пошуку: два способи знайти покупця.",
    en: "A product between social feed cards and a search bar: two ways to reach a buyer.",
  },
  "how-long-seo-takes": {
    uk: "Паросток росте від одного аркуша календаря до наступного.",
    en: "A seedling grows across successive calendar pages.",
  },
  "what-is-aeo": {
    uk: "Картки джерел складаються у хмаринку відповіді.",
    en: "Reference cards form an answer bubble.",
  },
  "how-to-choose-marketing-agency": {
    uk: "Порівняння портфоліо агенцій за списком критеріїв.",
    en: "Agency portfolios being compared against a checklist.",
  },
  "smm-cost": {
    uk: "Камера, знімки, смартфон і чек показують роботу за одним дописом.",
    en: "A camera, contact sheet, phone and receipt show the work behind a social post.",
  },
  "google-business-profile": {
    uk: "Червона позначка на карті вказує на магазин у макеті кварталу.",
    en: "A red map pin marks a storefront in a model neighbourhood.",
  },
  "tiktok-ads-for-business": {
    uk: "Знімання вертикальної відеореклами товару на смартфон.",
    en: "Filming a vertical product ad on a smartphone.",
  },
  "landing-page-or-website": {
    uk: "Один довгий макет лендінгу поруч із набором пов’язаних сторінок сайту.",
    en: "One long landing page beside a set of connected website pages.",
  },
  "conversion-tracking": {
    uk: "Телефон і форма заявки під’єднані до одного лічильника.",
    en: "A phone and a lead form connect to one counter.",
  },
  "performance-max": {
    uk: "Мініатюрний конвеєр розподіляє рекламні жетони між кількома каналами.",
    en: "A miniature conveyor distributes advertising tokens across channels.",
  },
};

export function blogCover(slug: string, locale: "uk" | "en") {
  const description = descriptions[slug];
  return description ? { src: `/blog-covers/${slug}.webp`, alt: description[locale] } : undefined;
}
