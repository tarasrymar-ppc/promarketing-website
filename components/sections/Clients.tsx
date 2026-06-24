import type { CSSProperties } from "react";
import { getLocale } from "next-intl/server";

const content = {
  uk: { heading: "Наші клієнти" },
  en: { heading: "Our clients" },
} as const;

const CLIENTS = [
  { name: "Voyak",     logo: "/clients/voyak.png"     },
  { name: "Ave",       logo: "/clients/ave.png"       },
  { name: "Etalon",    logo: "/clients/etalon.png"    },
  {
    name: "Gazda",
    logo: "/clients/gazda.png",
    maxWidth: 116,
    maxHeight: 88,
  },
  { name: "G-Bar",     logo: "/clients/gbar.png"      },
  { name: "Goriachev", logo: "/clients/goriachev.png" },
  { name: "Gyng",      logo: "/clients/gyng.png"      },
  { name: "Hasta",     logo: "/clients/hasta.png"     },
  { name: "Leres",     logo: "/clients/leres.png"     },
  { name: "Market",    logo: "/clients/market.png"    },
  { name: "Matsola",   logo: "/clients/matsola.png"   },
  { name: "Ondas",     logo: "/clients/ondas.png"     },
  {
    name: "Patriot",
    logo: "/clients/patriot.png",
    maxWidth: 112,
    maxHeight: 90,
  },
  { name: "Toyota",    logo: "/clients/toyota.png"    },
  {
    name: "Forest Residence",
    logo: "/clients/forest-residence.png",
    maxWidth: 166,
    maxHeight: 76,
  },
  {
    name: "Group 369",
    logo: "/clients/group-369.png",
    maxWidth: 220,
    maxHeight: 52,
  },
  {
    name: "ZagorSky",
    logo: "/clients/zagorsky.png",
    maxWidth: 190,
    maxHeight: 70,
    offsetY: -4,
  },
  {
    name: "Aura Gold",
    logo: "/clients/aura.png",
    maxWidth: 280,
    maxHeight: 58,
  },
];

export default async function Clients() {
  const locale = await getLocale();
  const t = locale === "en" ? content.en : content.uk;
  const row = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-16 md:py-24 bg-white rounded-3xl">

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
