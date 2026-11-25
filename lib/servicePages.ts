import type { Locale } from "@/lib/seo";

// Content for service pages rendered by app/[locale]/services/[slug]/page.tsx.
// Google Ads, Meta Ads and SMM have their own dedicated pages and components.

export type ServicePageContent = {
  name: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  sub: string;
  facts: string[];
  deliverables: { intro: string; items: { title: string; text: string }[] };
  process: {
    intro: string;
    steps: { label: string; title: string; items: string[] }[];
  };
  timeline: {
    heading: string;
    intro: string;
    items: { time: string; title: string; text: string }[];
  };
  faq: { question: string; answer: string }[];
  formSub: string;
};

export const SERVICE_PAGE_LABELS = {
  uk: {
    cta: "Отримати консультацію",
    deliverablesEyebrow: "Що входить",
    deliverablesHeading: "Що ви отримуєте",
    processEyebrow: "Процес",
    processHeading: "Як ми працюємо",
    faqHeading: "Часті питання.",
  },
  en: {
    cta: "Get a consultation",
    deliverablesEyebrow: "What's included",
    deliverablesHeading: "What you get",
    processEyebrow: "Process",
    processHeading: "How we work",
    faqHeading: "FAQ.",
  },
} as const;

type ServicePages = Record<string, Record<Locale, ServicePageContent>>;

