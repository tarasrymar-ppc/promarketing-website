// FAQ copy for the dedicated service pages. Kept outside the client
// components so server pages can reuse it for FAQPage structured data.

export const googleAdsFaq = {
  uk: {
    heading: "Часті питання.",
    items: [
      {
        question: "Чи це мій Google Ads акаунт?",
        answer:
          "Так. Акаунт створюється на ваше ім'я або ваш бізнес — ви власник. Якщо завершуємо співпрацю, ви продовжуєте рекламу без перебоїв: передаємо доступ новому спеціалісту або ведете самостійно.",
      },
      {
        question: "Чи потрібен обов'язковий контракт?",
        answer:
          "Ні. Працюємо помісячно, можна припинити в будь-який момент — достатньо попередити за тиждень.",
      },
      {
        question: "Що якщо не буде результату за 1–2 місяці?",
        answer:
          "Якщо після 2 місяців роботи не бачимо стабільної динаміки — обговорюємо ситуацію чесно і завершуємо співпрацю без взаємних претензій.",
      },
      {
        question: "Як я отримую звіт?",
        answer:
          "Щопонеділка до 12:00 — PDF-звіт на email з ключовими метриками за тиждень. Плюс цілодобовий доступ до Looker Studio, де ви бачите всі дані у реальному часі.",
      },
      {
        question: "У мене вже є налаштований акаунт — що робити?",
        answer:
          "Робимо безкоштовний аудит — аналізуємо поточну структуру, кампанії, бюджет. Якщо бачимо точки зростання — беремо в роботу. Якщо все працює добре — чесно скажемо.",
      },
      {
        question: "Бюджет на рекламу — це окремо від ціни послуги?",
        answer:
          "Так. Ви платите Google напряму зі своєї карти — це ваш рекламний бюджет. Наша послуга ведення — окремо. Ви завжди бачите скільки реально витрачено на рекламу.",
      },
    ],
  },
  en: {
    heading: "FAQ.",
    items: [
      {
        question: "Is this my Google Ads account?",
        answer:
          "Yes. The account is created in your name or your business name — you own it. If we stop working together, you keep running ads without interruption: we hand access to a new specialist, or you run it yourself.",
      },
      {
        question: "Is a mandatory contract required?",
        answer:
          "No. We work month to month and you can stop at any time — just give us a week's notice.",
      },
      {
        question: "What if there are no results in 1–2 months?",
        answer:
          "If after 2 months we don't see steady progress, we discuss the situation honestly and end the collaboration with no hard feelings on either side.",
      },
      {
        question: "How do I receive the report?",
        answer:
          "Every Monday by 12:00 — a PDF report to your email with the key metrics for the week. Plus 24/7 access to Looker Studio, where you see all the data in real time.",
      },
      {
        question: "I already have an account set up — what do I do?",
        answer:
          "We run a free audit — reviewing your current structure, campaigns and budget. If we see room to grow, we take it on. If everything is already working well, we'll tell you honestly.",
      },
      {
        question: "Is the ad budget separate from the service fee?",
        answer:
          "Yes. You pay Google directly from your own card — that's your ad budget. Our management service is separate. You always see exactly how much is actually spent on ads.",
      },
    ],
  },
} as const;

