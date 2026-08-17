import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/seo/JsonLd";
import { business } from "@/lib/business";
import { caseStudies } from "@/lib/home-data";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Digital Marketing Agency in Bangalore | IT Company in BTM Layout | Bizsun Creative",
  description:
    "Digital marketing agency in Bangalore & Bengaluru. Bizsun Creative is an IT company in BTM Layout, near Electronic City — SEO, web development, social media & branding.",
  path: "/digital-marketing-agency-bangalore",
  keywords: [
    "digital marketing agency in Bangalore",
    "digital marketing agency in Bengaluru",
    "IT company in Bangalore",
    "IT company in BTM Layout",
    "IT company near Electronic City",
    "SEO company in Bangalore",
  ],
  absoluteTitle: true,
});

const faqs = [
  {
    question: "Where is Bizsun Creative located in Bangalore?",
    answer: `Our office is at ${business.addressDisplay}. We are near Electronic City in BTM Layout, Bengaluru.`,
  },
  {
    question: "What services does your IT company in Bengaluru offer?",
    answer:
      "We offer digital marketing, SEO, web and app development, software development, branding, social media marketing, analytics, and marketing automation.",
  },
  {
    question: "Do you work with businesses near Electronic City and BTM Layout?",
    answer:
      "Yes. We serve clients across Bangalore and Bengaluru, including startups and businesses near Electronic City, BTM Layout, and Konappana Agrahara.",
  },
  {
    question: "How can I get a quote for digital marketing or web development?",
    answer:
      "Contact us via phone at +91 7044178863, email at info@bizsoncreative.com, or visit our BTM Layout office during business hours.",
  },
];

export default function DigitalMarketingAgencyBangalorePage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Digital Marketing Agency in Bangalore", path: "/digital-marketing-agency-bangalore" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <JsonLd data={[localBusinessSchema("Digital Marketing & IT Services"), breadcrumbSchema(breadcrumbs), faqPageSchema(faqs)]} />
      <Header />

      <main>
        <section className="container mx-auto px-4 sm:px-6 pt-28 pb-12">
          <nav className="text-sm text-zinc-500 mb-8">
            <Link href="/" className="hover:text-brand-green">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-300">Digital Marketing Agency in Bangalore</span>
          </nav>
          <p className="text-brand-green text-sm uppercase tracking-widest mb-4">BTM Layout · Near Electronic City · Bengaluru</p>
          <h1 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FF9000] mb-6 max-w-4xl leading-tight">
            Digital Marketing Agency in Bangalore
          </h1>
          <p className="text-zinc-400 text-lg max-w-3xl mb-8 leading-relaxed">
            Bizsun Creative is an IT company in Bengaluru, based in BTM Layout near Electronic City. We help Bangalore
            businesses grow through SEO, digital marketing, web development, and branding.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-glow">Get a Free Consultation</Link>
            <Link href="/digital" className="btn-outline">Explore Digital Marketing</Link>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-12 border-t border-white/10">
          <h2 className="font-syne text-2xl sm:text-3xl font-bold mb-6">IT company in BTM Layout, Bengaluru</h2>
          <p className="text-zinc-400 max-w-4xl leading-relaxed mb-4">
            Located on Hosur Main Road near Electronic City, Bizsun Creative combines strategy, creative, and technology
            for businesses across Bangalore and Bengaluru — from startups to established brands.
          </p>
          <p className="text-zinc-400 max-w-4xl leading-relaxed">
            Whether you need an SEO company in Bangalore, a web development partner, or a creative agency for branding,
            our team delivers structured, measurable digital growth.
          </p>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-12 border-t border-white/10">
          <h2 className="font-syne text-2xl sm:text-3xl font-bold mb-8">Our services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Digital Marketing & SEO", href: "/digital" },
              { title: "Web & App Development", href: "/app-web-development" },
              { title: "Software Development", href: "/software" },
              { title: "Branding & Design", href: "/branding" },
              { title: "Social Media Marketing", href: "/digital" },
              { title: "Analytics & Automation", href: "/analytics" },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-brand-green/40 transition-colors">
                <h3 className="font-syne text-lg font-bold text-white">{s.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-12 border-t border-white/10">
          <h2 className="font-syne text-2xl sm:text-3xl font-bold mb-8">Selected work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((p) => (
              <article key={p.title} className="rounded-2xl overflow-hidden border border-white/10">
                <div className="relative aspect-[4/3]">
                  <Image src={p.image} alt={`${p.title} — ${p.category} by Bizsun Creative, Bengaluru`} fill className="object-cover" sizes="33vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-syne text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-zinc-500 text-sm">{p.result}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-12 border-t border-white/10">
          <h2 className="font-syne text-2xl sm:text-3xl font-bold mb-6">Visit our BTM Layout office</h2>
          <p className="text-zinc-400 mb-4 max-w-3xl">{business.addressDisplay}</p>
          <ul className="space-y-2 text-zinc-300 mb-6">
            <li><strong className="text-white">Phone:</strong> <a href={`tel:${business.phone}`} className="text-brand-green">{business.phoneDisplay}</a></li>
            <li><strong className="text-white">Email:</strong> <a href={`mailto:${business.email}`} className="text-brand-green">{business.email}</a></li>
            <li><strong className="text-white">Hours:</strong> {business.openingHoursDisplay}</li>
          </ul>
          <div className="w-full h-[350px] rounded-2xl overflow-hidden border border-white/10 mb-4">
            <iframe
              src={business.mapsEmbedUrl}
              title="Bizsun Creative office location in BTM Layout, Bengaluru"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <a href={business.mapsLinkUrl} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex">Get Directions</a>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-12 border-t border-white/10 max-w-4xl">
          <h2 className="font-syne text-2xl sm:text-3xl font-bold mb-8">Frequently asked questions</h2>
          <div className="divide-y divide-white/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none font-semibold text-white flex justify-between gap-4">
                  {faq.question}
                  <span className="text-brand-green group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-zinc-400 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-16 border-t border-white/10 text-center">
          <h2 className="font-syne text-2xl sm:text-3xl font-bold mb-4">Ready to grow your business in Bangalore?</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" className="btn-glow">Discuss Your Project</Link>
            <Link href="/get-started" className="btn-outline">Request a Quote</Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
