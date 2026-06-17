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

const TRUST = [
  { Icon: ClockIcon,       text: "Відповімо протягом 2 годин" },
  { Icon: ShieldCheckIcon, text: "Проведемо аналіз вашої ніші" },
  { Icon: ChatCircleIcon,  text: "Чесно скажемо якщо не підійде" },
] as const;

export default function SMMForm() {
  const locale = useLocale();
  const [name,     setName]     = useState("");
  const [phone,    setPhone]    = useState("");
  const [business, setBusiness] = useState("");
  const [nameErr,  setNameErr]  = useState<string | null>(null);
  const [phoneErr, setPhoneErr] = useState<string | null>(null);
  const [submitErr, setSubmitErr] = useState<string | null>(null);
  const [loading,  setLoading]  = useState(false);
  const [done,     setDone]     = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const validateName  = (v: string) => v.trim().length < 2 ? "Мінімум 2 символи" : null;
  const validatePhone = (v: string) => {
    const d = v.replace(/[\s\-\(\)]/g, "");
    return /^(\+?380\d{9}|0\d{9})$/.test(d) ? null : "Введіть коректний номер";
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
        source: "SMM service page",
        locale,
      });
      setDone(true);
    } catch {
      setSubmitErr("Не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте нам.");
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
                Готові до системного SMM?
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                Залиште заявку — розберемось у вашій ніші і скажемо чесно, чи підійде наш пакет для вашого бізнесу.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {TRUST.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={13} weight="duotone" className="text-white" />
                  </div>
                  <span className="text-sm text-white/80">{text}</span>
                </div>
              ))}
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
                <p className="text-2xl font-semibold text-white mb-2">Дякуємо!</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Ми зв&apos;яжемось з вами протягом 2 годин у робочий час.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
                <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-white/70 uppercase tracking-widest">Ім&apos;я</label>
                  <input
                    type="text"
                    placeholder="Ваше ім'я"
                    value={name}
                    onChange={(e) => { setName(e.target.value); if (nameErr) setNameErr(validateName(e.target.value)); }}
                    className={nameErr ? inputError : inputNormal}
                  />
                  {nameErr && <p className="text-xs text-white mt-1">{nameErr}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-white/70 uppercase tracking-widest">Телефон</label>
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
                    Ваш бізнес <span className="text-white/50 normal-case">(необов&apos;язково)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Наприклад: ресторан, бутік, стоматологія..."
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
                    {loading ? "Надсилаємо..." : "Залишити заявку"}
                    {!loading && (
                      <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                    )}
                  </button>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Відповімо протягом 2 годин у робочий час
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
