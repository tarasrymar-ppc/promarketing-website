import type { Locale } from "@/lib/seo";

// Blog articles rendered by app/[locale]/blog/[slug]/page.tsx. Each article
// opens with a short direct answer (what search and AI engines quote), then
// sections, an FAQ and links to related services and industry pages.
// Only prices already published on the site are used; worked examples are
// labelled as examples, not forecasts or client results.

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  table?: { head: string[]; rows: string[][] };
};

export type BlogPostContent = {
  title: string;
  metaTitle: string;
  description: string;
  /** Short direct answer shown at the top of the article. */
  summary: string;
  readingMinutes: number;
  sections: BlogSection[];
  faq: { question: string; answer: string }[];
};

export type BlogPost = {
  datePublished: string;
  dateModified?: string;
  relatedServices: string[];
  relatedIndustries: string[];
} & Record<Locale, BlogPostContent>;

export const BLOG_LABELS = {
  uk: {
    name: "Блог",
    indexKeyword: "Статті про рекламу в Google, Meta Ads, SEO та AI-пошук: ціни, терміни, поради",
    indexMetaTitle: "Блог про рекламу, SEO і маркетинг для бізнесу",
    indexMetaDescription:
      "Відповіді на питання власників бізнесу: скільки коштує реклама в Google, що обрати — Meta Ads чи Google Ads, скільки часу потрібно на SEO, що таке AEO.",
    indexLead: "Пишемо про те, що нас найчастіше питають клієнти: ціни, терміни і як не злити бюджет.",
    shortAnswer: "Коротка відповідь",
    minutes: "хв читання",
    published: "Опубліковано",
    faqHeading: "Часті питання.",
    relatedHeading: "Що далі",
    relatedServices: "Послуги",
    relatedIndustries: "Для вашої галузі",
    ctaTitle: "Хочете порахувати бюджет для свого бізнесу?",
    ctaText: "Проведемо безкоштовний аналіз ніші і скажемо, з чого почати.",
    ctaButton: "Отримати консультацію",
    read: "Читати",
  },
  en: {
    name: "Blog",
    indexKeyword: "Articles on Google Ads, Meta Ads, SEO and AI search: prices, timelines, advice",
    indexMetaTitle: "Blog on advertising, SEO and marketing for business",
    indexMetaDescription:
      "Answers to business owners' questions: how much Google Ads costs, Meta Ads or Google Ads, how long SEO takes, what AEO is.",
    indexLead: "We write about what clients ask us most: prices, timelines, and how not to waste the budget.",
    shortAnswer: "Short answer",
    minutes: "min read",
    published: "Published",
    faqHeading: "FAQ.",
    relatedHeading: "What's next",
    relatedServices: "Services",
    relatedIndustries: "For your industry",
    ctaTitle: "Want to estimate a budget for your business?",
    ctaText: "We'll run a free niche analysis and tell you where to start.",
    ctaButton: "Get a consultation",
    read: "Read",
  },
} as const;

