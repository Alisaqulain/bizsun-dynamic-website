"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

type GlowVariant = "green" | "orange" | "blue" | "mixed";

type SectionGlowProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: GlowVariant;
};

/** Section wrapper with ambient orbs + mouse-follow background lighting */
export default function SectionGlow({
  children,
  className = "",
  id,
  variant = "green",
}: SectionGlowProps) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--sy", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      ref={ref}
      id={id}
      onMouseMove={onMove}
      className={`section-glow section-glow--${variant} ${className}`}
    >
      <div className="section-glow-orbs" aria-hidden="true">
        <span className="section-orb section-orb-a" />
        <span className="section-orb section-orb-b" />
      </div>
      <div className="section-glow-spotlight" aria-hidden="true" />
      <div className="section-glow-grid" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/** Small interactive element with hover lighting */
export function HoverLight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--hx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--hy", `${e.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} onMouseMove={onMove} className={`hover-light ${className}`}>
      <div className="hover-light-glow" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
