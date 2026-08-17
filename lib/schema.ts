import { business } from "./business";
import { SITE_URL, defaultMetadata } from "./seo";

export type FaqItem = { question: string; answer: string };
export type BreadcrumbItem = { name: string; path: string };

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: business.address.streetAddress,
    addressLocality: business.address.addressLocality,
    addressRegion: business.address.addressRegion,
    postalCode: business.address.postalCode,
    addressCountry: business.address.addressCountry,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    url: SITE_URL,
    logo: `${SITE_URL}/bizsun-logo.png`,
    description: defaultMetadata.description,
    email: business.email,
    telephone: business.phone,
    sameAs: business.sameAs,
    address: postalAddress(),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: business.phone,
      email: business.email,
      url: `${SITE_URL}/contact`,
      areaServed: "IN",
    },
  };
}

export function localBusinessSchema(serviceType?: string) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: business.name,
    url: SITE_URL,
    logo: `${SITE_URL}/bizsun-logo.png`,
    image: `${SITE_URL}/bizsun-logo.png`,
    description: defaultMetadata.description,
    telephone: business.phone,
    email: business.email,
    sameAs: business.sameAs,
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: business.areaServed.map((name) => ({ "@type": "Place", name })),
    openingHours: business.openingHours,
    hasMap: business.mapsLinkUrl,
  };
  if (serviceType) schema.serviceType = serviceType;
  return schema;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: SITE_URL,
    description: defaultMetadata.description,
    publisher: { "@type": "Organization", name: business.name },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
