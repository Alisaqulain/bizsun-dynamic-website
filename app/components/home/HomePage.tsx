"use client";

import SmoothScroll from "./SmoothScroll";
import HomeHeader from "./HomeHeader";
import HeroSection from "./HeroSection";
import TrustSection from "../TrustSection";
import ServicesSection from "./ServicesSection";
import WhyChooseSection from "./WhyChooseSection";
import TestimonialsSection from "./TestimonialsSection";
import HomeTeamSection from "./HomeTeamSection";
import CTASection from "./CTASection";
import HomeFooter from "./HomeFooter";
import AnimatedBackground from "../effects/AnimatedBackground";
import CursorGlow from "../effects/CursorGlow";
import SectionGlow from "../effects/SectionGlow";
import FAQSection from "../../faq-section";

export default function HomePage() {
  return (
    <SmoothScroll>
      <div className="has-fixed-header relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
        <AnimatedBackground />
        <CursorGlow />

        <HomeHeader />

        <main className="relative z-10">
          <HeroSection />
          <TrustSection />
          <ServicesSection />
          <WhyChooseSection />
          <TestimonialsSection />
          <HomeTeamSection />
          <CTASection />
        </main>

        <SectionGlow variant="blue" className="relative z-10 home-faq-wrap py-8">
          <FAQSection />
        </SectionGlow>

        <div className="relative z-10">
          <HomeFooter />
        </div>
      </div>
    </SmoothScroll>
  );
}
