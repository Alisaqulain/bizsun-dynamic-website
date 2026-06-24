/**
 * Central SEO config. Set your live domain here before deployment.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bizsuncreative.com";

/** Keep in sync with `public/robots.txt` (Sitemap line uses SITE_URL at deploy). */
export const ROBOTS_SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

export const defaultMetadata = {
  siteName: "Bizsun Creative",
  title: "Bizsun Creative | Digital Agency – Software, Marketing, Design & Technology",
  description:
    "Full-service digital agency: custom software development, digital marketing, SEO, branding, web & app development, analytics, and automation. Build scalable digital growth.",
  keywords: [
    "digital agency",
    "software development company",
    "digital marketing agency",
    "web development",
    "app development",
    "branding agency",
    "SEO services",
    "digital growth",
    "Bizsun Creative",
  ],
  openGraph: {
    type: "website" as const,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image" as const,
  },
};

export const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about-us", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/software", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/digital", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/branding", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/app-web-development", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/analytics", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/automation", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/industry-focused", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/join-our-team", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/privacy-policy", priority: 0.5, changeFrequency: "yearly" as const },
];
