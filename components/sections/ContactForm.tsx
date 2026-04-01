"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Clock, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import { CONTACT } from "@/lib/constants";

const inputBase =
  "w-full h-12 px-4 bg-transparent border-b border-[#E0E0E0] text-sm text-[#0D0D0D] placeholder:text-[#ADADAD] outline-none transition-all duration-200 focus:border-[#0D0D0D]";

const inputError =
  "w-full h-12 px-4 bg-transparent border-b border-[#E5202E]/60 text-sm text-[#0D0D0D] placeholder:text-[#ADADAD] outline-none";

export default function ContactForm() {
  const t = useTranslations("contact");

  const [name, setName]             = useState("");
  const [phone, setPhone]           = useState("");
  const [message, setMessage]       = useState("");
  const [honeypot, setHoneypot]     = useState("");
  const [nameError, setNameError]   = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [msgError, setMsgError]     = useState<string | null>(null);
  const [loading, setLoading]       = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [loadTime]                  = useState(() => Date.now());

  function validateName(value: string): string | null {
    const trimmed = value.trim();
    if (trimmed.length < 2) return t("name_error_short");
    if (trimmed.length > 50) return t("name_error_long");
    if (!/^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s'-]+$/.test(trimmed)) return t("name_error_chars");
    return null;
  }

  function validatePhone(value: string): string | null {
    const digits = value.replace(/[\s\-\(\)]/g, "");
    if (!/^(\+?380\d{9}|0\d{9})$/.test(digits)) return t("phone_error");
    return null;
  }

  function validateMessage(value: string): string | null {
    if (value.trim().length < 10) return t("msg_error");
    return null;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) { setSubmitted(true); return; }
    if (Date.now() - loadTime < 3000) { setSubmitted(true); return; }

    const nErr = validateName(name);
    const pErr = validatePhone(phone);
    const mErr = validateMessage(message);
    setNameError(nErr);
    setPhoneError(pErr);
    setMsgError(mErr);
    if (nErr || pErr || mErr) return;

    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 600);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-16 md:gap-24">

      {/* ── LEFT — info ── */}
      <div className="flex flex-col justify-between gap-12">

        <div>
          <p className="text-base text-[#6B6B6B] leading-relaxed max-w-xs">
            {t("description")}
          </p>
        </div>

        {/* Contacts */}
        <div className="flex flex-col gap-6">
          <a href={`tel:${CONTACT.phone}`} className="group flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#F4F4F4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E5202E]/10 transition-colors duration-200">
              <Phone size={14} className="text-[#E5202E]" />
            </div>
            <div>
              <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-0.5">{t("phone_label")}</p>
              <p className="text-sm text-[#0D0D0D] group-hover:text-[#E5202E] transition-colors duration-200">
                {CONTACT.phoneFormatted}
              </p>
            </div>
          </a>

          <a href={`mailto:${CONTACT.email}`} className="group flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#F4F4F4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E5202E]/10 transition-colors duration-200">
              <Mail size={14} className="text-[#E5202E]" />
            </div>
            <div>
              <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-0.5">{t("email_label")}</p>
              <p className="text-sm text-[#0D0D0D] group-hover:text-[#E5202E] transition-colors duration-200">
                {CONTACT.email}
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#F4F4F4] flex items-center justify-center flex-shrink-0">
              <MapPin size={14} className="text-[#E5202E]" />
            </div>
            <div>
              <p className="text-[10px] text-[#ADADAD] uppercase tracking-widest mb-0.5">{t("address_label")}</p>
              <p className="text-sm text-[#0D0D0D] leading-relaxed">
                {CONTACT.city}<br />{CONTACT.address}
              </p>
            </div>
          </div>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col gap-3">
          {([
            { Icon: Clock,       text: t("trust1") },
            { Icon: ShieldCheck, text: t("trust2") },
          ] as const).map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-md bg-[#E5202E]/10 flex items-center justify-center flex-shrink-0">
                <Icon size={11} weight="duotone" className="text-[#E5202E]" />
              </div>
              <span className="text-xs text-[#6B6B6B]">{text}</span>
            </div>
          ))}
        </div>

      </div>

      {/* ── RIGHT — form ── */}
      <div>
        {submitted ? (
          <div className="flex flex-col items-start py-8">
            <div className="w-14 h-14 rounded-full bg-[#E5202E]/10 flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E5202E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-2xl font-semibold text-[#0D0D0D] mb-2">{t("success_title")}</p>
            <p className="text-sm text-[#6B6B6B] mb-8 leading-relaxed">{t("success_text")}</p>
            <Link href="/" className="text-sm font-medium text-[#E5202E] hover:underline">
              ← {t("back_home")}
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>

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
            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-[#ADADAD] uppercase tracking-widest">
                {t("name_label")}
              </label>
              <input
                type="text"
                placeholder={t("name_placeholder")}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError) setNameError(validateName(e.target.value));
                }}
                className={nameError ? inputError : inputBase}
              />
              {nameError && <p className="text-xs text-[#E5202E] mt-1">{nameError}</p>}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-[#ADADAD] uppercase tracking-widest">
                {t("phone_label_field")}
              </label>
              <input
                type="tel"
                placeholder={t("phone_placeholder")}
                value={phone}
                suppressHydrationWarning
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (phoneError) setPhoneError(validatePhone(e.target.value));
                }}
                className={phoneError ? inputError : inputBase}
              />
              {phoneError && <p className="text-xs text-[#E5202E] mt-1">{phoneError}</p>}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-[#ADADAD] uppercase tracking-widest">
                {t("message_label")}
              </label>
              <textarea
                placeholder={t("message_placeholder")}
                value={message}
                rows={3}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (msgError) setMsgError(validateMessage(e.target.value));
                }}
                className={`w-full px-0 py-3 bg-transparent border-b text-sm text-[#0D0D0D] placeholder:text-[#ADADAD] outline-none resize-none transition-all duration-200 ${
                  msgError ? "border-[#E5202E]/60" : "border-[#E0E0E0] focus:border-[#0D0D0D]"
                }`}
              />
              {msgError && <p className="text-xs text-[#E5202E] mt-1">{msgError}</p>}
            </div>

            {/* Submit */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="group self-start inline-flex items-center gap-2 bg-[#E5202E] hover:bg-[#C0111D] disabled:opacity-60 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
              >
                {loading ? t("submitting") : t("submit")}
                {!loading && (
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                )}
              </button>
              <p className="text-xs text-[#ADADAD] leading-relaxed">
                {t("privacy")}
              </p>
            </div>

          </form>
        )}
      </div>

    </div>
  );
}
