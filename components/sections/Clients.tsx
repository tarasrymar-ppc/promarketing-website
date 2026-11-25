import type { CSSProperties } from "react";
import { getLocale } from "next-intl/server";

const content = {
  uk: { heading: "Наші клієнти" },
  en: { heading: "Our clients" },
} as const;

const CLIENTS = [
  { name: "Voyak",     logo: "/clients/voyak.webp"     },
  { name: "Ave",       logo: "/clients/ave.webp"       },
  { name: "Etalon",    logo: "/clients/etalon.webp"    },
  {
    name: "Gazda",
    logo: "/clients/gazda.webp",
    maxWidth: 116,
    maxHeight: 88,
  },
  { name: "G-Bar",     logo: "/clients/gbar.webp"      },
  { name: "Goriachev", logo: "/clients/goriachev.webp" },
  { name: "Gyng",      logo: "/clients/gyng.webp"      },
  { name: "Hasta",     logo: "/clients/hasta.webp"     },
  { name: "Leres",     logo: "/clients/leres.webp"     },
  { name: "Market",    logo: "/clients/market.webp"    },
  { name: "Matsola",   logo: "/clients/matsola.webp"   },
  { name: "Ondas",     logo: "/clients/ondas.webp"     },
  {
    name: "Patriot",
    logo: "/clients/patriot.webp",
    maxWidth: 112,
    maxHeight: 90,
  },
  { name: "Toyota",    logo: "/clients/toyota.webp"    },
  {
    name: "Forest Residence",
    logo: "/clients/forest-residence.webp",
    maxWidth: 166,
    maxHeight: 76,
  },
  {
    name: "Group 369",
    logo: "/clients/group-369.webp",
    maxWidth: 220,
    maxHeight: 52,
  },
  {
    name: "ZagorSky",
    logo: "/clients/zagorsky.webp",
    maxWidth: 190,
    maxHeight: 70,
    offsetY: -4,
  },
  {
    name: "Aura Gold",
    logo: "/clients/aura.webp",
    maxWidth: 280,
    maxHeight: 58,
  },
];

// Intrinsic size of each WebP in /public/clients (resized to 2x the largest
// slot they are shown in). Lets the browser reserve space before decode.
const LOGO_SIZES: Record<string, [number, number]> = {
  "/clients/aura.webp": [236, 36],
  "/clients/ave.webp": [560, 154],
  "/clients/etalon.webp": [556, 180],
  "/clients/forest-residence.webp": [243, 180],
  "/clients/gazda.webp": [168, 180],
  "/clients/gbar.webp": [560, 167],
  "/clients/goriachev.webp": [560, 133],
  "/clients/group-369.webp": [560, 99],
  "/clients/gyng.webp": [309, 180],
  "/clients/hasta.webp": [560, 154],
  "/clients/leres.webp": [281, 180],
  "/clients/market.webp": [198, 180],
  "/clients/matsola.webp": [490, 180],
  "/clients/ondas.webp": [374, 180],
  "/clients/patriot.webp": [134, 180],
  "/clients/toyota.webp": [278, 180],
  "/clients/voyak.webp": [500, 180],
  "/clients/zagorsky.webp": [402, 154],
};

export default async function Clients() {
  const locale = await getLocale();
  const t = locale === "en" ? content.en : content.uk;
  const row = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4] rounded-3xl">

      <style>{`
        @keyframes clients-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .clients-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: clients-scroll 40s linear infinite;
        }
        .client-logo-slot {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 236px;
          height: 108px;
          flex-shrink: 0;
        }
        .client-logo {
          width: auto;
          height: auto;
          max-width: var(--client-logo-width, 188px);
          max-height: var(--client-logo-height, 76px);
          object-fit: contain;
          transform: translateY(var(--client-logo-y, 0));
          filter: grayscale(100%) opacity(40%);
          transition: filter 0.4s ease;
          flex-shrink: 0;
        }
        .client-logo:hover {
          filter: grayscale(0%) opacity(100%);
        }
      `}</style>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest">
          {t.heading}
        </p>
      </div>

      {/* Marquee */}
      <div
        style={{
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="clients-track">
          {row.map((client, i) => (
            <div key={i} className="client-logo-slot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.logo}
                alt={client.name}
                width={LOGO_SIZES[client.logo]?.[0]}
                height={LOGO_SIZES[client.logo]?.[1]}
                // Not loading="lazy": the marquee clips logos horizontally, so
                // lazy ones would pop in empty. Low priority keeps them from
                // competing with above-the-fold resources (and stops React
                // from preloading all of them in <head>).
                fetchPriority="low"
                decoding="async"
                className="client-logo"
                style={{
                  "--client-logo-width": `${client.maxWidth ?? 188}px`,
                  "--client-logo-height": `${client.maxHeight ?? 76}px`,
                  "--client-logo-y": `${client.offsetY ?? 0}px`,
                } as CSSProperties}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
