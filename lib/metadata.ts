import type { Metadata } from "next";
import { SITE_URL, defaultMetadata } from "./seo";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const ogTitle = absoluteTitle ? title : `${title} | ${defaultMetadata.siteName}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      type: "website",
      images: [{ url: "/bizsun-logo.png", width: 1200, height: 630, alt: "Bizsun Creative — IT Company in Bengaluru" }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["/bizsun-logo.png"],
    },
  };
}
