"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal, { SectionTag, SectionHeading } from "./Reveal";
import SectionGlow from "../effects/SectionGlow";
import GlowCard from "../effects/GlowCard";
import { HoverLight } from "../effects/SectionGlow";
import InfiniteGallerySlider from "./InfiniteGallerySlider";
import { testimonials } from "@/lib/home-data";

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-4 h-4 text-brand-orange drop-shadow-[0_0_4px_rgba(255,144,0,0.5)]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ name, role, text }: (typeof testimonials)[0]) {
  return (
    <GlowCard className="rounded-2xl p-8 bg-white/[0.03] border border-white/5 h-full flex flex-col">
      <Stars />
      <p className="flex-1 text-zinc-300 leading-relaxed mb-6 min-h-[72px]">&ldquo;{text}&rdquo;</p>
      <div className="mt-auto">
        <p className="font-syne text-white font-bold">{name}</p>
        <p className="text-zinc-500 text-sm">{role}</p>
      </div>
    </GlowCard>
  );
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const visibleDesktop = [
    testimonials[index],
    testimonials[(index + 1) % total],
  ];

  return (
    <SectionGlow variant="green" className="py-24 sm:py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <SectionTag>Testimonials</SectionTag>
            <SectionHeading>What our clients say</SectionHeading>
          </div>
          <HoverLight className="md:text-right px-6 py-4 rounded-2xl border border-white/5 bg-white/[0.02]">
            <p className="text-xs text-zinc-500 uppercase tracking-widest">Total Reviews</p>
            <p className="font-syne text-4xl text-brand-green/60">323</p>
          </HoverLight>
        </Reveal>

        <Reveal delay={0.1}>
          <GlowCard className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] isolate w-full">
            <div className="flex flex-col sm:flex-row items-stretch">
              <div className="flex-1 min-w-0 overflow-hidden bg-black/20">
                <InfiniteGallerySlider />
              </div>
              <div className="flex-shrink-0 w-full sm:w-[200px] md:w-[220px] px-5 py-4 sm:py-0 sm:px-6 flex flex-col justify-center bg-brand-orange/10 border-t sm:border-t-0 sm:border-l border-brand-orange/25">
                <p className="text-[10px] tracking-widest uppercase text-zinc-500 mb-2">Facts & Numbers</p>
                <div className="font-syne text-4xl text-brand-orange mb-1 leading-none">91%</div>
                <p className="text-zinc-300 text-xs sm:text-sm leading-snug">
                  clients recommend our services.
                </p>
              </div>
            </div>
          </GlowCard>
        </Reveal>

        {/* Mobile — 1 card */}
        <div className="mt-8 md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              className="h-full"
            >
              <TestimonialCard {...testimonials[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop — 2 equal-height cards */}
        <div className="mt-8 hidden md:grid md:grid-cols-2 gap-6 items-stretch">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="contents"
            >
              {visibleDesktop.map((t, i) => (
                <TestimonialCard key={`${index}-${i}`} {...t} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <HoverLight className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center cursor-pointer hover:border-brand-green/50">
            <button type="button" onClick={prev} aria-label="Previous review" className="w-full h-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </HoverLight>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-brand-green" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <HoverLight className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center cursor-pointer hover:border-brand-green/50">
            <button type="button" onClick={next} aria-label="Next review" className="w-full h-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </HoverLight>
        </div>
      </div>
    </SectionGlow>
  );
}
