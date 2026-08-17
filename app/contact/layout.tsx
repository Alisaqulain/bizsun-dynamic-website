import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us | IT Company in BTM Layout, Bengaluru",
  description:
    "Visit Bizsun Creative at BTM Layout, Bengaluru (near Electronic City). Call +91 7044178863 for digital marketing, SEO, web development & IT services in Bangalore.",
  path: "/contact",
  keywords: ["contact Bizsun Creative", "IT company BTM Layout", "digital agency Bengaluru contact", "IT company near Electronic City"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
