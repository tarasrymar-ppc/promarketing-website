import { getTranslations } from "next-intl/server";

const CLIENTS = [
  { name: "Voyak",     logo: "/clients/voyak.png"     },
  { name: "Ave",       logo: "/clients/ave.png"       },
  { name: "Etalon",    logo: "/clients/etalon.png"    },
  { name: "Gazda",     logo: "/clients/gazda.png"     },
  { name: "G-Bar",     logo: "/clients/gbar.png"      },
  { name: "Goriachev", logo: "/clients/goriachev.png" },
  { name: "Gyng",      logo: "/clients/gyng.png"      },
  { name: "Hasta",     logo: "/clients/hasta.png"     },
  { name: "Leres",     logo: "/clients/leres.png"     },
  { name: "Market",    logo: "/clients/market.png"    },
  { name: "Matsola",   logo: "/clients/matsola.png"   },
  { name: "Ondas",     logo: "/clients/ondas.png"     },
  { name: "Patriot",   logo: "/clients/patriot.png"   },
  { name: "Toyota",    logo: "/clients/toyota.png"    },
];

export default async function Clients() {
  const t = await getTranslations("clients");
  const row = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-16 md:py-24 bg-white rounded-3xl">

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
          {t("label")}
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D]">
          {t("title")}
        </h2>
      </div>

      {/* Marquee */}
      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          className="flex items-center"
          style={{
            width: "max-content",
            animation: "clients-scroll 40s linear infinite",
          }}
        >
          {row.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.logo}
                alt={client.name}
                style={{
                  height: "60px",
                  width: "auto",
                  maxWidth: "160px",
                  objectFit: "contain",
                  filter: "grayscale(100%) opacity(45%)",
                  transition: "filter 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%) opacity(100%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%) opacity(45%)";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes clients-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
}
