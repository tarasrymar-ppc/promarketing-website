"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Menu, X, Phone, ArrowRight, ChevronDown } from "lucide-react";
import {
  MagnifyingGlass, Crosshair, TiktokLogo, ShareNetwork,
  ChartLineUp, Brain, Desktop, Camera,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { CONTACT } from "@/lib/constants";

const SERVICE_ICONS: PhosphorIcon[] = [
  MagnifyingGlass, Crosshair, TiktokLogo, ShareNetwork,
  ChartLineUp, Brain, Desktop, Camera,
];

const SERVICE_HREFS = [
  "/services/google-ads",
  "/services/meta-ads",
  "/services/tiktok-ads",
  "/services/smm",
  "/services/seo",
  "/services/aeo",
  "/services/website-development",
  "/services/photo-video",
];


// Stagger variants for mega-menu items
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

function Logo() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <span className="text-[17px] font-bold tracking-tight text-[#0D0D0D] select-none">
        PRO Marketing<span className="text-[#E5202E]">#</span>
      </span>
    );
  }

  return (
    <Image
      src="/logo.png"
      alt="PRO Marketing#"
      width={140}
      height={40}
      className="h-9 w-auto object-contain"
      priority
      onError={() => setImgError(true)}
    />
  );
}

export default function Header() {
  const t = useTranslations("nav");
  const tServices = useTranslations("services");
  const locale = useLocale();

  const serviceItems = (tServices.raw("items") as { title: string; description: string }[])
    .slice(0, 8)
    .map((item, i) => ({
      title: item.title,
      description: item.description,
      href: SERVICE_HREFS[i],
      Icon: SERVICE_ICONS[i],
    }));
  const router = useRouter();
  const pathname = usePathname();

  const [isVisible,    setIsVisible]    = useState(true);
  const [isScrolled,   setIsScrolled]   = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMegaOpen,   setIsMegaOpen]   = useState(false);

  const NAV_LINKS = [
    { label: t("services"),  href: "#",        hasMega: true  },
    { label: t("cases"),     href: "/cases",   hasMega: false },
    { label: t("about"),     href: "/about",   hasMega: false },
    { label: t("faq"),       href: "/faq",     hasMega: false },
    { label: t("contacts"),  href: "/contact", hasMega: false },
  ];

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  // Hide on scroll down, show on scroll up (Apple-style)
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 10);
      // Always show at top, or when scrolling up
      if (y < 10) {
        setIsVisible(true);
      } else if (y < lastY) {
        setIsVisible(true);
      } else if (y > lastY + 5) {
        setIsVisible(false);
        setIsMegaOpen(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setIsMegaOpen(false); setIsMobileOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const closeMega = () => setIsMegaOpen(false);

  return (
    <>
      {/* ── OVERLAY ── */}
      <AnimatePresence>
        {isMegaOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMega}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      <header
        onMouseLeave={() => setIsMegaOpen(false)}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-white/85 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center h-16 md:h-[68px]">

            {/* ── LEFT: Logo ── */}
            <Link href="/" className="flex-shrink-0" onClick={() => setIsMobileOpen(false)}>
              <Logo />
            </Link>

            {/* ── CENTER: Nav ── */}
            <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
              {NAV_LINKS.map((link) =>
                link.hasMega ? (
                  <div
                    key={link.label}
                    className="relative flex items-center"
                  >
                    <button
                      onMouseEnter={() => setIsMegaOpen(true)}
                      onClick={() => setIsMegaOpen((p) => !p)}
                      className="flex items-center gap-1 text-sm font-medium text-[#0D0D0D] hover:text-[#E5202E] transition-colors duration-200 py-5 cursor-pointer"
                    >
                      {link.label}
                      <motion.span
                        animate={{ rotate: isMegaOpen ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="flex items-center ml-0.5"
                      >
                        <ChevronDown size={14} />
                      </motion.span>
                    </button>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-[#0D0D0D] hover:text-[#E5202E] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* ── RIGHT: Phone + CTA + Lang switcher ── */}
            <div className="hidden md:flex items-center gap-4 flex-shrink-0">
              <div className="w-px h-4 bg-[#E0E0E0]" />
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-1.5 text-sm text-[#6B6B6B] hover:text-[#0D0D0D] transition-colors duration-200 whitespace-nowrap"
              >
                <Phone size={13} />
                {CONTACT.phoneFormatted}
              </a>
              <div className="w-px h-4 bg-[#E0E0E0]" />
              {/* Language switcher */}
              <div className="flex items-center gap-1 text-sm">
                <button
                  onClick={() => switchLocale("uk")}
                  className={locale === "uk" ? "font-semibold text-[#0D0D0D]" : "text-[#6B6B6B] hover:text-[#0D0D0D] transition-colors"}
                >
                  UA
                </button>
                <span className="text-[#E0E0E0]">|</span>
                <button
                  onClick={() => switchLocale("en")}
                  className={locale === "en" ? "font-semibold text-[#0D0D0D]" : "text-[#6B6B6B] hover:text-[#0D0D0D] transition-colors"}
                >
                  EN
                </button>
              </div>
              {/* Pill CTA with animated arrow */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#E5202E] hover:bg-[#C0111D] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                {t("cta")}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* ── MOBILE: Burger ── */}
            <button
              className="md:hidden ml-auto p-2 text-[#0D0D0D]"
              onClick={() => setIsMobileOpen((p) => !p)}
              aria-label="Меню"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── MEGA MENU ── */}
        <AnimatePresence>
          {isMegaOpen && (
            <motion.div
              key="mega"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="hidden md:block absolute top-full left-0 right-0 bg-white border-t border-[#E0E0E0] shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
            >
              <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="flex gap-6">

                  {/* Services grid — stagger */}
                  <motion.div
                    className="flex-1 grid grid-cols-4 gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {serviceItems.map(({ title, description, href, Icon }) => (
                      <motion.div
                        key={href}
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.03,
                          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                          zIndex: 10,
                        }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        className="rounded-xl"
                      >
                        <Link
                          href={href}
                          onClick={closeMega}
                          className="group flex items-start gap-3 p-4 rounded-xl hover:bg-[#F4F4F4] transition-colors duration-150 h-full"
                        >
                          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#F4F4F4] group-hover:bg-white flex items-center justify-center transition-colors duration-150">
                            <Icon size={16} weight="duotone" className="text-[#E5202E]" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#0D0D0D] group-hover:text-[#E5202E] transition-colors duration-150 leading-tight">
                              {title}
                            </p>
                            <p className="text-xs text-[#6B6B6B] mt-1 leading-relaxed">
                              {description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Bottom strip */}
                <div className="mt-6 pt-5 border-t border-[#E0E0E0] flex items-center justify-between">
                  <p className="text-sm text-[#6B6B6B]">
                    {t("menu_hint")}
                  </p>
                  <Link
                    href="/contact"
                    onClick={closeMega}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#E5202E]"
                  >
                    {t("discuss")}
                    <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE MENU ── */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-white border-t border-[#E0E0E0]"
            >
              <div className="px-6 pb-6">
                <div className="pt-4">
                  <p className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-3">
                    {t("services")}
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {serviceItems.map(({ title, href, Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center gap-2 px-3 py-2.5 text-sm text-[#0D0D0D] hover:text-[#E5202E] hover:bg-[#F4F4F4] rounded-lg transition-colors duration-150"
                      >
                        <Icon size={14} weight="duotone" className="text-[#E5202E] flex-shrink-0" />
                        {title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#E0E0E0] flex flex-col gap-1">
                  {NAV_LINKS.filter((l) => !l.hasMega).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="px-3 py-2.5 text-sm font-medium text-[#0D0D0D] hover:text-[#E5202E] hover:bg-[#F4F4F4] rounded-lg transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-[#E0E0E0] flex flex-col gap-3">
                  {/* Language switcher — mobile */}
                  <div className="flex items-center justify-center gap-3 text-sm">
                    <button
                      onClick={() => switchLocale("uk")}
                      className={locale === "uk" ? "font-semibold text-[#0D0D0D]" : "text-[#6B6B6B] hover:text-[#0D0D0D] transition-colors"}
                    >
                      UA
                    </button>
                    <span className="text-[#E0E0E0]">|</span>
                    <button
                      onClick={() => switchLocale("en")}
                      className={locale === "en" ? "font-semibold text-[#0D0D0D]" : "text-[#6B6B6B] hover:text-[#0D0D0D] transition-colors"}
                    >
                      EN
                    </button>
                  </div>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-[#0D0D0D] border border-[#E0E0E0] rounded-full hover:border-[#0D0D0D] transition-colors duration-200"
                  >
                    <Phone size={14} />
                    {CONTACT.phoneFormatted}
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="group text-center inline-flex items-center justify-center gap-2 bg-[#E5202E] hover:bg-[#C0111D] text-white text-sm font-semibold py-3 rounded-full transition-colors duration-200"
                  >
                    {t("cta")}
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
