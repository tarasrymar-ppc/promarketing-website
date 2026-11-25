import Image from "next/image";
import type { CoverMotif, CoverTone } from "@/lib/blogExtras";

// Keep the original vector motifs as fallbacks for posts awaiting photography.

const TONES: Record<CoverTone, { bg: string; fg: string; accent: string; muted: string }> = {
  dark: { bg: "#0D0D0D", fg: "#FFFFFF", accent: "#E5202E", muted: "rgba(255,255,255,0.14)" },
  red: { bg: "#E5202E", fg: "#FFFFFF", accent: "#0D0D0D", muted: "rgba(255,255,255,0.22)" },
  grey: { bg: "#F4F4F4", fg: "#0D0D0D", accent: "#E5202E", muted: "rgba(13,13,13,0.10)" },
};

type Palette = (typeof TONES)[CoverTone];

function Motif({ motif, c }: { motif: CoverMotif; c: Palette }) {
  const stroke = { stroke: c.fg, strokeWidth: 10, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (motif) {
    case "bars":
      return (
        <g>
          {[150, 210, 280, 340, 420].map((h, i) => (
            <rect key={i} x={680 + i * 92} y={540 - h} width={60} height={h} rx={10} fill={i === 4 ? c.accent : c.muted} />
          ))}
          <path d="M680 250 L772 205 L864 220 L956 150 L1060 100" {...stroke} />
          <circle cx={1060} cy={100} r={16} fill={c.fg} />
        </g>
      );
    case "versus":
      return (
        <g>
          <circle cx={800} cy={320} r={170} fill={c.muted} />
          <circle cx={1000} cy={320} r={170} fill="none" stroke={c.fg} strokeWidth={10} />
          <circle cx={900} cy={320} r={22} fill={c.accent} />
        </g>
      );
    case "growth":
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1={660} x2={1140} y1={160 + i * 120} y2={160 + i * 120} stroke={c.muted} strokeWidth={4} />
          ))}
          <path d="M660 500 C 760 490, 800 440, 860 420 S 960 330, 1010 260 S 1090 150, 1140 120" {...stroke} />
          {[[860, 420], [1010, 260]].map(([x, y]) => (
            <circle key={x} cx={x} cy={y} r={14} fill={c.fg} />
          ))}
          <circle cx={1140} cy={120} r={22} fill={c.accent} />
        </g>
      );
    case "nodes": {
      const pts = [[900, 320], [740, 180], [1080, 170], [720, 470], [1090, 470], [900, 120], [900, 520]];
      return (
        <g>
          {pts.slice(1).map(([x, y]) => (
            <line key={`${x}-${y}`} x1={900} y1={320} x2={x} y2={y} stroke={c.muted} strokeWidth={8} />
          ))}
          {pts.slice(1).map(([x, y]) => (
            <circle key={`c${x}-${y}`} cx={x} cy={y} r={26} fill="none" stroke={c.fg} strokeWidth={8} />
          ))}
          <circle cx={900} cy={320} r={56} fill={c.accent} />
        </g>
      );
    }
    case "checklist":
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={700} y={130 + i * 105} width={64} height={64} rx={14} fill="none" stroke={c.fg} strokeWidth={8} />
              <rect x={800} y={152 + i * 105} width={i % 2 ? 220 : 300} height={20} rx={10} fill={c.muted} />
              {i < 3 && (
                <path d={`M714 ${163 + i * 105} l14 14 l24 -28`} stroke={i === 2 ? c.accent : c.fg} strokeWidth={9} fill="none" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </g>
          ))}
        </g>
      );
    case "grid":
      return (
        <g>
          {Array.from({ length: 9 }, (_, i) => (
            <rect
              key={i}
              x={720 + (i % 3) * 140}
              y={110 + Math.floor(i / 3) * 140}
              width={124}
              height={124}
              rx={16}
              fill={i === 4 ? c.accent : c.muted}
            />
          ))}
        </g>
      );
    case "pin":
      return (
        <g>
          <circle cx={910} cy={470} r={60} fill="none" stroke={c.muted} strokeWidth={8} />
          <circle cx={910} cy={470} r={130} fill="none" stroke={c.muted} strokeWidth={6} />
          <path d="M910 470 C 860 400, 820 350, 820 290 a90 90 0 1 1 180 0 C 1000 350, 960 400, 910 470 Z" fill={c.accent} />
          <circle cx={910} cy={290} r={34} fill={c.bg} />
        </g>
      );
    case "reels":
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <rect key={i} x={700 + i * 150} y={i === 1 ? 90 : 150} width={124} height={i === 1 ? 440 : 330} rx={22} fill={i === 1 ? c.accent : c.muted} />
          ))}
          <path d="M887 280 L887 340 L937 310 Z" fill={c.bg === "#E5202E" ? "#E5202E" : "#FFFFFF"} />
        </g>
      );
    case "pages":
      return (
        <g>
          <rect x={680} y={110} width={180} height={420} rx={18} fill="none" stroke={c.fg} strokeWidth={8} />
          <rect x={710} y={150} width={120} height={60} rx={8} fill={c.accent} />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={950 + i * 28} y={170 - i * 28} width={160} height={250} rx={16} fill={i === 2 ? c.bg : c.muted} stroke={i === 2 ? c.fg : "none"} strokeWidth={8} />
          ))}
        </g>
      );
    case "funnel":
      return (
        <g>
          <path d="M680 130 H1140 L1060 250 H760 Z" fill={c.muted} />
          <path d="M770 270 H1050 L990 380 H830 Z" fill="none" stroke={c.fg} strokeWidth={8} strokeLinejoin="round" />
          <path d="M840 400 H980 L940 500 H880 Z" fill={c.accent} />
        </g>
      );
    case "orbit":
      return (
        <g>
          <ellipse cx={910} cy={320} rx={230} ry={110} fill="none" stroke={c.muted} strokeWidth={8} />
          <ellipse cx={910} cy={320} rx={230} ry={110} fill="none" stroke={c.muted} strokeWidth={8} transform="rotate(60 910 320)" />
          <ellipse cx={910} cy={320} rx={230} ry={110} fill="none" stroke={c.muted} strokeWidth={8} transform="rotate(-60 910 320)" />
          <circle cx={910} cy={320} r={48} fill={c.accent} />
          {[[1140, 320], [795, 120], [795, 520]].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={18} fill={c.fg} />
          ))}
        </g>
      );
  }
}

export default function BlogCover({
  image,
  sizes,
  motif,
  tone,
  kicker,
  className = "",
}: {
  image?: { src: string; alt: string };
  sizes: string;
  motif: CoverMotif;
  tone: CoverTone;
  kicker: string;
  className?: string;
}) {
  if (image) {
    return <Image {...image} width={1200} height={630} sizes={sizes} className={`block h-auto w-full ${className}`} />;
  }
  const c = TONES[tone];
  return (
    <svg
      viewBox="0 0 1200 630"
      role="img"
      aria-label={kicker}
      className={`block w-full h-auto ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width={1200} height={630} fill={c.bg} />
      <Motif motif={motif} c={c} />
      <text
        x={64}
        y={120}
        fill={c.fg}
        fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif"
        fontSize={44}
        fontWeight={600}
        letterSpacing={-1}
      >
        {kicker}
      </text>
      <rect x={64} y={150} width={72} height={8} rx={4} fill={c.accent} />
      <text
        x={64}
        y={566}
        fill={c.fg}
        opacity={0.55}
        fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
        fontSize={28}
        fontWeight={600}
      >
        PRO Marketing#
      </text>
    </svg>
  );
}
