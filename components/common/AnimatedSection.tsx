import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Fades content in as it scrolls into view. The animation is pure CSS
// (`.reveal` in app/globals.css), so it adds no JavaScript to the page.
export default function AnimatedSection({
  children,
  className = "",
}: AnimatedSectionProps) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
