type PageTitleProps = {
  /** Short display word shown huge, e.g. "Google Ads". */
  title: string;
  /** Descriptive line with the search query and city. Part of the H1 so
   * search and AI engines read the full topic, shown smaller under the title. */
  keyword: string;
  className?: string;
  fontSize?: string;
};

// Editorial H1 used across inner pages: the big brand-style word stays the
// visual anchor, the keyword line carries the query ("… в Ужгороді").
export default function PageTitle({
  title,
  keyword,
  className = "py-6 md:py-8",
  fontSize = "clamp(56px, 14vw, 180px)",
}: PageTitleProps) {
  return (
    <h1 className={`text-[#0D0D0D] ${className}`}>
      <span
        className="block font-semibold tracking-tighter leading-none"
        style={{ fontSize }}
      >
        {title}
        <span className="text-[#E5202E]">.</span>
      </span>{" "}
      <span className="block mt-3 md:mt-4 text-base md:text-xl font-medium tracking-tight leading-snug text-[#6B6B6B]">
        {keyword}
      </span>
    </h1>
  );
}
