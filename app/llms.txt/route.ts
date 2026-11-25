import { CONTACT, SOCIAL, SERVICES } from "@/lib/constants";
import uk from "@/messages/uk.json";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const services = SERVICES.map(
    (s) => `- [${s.title}](${SITE_URL}/uk${s.href}): ${s.description}`,
  ).join("\n");

  const faq = (uk.faq.items as { question: string; answer: string }[])
    .map((item) => `### ${item.question}\n${item.answer}`)
    .join("\n\n");

  const body = `# PRO Marketing#

> Маркетингове агентство повного циклу в Ужгороді (Україна), з 2019 року. Google Ads, Meta Ads, TikTok Ads, SMM, SEO, AEO, розробка сайтів, лого та брендинг. Фокус — реальні заявки та продажі, а не просто контент.

PRO Marketing# — команда повного циклу (таргетолог, SEO-спеціаліст, розробник, дизайнер, контент-менеджер), що допомагає бізнесу залучати клієнтів. Працюємо прозоро: щотижнева або щомісячна звітність з реальними цифрами (витрати, кліки, конверсії, ROAS). Перші результати реклами — вже в перший тиждень; стабільне SEO-зростання — від 2–3 місяців.

## Послуги
${services}
- [Комплексний маркетинг під ключ](${SITE_URL}/uk/services/complex-marketing): стратегія, реклама, SEO, SMM, сайт і аналітика від однієї команди.

## Ціни
- Google Ads: від 10 000 грн/міс (ведення; рекламний бюджет оплачується окремо напряму Google)
- Meta Ads (Facebook, Instagram): від 15 000 грн/міс
- SMM-пакет (Instagram, Facebook, Google Business + таргет): від 35 000 грн/міс
- SEO, AEO, розробка сайтів, брендинг: вартість після безкоштовного аналізу
- Google Ads ведемо помісячно, без обов'язкового контракту; рекламний акаунт належить клієнту

## Ключові факти
- Офіційний Google Partner: https://www.google.com/partners/agency?id=7339068295
- Засновано у 2019 році, офіс в Ужгороді (Закарпатська область), працюємо з клієнтами по всій Україні
- Ніші: медицина, нерухомість, б'юті, e-commerce, локальний сервіс, B2B
- Перші заявки з Google Ads і Meta Ads — за 1–2 тижні після запуску; SEO — стабільне зростання від 2–3 місяців

## Основні сторінки
- [Головна](${SITE_URL}/uk)
- [Про нас](${SITE_URL}/uk/about)
- [Кейси](${SITE_URL}/uk/cases)
- [Контакти](${SITE_URL}/uk/contact)
- [Поширені питання (FAQ)](${SITE_URL}/uk/faq)

## Контакти
- Адреса: ${CONTACT.address}, ${CONTACT.city}
- Телефон: ${CONTACT.phoneFormatted}
- Email: ${CONTACT.email}
- Facebook: ${SOCIAL.facebook}
- LinkedIn: ${SOCIAL.linkedin}
- Google Бізнес-профіль: ${SOCIAL.google}
- Графік роботи: Пн–Пт 9:30–17:30

## Часті питання
${faq}

## English
PRO Marketing# is a full-service marketing agency in Uzhhorod, Ukraine, founded in 2019. Services: Google Ads, Meta Ads, TikTok Ads, SMM, SEO, AEO, website development, logo & branding. Focus on real leads and sales with transparent weekly/monthly reporting.
Google Partner. Pricing: Google Ads from UAH 10,000/mo, Meta Ads from UAH 15,000/mo, SMM bundle from UAH 35,000/mo.
- [Home](${SITE_URL}/en)
- [Google Ads](${SITE_URL}/en/services/google-ads)
- [Meta Ads](${SITE_URL}/en/services/meta-ads)
- [TikTok Ads](${SITE_URL}/en/services/tiktok-ads)
- [SMM](${SITE_URL}/en/services/smm)
- [SEO](${SITE_URL}/en/services/seo)
- [AEO](${SITE_URL}/en/services/aeo)
- [Website development](${SITE_URL}/en/services/website-development)
- [Logo & branding](${SITE_URL}/en/services/logo-branding)
- [Full-service marketing](${SITE_URL}/en/services/complex-marketing)
- [FAQ](${SITE_URL}/en/faq)
- [About](${SITE_URL}/en/about)
- [Cases](${SITE_URL}/en/cases)
- [Contact](${SITE_URL}/en/contact)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
