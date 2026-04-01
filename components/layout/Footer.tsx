import Link from "next/link";
import { Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CONTACT, SOCIAL } from "@/lib/constants";

interface NavItem {
  label: string;
  href: string;
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default async function Footer() {
  const t = await getTranslations("footer");
  const nav = t.raw("nav") as NavItem[];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] text-white">

      {/* Single-row main bar */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-6 border-b border-white/8">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-base font-bold tracking-tight">
              PRO Marketing<span className="text-[#E5202E]">#</span>
            </span>
          </Link>

          {/* Nav links with dividers */}
          <nav className="flex flex-wrap items-center gap-0">
            {nav.map((link, i) => (
              <span key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200 px-3"
                >
                  {link.label}
                </Link>
                {i < nav.length - 1 && (
                  <span className="text-white/15 select-none">|</span>
                )}
              </span>
            ))}
          </nav>

          {/* Right — phone + socials */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              <Phone size={13} />
              {CONTACT.phoneFormatted}
            </a>

            <div className="w-px h-4 bg-white/10" />

            <div className="flex items-center gap-2">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/40 hover:text-white transition-colors duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/40 hover:text-white transition-colors duration-200"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar — copyright */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-4">
          <p className="text-xs text-white/25">
            © {year} PRO Marketing#. {t("copyright")}
          </p>
          <Link
            href="/privacy"
            className="text-xs text-white/25 hover:text-white/50 transition-colors duration-200"
          >
            {t("privacy")}
          </Link>
        </div>
      </div>

    </footer>
  );
}
