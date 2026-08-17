"use client";

import Link from "next/link";
import Reveal, { SectionTag, SectionHeading } from "./Reveal";
import SectionGlow from "../effects/SectionGlow";
import GlowCard from "../effects/GlowCard";
import { services } from "@/lib/home-data";
import ArrowIcon from "../icons/ArrowIcon";

export default function ServicesSection() {
  return (
    <SectionGlow id="services" variant="orange" className="py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-16">
          <SectionTag>Services</SectionTag>
          <SectionHeading>What we do best</SectionHeading>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            IT, digital marketing, web development & branding for businesses in Bangalore, Bengaluru & across India.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <GlowCard className="rounded-2xl p-8 h-full bg-white/[0.03] backdrop-blur-sm border border-white/5">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl font-syne text-brand-green/20 group-hover:text-brand-green/40 transition-colors">{String(i + 1).padStart(2, "0")}</span>
                  <ArrowIcon size="lg" className="opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_12px_rgba(100,203,113,0.45)]" />
                </div>
                <h3 className="font-syne text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-brand-green text-sm mb-6">{s.tagline}</p>
                <ul className="space-y-4 mb-8">
                  {s.features.map((f) => (
                    <li key={f.title} className="flex gap-3 group/item">
                      <ArrowIcon className="mt-0.5" />
                      <div className="transition-colors group-hover/item:text-white">
                        <p className="text-white text-sm font-medium">{f.title}</p>
                        <p className="text-zinc-500 text-xs mt-0.5">{f.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="inline-flex items-center gap-2 text-brand-green text-sm font-medium hover:gap-3 transition-all hover:drop-shadow-[0_0_8px_rgba(100,203,113,0.6)]">
                  Explore →
                </Link>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionGlow>
  );
}
