import Image from "next/image";
import { getTranslations } from "next-intl/server";
import AnimatedSection from "@/components/common/AnimatedSection";

const CLIENTS: { name: string; logo: string }[] = [
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

const REPEATED = [...CLIENTS, ...CLIENTS];

export default async function Clients() {
  const t = await getTranslations("clients");

  return (
    <section className="py-16 md:py-20 bg-white rounded-3xl overflow-hidden">

      {/* Header */}
      <AnimatedSection className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <p className="text-xs font-semibold text-[#E5202E] uppercase tracking-widest mb-4">
          {t("label")}
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D]">
          {t("title")}
        </h2>
      </AnimatedSection>

      {/* Marquee */}
      <AnimatedSection delay={0.1}>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div
            className="flex items-center gap-10 animate-marquee w-max"
            style={{ animationDuration: "50s" }}
          >
            {REPEATED.map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={300}
                  height={120}
                  className="w-auto h-auto max-w-[280px] max-h-[110px] object-contain mix-blend-multiply grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

    </section>
  );
}
