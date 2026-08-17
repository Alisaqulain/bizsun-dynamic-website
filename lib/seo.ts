/**
 * Central SEO config. Set your live domain here before deployment.
 */
import { localKeywords } from "./business";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bizsuncreative.com";

/** Keep in sync with `public/robots.txt` (Sitemap line uses SITE_URL at deploy). */
export const ROBOTS_SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

export const defaultMetadata = {
  siteName: "Bizsun Creative",
  title: "IT Company in Bangalore | Digital Marketing & Web Development | Bizsun Creative",
  description:
    "Bizsun Creative is an IT company in Bangalore & Bengaluru (BTM Layout, near Electronic City) offering digital marketing, SEO, web development, software, and branding services.",
  keywords: [...localKeywords],
  openGraph: {
    type: "website" as const,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image" as const,
  },
};

export const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/digital-marketing-agency-bangalore", priority: 0.95, changeFrequency: "weekly" as const },
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
  { path: "/get-started", priority: 0.85, changeFrequency: "monthly" as const },
];
