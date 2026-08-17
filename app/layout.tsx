import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SITE_URL, defaultMetadata } from "@/lib/seo";
import SiteLayout from "./components/layout/SiteLayout";
import JsonLd from "./components/seo/JsonLd";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/schema";

export function generateViewport() {
  return { themeColor: "#050505" };
}

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({ variable: "--font-instrument-serif", subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: defaultMetadata.title, template: `%s | ${defaultMetadata.siteName}` },
  description: defaultMetadata.description,
  keywords: defaultMetadata.keywords,
  authors: [{ name: defaultMetadata.siteName, url: SITE_URL }],
  creator: defaultMetadata.siteName,
  publisher: defaultMetadata.siteName,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: defaultMetadata.openGraph.type,
    locale: defaultMetadata.openGraph.locale,
    url: SITE_URL,
    siteName: defaultMetadata.siteName,
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    images: [{ url: "/bizsun-logo.png", width: 1200, height: 630, alt: "Bizsun Creative — IT Company in Bengaluru" }],
  },
  twitter: {
    card: defaultMetadata.twitter.card,
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    images: ["/bizsun-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  category: "technology",
  verification: {
    google: "BzjDtgiexVGjHxPEeUa2akfyGdMJ8uUYo5TPrqWvTlg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${instrumentSerif.variable} antialiased`} suppressHydrationWarning>
        <JsonLd
          data={[
            organizationSchema(),
            localBusinessSchema("IT Services, Digital Marketing, SEO, Web Development & Branding"),
            websiteSchema(),
          ]}
        />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
