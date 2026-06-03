"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionGlow from "../effects/SectionGlow";
import GlowCard from "../effects/GlowCard";
import { ColorHoverLink } from "../effects/ColorHover";

const links = {
  Navigation: [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/join-our-team", label: "Career" },
    { href: "/#services", label: "Services" },
  ],
  Services: [
    { href: "/software", label: "Software Development" },
    { href: "/digital", label: "Digital Marketing" },
    { href: "/branding", label: "Website & Branding" },
    { href: "/app-web-development", label: "App & Web Development" },
  ],
  Solutions: [
    { href: "/analytics", label: "Analytics & Growth" },
    { href: "/automation", label: "Automation & CRM" },
    { href: "/industry-focused", label: "Industry Focused" },
  ],
};

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="footer-col h-full flex flex-col">
      <h3 className="footer-col-title text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-green mb-5 pb-3 border-b border-white/10">
        {title}
      </h3>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default function HomeFooter() {
  let linkIndex = 0;

  return (
    <footer className="relative z-20 isolate w-full">
      <SectionGlow variant="green" className="border-t border-white/10 pt-16 sm:pt-20 pb-0 w-full">
        <GlowCard className="w-full rounded-none border-x-0 border-b-0 border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">
          <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-10 sm:py-12 lg:py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-12 items-start w-full">
                {/* Brand / CTA */}
                <div className="lg:col-span-4 flex flex-col h-full">
                  <Link href="/" className="inline-block mb-6 w-fit">
                    <Image
                      src="/logo.png"
                      alt="Bizsun Creative"
                      width={130}
                      height={44}
                      className="h-9 w-auto brightness-110"
                    />
                  </Link>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-2">
                    Let&apos;s turn ideas into impact
                  </p>
                  <h2 className="font-syne text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                    Let&apos;s Work Together
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-md">
                    Strategy, design, and technology — built to help ambitious brands grow with clarity and confidence.
                  </p>
                  <a
                    href="mailto:info@bizsoncreative.com"
                    className="text-sm text-zinc-400 hover:text-brand-green transition-colors mb-6 block"
                  >
                    info@bizsoncreative.com
                  </a>
                  <div className="mt-auto flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-glow text-sm">
                      Contact Us
                    </Link>
                    <a
                      href="/Bizson Creative Production2.pptx"
                      download
                      className="btn-outline text-sm"
                    >
                      Portfolio
                    </a>
                  </div>
                </div>

                {/* Link columns */}
                {Object.entries(links).map(([title, items]) => (
                  <div key={title} className="lg:col-span-2 sm:col-span-1">
                    <FooterColumn title={title}>
                      <ul className="space-y-2.5">
                        {items.map((l) => {
                          const idx = linkIndex++;
                          return (
                            <li key={l.href}>
                              <ColorHoverLink href={l.href} colorIndex={idx}>
                                {l.label}
                              </ColorHoverLink>
                            </li>
                          );
                        })}
                      </ul>
                    </FooterColumn>
                  </div>
                ))}

                {/* Contact quick info */}
                <div className="lg:col-span-2 sm:col-span-2">
                  <FooterColumn title="Get in Touch">
                    <ul className="space-y-3 text-sm text-zinc-400">
                      <li>
                        <span className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-1">Email</span>
                        <a href="mailto:info@bizsoncreative.com" className="link-glow hover:text-white transition-colors">
                          info@bizsoncreative.com
                        </a>
                      </li>
                      <li>
                        <span className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-1">Careers</span>
                        <Link href="/join-our-team" className="link-glow hover:text-white transition-colors">
                          Join Our Team
                        </Link>
                      </li>
                      <li>
                        <span className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-1">Location</span>
                        <span className="text-zinc-400">India · Remote Worldwide</span>
                      </li>
                    </ul>
                  </FooterColumn>
                </div>
              </div>
            </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-5 bg-black/20">
            <p className="text-xs text-zinc-600 order-2 sm:order-1">
              © {new Date().getFullYear()} Bizsun Creative. All rights reserved.
            </p>

            <div className="flex items-center gap-2 order-1 sm:order-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social px-4 py-2 rounded-full text-[10px] font-medium uppercase tracking-widest text-zinc-400 border border-white/10 hover:border-brand-green/40 hover:text-brand-green transition-all duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </GlowCard>
      </SectionGlow>
    </footer>
  );
}
