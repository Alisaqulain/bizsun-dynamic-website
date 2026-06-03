import type { Metadata } from "next";
import HomePage from "./components/home/HomePage";

export const metadata: Metadata = {
  title: "Digital Agency | Software, Marketing, Design & Technology",
  description:
    "Bizsun Creative builds scalable digital growth with strategy, design & technology. Custom software, digital marketing, SEO, branding, web & app development, analytics & automation for businesses.",
  keywords: [
    "digital agency",
    "software development",
    "digital marketing",
    "web development",
    "app development",
    "branding",
    "SEO",
    "digital growth",
    "Bizsun Creative",
  ],
  openGraph: {
    title: "Bizsun Creative | Building Scalable Digital Growth",
    description:
      "Strategy, design & technology. Software development, digital marketing, branding, web & app development, analytics & automation.",
    url: "/",
  },
};

export default function Home() {
  return <HomePage />;
}
