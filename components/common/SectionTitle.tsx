interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[#6B6B6B] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