export const BLOG_POSTS: Record<string, BlogPost> = {
  /* ─────────────────────── Google Ads cost 2026 ─────────────────────── */
  "google-ads-cost-2026": {
    datePublished: "2026-11-25",
    relatedServices: ["/services/google-ads"],
    relatedIndustries: ["online-stores", "dental-clinics"],
    uk: {
      title: "Скільки коштує реклама в Google у 2026 році",
      metaTitle: "Скільки коштує реклама в Google у 2026 році: бюджет і ведення",
      description:
        "З чого складається вартість Google Ads у 2026 році, від чого залежить ціна кліка, як порахувати рекламний бюджет під потрібну кількість заявок і скільки коштує ведення.",
      summary:
        "Вартість реклами в Google складається з двох частин: рекламного бюджету, який ви платите напряму Google, і оплати роботи спеціаліста чи агенції. У PRO Marketing# ведення Google Ads коштує від 10 000 грн на місяць, а рекомендований мінімальний рекламний бюджет — від 15 000 грн на місяць. Ціна кліка залежить від ніші, міста і конкуренції, тому бюджет найкраще рахувати від потрібної кількості заявок.",
      readingMinutes: 6,
      sections: [
        {
          heading: "З чого складається вартість Google Ads",
          paragraphs: [
            "Коли питають «скільки коштує реклама в Google», зазвичай мають на увазі одразу дві різні суми. Їх варто розділяти, бо платите ви їх різним людям.",
          ],
          list: [
            "Рекламний бюджет — гроші, які ви платите Google за кліки. Списуються з вашої картки у вашому акаунті, через агенцію не проходять.",
            "Ведення — оплата роботи спеціаліста або агенції: налаштування, оголошення, аналітика, оптимізація і звіти. У нас — від 10 000 грн на місяць.",
            "Разові витрати, якщо потрібні: лендінг або доопрацювання сайту, налаштування аналітики, фід товарів для інтернет-магазину.",
          ],
        },
        {
          heading: "Від чого залежить ціна кліка",
          paragraphs: [
            "Google Ads — це аукціон. Ви не купуєте покази за фіксованою ціною: кожного разу, коли людина вводить запит, система порівнює всіх рекламодавців, які хочуть показатися за цим запитом.",
            "На ціну кліка впливають:",
          ],
          list: [
            "Конкуренція в ніші. Що більше компаній рекламуються за запитом, то дорожчий клік. Юридичні послуги, медицина чи нерухомість зазвичай дорожчі, ніж локальні сервіси.",
            "Місто і регіон. Реклама по всій Україні і реклама на одне місто — різні аукціони з різними цінами.",
            "Якість оголошення і сторінки. Google оцінює, наскільки оголошення і сайт відповідають запиту. Краща відповідність — нижча ціна за той самий показ.",
            "Сезон і час. Перед святами, у сезон відпусток чи в піковий час доби клік може дорожчати.",
            "Тип кампанії. Пошук, Shopping, YouTube і медійна реклама мають різну вартість і різну мету.",
          ],
        },
        {
          heading: "Як порахувати рекламний бюджет під свою ціль",
          paragraphs: [
            "Найкорисніше питання не «скільки грошей вкласти», а «скільки заявок потрібно і скільки я готовий платити за одну». Від цього бюджет рахується простою формулою.",
            "Вартість заявки = ціна кліка ÷ конверсія сайту. Бюджет = потрібна кількість заявок × вартість заявки.",
            "Умовний приклад: якщо клік коштує 15 грн, а сайт перетворює на заявку 5% відвідувачів, одна заявка коштує 300 грн. Для 50 заявок на місяць потрібно близько 15 000 грн бюджету. Цифри тут для прикладу розрахунку, а не прогноз для вашої ніші: реальні ціну кліка і конверсію видно після аналізу запитів і перших тижнів роботи.",
            "З формули видно важливу річ: покращити сайт так само вигідно, як знизити ціну кліка. Якщо конверсія зросте з 5% до 7,5%, та сама заявка стане дешевшою на третину.",
          ],
        },
        {
          heading: "Чому мінімальний бюджет має значення",
          paragraphs: [
            "Можна запустити рекламу і з дуже малим бюджетом, але тоді за день буде лише кілька кліків. Алгоритмам Google потрібні дані, щоб зрозуміти, хто стає клієнтом, а вам — щоб відрізнити робочі запити від неробочих. З маленьким бюджетом перший місяць часто минає без чітких висновків.",
            "Тому ми рекомендуємо від 15 000 грн на місяць рекламного бюджету в Google. Якщо бюджет менший, краще звузити кампанію: одна послуга, одне місто, найточніші запити.",
          ],
        },
        {
          heading: "Як не переплатити за рекламу в Google",
          paragraphs: ["Більшість «дорогих» кампаній дорогі не через ціну кліка, а через те, що бюджет іде не туди."],
          list: [
            "Налаштуйте відстеження заявок і дзвінків. Без нього неможливо зрозуміти, які запити приносять клієнтів.",
            "Додавайте мінус-слова. Запити на кшталт «безкоштовно», «вакансії», «своїми руками» з'їдають бюджет без заявок.",
            "Розділяйте кампанії за послугами. Так видно вартість заявки на кожну послугу, і бюджет можна перерозподілити.",
            "Обмежте гео і час показу, якщо обслуговуєте одне місто або працюєте в певні години.",
            "Ведіть рекламу на сторінку конкретної послуги, а не на головну.",
            "Тримайте акаунт на своє ім'я, щоб історія і дані залишалися у вас за будь-яких умов.",
          ],
        },
      ],
      faq: [
        { question: "Чи можна запустити Google Ads з бюджетом 5 000 грн на місяць?", answer: "Можна, але кліків буде мало і висновки займуть більше часу. З таким бюджетом краще рекламувати одну послугу в одному місті за найточнішими запитами." },
        { question: "Рекламний бюджет проходить через агенцію?", answer: "У нас ні. Ви платите Google напряму зі своєї картки у своєму акаунті і завжди бачите, скільки реально витрачено." },
        { question: "Чи потрібен довгий контракт?", answer: "Ні. Google Ads ми ведемо помісячно, без обов'язкового контракту." },
        { question: "Коли будуть перші заявки?", answer: "Зазвичай за 1–2 тижні після запуску. Стабільна вартість заявки формується за 1–2 місяці оптимізації." },
      ],
    },
    en: {
      title: "How much does Google advertising cost in 2026",
      metaTitle: "How much does Google Ads cost in 2026: budget and management",
      description:
        "What Google Ads costs are made of in 2026, what drives cost per click, how to calculate an ad budget from the number of leads you need, and what management costs.",
      summary:
        "Google advertising cost has two parts: the ad budget you pay directly to Google, and the fee for a specialist or agency. At PRO Marketing#, Google Ads management starts from UAH 10,000 per month, and the recommended minimum ad budget is from UAH 15,000 per month. Cost per click depends on the niche, city and competition, so it's best to calculate the budget from the number of leads you need.",
      readingMinutes: 5,
      sections: [
        {
          heading: "What Google Ads costs are made of",
          paragraphs: ["“How much does Google advertising cost” usually means two different amounts, paid to different parties."],
          list: [
            "Ad budget: what you pay Google for clicks. It's charged to your card in your own account and doesn't pass through the agency.",
            "Management: the specialist's or agency's work on setup, ads, analytics, optimisation and reports. With us, from UAH 10,000 per month.",
            "One-off costs if needed: a landing page or website fixes, analytics setup, a product feed for an online store.",
          ],
        },
        {
          heading: "What drives cost per click",
          paragraphs: [
            "Google Ads is an auction. Every time someone searches, the system compares all advertisers who want to show for that search.",
            "Cost per click depends on:",
          ],
          list: [
            "Competition in the niche. More advertisers on a search means a pricier click. Legal, medical and real estate services usually cost more than local services.",
            "City and region. Ads across Ukraine and ads in one city are different auctions with different prices.",
            "Ad and page quality. Google rates how well the ad and website match the search. A better match means a lower price for the same impression.",
            "Season and time. Before holidays, in holiday season or at peak hours, clicks can get more expensive.",
            "Campaign type. Search, Shopping, YouTube and display ads have different costs and goals.",
          ],
        },
        {
          heading: "How to calculate your ad budget",
          paragraphs: [
            "The useful question isn't “how much should I spend” but “how many leads do I need and what can I pay for one”. The budget follows from a simple formula.",
            "Cost per lead = cost per click ÷ website conversion rate. Budget = leads needed × cost per lead.",
            "An illustrative example: if a click costs UAH 15 and the website turns 5% of visitors into leads, one lead costs UAH 300, and 50 leads a month need about UAH 15,000 of budget. These numbers only illustrate the calculation; they are not a forecast for your niche. Real click prices and conversion rates become clear after keyword research and the first weeks of running ads.",
            "The formula shows that improving the website pays off as much as lowering click prices: if conversion rises from 5% to 7.5%, the same lead gets a third cheaper.",
          ],
        },
        {
          heading: "Why the minimum budget matters",
          paragraphs: [
            "You can run ads on a very small budget, but you'll get only a few clicks a day. Google's algorithms need data to learn who becomes a customer, and so do you to tell working searches from weak ones.",
            "That's why we recommend from UAH 15,000 per month of Google ad budget. With less, narrow the campaign: one service, one city, the most precise searches.",
          ],
        },
        {
          heading: "How not to overpay for Google Ads",
          paragraphs: ["Most “expensive” campaigns aren't expensive because of click prices, but because the budget goes to the wrong place."],
          list: [
            "Set up lead and call tracking, or you can't see which searches bring customers.",
            "Add negative keywords: searches like “free”, “jobs” or “DIY” eat budget without leads.",
            "Split campaigns by service to see the cost per lead for each one.",
            "Limit location and schedule if you serve one city or work set hours.",
            "Send ads to the page for the specific service, not the home page.",
            "Keep the account in your own name so the history and data stay yours.",
          ],
        },
      ],
      faq: [
        { question: "Can I run Google Ads on UAH 5,000 a month?", answer: "Yes, but clicks will be few and conclusions will take longer. With that budget, promote one service in one city with the most precise searches." },
        { question: "Does the ad budget go through the agency?", answer: "Not with us. You pay Google directly from your card in your own account and always see the actual spend." },
        { question: "Is a long contract required?", answer: "No. We manage Google Ads month to month, with no mandatory contract." },
        { question: "When will the first leads come?", answer: "Usually 1–2 weeks after launch. A stable cost per lead takes 1–2 months of optimisation." },
      ],
    },
  },

  /* ─────────────────────── Meta Ads vs Google Ads ─────────────────────── */
  "meta-ads-vs-google-ads": {
    datePublished: "2026-11-25",
    relatedServices: ["/services/google-ads", "/services/meta-ads", "/services/smm"],
    relatedIndustries: ["beauty-salons", "real-estate", "hotels-zakarpattia"],
    uk: {
      title: "Meta Ads чи Google Ads: що обрати для бізнесу",
      metaTitle: "Meta Ads чи Google Ads: що краще для вашого бізнесу",
      description:
        "Чим відрізняється реклама в Google від реклами у Facebook та Instagram, коли обирати кожен канал, скільки коштує ведення і чи варто запускати обидва одночасно.",
      summary:
        "Google Ads показує рекламу людям, які вже шукають ваш продукт, тому підходить, коли попит є і його шукають у Google. Meta Ads (Facebook та Instagram) показує рекламу за інтересами і поведінкою, тому підходить, коли продукт треба показати і викликати бажання. Для більшості бізнесів найкраще працює поєднання: Google збирає готовий попит, а Meta формує новий і повертає тих, хто вже цікавився.",
      readingMinutes: 5,
      sections: [
        {
          heading: "Головна різниця: пошук проти стрічки",
          paragraphs: [
            "У Google людина сама вводить запит: «стоматолог Ужгород», «купити дитячий велосипед». Ви показуєтеся тому, хто вже має потребу. Це реклама на намір.",
            "У Facebook та Instagram людина гортає стрічку і нічого конкретного не шукає. Реклама має зачепити увагу і пояснити, чому продукт цікавий. Це реклама на інтерес.",
          ],
          table: {
            head: ["", "Google Ads", "Meta Ads"],
            rows: [
              ["Кого охоплює", "Людей, які вже шукають", "Людей за інтересами і поведінкою"],
              ["Що важливо", "Запити, оголошення, сторінка послуги", "Креатив: фото, відео, текст"],
              ["Швидкість заявок", "Зазвичай швидше", "Залежить від креативу і пропозиції"],
              ["Добре для", "Послуг і товарів, які шукають", "Візуальних продуктів, новинок, локального бізнесу"],
              ["Ведення в PRO Marketing#", "від 10 000 грн/міс", "від 15 000 грн/міс"],
            ],
          },
        },
        {
          heading: "Коли краще обрати Google Ads",
          paragraphs: ["Google Ads варто ставити першим, якщо:"],
          list: [
            "люди активно шукають вашу послугу чи товар у Google;",
            "потреба термінова: ремонт, лікування, доставка, евакуатор;",
            "у вас інтернет-магазин з асортиментом, який шукають за назвою чи категорією;",
            "ви B2B і клієнти шукають постачальника чи підрядника.",
          ],
        },
        {
          heading: "Коли краще обрати Meta Ads",
          paragraphs: ["Meta Ads варто ставити першим, якщо:"],
          list: [
            "продукт добре виглядає на фото чи відео: одяг, б'юті, ресторани, готелі, нерухомість;",
            "попиту в пошуку мало, бо про продукт ще не знають;",
            "вам потрібні люди в конкретному районі чи місті поруч із вами;",
            "важливо підігрівати аудиторію довго, як у нерухомості чи дорогих послугах.",
          ],
        },
        {
          heading: "Чому найкраще працюють разом",
          paragraphs: [
            "Канали не конкурують, а доповнюють один одного. Людина бачить вас в Instagram, через кілька днів шукає назву в Google і записується. Або навпаки: заходить на сайт з пошуку, не залишає заявку, а потім бачить ретаргетинг у стрічці.",
            "Якщо бюджет обмежений, почніть з одного каналу, який ближчий до вашого клієнта, налаштуйте відстеження заявок, а другий додайте, коли перший стабільно працює.",
          ],
        },
        {
          heading: "Скільки потрібно бюджету",
          paragraphs: [
            "Ведення Google Ads у нас — від 10 000 грн на місяць, Meta Ads — від 15 000 грн. Рекламний бюджет оплачується окремо, напряму платформі: для Google рекомендуємо від 15 000 грн на місяць, для Meta — від 10 000 грн.",
            "Як порахувати бюджет під потрібну кількість заявок, ми розібрали у статті про вартість реклами в Google.",
          ],
        },
      ],
      faq: [
        { question: "Що дешевше: реклама в Instagram чи в Google?", answer: "Клік чи показ в Instagram часто дешевший, але люди там менше готові купувати одразу. Порівнювати варто не ціну кліка, а вартість заявки чи продажу з кожного каналу." },
        { question: "Чи потрібна сторінка у Facebook для реклами в Instagram?", answer: "Так, реклама в Instagram запускається через рекламний кабінет Meta, до якого підключені сторінка Facebook і профіль Instagram." },
        { question: "Чи можна запускати обидва канали з одним бюджетом?", answer: "Можна, але якщо бюджет невеликий, краще почати з одного каналу. Розподіл на два з малим бюджетом дає мало даних в обох." },
        { question: "Який канал підходить для локального бізнесу?", answer: "Обидва. Google ловить запити «поруч» і на картах, Meta показує рекламу людям у вашому районі. Для салонів, кафе і клінік часто найкраще працює поєднання." },
      ],
    },
    en: {
      title: "Meta Ads or Google Ads: which to choose for your business",
      metaTitle: "Meta Ads vs Google Ads: which is better for your business",
      description:
        "How Google advertising differs from Facebook and Instagram ads, when to choose each channel, what management costs, and whether to run both at once.",
      summary:
        "Google Ads shows ads to people already searching for your product, so it fits when demand exists and people search for it on Google. Meta Ads (Facebook and Instagram) shows ads by interests and behaviour, so it fits when a product needs to be shown and made desirable. For most businesses a combination works best: Google captures existing demand, Meta creates new demand and brings back people who were interested.",
      readingMinutes: 4,
      sections: [
        {
          heading: "The main difference: search vs feed",
          paragraphs: [
            "On Google, people type a search: “dentist Uzhhorod”, “buy a kids' bike”. You show up for someone who already has a need. That's intent advertising.",
            "On Facebook and Instagram, people scroll without looking for anything specific. The ad has to catch attention and explain why the product is interesting. That's interest advertising.",
          ],
          table: {
            head: ["", "Google Ads", "Meta Ads"],
            rows: [
              ["Who it reaches", "People already searching", "People by interests and behaviour"],
              ["What matters", "Keywords, ads, the service page", "Creative: photos, video, copy"],
              ["Speed of leads", "Usually faster", "Depends on creative and offer"],
              ["Good for", "Services and products people search for", "Visual products, new products, local businesses"],
              ["Management at PRO Marketing#", "from UAH 10,000/mo", "from UAH 15,000/mo"],
            ],
          },
        },
        {
          heading: "When to choose Google Ads",
          paragraphs: ["Start with Google Ads if:"],
          list: [
            "people actively search for your service or product on Google;",
            "the need is urgent: repairs, treatment, delivery, towing;",
            "you run an online store with products people search by name or category;",
            "you're B2B and clients search for a supplier or contractor.",
          ],
        },
        {
          heading: "When to choose Meta Ads",
          paragraphs: ["Start with Meta Ads if:"],
          list: [
            "the product looks good in photos or video: fashion, beauty, restaurants, hotels, real estate;",
            "there's little search demand because people don't know the product yet;",
            "you need people in a specific area or city near you;",
            "the audience needs long warming up, as in real estate or expensive services.",
          ],
        },
        {
          heading: "Why they work best together",
          paragraphs: [
            "The channels complement each other. Someone sees you on Instagram, searches your name on Google a few days later and books. Or they visit from search, leave without enquiring, then see a retargeting ad in their feed.",
            "On a limited budget, start with the channel closer to your customer, set up lead tracking, and add the second once the first works steadily.",
          ],
        },
        {
          heading: "How much budget you need",
          paragraphs: [
            "Our Google Ads management starts from UAH 10,000 per month and Meta Ads from UAH 15,000. The ad budget is paid separately, directly to the platform: we recommend from UAH 15,000 per month for Google and from UAH 10,000 for Meta.",
            "How to calculate a budget from the number of leads you need is covered in our article on Google Ads costs.",
          ],
        },
      ],
      faq: [
        { question: "Which is cheaper: Instagram or Google ads?", answer: "A click or impression on Instagram is often cheaper, but people there are less ready to buy right away. Compare the cost per lead or sale from each channel, not the cost per click." },
        { question: "Do I need a Facebook page to advertise on Instagram?", answer: "Yes. Instagram ads run through a Meta ad account connected to a Facebook page and an Instagram profile." },
        { question: "Can I run both channels on one budget?", answer: "Yes, but with a small budget it's better to start with one channel. Splitting a small budget gives too little data in both." },
        { question: "Which channel suits a local business?", answer: "Both. Google catches “near me” searches and maps, and Meta shows ads to people in your area. For salons, cafés and clinics a combination often works best." },
      ],
    },
  },

  /* ─────────────────────── How long SEO takes ─────────────────────── */
  "how-long-seo-takes": {
    datePublished: "2026-11-25",
    relatedServices: ["/services/seo", "/services/aeo", "/services/website-development"],
    relatedIndustries: ["online-stores", "dental-clinics"],
    uk: {
      title: "Скільки часу потрібно на SEO і від чого залежить результат",
      metaTitle: "Скільки часу потрібно на SEO-просування сайту",
      description:
        "Чому SEO не дає результату за тиждень, що відбувається в перші місяці просування, від чого залежить швидкість і як зрозуміти, що SEO працює.",
      summary:
        "Перші зміни після SEO-робіт зазвичай видно в Google Search Console через кілька тижнів, а стабільне зростання трафіку і заявок — від 2–3 місяців. Швидкість залежить від технічного стану сайту, конкуренції в ніші, кількості і якості сторінок, а також від того, наскільки сайту довіряють інші ресурси.",
      readingMinutes: 5,
      sections: [
        {
          heading: "Чому SEO не працює за тиждень",
          paragraphs: [
            "Google має знайти зміни на сайті, переіндексувати сторінки і перевірити, чи краще вони відповідають на запити, ніж сторінки конкурентів. Це не відбувається миттєво: роботи пошуковика заходять на сайт з різною частотою, а нові сторінки потребують часу, щоб набрати довіру.",
            "Тому SEO — це не кнопка «увімкнути трафік», а накопичувальний ефект: кожна виправлена помилка і кожна корисна сторінка працюють на вас місяцями.",
          ],
        },
        {
          heading: "Що відбувається в перші три місяці",
          paragraphs: ["Типовий порядок робіт у перші місяці виглядає так:"],
          list: [
            "Перший місяць: технічний аудит і виправлення помилок, налаштування Search Console і аналітики, збір запитів, план сторінок.",
            "Другий місяць: оптимізація наявних сторінок, нові сторінки під важливі запити, внутрішня перелінковка.",
            "Третій місяць: контент, перші зовнішні згадки і посилання, аналіз того, які сторінки ростуть, і посилення їх.",
          ],
        },
        {
          heading: "Від чого залежить швидкість",
          paragraphs: ["Два сайти з однаковим бюджетом на SEO можуть рости з різною швидкістю. Ось що впливає найбільше:"],
          list: [
            "Технічний стан. Якщо Google не може нормально проіндексувати сайт, контент не допоможе, доки це не виправлено.",
            "Конкуренція. Вийти в топ за «купити смартфон» значно важче, ніж за «ремонт пральних машин Ужгород».",
            "Вік і історія сайту. Новому домену потрібно більше часу, ніж сайту, який уже має довіру.",
            "Сторінки під запити. Якщо під послугу немає окремої сторінки, ранжуватися їй нема чим.",
            "Зовнішні сигнали: згадки на інших сайтах, профіль у Google, відгуки.",
          ],
        },
        {
          heading: "Як зрозуміти, що SEO працює",
          paragraphs: [
            "Позиції — не єдиний і не головний показник. Дивіться на те, що видно в Google Search Console і в аналітиці:",
          ],
          list: [
            "кількість показів сайту в пошуку і кількість запитів, за якими він показується;",
            "кліки з пошуку і середня позиція за важливими запитами;",
            "заявки і дзвінки з органічного трафіку;",
            "кількість проіндексованих сторінок і відсутність помилок індексації.",
          ],
        },
        {
          heading: "Скільки коштує SEO",
          paragraphs: [
            "Вартість SEO залежить від розміру сайту, його технічного стану і конкуренції в ніші, тому фіксованої ціни для всіх немає. Ми називаємо вартість після безкоштовного аналізу сайту, коли зрозуміло, скільки роботи потрібно.",
            "Якщо результат потрібен уже зараз, SEO варто поєднати з Google Ads: реклама дає заявки з першого тижня, а SEO поступово знижує залежність від рекламного бюджету.",
          ],
        },
      ],
      faq: [
        { question: "Чи можна гарантувати перше місце в Google?", answer: "Ні. Ніхто не контролює алгоритм Google, тому гарантії конкретних позицій — привід насторожитися. Чесно можна гарантувати обсяг і якість робіт та прозорі звіти." },
        { question: "Що буде, якщо зупинити SEO?", answer: "Результат не зникне одразу, але без нових робіт сайт поступово поступатиметься конкурентам, які продовжують розвиватися." },
        { question: "Чи потрібне SEO, якщо є реклама?", answer: "Реклама працює, поки ви платите. SEO створює канал, який приводить клієнтів без оплати за клік, тому в довгу вони добре доповнюють одне одного." },
        { question: "Що таке AEO і чи потрібне воно разом з SEO?", answer: "AEO — це оптимізація під відповіді AI-асистентів і AI-пошуку. Воно спирається на ту саму основу, що й SEO, тому їх найкраще робити разом." },
      ],
    },
    en: {
      title: "How long SEO takes and what results depend on",
      metaTitle: "How long does SEO take to work",
      description:
        "Why SEO doesn't work in a week, what happens in the first months, what affects the speed, and how to tell that SEO is working.",
      summary:
        "The first changes after SEO work usually show in Google Search Console within a few weeks, and steady growth in traffic and leads starts from 2–3 months. The speed depends on the site's technical state, competition in the niche, the number and quality of pages, and how much other sites trust yours.",
      readingMinutes: 4,
      sections: [
        {
          heading: "Why SEO doesn't work in a week",
          paragraphs: [
            "Google has to find the changes, re-index the pages and check whether they answer searches better than competitors' pages. That takes time: crawlers visit sites at different rates, and new pages need time to earn trust.",
            "So SEO isn't a switch that turns traffic on; it compounds. Every fixed error and every useful page keeps working for months.",
          ],
        },
        {
          heading: "What happens in the first three months",
          paragraphs: ["A typical order of work:"],
          list: [
            "Month one: technical audit and fixes, Search Console and analytics setup, keyword research, page plan.",
            "Month two: optimising existing pages, new pages for important searches, internal linking.",
            "Month three: content, first external mentions and links, finding which pages grow and strengthening them.",
          ],
        },
        {
          heading: "What affects the speed",
          paragraphs: ["Two sites with the same SEO budget can grow at different speeds. The biggest factors:"],
          list: [
            "Technical state. If Google can't index the site properly, content won't help until that's fixed.",
            "Competition. Ranking for “buy a smartphone” is far harder than for “washing machine repair Uzhhorod”.",
            "Site age and history. A new domain needs more time than a site that already has trust.",
            "Pages for searches. Without a dedicated page for a service, there's nothing to rank.",
            "External signals: mentions on other sites, your Google profile, reviews.",
          ],
        },
        {
          heading: "How to tell that SEO is working",
          paragraphs: ["Rankings aren't the only or main metric. Look at Google Search Console and analytics:"],
          list: [
            "impressions in search and the number of queries you show for;",
            "clicks from search and average position for important queries;",
            "leads and calls from organic traffic;",
            "indexed pages and the absence of indexing errors.",
          ],
        },
        {
          heading: "How much SEO costs",
          paragraphs: [
            "SEO cost depends on the site's size, technical state and competition, so there's no fixed price for everyone. We quote after a free site analysis, once the amount of work is clear.",
            "If you need results now, combine SEO with Google Ads: ads bring leads from the first week, and SEO gradually reduces dependence on ad spend.",
          ],
        },
      ],
      faq: [
        { question: "Can anyone guarantee first place on Google?", answer: "No. Nobody controls Google's algorithm, so guaranteed positions are a red flag. What can honestly be guaranteed is the scope and quality of work and transparent reports." },
        { question: "What happens if we stop SEO?", answer: "Results won't vanish at once, but without new work the site will gradually lose ground to competitors who keep improving." },
        { question: "Do I need SEO if I run ads?", answer: "Ads work while you pay. SEO builds a channel that brings clients without paying per click, so over time they complement each other." },
        { question: "What is AEO and do I need it with SEO?", answer: "AEO is optimisation for answers from AI assistants and AI search. It rests on the same foundation as SEO, so they're best done together." },
      ],
    },
  },

  /* ─────────────────────── What is AEO ─────────────────────── */
  "what-is-aeo": {
    datePublished: "2026-11-25",
    relatedServices: ["/services/aeo", "/services/seo"],
    relatedIndustries: ["hotels-zakarpattia", "dental-clinics"],
    uk: {
      title: "Що таке AEO і як потрапити у відповіді ChatGPT та Google AI",
      metaTitle: "Що таке AEO: як бізнесу потрапити у відповіді ChatGPT і AI-пошуку",
      description:
        "Що таке AEO (Answer Engine Optimization), чим воно відрізняється від SEO, як AI-асистенти обирають, кого згадати у відповіді, і що зробити на сайті, щоб вас рекомендували.",
      summary:
        "AEO (Answer Engine Optimization) — це оптимізація сайту і присутності бренду в інтернеті під відповіді AI-асистентів і AI-пошуку: ChatGPT, Gemini, Perplexity, AI-огляди Google. Мета — щоб на питання на кшталт «яке агентство обрати» чи «де зробити імплантацію в Ужгороді» асистент назвав ваш бізнес. Для цього сайт має давати чіткі відповіді на питання клієнтів, мати структуровані дані, а інформація про бізнес має бути однаковою і підтвердженою на різних ресурсах.",
      readingMinutes: 5,
      sections: [
        {
          heading: "Що таке AEO простими словами",
          paragraphs: [
            "Дедалі більше людей не гортають результати пошуку, а одразу питають AI-асистента. Асистент дає одну зведену відповідь і згадує кілька компаній чи джерел. Якщо вас там немає, клієнт про вас не дізнається, навіть якщо ваш сайт є в Google.",
            "AEO — це робота над тим, щоб AI-системи знаходили, розуміли і цитували саме ваш сайт.",
          ],
        },
        {
          heading: "Чим AEO відрізняється від SEO",
          paragraphs: [
            "SEO бореться за позицію в списку посилань. AEO бореться за згадку у відповіді. Основа в них спільна: сайт, який добре індексується і корисний для людей. Але AEO більше уваги приділяє тому, наскільки чітко сформульовані відповіді, і тому, що про вас пишуть за межами сайту.",
          ],
          table: {
            head: ["", "SEO", "AEO"],
            rows: [
              ["Мета", "Позиція в результатах пошуку", "Згадка у відповіді AI"],
              ["Що оцінюється", "Сторінка за запитом", "Чіткість відповіді і довіра до бренду"],
              ["Ключові сигнали", "Технічний стан, контент, посилання", "Відповіді на питання, структуровані дані, згадки на інших ресурсах"],
            ],
          },
        },
        {
          heading: "Як AI-асистенти обирають, кого згадати",
          paragraphs: [
            "Кожна система працює по-своєму, але загальні принципи схожі. Асистенти, які шукають в інтернеті, спираються на сторінки, що прямо відповідають на питання, і на джерела, яким можна довіряти. Що краще ваш бізнес описаний і що більше незалежних підтверджень, то вищий шанс потрапити у відповідь.",
          ],
        },
        {
          heading: "Що зробити на сайті",
          paragraphs: ["Практичний список, з якого варто почати:"],
          list: [
            "Сторінки під конкретні питання і послуги з короткою прямою відповіддю на початку.",
            "Розділ частих питань з відповідями, які можна процитувати окремо.",
            "Структуровані дані (schema.org): організація, послуги, ціни, FAQ, хлібні крихти.",
            "Файл llms.txt — короткий опис бізнесу і ключових сторінок для AI-систем.",
            "Однакові назва, адреса, телефон і опис послуг на сайті, у Google Бізнес-профілі, соцмережах і каталогах.",
            "Відгуки в Google і згадки на галузевих сайтах та в медіа.",
            "Сторінки, які відкриваються без JavaScript: частина AI-роботів не виконує скрипти.",
          ],
        },
        {
          heading: "Як перевірити, чи вас рекомендують",
          paragraphs: [
            "Найпростіше — поставити ChatGPT, Gemini і Perplexity питання, які ставлять ваші клієнти, і подивитися, кого вони називають. Записуйте результати раз на місяць: так видно, чи змінюється ситуація після робіт.",
          ],
        },
      ],
      faq: [
        { question: "Чи замінить AEO звичайне SEO?", answer: "Ні. AEO спирається на SEO: якщо сайт погано індексується, AI-системи його теж не побачать. Їх найкраще робити разом." },
        { question: "Що таке llms.txt?", answer: "Це текстовий файл у корені сайту з коротким описом компанії, послуг і посиланнями на головні сторінки. Він допомагає AI-системам швидко зрозуміти, про що сайт." },
        { question: "Скільки часу потрібно, щоб потрапити у відповіді AI?", answer: "Як і в SEO, це накопичувальний ефект. Зміни на сайті AI-пошук бачить після переіндексації, а згадки на інших ресурсах накопичуються місяцями." },
        { question: "Скільки коштує AEO?", answer: "Вартість залежить від стану сайту і ніші, тому ми називаємо її після безкоштовного аналізу." },
      ],
    },
    en: {
      title: "What is AEO and how to appear in ChatGPT and Google AI answers",
      metaTitle: "What is AEO: how a business gets into ChatGPT and AI search answers",
      description:
        "What AEO (Answer Engine Optimization) is, how it differs from SEO, how AI assistants choose whom to mention, and what to do on your website to get recommended.",
      summary:
        "AEO (Answer Engine Optimization) is optimising your website and online presence for answers from AI assistants and AI search: ChatGPT, Gemini, Perplexity, Google's AI Overviews. The goal is for the assistant to name your business when someone asks “which agency should I choose” or “where can I get implants in Uzhhorod”. That takes clear answers to customers' questions on your site, structured data, and consistent, confirmed information about the business across the web.",
      readingMinutes: 4,
      sections: [
        {
          heading: "AEO in plain words",
          paragraphs: [
            "More and more people don't scroll search results; they ask an AI assistant. It gives one combined answer and mentions a few companies or sources. If you aren't there, the customer won't hear about you, even if your site is on Google.",
            "AEO is the work of making AI systems find, understand and cite your website.",
          ],
        },
        {
          heading: "How AEO differs from SEO",
          paragraphs: [
            "SEO competes for a position in a list of links; AEO competes for a mention in the answer. They share a foundation: a site that indexes well and is useful to people. But AEO pays more attention to how clearly answers are phrased and to what's written about you elsewhere.",
          ],
          table: {
            head: ["", "SEO", "AEO"],
            rows: [
              ["Goal", "Position in search results", "A mention in the AI answer"],
              ["What's assessed", "The page for a query", "Answer clarity and trust in the brand"],
              ["Key signals", "Technical state, content, links", "Answers to questions, structured data, mentions elsewhere"],
            ],
          },
        },
        {
          heading: "How AI assistants choose whom to mention",
          paragraphs: [
            "Each system works differently, but the principles are similar. Assistants that search the web rely on pages that answer the question directly and on trustworthy sources. The better your business is described and the more independent confirmation there is, the higher the chance of being in the answer.",
          ],
        },
        {
          heading: "What to do on your website",
          paragraphs: ["A practical list to start with:"],
          list: [
            "Pages for specific questions and services, with a short direct answer at the top.",
            "An FAQ section with answers that can be quoted on their own.",
            "Structured data (schema.org): organisation, services, prices, FAQ, breadcrumbs.",
            "An llms.txt file: a short description of the business and key pages for AI systems.",
            "The same name, address, phone and service description on the site, Google Business Profile, social media and directories.",
            "Google reviews and mentions on industry sites and in media.",
            "Pages that render without JavaScript, since some AI crawlers don't run scripts.",
          ],
        },
        {
          heading: "How to check whether you're recommended",
          paragraphs: [
            "Ask ChatGPT, Gemini and Perplexity the questions your customers ask and see whom they name. Record the results monthly to see whether things change after the work.",
          ],
        },
      ],
      faq: [
        { question: "Will AEO replace regular SEO?", answer: "No. AEO rests on SEO: if a site indexes poorly, AI systems won't see it either. They're best done together." },
        { question: "What is llms.txt?", answer: "A text file at the site root with a short description of the company, its services and links to the main pages. It helps AI systems quickly understand the site." },
        { question: "How long until we appear in AI answers?", answer: "As with SEO, it compounds. AI search sees site changes after re-indexing, and mentions elsewhere build up over months." },
        { question: "How much does AEO cost?", answer: "It depends on the site and niche, so we quote after a free analysis." },
      ],
    },
  },

  /* ─────────────────────── Choosing an agency ─────────────────────── */
  "how-to-choose-marketing-agency": {
    datePublished: "2026-11-25",
    relatedServices: ["/services/complex-marketing", "/services/google-ads", "/services/meta-ads"],
    relatedIndustries: ["real-estate", "beauty-salons"],
    uk: {
      title: "Як обрати маркетингове агентство: 10 питань перед стартом",
      metaTitle: "Як обрати маркетингове агентство: 10 питань перед договором",
      description:
        "Які питання поставити маркетинговому агентству чи таргетологу до початку співпраці: чий рекламний акаунт, як іде бюджет, які звіти, хто працює над проєктом.",
      summary:
        "Перед стартом з агенцією з'ясуйте, на кого оформлені рекламні акаунти, чи йде рекламний бюджет напряму платформі, які цифри будуть у звіті і як часто, хто конкретно працюватиме над проєктом, чи є обов'язковий термін договору і що вважатиметься результатом. Чесна агенція відповідає на ці питання прямо і до підписання договору.",
      readingMinutes: 5,
      sections: [
        {
          heading: "10 питань, які варто поставити",
          paragraphs: ["Ці питання допоможуть порівняти агенції не за обіцянками, а за умовами роботи."],
          list: [
            "На кого оформлені рекламні акаунти? Акаунти Google Ads і Meta мають належати вам. Тоді історія, дані й аудиторії залишаються у вас, навіть якщо ви зміните підрядника.",
            "Чи йде рекламний бюджет напряму платформі? Найпрозоріше, коли ви платите Google чи Meta зі своєї картки, а агенції — лише за роботу.",
            "Що буде у звіті і як часто? Мають бути витрати, заявки чи продажі і вартість заявки, а не лише покази та кліки.",
            "Хто конкретно працюватиме над проєктом? Запитайте, хто веде рекламу, хто пише тексти, хто відповідає за аналітику.",
            "Чи є обов'язковий термін договору? Помісячна робота без довгого контракту показує впевненість агенції у своїй роботі.",
            "Що вважається результатом? Домовтеся на старті: заявки, продажі, вартість заявки, ROAS.",
            "Як налаштовується відстеження заявок і дзвінків? Без аналітики неможливо оцінити, чи реклама окупається.",
            "Що буде в перший місяць? Добрий план містить аудит, запуск, перші висновки і дати.",
            "Чи є досвід у вашій ніші? Попросіть розповісти, з якими схожими бізнесами працювали і які були виклики.",
            "Чи має агенція статус Google Partner? Його можна перевірити на сайті Google Partners за назвою агенції.",
          ],
        },
        {
          heading: "Тривожні сигнали",
          paragraphs: ["Будьте обережні, якщо агенція:"],
          list: [
            "гарантує перше місце в Google або конкретну кількість продажів;",
            "відмовляється давати доступ до рекламних акаунтів;",
            "просить платити рекламний бюджет через неї без прозорих звітів;",
            "не питає про ваш бізнес, маржу і клієнтів перед тим, як назвати ціну;",
            "надсилає звіти лише з охопленнями і лайками.",
          ],
        },
        {
          heading: "Агенція чи фрілансер",
          paragraphs: [
            "Фрілансер — це одна людина і зазвичай одна компетенція. Для однієї кампанії це може бути нормально. Коли потрібні реклама, контент, сайт і аналітика разом, агенція з командою дає стабільність: проєкт не зупиниться, якщо хтось захворів чи пішов у відпустку.",
          ],
        },
        {
          heading: "Як працюємо ми",
          paragraphs: [
            "У PRO Marketing# рекламні акаунти оформлені на клієнта, бюджет ви платите напряму платформам, Google Ads ведемо помісячно без обов'язкового контракту. Звіт — щотижня або щомісяця з витратами, кліками, конверсіями і ROAS. Ми офіційний Google Partner, офіс в Ужгороді, працюємо з бізнесами по всій Україні.",
          ],
        },
      ],
      faq: [
        { question: "Скільки коштують послуги маркетингової агенції?", answer: "Залежить від послуг. У нас ведення Google Ads — від 10 000 грн на місяць, Meta Ads — від 15 000 грн, пакет SMM з таргетом — від 35 000 грн. Вартість SEO, AEO, сайтів і брендингу — після безкоштовного аналізу." },
        { question: "Як перевірити статус Google Partner?", answer: "На сайті Google Partners є пошук агенцій. Знайдіть агенцію за назвою і перевірте, чи є в неї значок партнера." },
        { question: "Чи можна почати з однієї послуги?", answer: "Так. Можна стартувати з одного напрямку і розширюватися, коли він запрацює." },
      ],
    },
    en: {
      title: "How to choose a marketing agency: 10 questions before you start",
      metaTitle: "How to choose a marketing agency: 10 questions to ask first",
      description:
        "Questions to ask a marketing agency or ads specialist before you start: who owns the ad account, how the budget is paid, what reports you get, who works on the project.",
      summary:
        "Before starting with an agency, find out whose name the ad accounts are in, whether the ad budget goes directly to the platform, what numbers the report will show and how often, who exactly will work on the project, whether there's a mandatory contract term, and what counts as a result. An honest agency answers these directly, before you sign.",
      readingMinutes: 4,
      sections: [
        {
          heading: "10 questions to ask",
          paragraphs: ["These help you compare agencies on terms, not promises."],
          list: [
            "Whose name are the ad accounts in? Google Ads and Meta accounts should belong to you, so history, data and audiences stay yours if you switch.",
            "Does the ad budget go directly to the platform? It's most transparent when you pay Google or Meta from your own card and pay the agency only for the work.",
            "What will the report show, and how often? Spend, leads or sales and cost per lead, not just impressions and clicks.",
            "Who exactly will work on the project? Ask who runs the ads, writes the copy and handles analytics.",
            "Is there a mandatory contract term? Month-to-month work without a long contract shows the agency is confident in its work.",
            "What counts as a result? Agree at the start: leads, sales, cost per lead, ROAS.",
            "How is lead and call tracking set up? Without analytics you can't tell whether ads pay off.",
            "What happens in the first month? A good plan includes an audit, launch, first conclusions and dates.",
            "Do they have experience in your niche? Ask which similar businesses they've worked with and what the challenges were.",
            "Is the agency a Google Partner? You can check by name on the Google Partners website.",
          ],
        },
        {
          heading: "Red flags",
          paragraphs: ["Be careful if an agency:"],
          list: [
            "guarantees first place on Google or a specific number of sales;",
            "refuses to give you access to the ad accounts;",
            "asks you to pay the ad budget through them without transparent reports;",
            "doesn't ask about your business, margins and customers before quoting;",
            "sends reports with only reach and likes.",
          ],
        },
        {
          heading: "Agency or freelancer",
          paragraphs: [
            "A freelancer is one person and usually one skill. For a single campaign that can be fine. When you need ads, content, a website and analytics together, an agency with a team gives stability: the project doesn't stop when someone is ill or on holiday.",
          ],
        },
        {
          heading: "How we work",
          paragraphs: [
            "At PRO Marketing#, ad accounts are in the client's name, you pay the budget directly to the platforms, and we manage Google Ads month to month with no mandatory contract. Reports come weekly or monthly with spend, clicks, conversions and ROAS. We're an official Google Partner with an office in Uzhhorod, working with businesses across Ukraine.",
          ],
        },
      ],
      faq: [
        { question: "How much do marketing agency services cost?", answer: "It depends on the services. With us, Google Ads management starts from UAH 10,000 per month, Meta Ads from UAH 15,000 and the SMM bundle with ads from UAH 35,000. SEO, AEO, websites and branding are quoted after a free analysis." },
        { question: "How do I check Google Partner status?", answer: "The Google Partners website has an agency search. Find the agency by name and check for the Partner badge." },
        { question: "Can I start with one service?", answer: "Yes. You can start with one channel and expand once it works." },
      ],
    },
  },
};

export const BLOG_SLUGS = Object.keys(BLOG_POSTS);

// Service names for "related" link blocks, shared by blog and industry pages.
export const SERVICE_LINK_NAMES: Record<string, Record<Locale, string>> = {
  "/services/google-ads": { uk: "Налаштування Google Ads", en: "Google Ads management" },
  "/services/meta-ads": { uk: "Таргетована реклама Meta Ads", en: "Meta Ads" },
  "/services/tiktok-ads": { uk: "Реклама в TikTok", en: "TikTok Ads" },
  "/services/smm": { uk: "SMM — ведення соцмереж", en: "SMM — social media management" },
  "/services/seo": { uk: "SEO-просування сайтів", en: "SEO" },
  "/services/aeo": { uk: "AEO — оптимізація під AI-пошук", en: "AEO — AI search optimization" },
  "/services/website-development": { uk: "Розробка сайтів і лендінгів", en: "Website development" },
  "/services/logo-branding": { uk: "Лого та брендинг", en: "Logo & branding" },
  "/services/complex-marketing": { uk: "Комплексний маркетинг під ключ", en: "Full-service marketing" },
};
