"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonArrowIcon } from "../icons/ArrowIcon";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about-us", label: "About" },
  { href: "/contact", label: "Contact us" },
  { href: "/join-our-team", label: "Career" },
];

const mobileLinks = [
  ...nav,
  { href: "/Bizson Creative Production2.pptx", label: "Portfolio", download: true as const },
];

export default function HomeHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`site-header fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
          scrolled ? "nav-scrolled" : ""
        }`}
      >
        <div className="site-header-bar relative z-[102] mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Image
              src="/logo.png"
              alt="Bizsun Creative"
              width={140}
              height={46}
              className="h-auto w-[104px] sm:w-[120px] lg:w-[130px]"
              priority
            />
          </Link>

          <nav className="glass-nav hidden items-center gap-1 rounded-full px-2 py-1 lg:flex">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/Bizson Creative Production2.pptx"
              download
              className="nav-link rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Portfolio
            </a>
          </nav>

          <Link
            href="/contact"
            className="header-desktop-cta btn-glow hidden items-center gap-2 text-sm font-medium lg:inline-flex"
          >
            Let&apos;s Collaborate
            <ButtonArrowIcon className="h-4 w-4" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mobile-menu-btn relative z-[103] flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-white/20 bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
          >
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                open ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mobile-nav-dropdown fixed inset-0 z-[99] lg:hidden"
          >
            <button
              type="button"
              className="mobile-nav-backdrop absolute inset-0 bg-[#050505]/97 backdrop-blur-lg"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />

            <nav className="mobile-nav-panel fixed inset-x-0 bottom-0 top-[4.25rem] z-[1] flex flex-col items-center justify-center gap-6 overflow-y-auto overscroll-contain px-6 pb-10 sm:top-[4.5rem]">
              {mobileLinks.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: 0.04 * i }}
                >
                  {"download" in l && l.download ? (
                    <a
                      href={l.href}
                      download
                      onClick={() => setOpen(false)}
                      className="block font-syne text-2xl text-white transition-colors hover:text-brand-green"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block font-syne text-2xl text-white transition-colors hover:text-brand-green"
                    >
                      {l.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ delay: 0.04 * mobileLinks.length }}
              >
                <Link href="/contact" onClick={() => setOpen(false)} className="btn-glow mt-2">
                  Let&apos;s Collaborate
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
