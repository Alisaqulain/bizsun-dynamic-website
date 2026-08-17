"use client";

import { useEffect, useRef } from "react";
import Reveal, { SectionTag, SectionHeading } from "./Reveal";
import SectionGlow, { HoverLight } from "../effects/SectionGlow";
import GlowCard from "../effects/GlowCard";
import { whyChoose, stats, marqueeItems } from "@/lib/home-data";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / 2000, 1);
        el.textContent = `+${Math.round((1 - Math.pow(1 - p, 4)) * value)}`;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.disconnect();
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>+{value}</span>;
}

export default function WhyChooseSection() {
  return (
    <SectionGlow variant="mixed" className="py-24 sm:py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-16">
          <SectionTag>Why Choose Us</SectionTag>
          <SectionHeading>Structured systems for measurable growth</SectionHeading>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Delivering well-crafted, experience-driven & technology-powered solutions that help brands grow with clarity and confidence.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <HoverLight className="text-center p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="font-syne text-5xl sm:text-6xl font-bold text-white mb-2 hover:text-brand-green transition-colors">
                  <Counter value={s.value} />
                </div>
                <p className="text-zinc-500 text-sm">{s.label}</p>
              </HoverLight>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {whyChoose.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <GlowCard className="rounded-2xl p-8 bg-white/[0.03] h-full border border-white/5">
                <span className="inline-block px-3 py-1 rounded-full text-xs text-brand-green border border-brand-green/30 mb-4">{item.badge}</span>
                <h3 className="font-syne text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee gap-8">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <HoverLight key={i} className="flex-shrink-0 px-4 py-2 rounded-full border border-white/5 text-xs tracking-[0.2em] uppercase text-zinc-500 flex items-center gap-3">
                <span className="text-brand-green">★</span>{item}
              </HoverLight>
            ))}
          </div>
        </div>
      </div>
    </SectionGlow>
  );
}
