import type { Locale } from "@/lib/seo";
import type { ServicePageContent } from "@/lib/servicePages";

// Landing pages for specific niches and queries, rendered by
// app/[locale]/industries/[slug]/page.tsx. They reuse the service page
// sections so the design stays the same, plus a "challenges" block and
// links to related services and blog articles.

export type IndustryPageContent = ServicePageContent & {
  /** Short title and text for the /industries index and the footer. */
  card: { title: string; text: string };
  challenges: {
    heading: string;
    intro: string;
    items: { title: string; text: string }[];
  };
};

export type IndustryPage = {
  /** Starting monthly price in UAH for the main service on the page. */
  price?: number;
  /** Service paths to link from the page, e.g. "/services/google-ads". */
  relatedServices: string[];
  /** Blog slugs to link from the page. */
  relatedPosts: string[];
} & Record<Locale, IndustryPageContent>;

export const INDUSTRY_LABELS = {
  uk: {
    indexName: "Галузі",
    indexTitle: "Маркетинг для вашої галузі",
    indexKeyword: "Реклама та маркетинг для стоматологій, інтернет-магазинів, готелів, нерухомості та салонів краси",
    indexMetaTitle: "Маркетинг для галузей: стоматології, e-commerce, готелі, нерухомість",
    indexMetaDescription:
      "Реклама Google Ads, Meta Ads і SMM під конкретну нішу: стоматології, інтернет-магазини, готелі Закарпаття, нерухомість, салони краси. PRO Marketing#, Ужгород.",
    indexLead: "Кожна ніша має свої запити, сезонність і правила реклами. Ось галузі, для яких ми розписали підхід детально.",
    challengesEyebrow: "Виклики ніші",
    relatedServices: "Послуги",
    relatedPosts: "Корисні статті",
    relatedHeading: "Що почитати і з чого почати",
    more: "Детальніше",
  },
  en: {
    indexName: "Industries",
    indexTitle: "Marketing for your industry",
    indexKeyword: "Advertising and marketing for dental clinics, online stores, hotels, real estate and beauty salons",
    indexMetaTitle: "Industry marketing: dental clinics, e-commerce, hotels, real estate",
    indexMetaDescription:
      "Google Ads, Meta Ads and SMM built for a specific niche: dental clinics, online stores, hotels in Zakarpattia, real estate, beauty salons. PRO Marketing#, Uzhhorod.",
    indexLead: "Every niche has its own search queries, seasonality and ad rules. These are the industries we've described in detail.",
    challengesEyebrow: "Niche challenges",
    relatedServices: "Services",
    relatedPosts: "Useful articles",
    relatedHeading: "What to read and where to start",
    more: "Learn more",
  },
} as const;

