import HomePage from "./components/home/HomePage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "IT Company in Bangalore | Digital Marketing & Web Development | Bizsun Creative",
  description:
    "Bizsun Creative — IT company in Bangalore & Bengaluru (BTM Layout, near Electronic City). Digital marketing, SEO, web development, software & branding. Get a free consultation.",
  path: "/",
  keywords: [
    "IT company in Bangalore",
    "IT company in Bengaluru",
    "digital marketing agency in Bangalore",
    "web development company in Bangalore",
    "SEO company in Bangalore",
    "IT company in BTM Layout",
    "IT company near Electronic City",
  ],
  absoluteTitle: true,
});

export default function Home() {
  return <HomePage />;
}
