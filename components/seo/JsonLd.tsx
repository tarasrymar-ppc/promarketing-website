type JsonLdProps = {
  data: Record<string, unknown>;
};

// Rendered as a native <script> so the structured data is part of the
// server-sent HTML. Crawlers that don't execute JavaScript (most AI crawlers)
// only see markup that is present in the initial response.
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
