"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

/** Card with border + inner hover lighting glow */
export default function GlowCard({ children, className = "" }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div ref={ref} onMouseMove={onMove} className={`glow-card group ${className}`}>
      <div className="glow-card-border" aria-hidden="true" />
      <div className="glow-card-spotlight" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
