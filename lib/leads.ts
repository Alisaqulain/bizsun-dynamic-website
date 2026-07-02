import { services } from "./home-data";

/** WhatsApp number for lead notifications (Abhinav). Override via env in production. */
export const LEAD_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_LEAD_NUMBER || "919113661064";

export const leadServiceOptions = [
  ...services.map((s) => s.title),
  "Multiple Services",
  "Not sure yet — need consultation",
];

export type LeadFormData = {
  name: string;
  contact: string;
  businessName: string;
  service: string;
  location: string;
};

export function buildLeadWhatsAppMessage(data: LeadFormData): string {
  const lines = [
    "🆕 *New Lead — Bizsun Creative*",
    "",
    `*Name:* ${data.name.trim()}`,
    `*Contact:* ${data.contact.trim()}`,
    `*Business:* ${data.businessName.trim()}`,
    `*Service Required:* ${data.service}`,
    `*Location:* ${data.location.trim()}`,
    "",
    "_Submitted via Bizsun landing page_",
  ];
  return lines.join("\n");
}

export function getLeadWhatsAppUrl(data: LeadFormData): string {
  const text = encodeURIComponent(buildLeadWhatsAppMessage(data));
  const phone = LEAD_WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${text}`;
}
