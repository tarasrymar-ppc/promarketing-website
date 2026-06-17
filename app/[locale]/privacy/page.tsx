import type { Metadata } from "next";
import CookieSettingsButton from "@/components/analytics/CookieSettingsButton";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CONTACT } from "@/lib/constants";
import { isLocale, localizedAlternates, type Locale } from "@/lib/seo";

const content: Record<
  Locale,
  {
    title: string;
    description: string;
    updated: string;
    sections: { title: string; body: string[] }[];
  }
> = {
  uk: {
    title: "Політика конфіденційності",
    description:
      "Як PRO Marketing# збирає, використовує та захищає персональні дані користувачів сайту.",
    updated: "Оновлено: 17 червня 2026",
    sections: [
      {
        title: "1. Хто ми",
        body: [
          "PRO Marketing# — маркетингове агентство в Ужгороді. Ця політика пояснює, які дані ми збираємо через сайт і як їх використовуємо.",
        ],
      },
      {
        title: "2. Які дані ми збираємо",
        body: [
          "Коли ви залишаєте заявку, ми можемо отримувати ваше ім'я, номер телефону, повідомлення, опис бізнесу, сторінку відправки заявки та мову сайту.",
          "Також сайт може збирати технічні події через Google Tag Manager: кліки по CTA, телефону, email, соціальних посиланнях, карті, сторінках послуг і факт успішної або неуспішної відправки форми.",
        ],
      },
      {
        title: "3. Для чого ми використовуємо дані",
        body: [
          "Ми використовуємо дані, щоб зв'язатися з вами, відповісти на запит, підготувати пропозицію, покращити сайт і розуміти ефективність маркетингових каналів.",
          "Ми не продаємо персональні дані третім сторонам.",
        ],
      },
      {
        title: "4. Telegram і Google Tag Manager",
        body: [
          "Заявки з форм надсилаються в робочий Telegram-чат команди PRO Marketing# через серверний API сайту.",
          "Google Tag Manager використовується для керування аналітичними подіями. Через GTM можуть підключатися Google Analytics, рекламні пікселі або інші маркетингові інструменти.",
          "Аналітичні та маркетингові теги через GTM запускаються тільки після вашої згоди на cookies.",
        ],
      },
      {
        title: "5. Cookies",
        body: [
          "Сайт використовує необхідні технології для базової роботи. Аналітичні cookies або подібні технології використовуються лише після вашої згоди.",
          "Ваш вибір cookies зберігається у браузері. Ви можете змінити його на цій сторінці.",
        ],
      },
      {
        title: "6. Зберігання і захист",
        body: [
          "Ми зберігаємо дані лише стільки, скільки потрібно для обробки заявки, комунікації з вами та внутрішньої аналітики.",
          "Ми застосовуємо розумні організаційні та технічні заходи, щоб обмежити доступ до персональних даних.",
        ],
      },
      {
        title: "7. Ваші права",
        body: [
          "Ви можете звернутися до нас, щоб уточнити, оновити або попросити видалити ваші персональні дані.",
        ],
      },
      {
        title: "8. Контакти",
        body: [
          `З питань конфіденційності напишіть нам на ${CONTACT.email} або зателефонуйте ${CONTACT.phoneFormatted}.`,
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    description:
      "How PRO Marketing# collects, uses, and protects personal data submitted through the website.",
    updated: "Updated: June 17, 2026",
    sections: [
      {
        title: "1. Who we are",
        body: [
          "PRO Marketing# is a marketing agency based in Uzhhorod, Ukraine. This policy explains what data we collect through the website and how we use it.",
        ],
      },
      {
        title: "2. What data we collect",
        body: [
          "When you submit a form, we may receive your name, phone number, message, business description, form page, and website language.",
          "The website may also collect technical events through Google Tag Manager, including CTA clicks, phone clicks, email clicks, social link clicks, map clicks, service link clicks, and successful or failed form submissions.",
        ],
      },
      {
        title: "3. How we use data",
        body: [
          "We use data to contact you, respond to your request, prepare a proposal, improve the website, and understand the performance of marketing channels.",
          "We do not sell personal data to third parties.",
        ],
      },
      {
        title: "4. Telegram and Google Tag Manager",
        body: [
          "Form submissions are sent to the PRO Marketing# team Telegram chat through the website server API.",
          "Google Tag Manager is used to manage analytics events. GTM may be used to connect Google Analytics, advertising pixels, or other marketing tools.",
          "Analytics and marketing tags through GTM are enabled only after your cookie consent.",
        ],
      },
      {
        title: "5. Cookies",
        body: [
          "The website uses essential technologies for basic functionality. Analytics cookies or similar technologies are used only after your consent.",
          "Your cookie choice is stored in your browser. You can change it on this page.",
        ],
      },
      {
        title: "6. Storage and protection",
        body: [
          "We keep data only as long as needed to process your request, communicate with you, and run internal analytics.",
          "We use reasonable organizational and technical measures to limit access to personal data.",
        ],
      },
      {
        title: "7. Your rights",
        body: [
          "You can contact us to request clarification, updates, or deletion of your personal data.",
        ],
      },
      {
        title: "8. Contact",
        body: [
          `For privacy questions, email us at ${CONTACT.email} or call ${CONTACT.phoneFormatted}.`,
        ],
      },
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

  return {
    title: `${content[safeLocale].title} | PRO Marketing#`,
    description: content[safeLocale].description,
    alternates: localizedAlternates(safeLocale, "/privacy"),
  };
}

export default async function PrivacyPage({
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
      <main className="min-h-screen bg-white pt-16 md:pt-[68px]">
        <div className="border-b border-[#E0E0E0]">
          <div className="max-w-6xl mx-auto px-6">
            <h1
              className="font-semibold tracking-tighter text-[#0D0D0D] leading-none py-6 md:py-8"
              style={{ fontSize: "clamp(44px, 9vw, 120px)" }}
            >
              {page.title}<span className="text-[#E5202E]">.</span>
            </h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <p className="text-sm text-[#ADADAD] mb-10">{page.updated}</p>
          <CookieSettingsButton locale={safeLocale} />
          <div className="flex flex-col gap-10">
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#0D0D0D] mb-4">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-sm md:text-base text-[#6B6B6B] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
