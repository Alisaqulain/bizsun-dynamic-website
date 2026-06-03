"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 40,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-brand-green font-medium mb-4">
      <span className="w-8 h-px bg-brand-green/50" />
      {children}
    </span>
  );
}

export function SectionHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ${className}`}>
      {children}
    </h2>
  );
}
