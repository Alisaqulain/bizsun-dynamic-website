import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SITE_URL, defaultMetadata } from "@/lib/seo";
import SiteLayout from "./components/layout/SiteLayout";

export function generateViewport() {
  return { themeColor: "#050505" };
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultMetadata.title,
    template: `%s | ${defaultMetadata.siteName}`,
  },
  description: defaultMetadata.description,
  keywords: defaultMetadata.keywords,
  authors: [{ name: defaultMetadata.siteName, url: SITE_URL }],
  creator: defaultMetadata.siteName,
  publisher: defaultMetadata.siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: defaultMetadata.openGraph.type,
    locale: defaultMetadata.openGraph.locale,
    url: SITE_URL,
    siteName: defaultMetadata.siteName,
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
        alt: `${defaultMetadata.siteName} - Digital Agency`,
      },
    ],
  },
  twitter: {
    card: defaultMetadata.twitter.card,
    title: defaultMetadata.title,
    description: defaultMetadata.description,
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
  other: {
    "format-detection": "telephone=no",
  },
  verification: {
    // Add when you have them: google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: defaultMetadata.siteName,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: defaultMetadata.description,
  sameAs: [
    // Add your social URLs when available, e.g.:
    // "https://www.linkedin.com/company/bizsun-creative",
    // "https://twitter.com/bizsuncreative",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: `${SITE_URL}/contact`,
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: defaultMetadata.siteName,
  url: SITE_URL,
  description: defaultMetadata.description,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/contact?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${instrumentSerif.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