export const SERVICE_PAGES: ServicePages = {
  /* ───────────────────────────── SEO ───────────────────────────── */
  seo: {
    uk: {
      name: "SEO",
      metaTitle: "SEO-просування сайтів в Ужгороді та по Україні",
      metaDescription:
        "SEO-просування сайту в Google: технічний аудит, семантика, контент і посилання. Маркетингове агентство PRO Marketing# в Ужгороді. Вартість — після безкоштовного аналізу.",
      lead: "SEO-просування сайтів у Google для бізнесу в Ужгороді та по всій Україні.",
      sub: "Виправляємо технічні помилки, збираємо запити ваших клієнтів і готуємо сторінки, які на них відповідають. Працюємо на заявки, а не на позиції заради позицій.",
      facts: [
        "стабільне зростання від 2–3 місяців",
        "звіт щотижня або щомісяця",
        "вартість — після безкоштовного аналізу",
      ],
      deliverables: {
        intro: "З чого складається робота над сайтом щомісяця.",
        items: [
          {
            title: "Технічний аудит і виправлення",
            text: "Індексація, швидкість, дублі сторінок, редиректи, мобільна версія, мікророзмітка. Знаходимо, що заважає Google бачити сайт, і виправляємо.",
          },
          {
            title: "Семантичне ядро і структура",
            text: "Збираємо запити, за якими вас шукають, групуємо їх і розподіляємо по сторінках. Де сторінки бракує — плануємо нову.",
          },
          {
            title: "Контент і оптимізація сторінок",
            text: "Заголовки, тексти, метатеги, внутрішні посилання. Пишемо так, щоб сторінка відповідала на запит людини, а не просто містила ключові слова.",
          },
          {
            title: "Зовнішні посилання і локальне SEO",
            text: "Каталоги, профільні майданчики, згадки бренду, профіль компанії в Google. Для локального бізнесу це часто дає перші результати.",
          },
        ],
      },
      process: {
        intro: "Покроково — що відбувається після старту співпраці.",
        steps: [
          {
            label: "Місяць 1",
            title: "Аудит і фундамент",
            items: [
              "Технічний аудит сайту",
              "Аналіз конкурентів у видачі",
              "Збір семантичного ядра",
              "Виправлення критичних помилок",
            ],
          },
          {
            label: "Місяць 2–3",
            title: "Оптимізація і контент",
            items: [
              "Оптимізація наявних сторінок",
              "Створення нових сторінок під запити",
              "Налаштування мікророзмітки",
              "Перші зовнішні посилання",
            ],
          },
          {
            label: "Далі щомісяця",
            title: "Ріст і утримання",
            items: [
              "Розширення семантики",
              "Нові матеріали і сторінки",
              "Нарощування посилань",
              "Звіт: позиції, трафік, заявки",
            ],
          },
        ],
      },
      timeline: {
        heading: "Коли буде результат.",
        intro: "SEO працює повільніше за рекламу, зате трафік не зникає, коли закінчується бюджет.",
        items: [
          {
            time: "Місяць 1",
            title: "Сайт без технічних помилок",
            text: "Google коректно сканує та індексує сторінки. Видимих змін у трафіку ще мало.",
          },
          {
            time: "Місяць 2–3",
            title: "Перші позиції",
            text: "Сторінки з'являються у видачі за цільовими запитами, починається стабільне зростання.",
          },
          {
            time: "Місяць 4–6",
            title: "Зростання трафіку і заявок",
            text: "Частина запитів виходить у топ-10, органічний трафік починає приносити звернення.",
          },
          {
            time: "Місяць 6+",
            title: "Масштабування",
            text: "Розширюємо семантику, додаємо нові напрямки і регіони, утримуємо досягнуті позиції.",
          },
        ],
      },
      faq: [
        {
          question: "Скільки часу потрібно, щоб SEO дало результат?",
          answer:
            "Стабільне зростання зазвичай починається з 2–3 місяця. Швидкість залежить від конкуренції в ніші, віку сайту і його поточного стану. Після аудиту ми чесно скажемо, чого очікувати саме у вашому випадку.",
        },
        {
          question: "Скільки коштує SEO-просування?",
          answer:
            "Вартість залежить від розміру сайту, конкуренції в ніші та обсягу робіт. Починаємо з безкоштовного аналізу — після нього називаємо конкретну суму без прихованих платежів.",
        },
        {
          question: "Ви гарантуєте перше місце в Google?",
          answer:
            "Ні, і нікому не радимо вірити таким гарантіям: алгоритми Google не контролює жодне агентство. Ми гарантуємо обсяг і якість робіт та прозору звітність щодо позицій, трафіку і заявок.",
        },
        {
          question: "Що краще для мого бізнесу — SEO чи реклама?",
          answer:
            "Реклама дає заявки вже в перший тиждень, але працює, поки ви платите. SEO потребує кількох місяців, зате приносить трафік без оплати за кожен клік. Найчастіше їх поєднують: реклама дає продажі одразу, SEO знижує вартість заявки в довгу.",
        },
        {
          question: "Чи працюєте ви з локальним SEO в Ужгороді?",
          answer:
            "Так. Для локального бізнесу оптимізуємо сторінки під запити з назвою міста, допомагаємо з профілем компанії в Google, відгуками та згадками на місцевих майданчиках.",
        },
      ],
      formSub:
        "Залиште заявку — подивимось на ваш сайт і скажемо чесно, що дасть SEO у вашій ніші.",
    },
    en: {
      name: "SEO",
      metaTitle: "SEO services in Uzhhorod and across Ukraine",
      metaDescription:
        "SEO for Google: technical audit, keyword research, content and links. PRO Marketing# — a marketing agency in Uzhhorod, Ukraine. Pricing after a free analysis.",
      lead: "SEO in Google for businesses in Uzhhorod and across Ukraine.",
      sub: "We fix technical issues, research what your customers search for and build pages that answer those searches. We work for leads, not for rankings alone.",
      facts: [
        "steady growth from month 2–3",
        "weekly or monthly reporting",
        "pricing after a free analysis",
      ],
      deliverables: {
        intro: "What the monthly work on your site consists of.",
        items: [
          {
            title: "Technical audit and fixes",
            text: "Indexing, speed, duplicate pages, redirects, mobile version, structured data. We find what stops Google from seeing the site and fix it.",
          },
          {
            title: "Keyword research and structure",
            text: "We collect the queries people use to find you, group them and map them to pages. Where a page is missing, we plan a new one.",
          },
          {
            title: "Content and on-page optimisation",
            text: "Headings, copy, meta tags, internal links. Written so the page answers the searcher's question rather than just containing keywords.",
          },
          {
            title: "Links and local SEO",
            text: "Directories, industry sites, brand mentions, Google Business Profile. For a local business this often brings the first results.",
          },
        ],
      },
      process: {
        intro: "Step by step — what happens after we start.",
        steps: [
          {
            label: "Month 1",
            title: "Audit and foundation",
            items: [
              "Technical site audit",
              "Competitor analysis in search results",
              "Keyword research",
              "Fixing critical issues",
            ],
          },
          {
            label: "Month 2–3",
            title: "Optimisation and content",
            items: [
              "Optimising existing pages",
              "New pages for target queries",
              "Structured data setup",
              "First external links",
            ],
          },
          {
            label: "Monthly after that",
            title: "Growth and retention",
            items: [
              "Expanding the keyword set",
              "New articles and pages",
              "Link building",
              "Report: rankings, traffic, leads",
            ],
          },
        ],
      },
      timeline: {
        heading: "When to expect results.",
        intro: "SEO is slower than ads, but the traffic doesn't stop when the budget does.",
        items: [
          {
            time: "Month 1",
            title: "A technically clean site",
            text: "Google crawls and indexes pages correctly. Little visible change in traffic yet.",
          },
          {
            time: "Month 2–3",
            title: "First rankings",
            text: "Pages start to appear for target queries and steady growth begins.",
          },
          {
            time: "Month 4–6",
            title: "Traffic and leads grow",
            text: "Some queries reach the top 10 and organic traffic starts bringing enquiries.",
          },
          {
            time: "Month 6+",
            title: "Scaling",
            text: "We expand the keyword set, add new directions and regions, and hold the positions gained.",
          },
        ],
      },
      faq: [
        {
          question: "How long does SEO take to show results?",
          answer:
            "Steady growth usually starts in month 2–3. The pace depends on competition, the site's age and its current state. After the audit we'll tell you honestly what to expect in your case.",
        },
        {
          question: "How much does SEO cost?",
          answer:
            "It depends on the size of the site, competition in the niche and the scope of work. We start with a free analysis and then name a specific figure with no hidden fees.",
        },
        {
          question: "Do you guarantee first place in Google?",
          answer:
            "No, and we'd advise against trusting anyone who does: no agency controls Google's algorithms. We guarantee the scope and quality of work and transparent reporting on rankings, traffic and leads.",
        },
        {
          question: "What is better for my business — SEO or ads?",
          answer:
            "Ads bring leads in the first week but only while you pay. SEO takes several months but brings traffic without paying per click. Most businesses combine them: ads for sales now, SEO to lower the cost per lead over time.",
        },
        {
          question: "Do you do local SEO in Uzhhorod?",
          answer:
            "Yes. For local businesses we optimise pages for city-specific queries and help with Google Business Profile, reviews and mentions on local sites.",
        },
      ],
      formSub:
        "Leave a request — we'll look at your site and tell you honestly what SEO can do in your niche.",
    },
  },

  /* ───────────────────────────── AEO ───────────────────────────── */
  aeo: {
    uk: {
      name: "AEO",
      metaTitle: "AEO — оптимізація сайту під ChatGPT та AI-пошук",
      metaDescription:
        "AEO (Answer Engine Optimization): готуємо сайт до того, щоб його цитували ChatGPT, Gemini, Perplexity та AI-огляди Google. Агентство PRO Marketing#, Ужгород.",
      lead: "AEO — оптимізація сайту під відповіді ChatGPT, Gemini, Perplexity та AI-огляди Google.",
      sub: "Люди дедалі частіше питають пораду в AI замість пошуку. Робимо так, щоб асистенти могли прочитати ваш сайт, зрозуміти, чим ви займаєтесь, і мали підстави вас згадати.",
      facts: [
        "працює разом із SEO",
        "зміни видно в коді й контенті",
        "вартість — після безкоштовного аналізу",
      ],
      deliverables: {
        intro: "Що саме ми робимо, щоб AI міг вас знайти і процитувати.",
        items: [
          {
            title: "Аудит AI-видимості",
            text: "Перевіряємо, чи бачать сайт AI-краулери, що про вас відповідають асистенти зараз і які джерела вони цитують у вашій ніші.",
          },
          {
            title: "Технічна доступність для AI",
            text: "robots.txt, llms.txt, мікророзмітка schema.org, контент у HTML без залежності від JavaScript — щоб асистенти могли прочитати сторінку.",
          },
          {
            title: "Контент у форматі відповідей",
            text: "Сторінки з прямими відповідями на запитання клієнтів: що це, скільки коштує, як обрати, чим відрізняється. Саме такі фрагменти AI цитує.",
          },
          {
            title: "Згадки на сторонніх майданчиках",
            text: "Каталоги, рейтинги, відгуки, статті. Асистенти формують рекомендації переважно з того, що про вас написано поза вашим сайтом.",
          },
        ],
      },
      process: {
        intro: "Покроково — від аудиту до регулярної перевірки.",
        steps: [
          {
            label: "Крок 1",
            title: "Аудит",
            items: [
              "Перевірка доступу AI-краулерів",
              "Аналіз розмітки і структури контенту",
              "Список запитань, які ставлять ваші клієнти",
              "Що AI відповідає про вас і конкурентів",
            ],
          },
          {
            label: "Крок 2",
            title: "Впровадження",
            items: [
              "Технічні правки на сайті",
              "Мікророзмітка і llms.txt",
              "Сторінки та блоки запитань і відповідей",
              "Профілі в каталогах і на майданчиках",
            ],
          },
          {
            label: "Щомісяця",
            title: "Розвиток",
            items: [
              "Нові матеріали під запитання клієнтів",
              "Робота зі згадками та відгуками",
              "Перевірка відповідей AI за списком запитів",
              "Звіт про зміни",
            ],
          },
        ],
      },
      timeline: {
        heading: "Чого очікувати.",
        intro: "AEO — новий напрям, і ніхто не може гарантувати згадку в конкретній відповіді. Ось що залежить від нас.",
        items: [
          {
            time: "Тиждень 1–2",
            title: "Аудит і план",
            text: "Ви знаєте, що заважає AI читати сайт і які запитання варто закрити першими.",
          },
          {
            time: "Місяць 1",
            title: "Технічна основа",
            text: "Сайт доступний для AI-краулерів, розмітка і структура контенту впроваджені.",
          },
          {
            time: "Місяць 2–3",
            title: "Контент і згадки",
            text: "З'являються сторінки-відповіді та профілі на сторонніх майданчиках.",
          },
          {
            time: "Місяць 3+",
            title: "Перші цитування",
            text: "Регулярно перевіряємо відповіді асистентів і посилюємо те, що спрацювало.",
          },
        ],
      },
      faq: [
        {
          question: "Що таке AEO простими словами?",
          answer:
            "AEO (Answer Engine Optimization) — це підготовка сайту і згадок про компанію до того, щоб AI-асистенти на кшталт ChatGPT, Gemini чи Perplexity могли знайти вас і згадати у своїй відповіді.",
        },
        {
          question: "Чим AEO відрізняється від SEO?",
          answer:
            "SEO працює на позиції в результатах пошуку, AEO — на те, щоб вас процитував AI у готовій відповіді. Основа спільна: технічно справний сайт і корисний контент. В AEO більше ваги мають структуровані відповіді та згадки на сторонніх сайтах.",
        },
        {
          question: "Чи можете ви гарантувати, що ChatGPT порадить мою компанію?",
          answer:
            "Ні. Відповіді AI не контролює жодне агентство, і вони можуть відрізнятися від запиту до запиту. Ми робимо все, що підвищує ймовірність: доступність сайту, розмітку, контент-відповіді та згадки на авторитетних майданчиках.",
        },
        {
          question: "Чи потрібне AEO, якщо в мене вже є SEO?",
          answer:
            "Якщо SEO зроблене якісно, половина роботи вже є. Залишається перевірити доступ AI-краулерів, додати розмітку, блоки запитань і відповідей та попрацювати зі згадками поза сайтом.",
        },
        {
          question: "Як виміряти результат AEO?",
          answer:
            "Ми складаємо список запитів, важливих для вашого бізнесу, і регулярно перевіряємо, чи згадують вас асистенти і які джерела вони цитують. Додатково дивимось на переходи з AI-сервісів в аналітиці.",
        },
      ],
      formSub:
        "Залиште заявку — перевіримо, як AI бачить ваш сайт зараз, і скажемо, що варто змінити.",
    },
    en: {
      name: "AEO",
      metaTitle: "AEO — optimising your site for ChatGPT and AI search",
      metaDescription:
        "AEO (Answer Engine Optimization): we prepare your site to be cited by ChatGPT, Gemini, Perplexity and Google AI Overviews. PRO Marketing#, Uzhhorod, Ukraine.",
      lead: "AEO — optimising your site for answers from ChatGPT, Gemini, Perplexity and Google AI Overviews.",
      sub: "People increasingly ask AI for advice instead of searching. We make sure assistants can read your site, understand what you do and have reasons to mention you.",
      facts: [
        "works together with SEO",
        "changes are visible in code and content",
        "pricing after a free analysis",
      ],
      deliverables: {
        intro: "What we do so that AI can find and cite you.",
        items: [
          {
            title: "AI visibility audit",
            text: "We check whether AI crawlers can see the site, what assistants say about you now and which sources they cite in your niche.",
          },
          {
            title: "Technical accessibility for AI",
            text: "robots.txt, llms.txt, schema.org markup, content in HTML without relying on JavaScript — so assistants can actually read the page.",
          },
          {
            title: "Answer-shaped content",
            text: "Pages with direct answers to customer questions: what it is, how much it costs, how to choose, how it differs. These are the fragments AI cites.",
          },
          {
            title: "Mentions on third-party sites",
            text: "Directories, rankings, reviews, articles. Assistants build recommendations mostly from what is written about you outside your own site.",
          },
        ],
      },
      process: {
        intro: "Step by step — from audit to regular checks.",
        steps: [
          {
            label: "Step 1",
            title: "Audit",
            items: [
              "AI crawler access check",
              "Markup and content structure review",
              "List of questions your customers ask",
              "What AI says about you and competitors",
            ],
          },
          {
            label: "Step 2",
            title: "Implementation",
            items: [
              "Technical fixes on the site",
              "Structured data and llms.txt",
              "Question-and-answer pages and blocks",
              "Profiles in directories and on platforms",
            ],
          },
          {
            label: "Monthly",
            title: "Development",
            items: [
              "New content for customer questions",
              "Work on mentions and reviews",
              "Checking AI answers against a query list",
              "Report on changes",
            ],
          },
        ],
      },
      timeline: {
        heading: "What to expect.",
        intro: "AEO is a new field and nobody can guarantee a mention in a specific answer. Here is what depends on us.",
        items: [
          {
            time: "Week 1–2",
            title: "Audit and plan",
            text: "You know what stops AI from reading the site and which questions to cover first.",
          },
          {
            time: "Month 1",
            title: "Technical foundation",
            text: "The site is accessible to AI crawlers; markup and content structure are in place.",
          },
          {
            time: "Month 2–3",
            title: "Content and mentions",
            text: "Answer pages and third-party profiles appear.",
          },
          {
            time: "Month 3+",
            title: "First citations",
            text: "We regularly check assistants' answers and strengthen what worked.",
          },
        ],
      },
      faq: [
        {
          question: "What is AEO in simple terms?",
          answer:
            "AEO (Answer Engine Optimization) means preparing your site and the mentions of your company so that AI assistants such as ChatGPT, Gemini or Perplexity can find you and mention you in their answers.",
        },
        {
          question: "How is AEO different from SEO?",
          answer:
            "SEO works for positions in search results; AEO works for being cited by AI in a ready-made answer. The foundation is shared: a technically sound site and useful content. In AEO, structured answers and third-party mentions carry more weight.",
        },
        {
          question: "Can you guarantee that ChatGPT will recommend my company?",
          answer:
            "No. No agency controls AI answers, and they can differ from one request to the next. We do everything that raises the likelihood: site accessibility, markup, answer content and mentions on authoritative platforms.",
        },
        {
          question: "Do I need AEO if I already do SEO?",
          answer:
            "If SEO is done well, half the work is already there. What remains is checking AI crawler access, adding markup and Q&A blocks, and working on mentions outside your site.",
        },
        {
          question: "How do you measure AEO results?",
          answer:
            "We compile a list of queries that matter to your business and regularly check whether assistants mention you and which sources they cite. We also look at visits from AI services in analytics.",
        },
      ],
      formSub:
        "Leave a request — we'll check how AI sees your site today and tell you what is worth changing.",
    },
  },

  /* ─────────────────────────── TikTok Ads ─────────────────────────── */
  "tiktok-ads": {
    uk: {
      name: "TikTok Ads",
      metaTitle: "Реклама в TikTok — налаштування і ведення TikTok Ads",
      metaDescription:
        "Налаштування та ведення реклами в TikTok для бізнесу: стратегія, креативи, піксель, оптимізація. Агентство PRO Marketing#, Ужгород. Вартість — після безкоштовного аналізу.",
      lead: "Налаштування та ведення реклами в TikTok для бізнесу, якому потрібні охоплення і заявки.",
      sub: "У TikTok продає відео, а не налаштування кабінету. Тому беремо на себе і те, і інше: ідеї для роликів, запуск кампаній і щоденну оптимізацію.",
      facts: [
        "перші результати в перший тиждень",
        "звіт щотижня або щомісяця",
        "вартість — після безкоштовного аналізу",
      ],
      deliverables: {
        intro: "З чого складається ведення TikTok Ads.",
        items: [
          {
            title: "Рекламний кабінет і відстеження",
            text: "Налаштовуємо TikTok Ads Manager, піксель і події на сайті, щоб бачити не лише перегляди, а й заявки та покупки.",
          },
          {
            title: "Ідеї та сценарії для відео",
            text: "Готуємо сценарії під формат платформи: перші секунди, що чіпляють, зрозуміла пропозиція, заклик до дії.",
          },
          {
            title: "Запуск і тестування",
            text: "Тестуємо кілька аудиторій і креативів одночасно, залишаємо ті, що дають результат, вимикаємо решту.",
          },
          {
            title: "Оптимізація і звітність",
            text: "Стежимо за вартістю заявки, оновлюємо креативи, коли вони вигорають, і показуємо цифри у звіті.",
          },
        ],
      },
      process: {
        intro: "Покроково — що відбувається після старту співпраці.",
        steps: [
          {
            label: "Тиждень 1",
            title: "Підготовка і запуск",
            items: [
              "Аналіз ніші та конкурентів у TikTok",
              "Налаштування кабінету і пікселя",
              "Сценарії перших відео",
              "Запуск тестових кампаній",
            ],
          },
          {
            label: "Тиждень 2–4",
            title: "Тести й оптимізація",
            items: [
              "Тестування аудиторій і креативів",
              "Вимкнення неефективних оголошень",
              "Перерозподіл бюджету",
              "Нові варіанти відео",
            ],
          },
          {
            label: "Щомісяця",
            title: "Масштабування",
            items: [
              "Збільшення бюджету на те, що працює",
              "Оновлення креативів",
              "Ремаркетинг на тих, хто взаємодіяв",
              "Звіт з витратами і заявками",
            ],
          },
        ],
      },
      timeline: {
        heading: "Коли буде результат.",
        intro: "Реклама починає працювати швидко, але стабільна вартість заявки потребує тестів.",
        items: [
          {
            time: "День 1–3",
            title: "Кампанії запущені",
            text: "Реклама показується, збираємо перші дані про перегляди та кліки.",
          },
          {
            time: "Тиждень 1–2",
            title: "Перші заявки",
            text: "Бачимо, які відео та аудиторії дають звернення, а які ні.",
          },
          {
            time: "Місяць 1",
            title: "Робоча зв'язка",
            text: "Залишаємо найкращі поєднання креативу й аудиторії, вартість заявки стабілізується.",
          },
          {
            time: "Місяць 2+",
            title: "Масштабування",
            text: "Збільшуємо бюджет, додаємо нові формати та ремаркетинг.",
          },
        ],
      },
      faq: [
        {
          question: "Кому підходить реклама в TikTok?",
          answer:
            "Найкраще — товарам і послугам, які можна показати у відео: одяг, краса, їжа, розваги, навчання, товари для дому. Для складних B2B-послуг TikTok зазвичай слабший за Google Ads. Після аналізу ніші скажемо чесно, чи варто починати.",
        },
        {
          question: "Хто знімає відео для реклами?",
          answer:
            "Ми готуємо ідеї та сценарії. Зняти ролики можете ви самі на телефон за нашими рекомендаціями, або обговоримо зйомку окремо. Для TikTok «живе» відео часто працює краще за студійне.",
        },
        {
          question: "Скільки коштує реклама в TikTok?",
          answer:
            "Є дві частини: рекламний бюджет, який ви сплачуєте TikTok напряму, і вартість наших послуг. Обидві суми залежать від ніші та цілей — називаємо їх після безкоштовного аналізу.",
        },
        {
          question: "Чи потрібен сайт для реклами в TikTok?",
          answer:
            "Бажано: сайт або лендінг дає змогу відстежувати заявки й покупки. Але запуститись можна і з формою заявки всередині TikTok або з переходом у месенджер.",
        },
        {
          question: "Чим TikTok Ads відрізняється від Meta Ads?",
          answer:
            "У TikTok молодша аудиторія і майже все вирішує відеокреатив. У Meta більше форматів і точніші налаштування аудиторій. Часто їх запускають разом і порівнюють вартість заявки.",
        },
      ],
      formSub:
        "Залиште заявку — проаналізуємо вашу нішу і скажемо чесно, чи підійде вам TikTok.",
    },
    en: {
      name: "TikTok Ads",
      metaTitle: "TikTok advertising — TikTok Ads setup and management",
      metaDescription:
        "TikTok Ads setup and management for businesses: strategy, creatives, pixel, optimisation. PRO Marketing#, Uzhhorod, Ukraine. Pricing after a free analysis.",
      lead: "TikTok Ads setup and management for businesses that need reach and leads.",
      sub: "On TikTok the video sells, not the account settings. So we take on both: ideas for videos, campaign launch and daily optimisation.",
      facts: [
        "first results in the first week",
        "weekly or monthly reporting",
        "pricing after a free analysis",
      ],
      deliverables: {
        intro: "What TikTok Ads management consists of.",
        items: [
          {
            title: "Ad account and tracking",
            text: "We set up TikTok Ads Manager, the pixel and site events so you see leads and purchases, not just views.",
          },
          {
            title: "Video ideas and scripts",
            text: "Scripts made for the platform: a hook in the first seconds, a clear offer, a call to action.",
          },
          {
            title: "Launch and testing",
            text: "We test several audiences and creatives at once, keep what performs and switch off the rest.",
          },
          {
            title: "Optimisation and reporting",
            text: "We watch cost per lead, refresh creatives when they wear out and show the numbers in a report.",
          },
        ],
      },
      process: {
        intro: "Step by step — what happens after we start.",
        steps: [
          {
            label: "Week 1",
            title: "Preparation and launch",
            items: [
              "Niche and competitor analysis on TikTok",
              "Account and pixel setup",
              "Scripts for the first videos",
              "Launch of test campaigns",
            ],
          },
          {
            label: "Week 2–4",
            title: "Testing and optimisation",
            items: [
              "Testing audiences and creatives",
              "Switching off weak ads",
              "Reallocating budget",
              "New video variations",
            ],
          },
          {
            label: "Monthly",
            title: "Scaling",
            items: [
              "More budget for what works",
              "Creative refresh",
              "Remarketing to people who engaged",
              "Report with spend and leads",
            ],
          },
        ],
      },
      timeline: {
        heading: "When to expect results.",
        intro: "Ads start working quickly, but a stable cost per lead takes testing.",
        items: [
          {
            time: "Day 1–3",
            title: "Campaigns are live",
            text: "Ads are running and we collect the first data on views and clicks.",
          },
          {
            time: "Week 1–2",
            title: "First leads",
            text: "We see which videos and audiences bring enquiries and which don't.",
          },
          {
            time: "Month 1",
            title: "A working combination",
            text: "We keep the best creative-audience pairs and cost per lead stabilises.",
          },
          {
            time: "Month 2+",
            title: "Scaling",
            text: "We raise the budget and add new formats and remarketing.",
          },
        ],
      },
      faq: [
        {
          question: "Who is TikTok advertising right for?",
          answer:
            "Best for products and services that can be shown on video: clothing, beauty, food, entertainment, education, home goods. For complex B2B services TikTok is usually weaker than Google Ads. After analysing your niche we'll tell you honestly whether it's worth starting.",
        },
        {
          question: "Who shoots the videos?",
          answer:
            "We prepare ideas and scripts. You can film on a phone following our guidance, or we can discuss production separately. On TikTok, natural-looking video often beats studio footage.",
        },
        {
          question: "How much does TikTok advertising cost?",
          answer:
            "There are two parts: the ad budget you pay TikTok directly and our service fee. Both depend on the niche and goals — we name them after a free analysis.",
        },
        {
          question: "Do I need a website for TikTok ads?",
          answer:
            "Preferably: a site or landing page lets us track leads and purchases. But you can also start with an in-app lead form or a link to a messenger.",
        },
        {
          question: "How is TikTok Ads different from Meta Ads?",
          answer:
            "TikTok has a younger audience and the video creative decides almost everything. Meta offers more formats and finer audience settings. They are often run together to compare cost per lead.",
        },
      ],
      formSub:
        "Leave a request — we'll analyse your niche and tell you honestly whether TikTok fits.",
    },
  },

  /* ─────────────────────── Website development ─────────────────────── */
  "website-development": {
    uk: {
      name: "Розробка сайтів",
      metaTitle: "Розробка сайтів і лендінгів в Ужгороді",
      metaDescription:
        "Розробка сайтів та лендінгів під рекламу і SEO: структура, дизайн, тексти, аналітика. Маркетингове агентство PRO Marketing#, Ужгород. Вартість — після безкоштовного аналізу.",
      lead: "Розробка сайтів і лендінгів, які приводять заявки, — в Ужгороді та по всій Україні.",
      sub: "Сайт для нас — частина маркетингу, а не окремий проєкт. Проєктуємо його під рекламу та SEO, з якими він працюватиме, і одразу налаштовуємо аналітику.",
      facts: [
        "сайт готовий до реклами і SEO",
        "аналітика і відстеження заявок",
        "вартість — після безкоштовного аналізу",
      ],
      deliverables: {
        intro: "Що входить у розробку сайту.",
        items: [
          {
            title: "Структура і прототип",
            text: "Спершу вирішуємо, що має бути на сторінці, щоб людина залишила заявку: які блоки, в якому порядку, з якими аргументами.",
          },
          {
            title: "Дизайн і тексти",
            text: "Дизайн у вашому фірмовому стилі з адаптацією під телефон. Тексти пишемо зрозумілою мовою клієнта, без «динамічно розвивається».",
          },
          {
            title: "Розробка і швидкість",
            text: "Швидке завантаження, коректна робота на мобільних, базова SEO-оптимізація: метатеги, мікророзмітка, sitemap.",
          },
          {
            title: "Аналітика і форми заявок",
            text: "Google Analytics, Tag Manager, відстеження форм і дзвінків. Заявки надходять туди, де вам зручно їх обробляти.",
          },
        ],
      },
      process: {
        intro: "Покроково — від брифу до запуску.",
        steps: [
          {
            label: "Етап 1",
            title: "Бриф і прототип",
            items: [
              "Розбираємо ваш бізнес і клієнтів",
              "Аналіз сайтів конкурентів",
              "Структура сторінок",
              "Узгодження прототипу",
            ],
          },
          {
            label: "Етап 2",
            title: "Дизайн і розробка",
            items: [
              "Дизайн ключових сторінок",
              "Тексти і візуальні матеріали",
              "Верстка та програмування",
              "Адаптація під мобільні",
            ],
          },
          {
            label: "Етап 3",
            title: "Запуск",
            items: [
              "Тестування форм і швидкості",
              "Підключення аналітики",
              "Публікація на вашому домені",
              "Передача доступів",
            ],
          },
        ],
      },
      timeline: {
        heading: "Як проходить проєкт.",
        intro: "Терміни залежать від обсягу — називаємо їх після брифу. Етапи завжди однакові.",
        items: [
          {
            time: "Етап 1",
            title: "Бриф і структура",
            text: "Ви бачите прототип: що буде на сайті і чому саме так.",
          },
          {
            time: "Етап 2",
            title: "Дизайн",
            text: "Узгоджуємо вигляд ключових сторінок до початку розробки.",
          },
          {
            time: "Етап 3",
            title: "Розробка і наповнення",
            text: "Збираємо сайт, додаємо тексти, фото та форми.",
          },
          {
            time: "Етап 4",
            title: "Запуск і підтримка",
            text: "Публікуємо, підключаємо аналітику і залишаємось на зв'язку.",
          },
        ],
      },
      faq: [
        {
          question: "Скільки коштує розробка сайту?",
          answer:
            "Залежить від типу сайту (лендінг, корпоративний сайт, інтернет-магазин), кількості сторінок і функцій. Після безкоштовного аналізу називаємо конкретну суму і терміни.",
        },
        {
          question: "Скільки часу займає розробка?",
          answer:
            "Лендінг зазвичай готовий швидше, багатосторінковий сайт чи магазин потребує більше часу. Точний термін фіксуємо після брифу, коли зрозумілий обсяг.",
        },
        {
          question: "Чим лендінг відрізняється від багатосторінкового сайту?",
          answer:
            "Лендінг — одна сторінка під одну пропозицію, найкраще працює з рекламою. Багатосторінковий сайт потрібен, коли послуг чи товарів багато або коли важливе SEO: під кожен запит потрібна своя сторінка.",
        },
        {
          question: "Чи буде сайт оптимізований під SEO?",
          answer:
            "Так, базова оптимізація входить у розробку: структура, метатеги, швидкість, мікророзмітка, sitemap. Подальше просування — окрема послуга SEO.",
        },
        {
          question: "Кому належатимуть сайт і домен?",
          answer:
            "Вам. Домен і хостинг оформлюються на вас, після запуску передаємо всі доступи.",
        },
      ],
      formSub:
        "Залиште заявку — обговоримо задачу і скажемо, який сайт потрібен саме вашому бізнесу.",
    },
    en: {
      name: "Website Development",
      metaTitle: "Website and landing page development in Uzhhorod",
      metaDescription:
        "Websites and landing pages built for ads and SEO: structure, design, copy, analytics. PRO Marketing#, Uzhhorod, Ukraine. Pricing after a free analysis.",
      lead: "Websites and landing pages that bring leads — in Uzhhorod and across Ukraine.",
      sub: "For us a website is part of marketing, not a separate project. We design it for the ads and SEO it will work with, and set up analytics from day one.",
      facts: [
        "ready for ads and SEO",
        "analytics and lead tracking",
        "pricing after a free analysis",
      ],
      deliverables: {
        intro: "What website development includes.",
        items: [
          {
            title: "Structure and prototype",
            text: "First we decide what the page needs for a visitor to leave a request: which blocks, in what order, with which arguments.",
          },
          {
            title: "Design and copy",
            text: "Design in your brand style, adapted for mobile. Copy written in your customer's language, without empty phrases.",
          },
          {
            title: "Development and speed",
            text: "Fast loading, correct mobile behaviour and basic SEO: meta tags, structured data, sitemap.",
          },
          {
            title: "Analytics and lead forms",
            text: "Google Analytics, Tag Manager, form and call tracking. Leads arrive wherever is convenient for you to handle them.",
          },
        ],
      },
      process: {
        intro: "Step by step — from brief to launch.",
        steps: [
          {
            label: "Stage 1",
            title: "Brief and prototype",
            items: [
              "Understanding your business and customers",
              "Competitor site analysis",
              "Page structure",
              "Prototype approval",
            ],
          },
          {
            label: "Stage 2",
            title: "Design and development",
            items: [
              "Design of key pages",
              "Copy and visuals",
              "Front-end and back-end development",
              "Mobile adaptation",
            ],
          },
          {
            label: "Stage 3",
            title: "Launch",
            items: [
              "Testing forms and speed",
              "Connecting analytics",
              "Publishing on your domain",
              "Handing over access",
            ],
          },
        ],
      },
      timeline: {
        heading: "How the project runs.",
        intro: "Timing depends on scope — we state it after the brief. The stages are always the same.",
        items: [
          {
            time: "Stage 1",
            title: "Brief and structure",
            text: "You see a prototype: what will be on the site and why.",
          },
          {
            time: "Stage 2",
            title: "Design",
            text: "We agree on the look of key pages before development starts.",
          },
          {
            time: "Stage 3",
            title: "Development and content",
            text: "We build the site and add copy, photos and forms.",
          },
          {
            time: "Stage 4",
            title: "Launch and support",
            text: "We publish, connect analytics and stay in touch.",
          },
        ],
      },
      faq: [
        {
          question: "How much does a website cost?",
          answer:
            "It depends on the type of site (landing page, corporate site, online store), the number of pages and features. After a free analysis we name a specific price and timeline.",
        },
        {
          question: "How long does development take?",
          answer:
            "A landing page is usually ready sooner; a multi-page site or store takes longer. We fix the exact timeline after the brief, once the scope is clear.",
        },
        {
          question: "What is the difference between a landing page and a multi-page site?",
          answer:
            "A landing page is one page for one offer and works best with ads. A multi-page site is needed when there are many services or products, or when SEO matters: each query needs its own page.",
        },
        {
          question: "Will the site be optimised for SEO?",
          answer:
            "Yes, basic optimisation is part of development: structure, meta tags, speed, structured data, sitemap. Ongoing promotion is a separate SEO service.",
        },
        {
          question: "Who will own the site and the domain?",
          answer:
            "You. The domain and hosting are registered in your name, and after launch we hand over all access.",
        },
      ],
      formSub:
        "Leave a request — we'll discuss the task and tell you what kind of site your business needs.",
    },
  },

  /* ─────────────────────── Logo & branding ─────────────────────── */
  "logo-branding": {
    uk: {
      name: "Лого та брендинг",
      metaTitle: "Розробка логотипа та фірмового стилю в Ужгороді",
      metaDescription:
        "Розробка логотипа, фірмового стилю та брендбуку для бізнесу. Агентство PRO Marketing#, Ужгород. Стиль, який працює в рекламі, на сайті та в соцмережах.",
      lead: "Розробка логотипа та фірмового стилю для бізнесу в Ужгороді та по всій Україні.",
      sub: "Робимо айдентику, якою зручно користуватись щодня: у рекламі, на сайті, в соцмережах, на вивісці та упаковці. Не картинку заради картинки.",
      facts: [
        "логотип і фірмовий стиль",
        "файли для друку та онлайн",
        "вартість — після безкоштовного аналізу",
      ],
      deliverables: {
        intro: "Що ви отримуєте в результаті.",
        items: [
          {
            title: "Логотип",
            text: "Основна версія, спрощена версія і знак. У форматах для друку та екранів, у кольорі та в монохромі.",
          },
          {
            title: "Кольори і шрифти",
            text: "Палітра і шрифтова пара, підібрані під вашу нішу й аудиторію, з правилами поєднання.",
          },
          {
            title: "Фірмовий стиль",
            text: "Як бренд виглядає на практиці: візитки, оформлення соцмереж, рекламні макети, вивіска чи упаковка — залежно від потреб.",
          },
          {
            title: "Гайд із використання",
            text: "Короткий документ із правилами: як можна і як не можна використовувати логотип, кольори та шрифти.",
          },
        ],
      },
      process: {
        intro: "Покроково — від брифу до готових файлів.",
        steps: [
          {
            label: "Етап 1",
            title: "Бриф і дослідження",
            items: [
              "Розбираємо бізнес, аудиторію, цінності",
              "Аналіз візуалу конкурентів",
              "Узгодження напрямку",
            ],
          },
          {
            label: "Етап 2",
            title: "Концепції",
            items: [
              "Кілька варіантів логотипа",
              "Презентація на реальних носіях",
              "Вибір і доопрацювання",
            ],
          },
          {
            label: "Етап 3",
            title: "Система і файли",
            items: [
              "Кольори, шрифти, елементи стилю",
              "Макети потрібних носіїв",
              "Гайд і пакет файлів",
            ],
          },
        ],
      },
      timeline: {
        heading: "Як проходить проєкт.",
        intro: "Терміни залежать від обсягу — називаємо їх після брифу.",
        items: [
          {
            time: "Етап 1",
            title: "Бриф",
            text: "Розуміємо, яким бренд має бути і чим відрізнятись від конкурентів.",
          },
          {
            time: "Етап 2",
            title: "Варіанти логотипа",
            text: "Показуємо концепції на прикладах: вивіска, сайт, соцмережі.",
          },
          {
            time: "Етап 3",
            title: "Доопрацювання",
            text: "Доводимо обраний варіант до фінального вигляду.",
          },
          {
            time: "Етап 4",
            title: "Фірмовий стиль і передача",
            text: "Готуємо систему, гайд і файли у всіх потрібних форматах.",
          },
        ],
      },
      faq: [
        {
          question: "Чим логотип відрізняється від фірмового стилю?",
          answer:
            "Логотип — це знак і написання назви. Фірмовий стиль — система навколо нього: кольори, шрифти, графічні елементи та правила, за якими оформлюється все, від візитки до реклами.",
        },
        {
          question: "Скільки коштує розробка логотипа?",
          answer:
            "Залежить від обсягу: лише логотип, логотип зі стилем чи повний брендбук. Після короткого брифу називаємо конкретну суму.",
        },
        {
          question: "У яких форматах я отримаю файли?",
          answer:
            "У векторних для друку та зовнішньої реклами і в растрових для сайту й соцмереж. Кольорові, монохромні та інверсні версії.",
        },
        {
          question: "Чи можна оновити наявний логотип, а не робити новий?",
          answer:
            "Так. Якщо бренд уже впізнаваний, часто краще акуратно оновити логотип і вибудувати навколо нього систему, ніж починати з нуля.",
        },
        {
          question: "Кому належать права на логотип?",
          answer:
            "Вам. Після завершення проєкту передаємо всі вихідні файли і права на використання.",
        },
      ],
      formSub:
        "Залиште заявку — обговоримо ваш бренд і запропонуємо формат роботи.",
    },
    en: {
      name: "Logo & Branding",
      metaTitle: "Logo and brand identity design in Uzhhorod",
      metaDescription:
        "Logo, brand identity and brand guidelines for businesses. PRO Marketing#, Uzhhorod, Ukraine. A style that works in ads, on your site and on social media.",
      lead: "Logo and brand identity design for businesses in Uzhhorod and across Ukraine.",
      sub: "We create an identity that is practical to use every day: in ads, on the website, on social media, on signage and packaging. Not a picture for its own sake.",
      facts: [
        "logo and brand identity",
        "files for print and online",
        "pricing after a free analysis",
      ],
      deliverables: {
        intro: "What you receive in the end.",
        items: [
          {
            title: "Logo",
            text: "Primary version, simplified version and mark. In formats for print and screens, in colour and monochrome.",
          },
          {
            title: "Colours and typography",
            text: "A palette and font pairing chosen for your niche and audience, with rules for combining them.",
          },
          {
            title: "Brand identity",
            text: "How the brand looks in practice: business cards, social media, ad layouts, signage or packaging — depending on your needs.",
          },
          {
            title: "Usage guide",
            text: "A short document with rules: how the logo, colours and fonts may and may not be used.",
          },
        ],
      },
      process: {
        intro: "Step by step — from brief to final files.",
        steps: [
          {
            label: "Stage 1",
            title: "Brief and research",
            items: [
              "Business, audience and values",
              "Competitor visual analysis",
              "Agreeing on direction",
            ],
          },
          {
            label: "Stage 2",
            title: "Concepts",
            items: [
              "Several logo options",
              "Presentation on real-world mockups",
              "Selection and refinement",
            ],
          },
          {
            label: "Stage 3",
            title: "System and files",
            items: [
              "Colours, fonts, style elements",
              "Layouts for the items you need",
              "Guide and file package",
            ],
          },
        ],
      },
      timeline: {
        heading: "How the project runs.",
        intro: "Timing depends on scope — we state it after the brief.",
        items: [
          {
            time: "Stage 1",
            title: "Brief",
            text: "We understand what the brand should be and how it differs from competitors.",
          },
          {
            time: "Stage 2",
            title: "Logo options",
            text: "We show concepts in context: signage, website, social media.",
          },
          {
            time: "Stage 3",
            title: "Refinement",
            text: "We bring the chosen option to its final form.",
          },
          {
            time: "Stage 4",
            title: "Identity and handover",
            text: "We prepare the system, the guide and files in all required formats.",
          },
        ],
      },
      faq: [
        {
          question: "What is the difference between a logo and a brand identity?",
          answer:
            "A logo is the mark and the lettering of the name. A brand identity is the system around it: colours, fonts, graphic elements and the rules for everything from a business card to an ad.",
        },
        {
          question: "How much does a logo cost?",
          answer:
            "It depends on scope: logo only, logo with identity, or full brand guidelines. After a short brief we name a specific price.",
        },
        {
          question: "What file formats will I get?",
          answer:
            "Vector files for print and outdoor advertising and raster files for web and social media. Colour, monochrome and inverted versions.",
        },
        {
          question: "Can you refresh an existing logo instead of making a new one?",
          answer:
            "Yes. If the brand is already recognisable, it is often better to carefully update the logo and build a system around it than to start from scratch.",
        },
        {
          question: "Who owns the rights to the logo?",
          answer:
            "You. When the project is finished we hand over all source files and usage rights.",
        },
      ],
      formSub:
        "Leave a request — we'll discuss your brand and suggest a way of working.",
    },
  },

  /* ─────────────────────── Complex marketing ─────────────────────── */
  "complex-marketing": {
    uk: {
      name: "Комплексний маркетинг",
      metaTitle: "Комплексний маркетинг під ключ в Ужгороді",
      metaDescription:
        "Комплексний маркетинг для бізнесу: стратегія, реклама Google і Meta, SEO, SMM, сайт та аналітика від однієї команди. Агентство PRO Marketing#, Ужгород.",
      lead: "Комплексний маркетинг під ключ: стратегія, реклама, сайт і аналітика від однієї команди.",
      sub: "Коли рекламу веде один підрядник, сайт робить інший, а соцмережі — третій, за результат не відповідає ніхто. Ми беремо всі канали на себе і відповідаємо за заявки загалом.",
      facts: [
        "одна команда на всі канали",
        "звіт щотижня або щомісяця",
        "вартість — після безкоштовного аналізу",
      ],
      deliverables: {
        intro: "З чого складається комплексний супровід.",
        items: [
          {
            title: "Маркетингова стратегія",
            text: "Аналізуємо бізнес, конкурентів і клієнтів та визначаємо, які канали потрібні саме вам, з яким бюджетом і в якій послідовності.",
          },
          {
            title: "Реклама і трафік",
            text: "Google Ads, Meta Ads, TikTok Ads, SEO — запускаємо ті канали, які дають заявки у вашій ніші, і перерозподіляємо бюджет між ними.",
          },
          {
            title: "Сайт, контент і соцмережі",
            text: "Доробляємо або створюємо сайт, ведемо соцмережі, готуємо креативи — щоб трафік потрапляв туди, де його вміють перетворити на заявку.",
          },
          {
            title: "Наскрізна аналітика",
            text: "Відстежуємо заявки з кожного каналу, щоб ви бачили, що окуповується, а що ні. Один звіт замість п'яти від різних підрядників.",
          },
        ],
      },
      process: {
        intro: "Покроково — що відбувається після старту співпраці.",
        steps: [
          {
            label: "Крок 1",
            title: "Аудит і стратегія",
            items: [
              "Аналіз бізнесу та поточного маркетингу",
              "Аналіз конкурентів",
              "Вибір каналів і розподіл бюджету",
              "План робіт і цілі",
            ],
          },
          {
            label: "Крок 2",
            title: "Запуск каналів",
            items: [
              "Налаштування аналітики",
              "Підготовка сайту і посадкових сторінок",
              "Запуск реклами",
              "Старт роботи з контентом і SEO",
            ],
          },
          {
            label: "Щомісяця",
            title: "Оптимізація і ріст",
            items: [
              "Перерозподіл бюджету між каналами",
              "Нові гіпотези та тести",
              "Єдиний звіт по всіх каналах",
              "Зустріч з оглядом результатів",
            ],
          },
        ],
      },
      timeline: {
        heading: "Коли буде результат.",
        intro: "Канали працюють із різною швидкістю — тому й запускаємо їх разом.",
        items: [
          {
            time: "Тиждень 1–2",
            title: "Аудит і стратегія",
            text: "Ви отримуєте план: які канали, який бюджет, які цілі.",
          },
          {
            time: "Місяць 1",
            title: "Перші заявки з реклами",
            text: "Платні канали починають приносити звернення вже в перші тижні.",
          },
          {
            time: "Місяць 2–3",
            title: "Система працює",
            text: "Аналітика показує вартість заявки по кожному каналу, SEO та контент починають давати результат.",
          },
          {
            time: "Місяць 3+",
            title: "Масштабування",
            text: "Збільшуємо бюджет там, де окупність найкраща, і додаємо нові канали.",
          },
        ],
      },
      faq: [
        {
          question: "Що входить у комплексний маркетинг?",
          answer:
            "Стратегія, платна реклама (Google, Meta, TikTok), SEO, SMM, робота із сайтом та аналітика. Набір каналів підбираємо під ваш бізнес — не обов'язково запускати все одразу.",
        },
        {
          question: "Кому підходить комплексний підхід?",
          answer:
            "Бізнесу, який уже пробував окремі канали й хоче системного зростання, або тому, хто виходить на ринок і не хоче збирати п'ять різних підрядників.",
        },
        {
          question: "Скільки коштує комплексний маркетинг?",
          answer:
            "Залежить від кількості каналів та обсягу робіт. Після безкоштовного аналізу пропонуємо план із конкретною вартістю і рекомендованим рекламним бюджетом.",
        },
        {
          question: "Чи можна почати з одного каналу?",
          answer:
            "Так. Можна стартувати з однієї послуги і розширюватись, коли побачите результат. Ми не нав'язуємо пакети.",
        },
        {
          question: "Чим це краще за кількох окремих підрядників?",
          answer:
            "Одна команда бачить усю картину: реклама, сайт і контент працюють на одну ціль, а бюджет переходить туди, де він дає більше заявок. І ви спілкуєтесь з однією командою замість кількох.",
        },
      ],
      formSub:
        "Залиште заявку — проаналізуємо ваш маркетинг і запропонуємо, з чого почати.",
    },
    en: {
      name: "Complex Marketing",
      metaTitle: "Full-service marketing in Uzhhorod",
      metaDescription:
        "Full-service marketing: strategy, Google and Meta ads, SEO, SMM, website and analytics from one team. PRO Marketing#, Uzhhorod, Ukraine.",
      lead: "Full-service marketing: strategy, advertising, website and analytics from one team.",
      sub: "When one contractor runs ads, another builds the site and a third manages social media, nobody answers for the result. We take on all channels and answer for leads overall.",
      facts: [
        "one team for all channels",
        "weekly or monthly reporting",
        "pricing after a free analysis",
      ],
      deliverables: {
        intro: "What full-service support consists of.",
        items: [
          {
            title: "Marketing strategy",
            text: "We analyse the business, competitors and customers and decide which channels you need, with what budget and in what order.",
          },
          {
            title: "Advertising and traffic",
            text: "Google Ads, Meta Ads, TikTok Ads, SEO — we launch the channels that bring leads in your niche and shift budget between them.",
          },
          {
            title: "Website, content and social media",
            text: "We improve or build the site, manage social media and prepare creatives — so traffic lands where it can be turned into a lead.",
          },
          {
            title: "End-to-end analytics",
            text: "We track leads from every channel so you see what pays off and what doesn't. One report instead of five from different contractors.",
          },
        ],
      },
      process: {
        intro: "Step by step — what happens after we start.",
        steps: [
          {
            label: "Step 1",
            title: "Audit and strategy",
            items: [
              "Analysis of the business and current marketing",
              "Competitor analysis",
              "Channel selection and budget split",
              "Work plan and goals",
            ],
          },
          {
            label: "Step 2",
            title: "Channel launch",
            items: [
              "Analytics setup",
              "Preparing the site and landing pages",
              "Launching ads",
              "Starting content and SEO work",
            ],
          },
          {
            label: "Monthly",
            title: "Optimisation and growth",
            items: [
              "Shifting budget between channels",
              "New hypotheses and tests",
              "A single report across all channels",
              "Results review meeting",
            ],
          },
        ],
      },
      timeline: {
        heading: "When to expect results.",
        intro: "Channels work at different speeds — which is why we launch them together.",
        items: [
          {
            time: "Week 1–2",
            title: "Audit and strategy",
            text: "You get a plan: which channels, what budget, which goals.",
          },
          {
            time: "Month 1",
            title: "First leads from ads",
            text: "Paid channels start bringing enquiries in the first weeks.",
          },
          {
            time: "Month 2–3",
            title: "The system is running",
            text: "Analytics shows cost per lead by channel; SEO and content start to deliver.",
          },
          {
            time: "Month 3+",
            title: "Scaling",
            text: "We raise the budget where the return is best and add new channels.",
          },
        ],
      },
      faq: [
        {
          question: "What does full-service marketing include?",
          answer:
            "Strategy, paid advertising (Google, Meta, TikTok), SEO, SMM, website work and analytics. We choose the channel mix for your business — you don't have to launch everything at once.",
        },
        {
          question: "Who is this approach right for?",
          answer:
            "Businesses that have tried individual channels and want systematic growth, or those entering the market who don't want to assemble five separate contractors.",
        },
        {
          question: "How much does it cost?",
          answer:
            "It depends on the number of channels and the scope of work. After a free analysis we propose a plan with a specific price and a recommended ad budget.",
        },
        {
          question: "Can I start with one channel?",
          answer:
            "Yes. You can start with one service and expand once you see results. We don't push packages.",
        },
        {
          question: "Why is this better than several separate contractors?",
          answer:
            "One team sees the whole picture: ads, site and content work towards one goal, and budget moves to where it brings more leads. And you talk to one team instead of several.",
        },
      ],
      formSub:
        "Leave a request — we'll analyse your marketing and suggest where to start.",
    },
  },
};
