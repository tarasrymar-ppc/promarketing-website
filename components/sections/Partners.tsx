import Image from "next/image";
import { getTranslations } from "next-intl/server";
import AnimatedSection from "@/components/common/AnimatedSection";

const OFFICIAL_PARTNERS = [
  {
    name: "Ringostat",
    logo: "/partners/ringostat.webp",
    href: "https://ringostat.com/",
  },
  {
    name: "Binotel",
    logo: "/partners/binotel.webp",
    href: "https://www.binotel.ua/ua",
  },
];

const TOOLS = [
  { name: "Google", logo: "/partners/google.webp", width: 104, height: 36 },
  { name: "Meta",   logo: "/partners/meta.webp",   width: 104, height: 32 },
  { name: "Figma", logo: "/partners/figma.svg", width: 28, height: 42 },
  {
    name: "Adobe Illustrator",
    logo: "/partners/illustrator.svg",
    width: 42,
    height: 42,
  },
  {
    name: "Adobe Photoshop",
    logo: "/partners/photoshop.svg",
    width: 42,
    height: 42,
  },
  {
    name: "Adobe Lightroom",
    logo: "/partners/lightroom.svg",
    width: 42,
    height: 42,
  },
  {
    name: "DaVinci Resolve",
    logo: "/partners/davinci-resolve.png",
    width: 42,
    height: 42,
  },
];

type LogoCardProps = {
  name: string;
  logo: string;
  href?: string;
  width?: number;
  height?: number;
  compact?: boolean;
};

function LogoImage({
  name,
  logo,
  width = 130,
  height = 48,
}: Pick<LogoCardProps, "name" | "logo" | "width" | "height">) {
  return (
    <Image
      src={logo}
      alt={name}
      width={width}
      height={height}
      className="object-contain"
      style={{ width, height }}
    />
  );
}

function LogoCard({
  name,
  logo,
  href,
  width,
  height,
  compact = false,
}: LogoCardProps) {
  const className =
    `flex items-center justify-center w-full ${compact ? "h-16" : "h-20"} grayscale opacity-40 hover:grayscale-0 hover:opacity-100 focus-visible:grayscale-0 focus-visible:opacity-100 transition-all duration-300`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Перейти на сайт ${name}`}
        className={`${className} cursor-pointer rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#E5202E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F4F4]`}
      >
        <LogoImage name={name} logo={logo} width={width} height={height} />
      </a>
    );
  }

  return (
    <div className={`${className} cursor-default`}>
      <LogoImage name={name} logo={logo} width={width} height={height} />
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
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 w-full">
                {TOOLS.map((tool, i) => (
                  <div
                    key={tool.name}
                    className={`flex items-center justify-center rounded-xl bg-white/35 ${
                      i === TOOLS.length - 1
                        ? "sm:col-start-2 lg:col-start-auto"
                        : ""
                    }`}
                  >
                    <LogoCard {...tool} compact />
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
