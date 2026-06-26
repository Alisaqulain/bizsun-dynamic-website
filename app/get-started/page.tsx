import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LandingLeadForm from "../components/landing/LandingLeadForm";
import TrustSection from "../components/TrustSection";

export const metadata: Metadata = {
  title: "Get Started — Free Consultation",
  description:
    "Start your digital growth journey with Bizsun Creative. Share your requirements and connect directly with our team on WhatsApp.",
  openGraph: {
    title: "Get Started | Bizsun Creative",
    url: "/get-started",
  },
  alternates: {
    canonical: "/get-started",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const highlights = [
  "Strategy, design & technology under one roof",
  "Custom software, marketing, branding & apps",
  "Founder-led consultation — no long wait times",
  "Trusted by growing brands across India & worldwide",
];

export default function GetStartedPage() {
  return (
    <div className="landing-page min-h-screen relative overflow-x-hidden">
      <header className="site-header fixed inset-x-0 top-0 z-[100]">
        <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Bizsun Creative"
              width={130}
              height={44}
              className="h-auto w-[104px] sm:w-[120px]"
              priority
            />
          </Link>
          <a href="tel:+917044178863" className="text-sm text-zinc-400 hover:text-brand-green transition-colors hidden sm:block">
            +91 7044178863
          </a>
        </div>
      </header>

      <main className="has-fixed-header relative z-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-green/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF9000]/6 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start max-w-6xl mx-auto">
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-green mb-4">
                Free consultation
              </p>
              <h1
                className="font-syne text-[clamp(2rem,5vw,3.25rem)] font-bold text-white leading-tight mb-5"
              >
                Turn your idea into{" "}
                <span className="text-gradient">scalable digital growth</span>
              </h1>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Share a few details and connect directly with{" "}
                <strong className="text-white font-medium">Abhinav</strong>, founder of Bizsun
                Creative — IIT Madras alumnus and strategic lead for every project.
              </p>

              <ul className="space-y-3 mb-8">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 text-xs text-zinc-500">
                <span className="px-3 py-1.5 rounded-full border border-white/10">⚡ Quick response</span>
                <span className="px-3 py-1.5 rounded-full border border-white/10">🔒 No spam</span>
                <span className="px-3 py-1.5 rounded-full border border-white/10">📍 India & global</span>
              </div>
            </div>

            <LandingLeadForm />
          </div>

          <div className="mt-14 sm:mt-16 max-w-6xl mx-auto">
            <TrustSection variant="strip" />
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-6 text-center">
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Bizsun Creative ·{" "}
          <Link href="/privacy-policy" className="hover:text-brand-green transition-colors">
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/" className="hover:text-brand-green transition-colors">
            Main website
          </Link>
        </p>
      </footer>
    </div>
  );
}
