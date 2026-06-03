"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal, { SectionTag, SectionHeading } from "./Reveal";
import SectionGlow from "../effects/SectionGlow";
import GlowCard from "../effects/GlowCard";
import { getThemeColor } from "../effects/ColorHover";
import { teamMembers } from "@/lib/home-data";

function TeamMemberCard({
  member,
  index,
}: {
  member: (typeof teamMembers)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const { color, glow } = getThemeColor(index);

  return (
    <div
      className="flex-shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <GlowCard className="team-member-card w-[240px] sm:w-[260px] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-2">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700"
            style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
            sizes="260px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Name + role pill — centered on card */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[88%]">
            <div
              className="rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 text-center backdrop-blur-md border transition-all duration-400"
              style={{
                background: hovered ? "rgba(5, 5, 5, 0.88)" : "rgba(5, 5, 5, 0.78)",
                borderColor: hovered ? `${color}66` : "rgba(100, 203, 113, 0.25)",
                boxShadow: hovered ? `0 0 24px ${glow}` : "0 8px 24px rgba(0,0,0,0.35)",
              }}
            >
              <h3
                className="font-syne text-base sm:text-lg font-bold leading-tight transition-colors duration-400"
                style={{
                  color: hovered ? color : "#ffffff",
                  textShadow: hovered ? `0 0 12px ${glow}` : "none",
                }}
              >
                {member.name}
              </h3>
              <p
                className="text-xs sm:text-sm mt-1 leading-snug transition-colors duration-400"
                style={{ color: hovered ? color : "rgb(161 161 170)" }}
              >
                {member.role}
              </p>
            </div>
          </div>
        </div>
      </GlowCard>
    </div>
  );
}

export default function HomeTeamSection() {
  const slides = [...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <SectionGlow variant="orange" className="py-24 sm:py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-12 sm:mb-16">
          <SectionTag>Our Team</SectionTag>
          <SectionHeading className="mb-4">
            Meet the creative minds{" "}
            <span className="italic font-normal text-brand-green">behind our success</span>
          </SectionHeading>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Strategists, designers, and developers working together to build brands that stand out.
          </p>
        </Reveal>

        <div className="team-slider-wrap relative overflow-hidden mb-16 sm:mb-20">
          <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="team-slider-track flex items-stretch gap-5 py-2">
            {slides.map((member, i) => (
              <TeamMemberCard
                key={`${member.name}-${i}`}
                member={member}
                index={i % teamMembers.length}
              />
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="text-center">
          <GlowCard className="rounded-3xl p-10 sm:p-14 bg-white/[0.03] border border-white/10 max-w-3xl mx-auto">
            <h3 className="font-syne text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s shape the future of your{" "}
              <span className="italic text-brand-orange">brand</span>
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              From strategy to execution, we help brands grow with clarity,
              consistency, and thoughtfully crafted digital solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-glow">Let&apos;s Collaborate</Link>
              <Link href="/join-our-team" className="btn-outline">Join Our Team</Link>
            </div>
          </GlowCard>
        </Reveal>
      </div>
    </SectionGlow>
  );
}
