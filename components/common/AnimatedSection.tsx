"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  // "idle"    = SSR/before-JS   → content visible (no classes)
  // "waiting" = JS mounted      → hidden (section is below fold at this point)
  // "visible" = entered viewport → animate in
  const [phase, setPhase] = useState<"idle" | "waiting" | "visible">("idle");

  useEffect(() => {
    setPhase("waiting");
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setPhase("visible"), delay * 1000);
          observer.unobserve(el);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.08, rootMargin: "-40px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-500 ease-out ${
        phase === "waiting"
          ? "opacity-0 translate-y-5"
          : phase === "visible"
          ? "opacity-100 translate-y-0"
          : "" // idle: SSR — no transition classes, content fully visible
      } ${className}`}
    >
      {children}
    </div>
  );
}
