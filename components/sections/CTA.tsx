"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Clock, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/common/AnimatedSection";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

// --- Component ---

export default function CTA() {
  const t = useTranslations("cta");

  const [name, setName]             = useState("");
  const [phone, setPhone]           = useState("");
  const [honeypot, setHoneypot]     = useState("");
  const [nameError, setNameError]   = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [loading, setLoading]       = useState(false);
  const [submitted, setSubmitted]   = useState(false);

  const [loadTime] = useState(() => Date.now());

  // --- Validation helpers (use translated messages) ---
  function validateName(value: string): string | null {
    const trimmed = value.trim();
    if (trimmed.length < 2) return t("name_error_short");
    if (trimmed.length > 50) return t("name_error_long");
    if (!/^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s'-]+$/.test(trimmed))
      return t("name_error_chars");
    return null;
  }

  function validatePhone(value: string): string | null {
    const digits = value.replace(/[\s\-\(\)]/g, "");
    if (!/^(\+?380\d{9}|0\d{9})$/.test(digits))
      return t("phone_error");
    return null;
  }

  const TRUST_ITEMS = [
    { Icon: Clock,       text: t("trust1") },
    { Icon: ShieldCheck, text: t("trust2") },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honeypot) { setSubmitted(true); return; }
    if (Date.now() - loadTime < 3000) { setSubmitted(true); return; }

    const nErr = validateName(name);
    const pErr = validatePhone(phone);
    setNameError(nErr);
    setPhoneError(pErr);
    if (nErr || pErr) return;

    setLoading(true);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "form_submit",
      form_name: "contact_cta",
      form_location: "homepage",
    });

    // TODO: replace with real API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F4F4F4] rounded-3xl overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-20">

          {/* Left — headline + trust signals */}
          <AnimatedSection className="md:w-1/2">
            <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
              {t("label")}
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] leading-[1.06] mb-6">
              {t("title")}
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed max-w-sm mb-8">
              {t("description")}
            </p>

            {/* Trust signals */}
            <ul className="flex flex-col gap-3">
              {TRUST_ITEMS.map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#E5202E]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} weight="duotone" className="text-[#E5202E]" />
                  </div>
                  <span className="text-sm text-[#0D0D0D]">{text}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection delay={0.15} className="md:w-1/2">
            {submitted ? (
              <div className="py-8">
                <div className="w-12 h-12 rounded-full bg-[#E5202E]/10 flex items-center justify-center mb-4">
                  <svg
                    width="22" height="22" viewBox="0 0 24 24"
                    fill="none" stroke="#E5202E" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-xl font-semibold text-[#0D0D0D] mb-2">{t("success_title")}</p>
                <p className="text-sm text-[#6B6B6B]">
                  {t("success_text")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-gtm-form="contact_cta"
                className="flex flex-col gap-4"
                noValidate
              >
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <input
                    type="text"
                    placeholder={t("name_placeholder")}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (nameError) setNameError(validateName(e.target.value));
                    }}
                    className={`h-12 px-4 bg-white border rounded-xl text-sm text-[#0D0D0D] placeholder:text-[#ADADAD] outline-none transition-all duration-200 ${
                      nameError
                        ? "border-[#E5202E]/50 ring-2 ring-[#E5202E]/20"
                        : "border-[#E0E0E0] focus:border-[#0D0D0D] focus:ring-2 focus:ring-[#0D0D0D]/10"
                    }`}
                  />
                  {nameError && (
                    <p className="text-xs text-[#E5202E] px-1">{nameError}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <input
                    type="tel"
                    placeholder={t("phone_placeholder")}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (phoneError) setPhoneError(validatePhone(e.target.value));
                    }}
                    suppressHydrationWarning
                    className={`h-12 px-4 bg-white border rounded-xl text-sm text-[#0D0D0D] placeholder:text-[#ADADAD] outline-none transition-all duration-200 ${
                      phoneError
                        ? "border-[#E5202E]/50 ring-2 ring-[#E5202E]/20"
                        : "border-[#E0E0E0] focus:border-[#0D0D0D] focus:ring-2 focus:ring-[#0D0D0D]/10"
                    }`}
                  />
                  {phoneError && (
                    <p className="text-xs text-[#E5202E] px-1">{phoneError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group h-12 flex items-center justify-center gap-2 bg-[#E5202E] hover:bg-[#C0111D] disabled:opacity-60 text-white text-sm font-semibold rounded-full transition-colors duration-200"
                >
                  {loading ? t("submitting") : t("submit")}
                  {!loading && (
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  )}
                </button>

                <p className="text-xs text-[#ADADAD] text-center leading-relaxed">
                  {t("privacy")}
                </p>
              </form>
            )}
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
