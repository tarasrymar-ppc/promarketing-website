export const CONTACT = {
  phone: "+380509494257",
  phoneFormatted: "+38 (050) 949-42-57",
  email: "blog.promarketing@gmail.com",
  address: "вул. Фединця 2, 3-й поверх, каб. 6",
  city: "м. Ужгород, Україна",
} as const;

export const SOCIAL = {
  instagram: "https://instagram.com/promarketing",
  facebook: "https://facebook.com/promarketing",
} as const;

export const NAV_LINKS = [
  { label: "Головна", href: "/" },
  { label: "Кейси", href: "/cases" },
  { label: "Про нас", href: "/about" },
  { label: "Контакти", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Google Ads",
    description: "Реклама в пошуку та YouTube. Клієнти, які вже шукають ваш продукт.",
    href: "/services/google-ads",
    icon: "search",
  },
  {
    title: "Meta Ads",
    description: "Таргетована реклама у Facebook та Instagram. Охоплюємо потрібну аудиторію.",
    href: "/services/meta-ads",
    icon: "target",
  },
  {
    title: "TikTok Ads",
    description: "Реклама для молодої аудиторії. Низька вартість кліка, високе охоплення.",
    href: "/services/tiktok-ads",
    icon: "play",
  },
  {
    title: "SMM",
    description: "Ведення соцмереж: контент, що продає, а не просто збирає лайки.",
    href: "/services/smm",
    icon: "share",
  },
  {
    title: "SEO",
    description: "Органічний трафік з Google. Клієнти знаходять вас самі — без реклами.",
    href: "/services/seo",
    icon: "trending-up",
  },
  {
    title: "AEO",
    description: "Оптимізація під AI-пошук. Новий канал трафіку, який конкуренти ігнорують.",
    href: "/services/aeo",
    icon: "cpu",
  },
  {
    title: "Розробка сайтів",
    description: "Конверсійні сайти та лендінги — побудовані під продажі, а не «щоб було».",
    href: "/services/website-development",
    icon: "monitor",
  },
  {
    title: "Фото та відео",
    description: "Контент для реклами, соцмереж і сайту. Знімаємо так, щоб продавало.",
    href: "/services/photo-video",
    icon: "camera",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Заявка",
    description: "Залишаєте запит. Ми зв'язуємось протягом 2 годин.",
  },
  {
    number: "02",
    title: "Аудит",
    description: "Аналізуємо ваш бізнес, конкурентів і поточну ситуацію.",
  },
  {
    number: "03",
    title: "Стратегія",
    description: "Розробляємо план: канали, бюджет, очікуваний результат.",
  },
  {
    number: "04",
    title: "Запуск",
    description: "Налаштовуємо рекламу, сайт або контент — чітко і вчасно.",
  },
  {
    number: "05",
    title: "Оптимізація",
    description: "Постійно стежимо за цифрами і покращуємо результат.",
  },
  {
    number: "06",
    title: "Звітність",
    description: "Щотижневий або щомісячний звіт: що зроблено, що отримано.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Скільки коштують послуги?",
    answer:
      "Вартість залежить від послуги, ніші та обсягу роботи. Починаємо з безкоштовного аналізу — після нього даємо конкретну цифру без прихованих платежів.",
  },
  {
    question: "Як швидко буде результат?",
    answer:
      "Реклама — перші результати вже в перший тиждень. SEO — стабільне зростання від 2–3 місяців. Ми завжди чесно говоримо що і коли очікувати.",
  },
  {
    question: "Чи підійде, якщо у мене специфічна ніша?",
    answer:
      "Так. Ми працюємо з e-commerce, медициною, будівництвом, послугами та іншими нішами. Перед стартом проводимо глибокий аналіз саме вашого ринку.",
  },
  {
    question: "Чим ви відрізняєтесь від фрілансера?",
    answer:
      "Фрілансер — одна людина і одна компетенція. У нас повна команда: таргетолог, SEO-спеціаліст, розробник, дизайнер, контент-менеджер. І ми не зникаємо.",
  },
  {
    question: "Як відбувається звітність?",
    answer:
      "Щотижнево або щомісячно — звіт з реальними цифрами: витрати, кліки, конверсії, ROAS. Ви завжди розумієте куди йдуть гроші.",
  },
  {
    question: "Чи можна замовити тільки одну послугу?",
    answer:
      "Так. Можна стартувати з одного напрямку і розширюватись. Ми не нав'язуємо пакети — підбираємо під ваш запит.",
  },
] as const;
