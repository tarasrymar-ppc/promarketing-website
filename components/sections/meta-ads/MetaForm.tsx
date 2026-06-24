"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ClockIcon, ShieldCheckIcon, ChatCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "next-intl";
import { submitLead } from "@/lib/submitLead";

const inputBase =
  "w-full h-12 px-0 bg-transparent border-b text-sm text-white placeholder:text-white/60 outline-none transition-all duration-200";
const inputNormal = `${inputBase} border-white/40 focus:border-white`;
const inputError  = `${inputBase} border-white/80`;

const TRUST_ICONS = [ClockIcon, ShieldCheckIcon, ChatCircleIcon] as const;

const content = {
  uk: {
    trust: [
      "Відповімо протягом 2 годин",
      "Проведемо аналіз вашої ніші",
      "Чесно скажемо якщо не підійде",
    ],
    heading: "Готові отримати більше клієнтів?",
    sub: "Залиште заявку — проаналізуємо ваш бізнес і скажемо чесно, чи підійде Meta Ads.",
    thanksTitle: "Дякуємо!",
    thanksText: "Ми зв'яжемось з вами протягом 2 годин у робочий час.",
    nameLabel: "Ім'я",
    namePlaceholder: "Ваше ім'я",
    phoneLabel: "Телефон",
    businessLabel: "Ваш бізнес",
    businessOptional: "(необов'язково)",
    businessPlaceholder: "Наприклад: інтернет-магазин, стоматологія...",
    submitting: "Надсилаємо...",
    submit: "Залишити заявку",
    responseNote: "Відповімо протягом 2 годин у робочий час",
    nameError: "Мінімум 2 символи",
    phoneError: "Введіть коректний номер",
    submitError: "Не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте нам.",
  },
  en: {
    trust: [
      "We'll reply within 2 hours",
      "We'll analyze your niche",
      "We'll tell you honestly if it's not a fit",
    ],
    heading: "Ready to get more customers?",
    sub: "Submit a request — we'll analyze your business and tell you honestly whether Meta Ads is a fit.",
    thanksTitle: "Thank you!",
    thanksText: "We'll contact you within 2 hours during business hours.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    phoneLabel: "Phone",
    businessLabel: "Your business",
    businessOptional: "(optional)",
    businessPlaceholder: "For example: online store, dental clinic...",
    submitting: "Sending...",
    submit: "Submit a request",
    responseNote: "We'll reply within 2 hours during business hours",
    nameError: "At least 2 characters",
    phoneError: "Enter a valid number",
    submitError: "Couldn't send your request. Please try again or call us.",
  },
} as const;

export default function MetaForm() {
  const locale = useLocale();
  const t = locale === "en" ? content.en : content.uk;
  const [name,     setName]     = useState("");
  const [phone,    setPhone]    = useState("");
  const [business, setBusiness] = useState("");
  const [nameErr,  setNameErr]  = useState<string | null>(null);
  const [phoneErr, setPhoneErr] = useState<string | null>(null);
  const [submitErr, setSubmitErr] = useState<string | null>(null);
  const [loading,  setLoading]  = useState(false);
  const [done,     setDone]     = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const validateName  = (v: string) => v.trim().length < 2 ? t.nameError : null;
  const validatePhone = (v: string) => {
    const d = v.replace(/[\s\-\(\)]/g, "");
    return /^(\+?380\d{9}|0\d{9})$/.test(d) ? null : t.phoneError;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitErr(null);
    if (honeypot) { setDone(true); return; }
    const nErr = validateName(name);
    const pErr = validatePhone(phone);
    setNameErr(nErr);
    setPhoneErr(pErr);
    if (nErr || pErr) return;
    setLoading(true);
    try {
      await submitLead({
        name,
        phone,
        business,
        source: "Meta Ads service page",
        locale,
      });
      setDone(true);
    } catch {
      setSubmitErr(t.submitError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="form" className="bg-[#E5202E] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-16 md:gap-24">

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3 leading-tight">
                {t.heading}
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                {t.sub}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {t.trust.map((text, i) => {
                const Icon = TRUST_ICONS[i];
                return (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={13} weight="duotone" className="text-white" />
                    </div>
                    <span className="text-sm text-white/80">{text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            {done ? (
              <div className="flex flex-col items-start py-8">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-2xl font-semibold text-white mb-2">{t.thanksTitle}</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  {t.thanksText}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
                <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-white/70 uppercase tracking-widest">{t.nameLabel}</label>
                  <input
                    type="text"
                    placeholder={t.namePlaceholder}
                    value={name}
                    onChange={(e) => { setName(e.target.value); if (nameErr) setNameErr(validateName(e.target.value)); }}
                    className={nameErr ? inputError : inputNormal}
                  />
                  {nameErr && <p className="text-xs text-white mt-1">{nameErr}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-white/70 uppercase tracking-widest">{t.phoneLabel}</label>
                  <input
                    type="tel"
                    placeholder="+380 00 000 00 00"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); if (phoneErr) setPhoneErr(validatePhone(e.target.value)); }}
                    className={phoneErr ? inputError : inputNormal}
                  />
                  {phoneErr && <p className="text-xs text-white mt-1">{phoneErr}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-white/70 uppercase tracking-widest">
                    {t.businessLabel} <span className="text-white/50 normal-case">{t.businessOptional}</span>
                  </label>
                  <input
                    type="text"
                    placeholder={t.businessPlaceholder}
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    className={inputNormal}
                  />
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group self-start inline-flex items-center gap-2 bg-white hover:bg-[#F4F4F4] disabled:opacity-60 text-[#0D0D0D] text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
                  >
                    {loading ? t.submitting : t.submit}
                    {!loading && (
                      <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                    )}
                  </button>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {t.responseNote}
                  </p>
                  {submitErr && (
                    <p className="text-xs text-white leading-relaxed">
                      {submitErr}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