export const INDUSTRY_PAGES: Record<string, IndustryPage> = {
  /* ───────────────────────── Dental clinics ───────────────────────── */
  "dental-clinics": {
    price: 10000,
    relatedServices: ["/services/google-ads", "/services/meta-ads", "/services/website-development"],
    relatedPosts: ["google-ads-cost-2026", "meta-ads-vs-google-ads"],
    uk: {
      name: "Стоматології",
      card: {
        title: "Реклама для стоматологій",
        text: "Google Ads і Instagram, які приводять пацієнтів на конкретні послуги: імплантацію, ортодонтію, лікування.",
      },
      metaTitle: "Реклама для стоматології: Google Ads і Meta Ads",
      metaDescription:
        "Реклама стоматологічної клініки в Google та Instagram: записи на прийом, а не просто кліки. Ужгород, Закарпаття, вся Україна. Google Ads — від 10 000 грн/міс.",
      h1: "Реклама для стоматологічних клінік в Ужгороді та по всій Україні",
      lead: "Приводимо пацієнтів у стоматологію з Google та Instagram — на конкретні послуги, а не «на клініку загалом».",
      sub: "Окремі кампанії на імплантацію, ортодонтію, лікування та гігієну, відстеження дзвінків і записів, звіт із вартістю звернення по кожній послузі.",
      facts: [
        "Google Ads — від 10 000 грн/міс",
        "Meta Ads — від 15 000 грн/міс",
        "перші звернення — за 1–2 тижні після запуску",
      ],
      challenges: {
        heading: "Що заважає клініці отримувати пацієнтів з реклами",
        intro: "Типові помилки, які ми бачимо в рекламних кабінетах стоматологій.",
        items: [
          {
            title: "Одна кампанія на всі послуги",
            text: "Імплантація і професійна чистка мають різну цінність і різний попит. Коли все в одній кампанії, бюджет іде туди, де клік дешевший, а не туди, де заробляє клініка.",
          },
          {
            title: "Дзвінки ніхто не рахує",
            text: "Більшість пацієнтів телефонують, а не заповнюють форму. Без відстеження дзвінків реклама оптимізується наосліп.",
          },
          {
            title: "Правила медичної реклами",
            text: "Google і Meta мають окремі вимоги до медичних тем. Невдалі формулювання — це відхилені оголошення, а інколи й заблокований кабінет.",
          },
          {
            title: "Занедбаний профіль на картах",
            text: "На запит «стоматолог поруч» люди дивляться на карту, відгуки та фото. Без доглянутого Бізнес-профілю Google частина пацієнтів іде до сусідньої клініки.",
          },
        ],
      },
      deliverables: {
        intro: "Що робимо для клініки в межах ведення реклами.",
        items: [
          {
            title: "Пошукові кампанії за послугами",
            text: "Окремі групи на імплантацію, брекети та елайнери, лікування, протезування, дитячу стоматологію. Кожна веде на сторінку своєї послуги.",
          },
          {
            title: "Локальна реклама і карти",
            text: "Показуємо рекламу людям поруч із клінікою і пов'язуємо її з Бізнес-профілем Google, щоб клініку було видно на картах.",
          },
          {
            title: "Instagram і Facebook для довіри",
            text: "Meta Ads з лікарями, оглядом клініки та пропозицією на перший візит. Ретаргетинг на тих, хто вже цікавився послугою.",
          },
          {
            title: "Відстеження дзвінків і записів",
            text: "Налаштовуємо цілі в GA4 і Google Ads: дзвінки, форми, месенджери. Видно, скільки коштує звернення на кожну послугу.",
          },
          {
            title: "Оголошення з урахуванням правил",
            text: "Пишемо тексти так, щоб вони проходили модерацію медичної реклами і не обіцяли того, чого обіцяти не можна.",
          },
          {
            title: "Зрозумілий звіт",
            text: "Скільки звернень, на які послуги і за якою ціною. Без зайвих графіків, щоб адміністратор і власник бачили одне й те саме.",
          },
        ],
      },
      process: {
        intro: "Від першої розмови до стабільного потоку записів.",
        steps: [
          {
            label: "01 — Аналіз",
            title: "Розбираємося в клініці",
            items: [
              "Які послуги найвигідніші для клініки",
              "Хто конкуренти в місті і як вони рекламуються",
              "Стан сайту, Бізнес-профілю та відстеження",
            ],
          },
          {
            label: "02 — Запуск",
            title: "Налаштовуємо рекламу",
            items: [
              "Кампанії за послугами в Google Ads",
              "Meta Ads для впізнаваності і ретаргетингу",
              "Цілі та відстеження дзвінків",
            ],
          },
          {
            label: "03 — Оптимізація",
            title: "Покращуємо щомісяця",
            items: [
              "Бюджет — на послуги, які дають записи",
              "Чистимо нецільові запити",
              "Звіт і план на наступний місяць",
            ],
          },
        ],
      },
      timeline: {
        heading: "Чого чекати і коли",
        intro: "Чесні терміни без обіцянок «пацієнтів уже завтра».",
        items: [
          { time: "Тиждень 1", title: "Аудит і підготовка", text: "Аналізуємо нішу, готуємо структуру кампаній, налаштовуємо відстеження." },
          { time: "Тиждень 2", title: "Запуск", text: "Перші покази і перші звернення. Збираємо дані про запити та вартість." },
          { time: "Місяць 1", title: "Перша оптимізація", text: "Прибираємо неефективні запити, посилюємо послуги, що дають записи." },
          { time: "Місяці 2–3", title: "Стабільний потік", text: "Зрозуміла вартість звернення по кожній послузі і план масштабування." },
        ],
      },
      faq: [
        {
          question: "Скільки коштує реклама для стоматології?",
          answer: "Ведення Google Ads — від 10 000 грн на місяць, Meta Ads — від 15 000 грн. Рекламний бюджет ви оплачуєте окремо, напряму Google чи Meta: для Google рекомендуємо від 15 000 грн на місяць, для Meta — від 10 000 грн. Точна сума залежить від міста, конкуренції та кількості послуг, які рекламуємо.",
        },
        {
          question: "Що краще для стоматології: Google Ads чи Instagram?",
          answer: "Google Ads приводить людей, які вже шукають стоматолога або конкретну послугу, тому зазвичай дає звернення швидше. Instagram і Facebook формують довіру і добре працюють для естетичних послуг та нагадувань. Найчастіше радимо почати з Google і додати Meta Ads, коли пошук стабільно працює.",
        },
        {
          question: "Чи можна рекламувати імплантацію і брекети в Google?",
          answer: "Так, але медичні теми мають обмеження: не можна обіцяти гарантований результат, а частина формулювань і зображень заборонена. Ми пишемо оголошення з урахуванням цих правил.",
        },
        {
          question: "Ви працюєте тільки з клініками Ужгорода?",
          answer: "Ні. Офіс в Ужгороді, але рекламу ведемо для клінік по всій Україні. Локальну кампанію налаштовуємо на ваше місто чи район.",
        },
        {
          question: "Чи потрібен клініці окремий сайт?",
          answer: "Бажано мати сторінку під кожну ключову послугу з цінами і кнопкою запису. Якщо такої немає, можемо зробити лендінг.",
        },
      ],
      formSub: "Розкажіть про клініку і послуги, які хочете рекламувати. Запропонуємо структуру кампаній і бюджет.",
    },
    en: {
      name: "Dental clinics",
      card: {
        title: "Dental clinic advertising",
        text: "Google Ads and Instagram that bring patients to specific treatments: implants, orthodontics, general care.",
      },
      metaTitle: "Dental clinic advertising: Google Ads and Meta Ads",
      metaDescription:
        "Google and Instagram ads for dental clinics that bring booked appointments, not just clicks. Uzhhorod, Zakarpattia and all of Ukraine. Google Ads from UAH 10,000/mo.",
      h1: "Advertising for dental clinics in Uzhhorod and across Ukraine",
      lead: "We bring patients to dental clinics from Google and Instagram — for specific treatments, not “the clinic in general”.",
      sub: "Separate campaigns for implants, orthodontics, treatment and hygiene, call and booking tracking, and a report with the cost per enquiry for each treatment.",
      facts: [
        "Google Ads from UAH 10,000/mo",
        "Meta Ads from UAH 15,000/mo",
        "first enquiries 1–2 weeks after launch",
      ],
      challenges: {
        heading: "What stops a clinic getting patients from ads",
        intro: "Common mistakes we see in dental clinics' ad accounts.",
        items: [
          {
            title: "One campaign for every treatment",
            text: "Implants and a hygiene visit have very different value and demand. In one campaign, budget flows to the cheapest clicks, not to what earns the clinic money.",
          },
          {
            title: "Nobody counts the calls",
            text: "Most patients call rather than fill in a form. Without call tracking, the ads optimise blind.",
          },
          {
            title: "Healthcare ad rules",
            text: "Google and Meta have separate rules for medical topics. Wrong wording means rejected ads, sometimes a blocked account.",
          },
          {
            title: "A neglected maps listing",
            text: "For “dentist near me”, people look at the map, reviews and photos. Without a maintained Google Business Profile, some patients go to the clinic next door.",
          },
        ],
      },
      deliverables: {
        intro: "What we do for a clinic as part of ad management.",
        items: [
          { title: "Search campaigns by treatment", text: "Separate groups for implants, braces and aligners, treatment, prosthetics and children's dentistry, each leading to its own treatment page." },
          { title: "Local ads and maps", text: "We show ads to people near the clinic and link them to the Google Business Profile so the clinic is visible on maps." },
          { title: "Instagram and Facebook for trust", text: "Meta Ads featuring the doctors, the clinic and a first-visit offer, plus retargeting for people who already looked at a treatment." },
          { title: "Call and booking tracking", text: "Goals in GA4 and Google Ads for calls, forms and messengers, so you see the cost of an enquiry for each treatment." },
          { title: "Ads that follow the rules", text: "Copy written to pass healthcare ad review and never promise what can't be promised." },
          { title: "A clear report", text: "How many enquiries, for which treatments, at what cost. The owner and the front desk see the same numbers." },
        ],
      },
      process: {
        intro: "From the first call to a steady flow of bookings.",
        steps: [
          { label: "01 — Analysis", title: "We learn the clinic", items: ["Which treatments are most profitable", "Who the local competitors are and how they advertise", "The state of the website, Business Profile and tracking"] },
          { label: "02 — Launch", title: "We set up the ads", items: ["Treatment campaigns in Google Ads", "Meta Ads for awareness and retargeting", "Goals and call tracking"] },
          { label: "03 — Optimisation", title: "We improve every month", items: ["Budget goes to treatments that bring bookings", "We clean out irrelevant searches", "Monthly report and next month's plan"] },
        ],
      },
      timeline: {
        heading: "What to expect and when",
        intro: "Honest timelines, no promises of “patients tomorrow”.",
        items: [
          { time: "Week 1", title: "Audit and preparation", text: "We analyse the niche, plan the campaign structure and set up tracking." },
          { time: "Week 2", title: "Launch", text: "First impressions and first enquiries. We collect data on searches and costs." },
          { time: "Month 1", title: "First optimisation", text: "We remove weak searches and push the treatments that bring bookings." },
          { time: "Months 2–3", title: "Steady flow", text: "A clear cost per enquiry for each treatment and a plan to scale." },
        ],
      },
      faq: [
        { question: "How much does dental clinic advertising cost?", answer: "Google Ads management starts from UAH 10,000 per month and Meta Ads from UAH 15,000. The ad budget is paid separately, directly to Google or Meta: we recommend from UAH 15,000 per month for Google and from UAH 10,000 for Meta. The exact amount depends on the city, competition and how many treatments we promote." },
        { question: "Which is better for a dental clinic: Google Ads or Instagram?", answer: "Google Ads reaches people already searching for a dentist or a specific treatment, so it usually brings enquiries faster. Instagram and Facebook build trust and work well for aesthetic treatments and reminders. We usually suggest starting with Google and adding Meta Ads once search works steadily." },
        { question: "Can implants and braces be advertised on Google?", answer: "Yes, with restrictions: you can't promise guaranteed results, and some wording and images are not allowed. We write ads with those rules in mind." },
        { question: "Do you only work with clinics in Uzhhorod?", answer: "No. Our office is in Uzhhorod, but we run ads for clinics across Ukraine and target the local campaign to your city or district." },
        { question: "Does the clinic need a separate website?", answer: "Ideally there is a page for each key treatment with prices and a booking button. If there isn't, we can build a landing page." },
      ],
      formSub: "Tell us about the clinic and the treatments you want to promote. We'll suggest a campaign structure and budget.",
    },
  },

  /* ───────────────────────── Online stores ───────────────────────── */
  "online-stores": {
    price: 10000,
    relatedServices: ["/services/google-ads", "/services/meta-ads", "/services/seo"],
    relatedPosts: ["google-ads-cost-2026", "meta-ads-vs-google-ads"],
    uk: {
      name: "Інтернет-магазини",
      card: {
        title: "Google Ads для інтернет-магазинів",
        text: "Shopping, Performance Max і пошук з відстеженням продажів і ROAS.",
      },
      metaTitle: "Google Ads для інтернет-магазину: Shopping і Performance Max",
      metaDescription:
        "Налаштування Google Ads для інтернет-магазину: Merchant Center, Shopping, Performance Max, відстеження продажів і ROAS. По всій Україні, ведення від 10 000 грн/міс.",
      h1: "Google Ads для інтернет-магазинів по всій Україні",
      lead: "Налаштовуємо Google Ads для інтернет-магазину так, щоб рахувати продажі і дохід, а не кліки.",
      sub: "Merchant Center і фід товарів, Shopping і Performance Max, пошук за категоріями, відстеження покупок з цінністю. У звіті — ROAS і вартість продажу.",
      facts: [
        "ведення — від 10 000 грн/міс",
        "звіт з ROAS і вартістю продажу",
        "акаунт і фід — на ваше ім'я",
      ],
      challenges: {
        heading: "Чому реклама магазину «їсть» бюджет",
        intro: "Найчастіші причини, через які Google Ads не окупається.",
        items: [
          { title: "Фід товарів з помилками", text: "Merchant Center відхиляє товари, назви неповні, немає атрибутів. Частина асортименту просто не показується в Shopping." },
          { title: "Google не бачить продажів", text: "Якщо покупки не передаються в Google Ads з сумою замовлення, алгоритм оптимізує кліки, а не дохід." },
          { title: "Бюджет іде на кілька товарів", text: "Performance Max без структури часто віддає майже весь бюджет кільком позиціям, а решта каталогу стоїть." },
          { title: "Конкуренція з маркетплейсами", text: "Поруч у видачі — великі маркетплейси. Вигравати доводиться ціною, асортиментом, доставкою і якістю сторінки товару, а не лише ставкою." },
        ],
      },
      deliverables: {
        intro: "Що входить у ведення Google Ads для магазину.",
        items: [
          { title: "Merchant Center і фід", text: "Підключаємо Merchant Center, виправляємо помилки фіду, покращуємо назви та атрибути товарів, щоб товари проходили модерацію." },
          { title: "Shopping і Performance Max", text: "Розбиваємо каталог на групи за маржинальністю та категоріями, щоб бюджет ішов на товари, які заробляють." },
          { title: "Пошук за категоріями і брендом", text: "Пошукові кампанії на ключові категорії, бренд магазину і запити з наміром купити." },
          { title: "Відстеження покупок", text: "Налаштовуємо e-commerce події в GA4 і конверсії з цінністю замовлення в Google Ads." },
          { title: "Ремаркетинг", text: "Повертаємо тих, хто дивився товари або кинув кошик, з динамічними оголошеннями." },
          { title: "Звіт з ROAS", text: "Витрати, дохід, ROAS і вартість продажу за категоріями. Видно, що окупається, а що ні." },
        ],
      },
      process: {
        intro: "Порядок робіт для нового або вже запущеного магазину.",
        steps: [
          { label: "01 — Аудит", title: "Перевіряємо основу", items: ["Фід і Merchant Center", "Відстеження покупок і доходу", "Маржинальність категорій"] },
          { label: "02 — Запуск", title: "Будуємо структуру", items: ["Shopping і Performance Max за групами товарів", "Пошук за категоріями і брендом", "Ремаркетинг"] },
          { label: "03 — Масштаб", title: "Ростемо на даних", items: ["Бюджет — на категорії з кращим ROAS", "Виключаємо збиткові товари і запити", "Щомісячний звіт і план"] },
        ],
      },
      timeline: {
        heading: "Чого чекати і коли",
        intro: "Алгоритмам Google потрібні дані про продажі, тому перший місяць — це навчання.",
        items: [
          { time: "Тиждень 1", title: "Аудит і фід", text: "Виправляємо фід, налаштовуємо відстеження покупок, готуємо структуру." },
          { time: "Тиждень 2", title: "Запуск", text: "Перші покази в Shopping і пошуку, перші продажі." },
          { time: "Місяць 1", title: "Навчання алгоритмів", text: "Збираємо дані, відсікаємо збиткові товари і запити." },
          { time: "Місяці 2–3", title: "Стабільний ROAS", text: "Зрозуміло, які категорії окупаються, і можна масштабувати бюджет." },
        ],
      },
      faq: [
        { question: "Скільки коштує Google Ads для інтернет-магазину?", answer: "Ведення — від 10 000 грн на місяць. Рекламний бюджет оплачується окремо, напряму Google; рекомендований мінімум — від 15 000 грн на місяць. Для великих каталогів бюджет зазвичай вищий, бо алгоритмам потрібно більше даних." },
        { question: "Що краще: Shopping чи Performance Max?", answer: "Це не вибір «або-або». Performance Max добре масштабує, але дає менше контролю. Стандартні Shopping і пошукові кампанії дають більше контролю над товарами і запитами. Найчастіше ми поєднуємо їх і розбиваємо каталог на групи." },
        { question: "Який ROAS вважається нормальним?", answer: "Залежить від маржі. Мінімальний ROAS, за якого реклама не в мінус, дорівнює 1, поділеній на вашу маржу. Наприклад, при маржі 25% реклама окупається з ROAS 400%. Тому ціль ROAS ми ставимо від економіки вашого магазину, а не від «середнього по ринку»." },
        { question: "З якими платформами магазинів ви працюєте?", answer: "З будь-якою, яка вміє формувати фід товарів для Google Merchant Center і дозволяє встановити теги аналітики. Якщо фіду немає, підкажемо, як його зробити." },
        { question: "Чи потрібне SEO, якщо є Google Ads?", answer: "Реклама дає продажі одразу, SEO — безкоштовний трафік у довгу. Для магазину з великим каталогом SEO категорій і товарів з часом знижує залежність від рекламного бюджету." },
      ],
      formSub: "Розкажіть про магазин: що продаєте, на якій платформі і чи запускали рекламу. Підкажемо, з чого почати.",
    },
    en: {
      name: "Online stores",
      card: {
        title: "Google Ads for online stores",
        text: "Shopping, Performance Max and search with sales and ROAS tracking.",
      },
      metaTitle: "Google Ads for online stores: Shopping and Performance Max",
      metaDescription:
        "Google Ads for online stores: Merchant Center, Shopping, Performance Max, sales and ROAS tracking. Across Ukraine, management from UAH 10,000/mo.",
      h1: "Google Ads for online stores across Ukraine",
      lead: "We set up Google Ads for online stores to count sales and revenue, not clicks.",
      sub: "Merchant Center and product feed, Shopping and Performance Max, category search, purchase tracking with value. The report shows ROAS and cost per sale.",
      facts: ["management from UAH 10,000/mo", "report with ROAS and cost per sale", "account and feed in your name"],
      challenges: {
        heading: "Why store ads burn the budget",
        intro: "The most common reasons Google Ads doesn't pay off for a store.",
        items: [
          { title: "A product feed with errors", text: "Merchant Center rejects products, titles are incomplete, attributes are missing. Part of the range never shows in Shopping." },
          { title: "Google can't see sales", text: "If purchases aren't sent to Google Ads with order value, the algorithm optimises for clicks, not revenue." },
          { title: "Budget goes to a few products", text: "Performance Max without structure often spends almost everything on a handful of items while the rest of the catalogue sits idle." },
          { title: "Competing with marketplaces", text: "Big marketplaces sit next to you in results. You win on price, range, delivery and product page quality, not only on bids." },
        ],
      },
      deliverables: {
        intro: "What Google Ads management for a store includes.",
        items: [
          { title: "Merchant Center and feed", text: "We connect Merchant Center, fix feed errors and improve product titles and attributes so products pass review." },
          { title: "Shopping and Performance Max", text: "We split the catalogue by margin and category so budget goes to products that earn." },
          { title: "Category and brand search", text: "Search campaigns for key categories, the store's brand and buying-intent searches." },
          { title: "Purchase tracking", text: "E-commerce events in GA4 and conversions with order value in Google Ads." },
          { title: "Remarketing", text: "Dynamic ads that bring back people who viewed products or left the cart." },
          { title: "ROAS report", text: "Spend, revenue, ROAS and cost per sale by category, so you see what pays off and what doesn't." },
        ],
      },
      process: {
        intro: "The order of work for a new or running store.",
        steps: [
          { label: "01 — Audit", title: "We check the basics", items: ["Feed and Merchant Center", "Purchase and revenue tracking", "Category margins"] },
          { label: "02 — Launch", title: "We build the structure", items: ["Shopping and Performance Max by product group", "Category and brand search", "Remarketing"] },
          { label: "03 — Scale", title: "We grow on data", items: ["Budget to the categories with better ROAS", "Exclude loss-making products and searches", "Monthly report and plan"] },
        ],
      },
      timeline: {
        heading: "What to expect and when",
        intro: "Google's algorithms need sales data, so the first month is about learning.",
        items: [
          { time: "Week 1", title: "Audit and feed", text: "We fix the feed, set up purchase tracking and plan the structure." },
          { time: "Week 2", title: "Launch", text: "First impressions in Shopping and search, first sales." },
          { time: "Month 1", title: "Algorithm learning", text: "We collect data and cut loss-making products and searches." },
          { time: "Months 2–3", title: "Stable ROAS", text: "It's clear which categories pay off, so the budget can scale." },
        ],
      },
      faq: [
        { question: "How much does Google Ads for an online store cost?", answer: "Management starts from UAH 10,000 per month. The ad budget is paid separately, directly to Google; the recommended minimum is from UAH 15,000 per month. Large catalogues usually need more, because the algorithms need more data." },
        { question: "Which is better: Shopping or Performance Max?", answer: "It isn't either-or. Performance Max scales well but gives less control. Standard Shopping and search campaigns give more control over products and searches. We usually combine them and split the catalogue into groups." },
        { question: "What ROAS is good?", answer: "It depends on your margin. Break-even ROAS equals 1 divided by your margin: with a 25% margin, ads pay off at 400% ROAS. So we set the ROAS target from your store's economics, not a “market average”." },
        { question: "Which store platforms do you work with?", answer: "Any platform that can produce a product feed for Google Merchant Center and lets you install analytics tags. If you have no feed, we'll explain how to set one up." },
        { question: "Do I need SEO if I run Google Ads?", answer: "Ads bring sales right away; SEO brings free traffic over time. For a store with a large catalogue, category and product SEO gradually reduces dependence on ad spend." },
      ],
      formSub: "Tell us about the store: what you sell, which platform, and whether you've run ads before. We'll suggest where to start.",
    },
  },

  /* ─────────────────────── Hotels in Zakarpattia ─────────────────────── */
  "hotels-zakarpattia": {
    price: 10000,
    relatedServices: ["/services/google-ads", "/services/smm", "/services/website-development"],
    relatedPosts: ["meta-ads-vs-google-ads", "what-is-aeo"],
    uk: {
      name: "Готелі Закарпаття",
      card: {
        title: "Маркетинг для готелів Закарпаття",
        text: "Прямі бронювання для готелів, садиб і комплексів з чанами через Google, карти та Instagram.",
      },
      metaTitle: "Маркетинг для готелів і садиб Закарпаття",
      metaDescription:
        "Реклама і SMM для готелів, садиб і комплексів з чанами на Закарпатті: прямі бронювання з Google, карт та Instagram. Агенція з Ужгорода, Google Ads від 10 000 грн/міс.",
      h1: "Маркетинг і реклама для готелів, садиб і комплексів з чанами на Закарпатті",
      lead: "Допомагаємо готелям Закарпаття отримувати більше прямих бронювань — без зайвих комісій посередникам.",
      sub: "Google Ads за запитами гостей, Бізнес-профіль і карти, Instagram із сезонними пропозиціями, сайт з бронюванням. Ми з Ужгорода і знаємо, як і коли їдуть на Закарпаття.",
      facts: [
        "Google Ads — від 10 000 грн/міс",
        "SMM + таргет — від 35 000 грн/міс",
        "офіс в Ужгороді",
      ],
      challenges: {
        heading: "З чим стикаються готелі в регіоні",
        intro: "Особливості туристичного Закарпаття, які треба враховувати в рекламі.",
        items: [
          { title: "Залежність від посередників", text: "Коли більшість бронювань іде через платформи бронювання, готель віддає комісію з кожного гостя і не має прямого контакту з ним." },
          { title: "Різкі сезони", text: "Лижний сезон, літо, свята, вихідні. Реклама, яка однакова весь рік, переплачує в пік і мовчить у міжсезоння." },
          { title: "Щільна конкуренція в локаціях", text: "У популярних місцях на кшталт Поляни, Шаяна чи Драгобрата десятки садиб поруч. Виграють ті, кого видно на картах і чиї фото хочеться відкрити." },
          { title: "Гості шукають в Instagram і на картах", text: "Перед бронюванням люди дивляться фото, сторіс і відгуки. Порожній профіль або старі фото коштують бронювань." },
        ],
      },
      deliverables: {
        intro: "Що робимо для готелю, садиби чи комплексу.",
        items: [
          { title: "Google Ads на прямі бронювання", text: "Запити на кшталт «готель Поляна», «садиба з чаном Закарпаття», «відпочинок у Карпатах на вихідні». Реклама веде на ваш сайт, а не на посередника." },
          { title: "Бізнес-профіль і карти", text: "Оформлюємо і ведемо профіль у Google: фото, послуги, відповіді на відгуки. Щоб вас знаходили на картах поруч із локацією." },
          { title: "Instagram і Meta Ads", text: "Reels і сторіс з номерами, чанами, краєвидами. Реклама на міста, звідки до вас їдуть, і ретаргетинг на тих, хто вже дивився." },
          { title: "Сезонний план", text: "Плануємо бюджет і пропозиції під сезони, свята і вихідні, щоб заповнювати номери і в міжсезоння." },
          { title: "Сайт з бронюванням", text: "Якщо сайту немає або він не продає, робимо швидкий сайт чи лендінг з цінами, фото і кнопкою бронювання." },
          { title: "Відстеження бронювань", text: "Рахуємо дзвінки, заявки і бронювання з кожного каналу, щоб було видно, що окупається." },
        ],
      },
      process: {
        intro: "Як ми запускаємо маркетинг для готелю.",
        steps: [
          { label: "01 — Аналіз", title: "Вивчаємо готель і локацію", items: ["Хто ваші гості і звідки їдуть", "Конкуренти поруч і їхні ціни", "Сайт, профіль на картах, Instagram"] },
          { label: "02 — Запуск", title: "Канали прямих бронювань", items: ["Google Ads за запитами гостей", "Бізнес-профіль і карти", "Instagram і Meta Ads"] },
          { label: "03 — Сезон", title: "Керуємо за сезонами", items: ["Більше бюджету перед піком", "Пропозиції на міжсезоння", "Щомісячний звіт і план"] },
        ],
      },
      timeline: {
        heading: "Чого чекати і коли",
        intro: "Найкраще починати за кілька тижнів до сезону, а не в його розпал.",
        items: [
          { time: "Тиждень 1", title: "Аудит", text: "Перевіряємо сайт, профіль на картах, Instagram і поточні канали бронювань." },
          { time: "Тиждень 2", title: "Запуск", text: "Запускаємо пошукову рекламу і рекламу в Instagram, перші звернення." },
          { time: "Місяць 1", title: "Оптимізація", text: "Залишаємо запити і аудиторії, які дають бронювання." },
          { time: "Сезон", title: "Масштаб", text: "Підсилюємо бюджет перед піком і плануємо наступний сезон." },
        ],
      },
      faq: [
        { question: "Як отримувати бронювання напряму, без посередників?", answer: "Потрібні три речі: сайт або сторінка з цінами і кнопкою бронювання, реклама в Google за запитами гостей, яка веде на цей сайт, і доглянутий профіль на картах та в Instagram. Посередників можна залишити як додатковий канал, але частку прямих бронювань варто збільшувати." },
        { question: "Коли починати рекламу перед сезоном?", answer: "Зазвичай за 4–6 тижнів до сезону: люди планують поїздки заздалегідь, а рекламі потрібен час на навчання. На свята і довгі вихідні — за 2–3 тижні." },
        { question: "Скільки коштує маркетинг для готелю?", answer: "Ведення Google Ads — від 10 000 грн на місяць, Meta Ads — від 15 000 грн, пакет SMM з таргетом — від 35 000 грн. Рекламний бюджет оплачується окремо, напряму Google чи Meta." },
        { question: "Чи працюєте з невеликими садибами?", answer: "Так. Для невеликої садиби часто достатньо Бізнес-профілю, Instagram і невеликої пошукової кампанії на свою локацію. Порадимо, з чого почати, щоб не переплачувати." },
        { question: "Ви працюєте лише із Закарпаттям?", answer: "Ні, працюємо по всій Україні. Але Закарпаття — наш регіон, тож ми добре знаємо локації, сезони і те, як сюди їдуть гості." },
      ],
      formSub: "Розкажіть про готель: де він, скільки номерів і звідки зараз приходять бронювання. Запропонуємо план на сезон.",
    },
    en: {
      name: "Zakarpattia hotels",
      card: {
        title: "Marketing for Zakarpattia hotels",
        text: "Direct bookings for hotels, guesthouses and hot-tub resorts through Google, maps and Instagram.",
      },
      metaTitle: "Marketing for hotels and guesthouses in Zakarpattia",
      metaDescription:
        "Ads and SMM for hotels, guesthouses and hot-tub resorts in Zakarpattia: direct bookings from Google, maps and Instagram. Agency from Uzhhorod, Google Ads from UAH 10,000/mo.",
      h1: "Marketing and advertising for hotels, guesthouses and hot-tub resorts in Zakarpattia",
      lead: "We help Zakarpattia hotels get more direct bookings, with fewer commissions paid to middlemen.",
      sub: "Google Ads for guests' searches, Business Profile and maps, Instagram with seasonal offers, a website with booking. We're from Uzhhorod and know how and when people travel to Zakarpattia.",
      facts: ["Google Ads from UAH 10,000/mo", "SMM + ads from UAH 35,000/mo", "office in Uzhhorod"],
      challenges: {
        heading: "What hotels in the region face",
        intro: "Features of tourist Zakarpattia that advertising has to account for.",
        items: [
          { title: "Dependence on booking platforms", text: "When most bookings come through booking platforms, the hotel pays commission on every guest and has no direct contact with them." },
          { title: "Sharp seasons", text: "Ski season, summer, holidays, weekends. Ads that stay the same all year overpay at peak and go quiet off-season." },
          { title: "Dense local competition", text: "In popular places like Polyana, Shayan or Dragobrat there are dozens of guesthouses side by side. The ones visible on maps, with photos people want to open, win." },
          { title: "Guests search on Instagram and maps", text: "Before booking, people look at photos, stories and reviews. An empty profile or old photos cost bookings." },
        ],
      },
      deliverables: {
        intro: "What we do for a hotel, guesthouse or resort.",
        items: [
          { title: "Google Ads for direct bookings", text: "Searches like “hotel Polyana”, “guesthouse with hot tub Zakarpattia”, “Carpathians weekend”. Ads lead to your website, not a middleman." },
          { title: "Business Profile and maps", text: "We set up and maintain your Google profile: photos, services, replies to reviews, so you're found on maps near your location." },
          { title: "Instagram and Meta Ads", text: "Reels and stories with rooms, hot tubs and views. Ads aimed at the cities your guests come from, plus retargeting." },
          { title: "Seasonal plan", text: "Budget and offers planned around seasons, holidays and weekends, so rooms fill off-season too." },
          { title: "Website with booking", text: "If there's no website or it doesn't sell, we build a fast site or landing page with prices, photos and a booking button." },
          { title: "Booking tracking", text: "We count calls, requests and bookings from each channel, so you see what pays off." },
        ],
      },
      process: {
        intro: "How we launch marketing for a hotel.",
        steps: [
          { label: "01 — Analysis", title: "We study the hotel and location", items: ["Who your guests are and where they come from", "Nearby competitors and their prices", "Website, maps profile, Instagram"] },
          { label: "02 — Launch", title: "Direct booking channels", items: ["Google Ads for guests' searches", "Business Profile and maps", "Instagram and Meta Ads"] },
          { label: "03 — Season", title: "We manage by season", items: ["More budget before the peak", "Offers for the off-season", "Monthly report and plan"] },
        ],
      },
      timeline: {
        heading: "What to expect and when",
        intro: "It's best to start a few weeks before the season, not at its height.",
        items: [
          { time: "Week 1", title: "Audit", text: "We check the website, maps profile, Instagram and current booking channels." },
          { time: "Week 2", title: "Launch", text: "Search and Instagram ads go live, first enquiries arrive." },
          { time: "Month 1", title: "Optimisation", text: "We keep the searches and audiences that bring bookings." },
          { time: "Season", title: "Scale", text: "We raise the budget before the peak and plan the next season." },
        ],
      },
      faq: [
        { question: "How do we get direct bookings without middlemen?", answer: "You need three things: a website or page with prices and a booking button, Google ads for guests' searches that lead to it, and a well-kept maps and Instagram profile. Booking platforms can stay as an extra channel, but the share of direct bookings is worth growing." },
        { question: "When should ads start before the season?", answer: "Usually 4–6 weeks before the season: people plan trips ahead, and ads need time to learn. For holidays and long weekends, 2–3 weeks ahead." },
        { question: "How much does hotel marketing cost?", answer: "Google Ads management starts from UAH 10,000 per month, Meta Ads from UAH 15,000, and the SMM bundle with ads from UAH 35,000. The ad budget is paid separately, directly to Google or Meta." },
        { question: "Do you work with small guesthouses?", answer: "Yes. For a small guesthouse a Business Profile, Instagram and a small search campaign for your location are often enough. We'll suggest where to start so you don't overpay." },
        { question: "Do you only work in Zakarpattia?", answer: "No, we work across Ukraine. But Zakarpattia is our home region, so we know the locations, the seasons and how guests travel here." },
      ],
      formSub: "Tell us about the hotel: where it is, how many rooms, and where bookings come from now. We'll suggest a plan for the season.",
    },
  },

  /* ───────────────────────── Real estate ───────────────────────── */
  "real-estate": {
    price: 15000,
    relatedServices: ["/services/meta-ads", "/services/google-ads", "/services/website-development"],
    relatedPosts: ["meta-ads-vs-google-ads", "how-to-choose-marketing-agency"],
    uk: {
      name: "Нерухомість",
      card: {
        title: "Реклама нерухомості",
        text: "Ліди для забудовників, ЖК і агентств нерухомості з Meta Ads і Google Ads.",
      },
      metaTitle: "Реклама нерухомості: ліди для забудовників, ЖК і агентств",
      metaDescription:
        "Реклама житлових комплексів і нерухомості в Meta Ads і Google Ads: кваліфіковані ліди, лендінги, передача заявок у CRM. Ужгород і вся Україна.",
      h1: "Реклама для забудовників, ЖК і агентств нерухомості в Ужгороді та по Україні",
      lead: "Приводимо заявки на квартири та комерційну нерухомість і рахуємо, скільки з них дійшли до перегляду.",
      sub: "Meta Ads з кваліфікаційними питаннями, Google Ads за запитами покупців, лендінг під ЖК, передача заявок у CRM чи месенджер. Довгий цикл угоди підтримуємо ретаргетингом.",
      facts: [
        "Meta Ads — від 15 000 грн/міс",
        "Google Ads — від 10 000 грн/міс",
        "звіт з вартістю кваліфікованого ліда",
      ],
      challenges: {
        heading: "Чому реклама нерухомості не продає",
        intro: "Що ми найчастіше бачимо у забудовників і агентств.",
        items: [
          { title: "Дешеві, але порожні заявки", text: "Лід-форма без питань збирає контакти людей, які «просто подивитися». Вартість заявки низька, а продажів немає." },
          { title: "Довгий цикл угоди", text: "Між першим кліком і договором минають тижні чи місяці. Реклама, яка не нагадує про себе, втрачає покупця на півдорозі." },
          { title: "Заявки губляться", text: "Якщо лід приходить на пошту і менеджер передзвонює наступного дня, покупець уже говорить з іншим забудовником." },
          { title: "Незрозуміло, що працює", text: "Сайт, соцмережі, оголошення, банери — без єдиного обліку не видно, який канал приводить покупців." },
        ],
      },
      deliverables: {
        intro: "Що входить у роботу з проєктом нерухомості.",
        items: [
          { title: "Meta Ads з кваліфікацією", text: "Лід-форми з питаннями про бюджет, кількість кімнат і терміни покупки. Менше заявок «просто подивитися»." },
          { title: "Google Ads за запитами покупців", text: "Пошукові кампанії на запити на кшталт «квартира в новобудові Ужгород» і назву вашого ЖК." },
          { title: "Лендінг під ЖК", text: "Сторінка з плануваннями, цінами, ходом будівництва і зрозумілою формою заявки." },
          { title: "Передача заявок у CRM", text: "Ліди одразу потрапляють у CRM, Telegram чи на пошту відділу продажу, щоб менеджер передзвонив за хвилини." },
          { title: "Ретаргетинг на довгий цикл", text: "Нагадуємо про проєкт тим, хто дивився сайт: хід будівництва, нові черги, умови розстрочки." },
          { title: "Звіт від реклами до перегляду", text: "Разом із відділом продажу рахуємо не лише заявки, а й ті, що дійшли до перегляду або бронювання." },
        ],
      },
      process: {
        intro: "Як будуємо потік заявок на нерухомість.",
        steps: [
          { label: "01 — Аналіз", title: "Продукт і покупець", items: ["Хто купує і з якою метою", "Конкуренти і їхні пропозиції", "Як відділ продажу обробляє заявки"] },
          { label: "02 — Запуск", title: "Канали і лендінг", items: ["Meta Ads і Google Ads", "Лендінг під ЖК або об'єкт", "Передача заявок у CRM"] },
          { label: "03 — Якість", title: "Оптимізуємо за якістю", items: ["Зворотний зв'язок від менеджерів", "Відсікаємо аудиторії з поганими лідами", "Щомісячний звіт і план"] },
        ],
      },
      timeline: {
        heading: "Чого чекати і коли",
        intro: "Перші заявки приходять швидко, а якість налаштовується за кілька тижнів.",
        items: [
          { time: "Тиждень 1", title: "Підготовка", text: "Аналіз проєкту, лендінг, налаштування форм і передачі заявок." },
          { time: "Тиждень 2", title: "Запуск", text: "Перші заявки з Meta Ads і Google Ads." },
          { time: "Місяць 1", title: "Якість лідів", text: "Разом з менеджерами оцінюємо заявки і коригуємо аудиторії." },
          { time: "Місяці 2–3", title: "Передбачуваний потік", text: "Зрозуміла вартість кваліфікованого ліда і план на наступні черги." },
        ],
      },
      faq: [
        { question: "Скільки коштує реклама для ЖК чи агентства нерухомості?", answer: "Ведення Meta Ads — від 15 000 грн на місяць, Google Ads — від 10 000 грн. Рекламний бюджет оплачується окремо, напряму Meta чи Google. Для нерухомості бюджет зазвичай вищий за мінімальний, бо цикл угоди довгий, а аудиторія вузька." },
        { question: "Що краще для нерухомості: Facebook чи Google?", answer: "Meta Ads дає більше заявок і добре працює на етапі «ще обираю». Google Ads приводить менше людей, але вони вже шукають квартиру або ваш ЖК. Для забудовника найкраще працює поєднання обох з ретаргетингом." },
        { question: "Як відсіяти нецільові заявки?", answer: "Додаємо в лід-форму питання про бюджет, тип житла і терміни покупки, використовуємо форми з підвищеним наміром і оптимізуємо рекламу за якісними заявками, про які повідомляє відділ продажу." },
        { question: "Чи робите сайт або лендінг для ЖК?", answer: "Так. Робимо лендінги з плануваннями, цінами, ходом будівництва і формою заявки, або допрацьовуємо наявний сайт." },
      ],
      formSub: "Розкажіть про проєкт: ЖК, об'єкт чи агентство, місто і як зараз приходять покупці. Запропонуємо план запуску.",
    },
    en: {
      name: "Real estate",
      card: {
        title: "Real estate advertising",
        text: "Leads for developers, residential complexes and agencies from Meta Ads and Google Ads.",
      },
      metaTitle: "Real estate advertising: leads for developers and agencies",
      metaDescription:
        "Meta Ads and Google Ads for residential complexes and real estate: qualified leads, landing pages, leads sent to your CRM. Uzhhorod and all of Ukraine.",
      h1: "Advertising for developers, residential complexes and real estate agencies in Uzhhorod and Ukraine",
      lead: "We bring enquiries for apartments and commercial property and track how many reach a viewing.",
      sub: "Meta Ads with qualifying questions, Google Ads for buyers' searches, a landing page for the project, leads sent to your CRM or messenger. Retargeting supports the long sales cycle.",
      facts: ["Meta Ads from UAH 15,000/mo", "Google Ads from UAH 10,000/mo", "report with cost per qualified lead"],
      challenges: {
        heading: "Why real estate ads don't sell",
        intro: "What we most often see with developers and agencies.",
        items: [
          { title: "Cheap but empty leads", text: "A lead form with no questions collects people who are “just looking”. The cost per lead is low, but there are no sales." },
          { title: "A long sales cycle", text: "Weeks or months pass between the first click and the contract. Ads that don't follow up lose the buyer halfway." },
          { title: "Leads get lost", text: "If a lead lands in an inbox and the manager calls back the next day, the buyer is already talking to another developer." },
          { title: "No idea what works", text: "Website, social media, listings, banners: without one tracking setup you can't see which channel brings buyers." },
        ],
      },
      deliverables: {
        intro: "What work on a real estate project includes.",
        items: [
          { title: "Meta Ads with qualification", text: "Lead forms asking about budget, number of rooms and timing. Fewer “just looking” enquiries." },
          { title: "Google Ads for buyers' searches", text: "Search campaigns for queries like “new-build apartment Uzhhorod” and your project's name." },
          { title: "Project landing page", text: "A page with floor plans, prices, construction progress and a clear enquiry form." },
          { title: "Leads to your CRM", text: "Leads go straight to your CRM, Telegram or sales inbox, so a manager can call back within minutes." },
          { title: "Retargeting for a long cycle", text: "We remind site visitors about the project: construction progress, new phases, instalment terms." },
          { title: "Report from ad to viewing", text: "Together with your sales team we count not just leads, but those that reached a viewing or reservation." },
        ],
      },
      process: {
        intro: "How we build a flow of real estate enquiries.",
        steps: [
          { label: "01 — Analysis", title: "Product and buyer", items: ["Who buys and why", "Competitors and their offers", "How the sales team handles leads"] },
          { label: "02 — Launch", title: "Channels and landing page", items: ["Meta Ads and Google Ads", "Landing page for the project", "Leads sent to the CRM"] },
          { label: "03 — Quality", title: "We optimise for quality", items: ["Feedback from managers", "Cut audiences with poor leads", "Monthly report and plan"] },
        ],
      },
      timeline: {
        heading: "What to expect and when",
        intro: "First leads arrive quickly; quality is tuned over a few weeks.",
        items: [
          { time: "Week 1", title: "Preparation", text: "Project analysis, landing page, forms and lead delivery set up." },
          { time: "Week 2", title: "Launch", text: "First leads from Meta Ads and Google Ads." },
          { time: "Month 1", title: "Lead quality", text: "We review leads with your managers and adjust audiences." },
          { time: "Months 2–3", title: "Predictable flow", text: "A clear cost per qualified lead and a plan for the next phases." },
        ],
      },
      faq: [
        { question: "How much does advertising for a residential project or agency cost?", answer: "Meta Ads management starts from UAH 15,000 per month and Google Ads from UAH 10,000. The ad budget is paid separately, directly to Meta or Google. Real estate usually needs more than the minimum budget, because the cycle is long and the audience is narrow." },
        { question: "Which is better for real estate: Facebook or Google?", answer: "Meta Ads brings more leads and works well while people are still choosing. Google Ads brings fewer people, but they are already looking for an apartment or your project. For developers, combining both with retargeting works best." },
        { question: "How do you filter out poor leads?", answer: "We add questions about budget, property type and timing to the lead form, use higher-intent form types, and optimise ads for the quality leads your sales team reports back." },
        { question: "Do you build websites or landing pages for projects?", answer: "Yes. We build landing pages with floor plans, prices, construction progress and an enquiry form, or improve your existing site." },
      ],
      formSub: "Tell us about the project: a complex, a property or an agency, the city, and how buyers come in now. We'll suggest a launch plan.",
    },
  },

  /* ───────────────────────── Beauty salons ───────────────────────── */
  "beauty-salons": {
    price: 15000,
    relatedServices: ["/services/smm", "/services/meta-ads", "/services/google-ads"],
    relatedPosts: ["meta-ads-vs-google-ads", "how-to-choose-marketing-agency"],
    uk: {
      name: "Салони краси",
      card: {
        title: "Реклама для салонів краси",
        text: "Instagram, Meta Ads і карти Google для запису клієнтів у салон, барбершоп чи косметологію.",
      },
      metaTitle: "Реклама для салону краси в Instagram і Google",
      metaDescription:
        "SMM і таргетована реклама для салонів краси, барбершопів і косметологів: записи з Instagram, Facebook і карт Google. Ужгород і вся Україна. SMM + таргет від 35 000 грн/міс.",
      h1: "Реклама і SMM для салонів краси, барбершопів і косметологів",
      lead: "Робимо так, щоб Instagram салону приводив записи, а не лише лайки.",
      sub: "Контент, який показує роботу майстрів, таргетована реклама на ваш район, доглянутий профіль на картах і зрозумілий облік записів.",
      facts: [
        "SMM + таргет — від 35 000 грн/міс",
        "Meta Ads — від 15 000 грн/міс",
        "звіт щомісяця",
      ],
      challenges: {
        heading: "Чому Instagram салону не приносить записів",
        intro: "Що заважає б'юті-бізнесу отримувати клієнтів із соцмереж.",
        items: [
          { title: "Контент без реклами", text: "Органічно пости бачить лише невелика частина підписників. Без таргету нові клієнти про салон просто не дізнаються." },
          { title: "Майстрам ніколи знімати", text: "Контент робиться «коли є час», тобто рідко. Профіль виглядає закинутим, хоча салон працює щодня." },
          { title: "Записи губляться в Direct", text: "Повідомлення без відповіді кілька годин — це клієнт, який записався деінде." },
          { title: "Конкуренція в кожному районі", text: "Поруч кілька салонів з подібними послугами. Виграє той, кого видно в Instagram і на картах, і в кого легко записатися." },
        ],
      },
      deliverables: {
        intro: "Що робимо для салону, барбершопу чи кабінету косметолога.",
        items: [
          { title: "Ведення Instagram і Facebook", text: "Контент-план, пости, reels і сторіс про роботи майстрів, послуги та атмосферу. Тексти пишемо ми, ви затверджуєте." },
          { title: "Таргетована реклама", text: "Meta Ads на людей поруч із салоном: пропозиції на перший візит, нові послуги, вільні вікна." },
          { title: "Карти Google", text: "Бізнес-профіль із фото, послугами і відповідями на відгуки, щоб вас знаходили на запит «манікюр поруч»." },
          { title: "Простий запис", text: "Кнопка запису, онлайн-запис або шаблони відповідей у Direct, щоб жодна заявка не загубилася." },
          { title: "Повернення клієнтів", text: "Ретаргетинг і нагадування для тих, хто вже був у салоні або цікавився послугою." },
          { title: "Звіт про записи", text: "Скільки звернень з реклами і соцмереж і скільки коштує один запис." },
        ],
      },
      process: {
        intro: "Як ми запускаємо соцмережі і рекламу салону.",
        steps: [
          { label: "01 — Аналіз", title: "Салон і клієнти", items: ["Послуги, ціни і найприбутковіші напрямки", "Конкуренти поруч", "Профілі в соцмережах і на картах"] },
          { label: "02 — Запуск", title: "Контент і реклама", items: ["Контент-план на місяць", "Meta Ads на район і місто", "Запис і обробка звернень"] },
          { label: "03 — Розвиток", title: "Більше записів", items: ["Бюджет на послуги з вільними вікнами", "Ретаргетинг на постійних клієнтів", "Щомісячний звіт"] },
        ],
      },
      timeline: {
        heading: "Чого чекати і коли",
        intro: "Реклама дає звернення швидко, а профіль, що продає, формується за кілька місяців.",
        items: [
          { time: "Тиждень 1", title: "Аудит і план", text: "Аналізуємо профіль і конкурентів, готуємо контент-план." },
          { time: "Тиждень 2", title: "Запуск", text: "Перші публікації і реклама, перші записи." },
          { time: "Місяць 1", title: "Оптимізація", text: "Залишаємо формати і аудиторії, які дають записи." },
          { time: "Місяці 2–3", title: "Стабільний потік", text: "Живий профіль і зрозуміла вартість запису." },
        ],
      },
      faq: [
        { question: "Скільки коштує реклама для салону краси?", answer: "Пакет SMM з таргетованою рекламою — від 35 000 грн на місяць, окремо Meta Ads — від 15 000 грн. Рекламний бюджет оплачується окремо, напряму Meta; рекомендуємо від 10 000 грн на місяць." },
        { question: "Чи можна лише таргет, без ведення Instagram?", answer: "Можна, але реклама веде людей у профіль. Якщо профіль порожній або давно не оновлювався, частина клієнтів піде, так і не записавшись. Тому найкраще працює SMM разом із рекламою." },
        { question: "Хто знімає контент?", answer: "Ми плануємо, що і як знімати, і даємо майстрам прості сценарії для телефона. За потреби організовуємо зйомку." },
        { question: "Чи потрібна Google-реклама салону?", answer: "Для більшості салонів спершу важливіше Instagram і карти Google. Пошукова реклама має сенс для послуг, які активно шукають, наприклад, косметології чи лазерної епіляції." },
      ],
      formSub: "Розкажіть про салон: послуги, місто і звідки зараз приходять клієнти. Запропонуємо план на перший місяць.",
    },
    en: {
      name: "Beauty salons",
      card: {
        title: "Beauty salon advertising",
        text: "Instagram, Meta Ads and Google Maps that bring bookings to salons, barbershops and cosmetologists.",
      },
      metaTitle: "Beauty salon advertising on Instagram and Google",
      metaDescription:
        "SMM and targeted ads for beauty salons, barbershops and cosmetologists: bookings from Instagram, Facebook and Google Maps. Uzhhorod and all of Ukraine. SMM + ads from UAH 35,000/mo.",
      h1: "Advertising and SMM for beauty salons, barbershops and cosmetologists",
      lead: "We make a salon's Instagram bring bookings, not just likes.",
      sub: "Content that shows the stylists' work, targeted ads for your area, a well-kept maps profile and clear booking tracking.",
      facts: ["SMM + ads from UAH 35,000/mo", "Meta Ads from UAH 15,000/mo", "monthly report"],
      challenges: {
        heading: "Why a salon's Instagram brings no bookings",
        intro: "What keeps beauty businesses from getting clients from social media.",
        items: [
          { title: "Content without ads", text: "Organically, only a small share of followers sees posts. Without ads, new clients never hear about the salon." },
          { title: "No time to shoot", text: "Content happens “when there's time”, which means rarely. The profile looks abandoned while the salon is busy every day." },
          { title: "Bookings lost in DMs", text: "A message left unanswered for hours is a client who booked elsewhere." },
          { title: "Competition on every street", text: "Several salons with similar services nearby. The one that's visible on Instagram and maps, and easy to book, wins." },
        ],
      },
      deliverables: {
        intro: "What we do for a salon, barbershop or cosmetology studio.",
        items: [
          { title: "Instagram and Facebook management", text: "Content plan, posts, reels and stories about the stylists' work, services and atmosphere. We write, you approve." },
          { title: "Targeted ads", text: "Meta Ads for people near the salon: first-visit offers, new services, open slots." },
          { title: "Google Maps", text: "A Business Profile with photos, services and review replies, so you're found for “manicure near me”." },
          { title: "Easy booking", text: "A booking button, online booking or DM reply templates, so no request gets lost." },
          { title: "Bringing clients back", text: "Retargeting and reminders for people who visited or showed interest." },
          { title: "Booking report", text: "How many enquiries came from ads and social media and what one booking costs." },
        ],
      },
      process: {
        intro: "How we launch a salon's social media and ads.",
        steps: [
          { label: "01 — Analysis", title: "Salon and clients", items: ["Services, prices and the most profitable ones", "Competitors nearby", "Social and maps profiles"] },
          { label: "02 — Launch", title: "Content and ads", items: ["A month's content plan", "Meta Ads for your area and city", "Booking and enquiry handling"] },
          { label: "03 — Growth", title: "More bookings", items: ["Budget for services with open slots", "Retargeting regular clients", "Monthly report"] },
        ],
      },
      timeline: {
        heading: "What to expect and when",
        intro: "Ads bring enquiries quickly; a profile that sells takes a few months.",
        items: [
          { time: "Week 1", title: "Audit and plan", text: "We review the profile and competitors and prepare the content plan." },
          { time: "Week 2", title: "Launch", text: "First posts and ads, first bookings." },
          { time: "Month 1", title: "Optimisation", text: "We keep the formats and audiences that bring bookings." },
          { time: "Months 2–3", title: "Steady flow", text: "A lively profile and a clear cost per booking." },
        ],
      },
      faq: [
        { question: "How much does beauty salon advertising cost?", answer: "The SMM bundle with targeted ads starts from UAH 35,000 per month; Meta Ads alone from UAH 15,000. The ad budget is paid separately, directly to Meta; we recommend from UAH 10,000 per month." },
        { question: "Can we run ads only, without Instagram management?", answer: "Yes, but ads send people to the profile. If it's empty or outdated, some clients leave without booking. That's why SMM together with ads works best." },
        { question: "Who shoots the content?", answer: "We plan what and how to shoot and give the stylists simple phone scripts. When needed, we organise a shoot." },
        { question: "Does a salon need Google Ads?", answer: "For most salons, Instagram and Google Maps come first. Search ads make sense for services people actively search for, such as cosmetology or laser hair removal." },
      ],
      formSub: "Tell us about the salon: services, city and where clients come from now. We'll suggest a plan for the first month.",
    },
  },
};

export const INDUSTRY_SLUGS = Object.keys(INDUSTRY_PAGES);
