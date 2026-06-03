"use client";

import Link from "next/link";
import Reveal, { SectionHeading } from "./Reveal";
import SectionGlow from "../effects/SectionGlow";
import GlowCard from "../effects/GlowCard";

export default function CTASection() {
  return (
    <SectionGlow variant="mixed" className="py-32 sm:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <GlowCard className="rounded-3xl p-12 sm:p-16 lg:p-20 bg-white/[0.03] border border-white/10 w-full">
            <p className="text-xs tracking-[0.35em] uppercase text-brand-green mb-6">Growth starts with conversation</p>
            <SectionHeading className="mb-6 max-w-4xl mx-auto">
              Ready to dramatically accelerate your growth?
            </SectionHeading>
            <p className="text-zinc-400 text-lg mb-10 max-w-3xl mx-auto">
              We&apos;ll understand your goals, recommend the right services, and outline the next steps clearly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-glow text-base px-10 py-4">Let&apos;s Collaborate</Link>
              <Link href="/about-us" className="btn-outline">Learn About Us</Link>
            </div>
          </GlowCard>
        </Reveal>
      </div>
    </SectionGlow>
  );
}