export const metaAdsFaq = {
  uk: {
    heading: "Часті питання.",
    items: [
      {
        question: "Чим Meta Ads відрізняється від Google Ads?",
        answer:
          "Google Ads показує рекламу людям, які самі шукають ваш продукт. Meta Ads — ви знаходите аудиторію за інтересами, поведінкою і демографією. Обидва канали ефективні, але вирішують різні задачі. Часто працюємо з ними одночасно.",
      },
      {
        question: "Чи потрібна бізнес-сторінка у Facebook?",
        answer:
          "Так. Для запуску реклами потрібна Facebook-сторінка бізнесу і, бажано, Instagram-акаунт. Якщо немає — допоможемо створити і налаштувати до старту.",
      },
      {
        question: "Який мінімальний рекламний бюджет?",
        answer:
          "Рекомендуємо від 10 000 грн/міс рекламного бюджету. Менше — алгоритм навчається повільно і результат нестабільний.",
      },
      {
        question: "Коли будуть перші результати?",
        answer:
          "Перші заявки — в день запуску або протягом перших днів. Стабільний і прогнозований результат — після 2–4 тижнів навчання алгоритму.",
      },
      {
        question: "У мене вже є рекламний кабінет — що робити?",
        answer:
          "Робимо безкоштовний аудит — аналізуємо поточні кампанії, аудиторії, оголошення. Якщо бачимо точки зростання — беремо в роботу. Якщо все добре — чесно скажемо.",
      },
      {
        question: "Рекламний бюджет — це окремо від ціни послуги?",
        answer:
          "Так. Ви поповнюєте рекламний кабінет напряму — цей платіж не проходить через нас. Наша послуга ведення — окремо. Ви завжди бачите скільки реально витрачено на рекламу.",
      },
    ],
  },
  en: {
    heading: "FAQ.",
    items: [
      {
        question: "How is Meta Ads different from Google Ads?",
        answer:
          "Google Ads shows your ads to people who are already searching for your product. With Meta Ads, you find your audience by interests, behavior and demographics. Both channels are effective, but they solve different tasks. We often run them together.",
      },
      {
        question: "Do I need a Facebook business page?",
        answer:
          "Yes. To run ads you need a Facebook business page and, ideally, an Instagram account. If you don't have them, we'll help you create and set them up before launch.",
      },
      {
        question: "What's the minimum ad budget?",
        answer:
          "We recommend from UAH 10,000/mo in ad budget. With less, the algorithm learns slowly and results are unstable.",
      },
      {
        question: "When will I see the first results?",
        answer:
          "First leads come on launch day or within the first few days. Stable, predictable results come after 2–4 weeks of algorithm learning.",
      },
      {
        question: "I already have an ad account — what should I do?",
        answer:
          "We run a free audit — analyzing your current campaigns, audiences and ads. If we see room to grow, we take it on. If everything's fine, we'll tell you honestly.",
      },
      {
        question: "Is the ad budget separate from the service price?",
        answer:
          "Yes. You fund the ad account directly — that payment doesn't go through us. Our management service is separate. You always see exactly how much is actually spent on ads.",
      },
    ],
  },
} as const;

export const smmFaq = {
  uk: {
    heading: "Часті питання.",
    items: [
      {
        question: "Чому SMM і Meta Ads завжди разом?",
        answer:
          "Органічне охоплення в Facebook та Instagram — до 5% підписників. Без реклами контент бачать лише ті, хто вже на вас підписаний. Реклама забезпечує постійний приплив нової аудиторії, а контент її прогріває і конвертує. Окремо — обидва інструменти значно слабші.",
      },
      {
        question: "Чи є окремий SMM без реклами?",
        answer:
          "Ні. Ми свідомо не надаємо SMM без Meta Ads — це не дає клієнту реального результату. Наша мета — заявки і клієнти, а не просто пости у стрічці.",
      },
      {
        question: "Хто пише тексти для моїх соцмереж?",
        answer:
          "Профільний копірайтер, який спеціалізується на вашій ніші. Перед стартом проводимо бриф — щоб тексти звучали як ваш бренд, а не шаблонно.",
      },
      {
        question: "Як виглядає процес затвердження контенту?",
        answer:
          "Щомісяця готуємо контент-план і надсилаємо вам на погодження. Ви бачите всі пости наперед і можете вносити правки до публікації.",
      },
      {
        question: "TikTok теж входить у пакет?",
        answer:
          "Ні. TikTok — це окрема послуга з окремою командою і підходом. Якщо вас цікавить TikTok — обговоримо окремо.",
      },
      {
        question: "Рекламний бюджет Meta — це окремо від ціни пакету?",
        answer:
          "Так. Ви поповнюєте рекламний кабінет напряму. Цей платіж не проходить через нас — ви завжди бачите скільки реально витрачено на рекламу.",
      },
    ],
  },
  en: {
    heading: "FAQ.",
    items: [
      {
        question: "Why are SMM and Meta Ads always together?",
        answer:
          "Organic reach on Facebook and Instagram is up to 5% of followers. Without ads, only people who already follow you see your content. Ads provide a steady flow of new audiences, while content warms it up and converts. On their own, both tools are far weaker.",
      },
      {
        question: "Is there SMM without ads?",
        answer:
          "No. We deliberately don't offer SMM without Meta Ads — it doesn't bring the client real results. Our goal is leads and clients, not just posts in the feed.",
      },
      {
        question: "Who writes the copy for my social media?",
        answer:
          "A specialist copywriter who focuses on your niche. Before we start, we run a brief — so the copy sounds like your brand, not like a template.",
      },
      {
        question: "What does the content approval process look like?",
        answer:
          "Every month we prepare a content plan and send it to you for approval. You see all posts in advance and can make edits before publication.",
      },
      {
        question: "Is TikTok included in the bundle?",
        answer:
          "No. TikTok is a separate service with a separate team and approach. If you're interested in TikTok, we'll discuss it separately.",
      },
      {
        question: "Is the Meta ad budget separate from the bundle price?",
        answer:
          "Yes. You top up the ad account directly. This payment doesn't go through us — you always see exactly how much is actually spent on ads.",
      },
    ],
  },
} as const;
