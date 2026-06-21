import { CONTACT, SOCIAL, SERVICES } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const services = SERVICES.map(
    (s) => `- [${s.title}](${SITE_URL}/uk${s.href}): ${s.description}`,
  ).join("\n");

  const body = `# PRO Marketing#

> Маркетингове агентство повного циклу в Ужгороді (Україна), з 2019 року. Google Ads, Meta Ads, TikTok Ads, SMM, SEO, AEO, розробка сайтів, лого та брендинг. Фокус — реальні заявки та продажі, а не просто контент.

PRO Marketing# — команда повного циклу (таргетолог, SEO-спеціаліст, розробник, дизайнер, контент-менеджер), що допомагає бізнесу залучати клієнтів. Працюємо прозоро: щотижнева або щомісячна звітність з реальними цифрами (витрати, кліки, конверсії, ROAS). Перші результати реклами — вже в перший тиждень; стабільне SEO-зростання — від 2–3 місяців.

## Послуги
${services}

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

## English
PRO Marketing# is a full-service marketing agency in Uzhhorod, Ukraine, founded in 2019. Services: Google Ads, Meta Ads, TikTok Ads, SMM, SEO, AEO, website development, logo & branding. Focus on real leads and sales with transparent weekly/monthly reporting.
- [Home](${SITE_URL}/en)
- [About](${SITE_URL}/en/about)
- [Cases](${SITE_URL}/en/cases)
- [Contact](${SITE_URL}/en/contact)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
