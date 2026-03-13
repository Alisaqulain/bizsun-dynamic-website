import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description:
    "Ready to transform your brand? Contact Bizsun Creative for software development, digital marketing, branding, and web & app development. Start a conversation today.",
  keywords: ["contact Bizsun Creative", "digital agency contact", "get a quote", "project inquiry"],
  openGraph: { title: "Contact Bizsun Creative | Get in Touch", url: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
