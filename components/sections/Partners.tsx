import Image from "next/image";
import { getTranslations } from "next-intl/server";
import AnimatedSection from "@/components/common/AnimatedSection";

const OFFICIAL_PARTNERS = [
  { name: "Ringostat", logo: "/partners/ringostat.webp" },
  { name: "Binotel",   logo: "/partners/binotel.webp"   },
];

const TOOLS = [
  { name: "Google", logo: "/partners/google.webp" },
  { name: "Meta",   logo: "/partners/meta.webp"   },
];

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center justify-center w-full h-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
      <Image
        src={logo}
        alt={name}
        width={130}
        height={48}
        className="w-[130px] h-[48px] object-contain"
      />
    </div>
  );
}

export default async function Partners() {
  const t = await getTranslations("partners");

  return (
    <section className="py-16 md:py-20 bg-[#F4F4F4] rounded-3xl overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-stretch gap-px bg-[#E0E0E0] rounded-2xl overflow-hidden">

            {/* Official partners */}
            <div className="flex-1 bg-[#F4F4F4] p-8 md:p-10 flex flex-col items-center">
              <p className="text-xs font-semibold text-[#ADADAD] uppercase tracking-widest mb-6">
                {t("official")}
              </p>
              <div className="flex items-center gap-0 w-full">
                {OFFICIAL_PARTNERS.map((partner, i) => (
                  <div key={partner.name} className="flex items-center flex-1">
                    <LogoCard {...partner} />
                    {i < OFFICIAL_PARTNERS.length - 1 && (
                      <div className="w-px h-8 bg-[#E0E0E0] flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[#E0E0E0]" />

            {/* Tools */}
            <div className="flex-1 bg-[#F4F4F4] p-8 md:p-10 flex flex-col items-center">
              <p className="text-xs font-semibold text-[#ADADAD] uppercase tracking-widest mb-6">
                {t("tools")}
              </p>
              <div className="flex items-center gap-0 w-full">
                {TOOLS.map((tool, i) => (
                  <div key={tool.name} className="flex items-center flex-1">
                    <LogoCard {...tool} />
                    {i < TOOLS.length - 1 && (
                      <div className="w-px h-8 bg-[#E0E0E0] flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
