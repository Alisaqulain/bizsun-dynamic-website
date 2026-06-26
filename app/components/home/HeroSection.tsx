"use client";

import Link from "next/link";
import Reveal, { SectionTag } from "./Reveal";
import SectionGlow from "../effects/SectionGlow";
import GlowCard from "../effects/GlowCard";

export default function HeroSection() {
  return (
    <SectionGlow variant="mixed" className="min-h-screen flex items-center pt-28 pb-16">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <GlowCard className="w-full rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 bg-white/[0.03] backdrop-blur-md border border-white/10 text-center">
          <Reveal delay={0.1} className="flex justify-center">
            <SectionTag>Digital Agency</SectionTag>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="font-syne text-[clamp(2.4rem,6vw,5.5rem)] font-bold text-white leading-[1.05] mb-6 w-full">
              Building scalable{" "}
              <span className="text-gradient">digital growth</span>{" "}
              with strategy, design & technology
            </h1>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed w-full max-w-3xl mx-auto mb-10">
              We work closely with ambitious businesses to turn ideas into impactful digital
              solutions — designed to attract leads, build trust, and convert them into growth.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/get-started" className="btn-glow">Get in Touch</Link>
              <Link href="/#services" className="btn-outline">View Our Services</Link>
            </div>
          </Reveal>
        </GlowCard>

        {/* Scroll cue */}
        <Reveal delay={0.6} className="mt-16 flex flex-col items-center gap-3 w-full">
          <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500">Scroll to explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-brand-green to-transparent animate-float" />
        </Reveal>
      </div>
    </SectionGlow>
  );
}
