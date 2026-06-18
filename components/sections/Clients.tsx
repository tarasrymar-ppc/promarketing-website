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

export default function Clients() {
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
        .client-logo {
          height: 56px;
          width: auto;
          max-width: 150px;
          object-fit: contain;
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
          Наші клієнти
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
            <div key={i} style={{ padding: "0 40px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.logo}
                alt={client.name}
                className="client-logo"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
