"use client";

import { useState } from "react";
import Reveal, { SectionTag, SectionHeading } from "./home/Reveal";
import SectionGlow, { HoverLight } from "./effects/SectionGlow";
import GlowCard from "./effects/GlowCard";
import { trustedLabels } from "@/lib/home-data";

const companies = [
  {
    id: "zapier",
    name: "zapier",
    color: "#FF4A00",
    glow: "rgba(255, 74, 0, 0.45)",
  },
  {
    id: "spotify",
    name: "Spotify",
    color: "#1DB954",
    glow: "rgba(29, 185, 84, 0.45)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    id: "zoom",
    name: "zoom",
    color: "#2D8CFF",
    glow: "rgba(45, 140, 255, 0.45)",
  },
  {
    id: "slack",
    name: "slack",
    color: "#E01E5A",
    glow: "rgba(224, 30, 90, 0.45)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.124 2.521a2.528 2.528 0 0 1 2.521-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.52V8.834zm-1.271 0a2.527 2.527 0 0 1-2.521 2.521 2.527 2.527 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.521 2.522v6.312zm-2.521 10.124a2.528 2.528 0 0 1 2.521 2.521A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.521-2.522v-2.52h2.521zm0-1.271a2.527 2.527 0 0 1-2.521-2.521 2.527 2.527 0 0 1 2.521-2.521h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.521h-6.312z" />
      </svg>
    ),
  },
  {
    id: "amazon",
    name: "amazon",
    color: "#FF9900",
    glow: "rgba(255, 153, 0, 0.45)",
  },
  {
    id: "adobe",
    name: "Adobe",
    color: "#FF0000",
    glow: "rgba(255, 0, 0, 0.4)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 2.952 7.031-1.687 4.281h-.313zM9.935 0L0 22.624h5.235l1.69-4.281h6.452L9.935 0z" />
      </svg>
    ),
  },
];

function CompanyLogo({ company }: { company: (typeof companies)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      className="trust-logo group flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-400 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={company.name}
      style={{
        color: hovered ? company.color : "rgb(161 161 170)",
        textShadow: hovered ? `0 0 24px ${company.glow}` : "none",
        transform: hovered ? "translateY(-3px) scale(1.05)" : "none",
      }}
    >
      {company.icon && (
        <span
          className="transition-colors duration-400"
          style={{ color: hovered ? company.color : "rgb(161 161 170)" }}
        >
          {company.icon}
        </span>
      )}
      <span
        className={`font-semibold tracking-wide transition-all duration-400 ${
          company.id === "zapier" ||
          company.id === "zoom" ||
          company.id === "amazon" ||
          company.id === "slack"
            ? "lowercase text-xl sm:text-2xl"
            : "text-lg sm:text-xl"
        }`}
      >
        {company.name}
      </span>
    </button>
  );
}

function TrustedCompaniesCard() {
  return (
    <GlowCard className="rounded-3xl overflow-hidden border border-white/15 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_80px_rgba(100,203,113,0.08)]">
      <div className="flex justify-center pt-8 sm:pt-10 pb-6">
        <span className="trust-badge inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-brand-green/50 bg-brand-green/15 text-brand-green text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(100,203,113,0.2)]">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse shadow-[0_0_8px_#64CB71]" />
          Trusted By 250+ Companies
        </span>
      </div>
      <div className="px-6 sm:px-10 pb-10 sm:pb-12">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 sm:gap-x-10 lg:gap-x-14">
          {companies.map((company) => (
            <CompanyLogo key={company.id} company={company} />
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-green/40 to-transparent" />
    </GlowCard>
  );
}

type TrustSectionProps = {
  /** full = homepage (heading + marquee + card); strip = hero ke neeche sirf logo card */
  variant?: "full" | "strip";
};

export default function TrustSection({ variant = "full" }: TrustSectionProps) {
  const isStrip = variant === "strip";

  return (
    <SectionGlow
      variant="blue"
      className={
        isStrip
          ? "py-10 sm:py-14 border-y border-white/10 relative z-10"
          : "py-20 sm:py-28 border-y border-white/10"
      }
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {!isStrip && (
          <>
            <Reveal className="text-center mb-12">
              <SectionTag>Trust & Recognition</SectionTag>
              <SectionHeading className="mb-4">Trusted By Companies</SectionHeading>
              <p className="text-zinc-400 text-base sm:text-lg">
                Partnering with leading brands worldwide
              </p>
            </Reveal>

            <div className="overflow-hidden mb-14">
              <div className="flex animate-marquee gap-5">
                {[...trustedLabels, ...trustedLabels].map((label, i) => (
                  <HoverLight
                    key={i}
                    className="flex-shrink-0 px-6 py-3 rounded-full border border-brand-green/25 text-sm text-zinc-300 bg-brand-green/5 hover:border-brand-green/60 hover:text-white"
                  >
                    {label}
                  </HoverLight>
                ))}
              </div>
            </div>
          </>
        )}

        <Reveal delay={0.1}>
          <TrustedCompaniesCard />
        </Reveal>
      </div>
    </SectionGlow>
  );
}
