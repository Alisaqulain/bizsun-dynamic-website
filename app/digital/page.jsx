import Image from "next/image";
import ArrowIcon from "../components/icons/ArrowIcon";
import Link from "next/link";
import FAQSection from "../faq-section";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialSection from "@/components/TestimonialSection";
import TeamSection from "../components/TeamSection";
import TrustSection from "../components/TrustSection";

export const metadata = {
  title: "Digital Marketing | SEO, Social Media & Content",
  description:
    "Digital marketing services: SEO, SEM, social media marketing, content marketing, and email marketing. Data-driven campaigns that drive growth and engagement.",
  keywords: ["digital marketing", "SEO services", "SEM", "social media marketing", "content marketing", "email marketing"],
  openGraph: { title: "Digital Marketing Services | Bizsun Creative", url: "/digital" },
};

export default function DigitalPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        // style={{ 
        //   background: 'linear-gradient(to bottom, rgba(100, 203, 113, 0.3), rgba(100, 203, 113, 0.5))',
        // }}
      >
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-gray-400"></div>
          <div className="absolute top-40 right-32 w-48 h-48 rounded-full border border-gray-400"></div>
          <div className="absolute bottom-32 left-1/3 w-32 h-32 rounded-full border border-gray-400"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-px bg-gray-400 transform rotate-12"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-px bg-gray-400 transform -rotate-12"></div>
        </div>
      </div>

      <div className="relative z-10"  style={{ 
          background: 'linear-gradient(to bottom, rgba(100, 203, 113, 0.3), rgba(100, 203, 113, 0.5))',
        }}>
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <main className="container mx-auto px-6 py-20 flex flex-col items-center text-center relative min-h-[80vh]">
          {/* Labels with arrows */}
          <div className="absolute top-10 right-[30%] animate-float animation-delay-100 hidden sm:block">
             <img src="/Group 27166.png" alt="" />
          </div>
          <div className="absolute top-110 left-[7%] animate-float animation-delay-300 hidden sm:block">
            <img src="/Group 27165.png" alt="" />
          </div>
          <div className="absolute top-110 right-[2%] animate-float animation-delay-500 hidden sm:block">
              <img src="/Group 27164.png" alt="" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-[#FF9000] mb-6 mt-2 leading-tight animate-fadeInUp" style={{ fontFamily: 'var(--font-syne)' }}>
          Digital Marketing <br />
That Drives <br />
Real Business Growth
          </h1>

      

          {/* Description */}
          <p className="text-base md:text-lg text-[#6B6B6B] max-w-4xl mb-12 leading-relaxed animate-fadeInUp animation-delay-300">
          We don’t just run campaigns — we build data-driven strategies that attract the right audience, generate <br /> qualified leads, and turn attention into revenue.          </p>

          {/* CTA Button */}
          <Link href="/contact" className="btn-glow btn-glow-lg animate-fadeInUp animation-delay-400">
            Get in Touch
          </Link>

          {/* Trusted By Section */}
        </main>
      </div>
      <TrustSection variant="strip" />
          <div className="w-full flex flex-col items-center" style={{
              background: 'linear-gradient(to bottom right, rgba(100, 203, 113, 0.1), rgba(255, 240, 150, 0.2))'
            }}>

          {/* Digital Marketing Challenges & Solution Section */}
          
          <section 
            className="w-full py-20 px-6 bg-white"
            style={{
              background: 'linear-gradient(to bottom right, rgba(100, 203, 113, 0.1), rgba(255, 240, 150, 0.2))'
              
            }}
           
          >
            <div className="container mx-auto max-w-7xl">
              {/* Top Section: Problem Identification */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                {/* Left: Text Content */}
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-black mb-8 leading-tight">
                    Struggling to get consistent results from digital marketing?
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                    <ArrowIcon />

                      <p className="text-lg text-gray-700">Spending money on ads but not getting quality leads?</p>
                    </li>
                    <li className="flex items-start gap-3">
                    <ArrowIcon />

                      <p className="text-lg text-gray-700">Social media engagement high, but sales low?</p>
                    </li>
                    <li className="flex items-start gap-3">
                    <ArrowIcon />

                      <p className="text-lg text-gray-700">Getting website traffic, but no conversions?</p>
                    </li>
                    <li className="flex items-start gap-3">
                    <ArrowIcon />

                      <p className="text-lg text-gray-700">No clear strategy, sirf random marketing activities?</p>
                    </li>
                  </ul>
                </div>
                {/* Right: Illustration */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-lg">
                    <Image
                      src="/ChatGPT Image Jan 12, 2026, 10_25_56 AM 1.png"
                      alt="Struggling with digital marketing"
                      width={600}
                      height={600}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Section: Solution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Text Content */}
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">SOLUTION IN ACTION</p>
                  <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-black mb-6 leading-tight">
                    Our Approach to Digital Marketing
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Our approach to digital marketing is driven by strategy, data, and clarity. We begin by understanding your business goals and audience, then create custom marketing strategies designed for real impact. Through continuous optimization and transparent execution, we focus on generating meaningful engagement, quality leads, and sustainable growth—ensuring every effort contributes to measurable business outcomes.
                  </p>
                  {/* CTA Button */}
          <Link href="/contact" className="btn-glow animate-fadeInUp animation-delay-400">
          Questions? Talk to us

          </Link>
                </div>

                {/* Right: Four-Step Process Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Step 01: UNDERSTAND */}
                 <img src="/2.png" alt="" />

                  {/* Step 02: STRATEGIZE */}
                  <img src="/2 (1).png" alt="" />

                  {/* Step 03: EXECUTE */}
                <img src="/3.png" alt="" />

                  {/* Step 04: OPTIMIZE & SCALE */}
                 <img src="/4.png" alt="" />
                </div>
              </div>
            </div>
          </section>

          <section 
            className="w-full py-20 px-6 bg-white"
            style={{
              background: 'linear-gradient(to bottom right, rgba(100, 203, 113, 0.1), rgba(255, 240, 150, 0.2))'
            }}
            
          >
            <div className="container mx-auto max-w-7xl">
              {/* 1. What's Included in Our Digital Marketing Services */}
              <div className="mb-20">
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-black mb-12">
                  What&apos;s Included in Our Digital Marketing <br /> Services
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left: Services List */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                    <ArrowIcon />

                      <div>
                        <p className="font-semibold text-lg text-black">Search Engine Optimization (SEO)</p>
                        <p className="text-gray-700">Improve visibility, rankings, and long-term organic traffic</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                    <ArrowIcon />

                      <div>
                        <p className="font-semibold text-lg text-black">Social Media Marketing (SMM)</p>
                        <p className="text-gray-700">Build brand awareness and meaningful engagement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                    <ArrowIcon />

                      <div>
                        <p className="font-semibold text-lg text-black">Pay-Per-Click Advertising (PPC)</p>
                        <p className="text-gray-700">Run performance-focused ad campaigns for leads and sales</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                    <ArrowIcon />

                      <div>
                        <p className="font-semibold text-lg text-black">Content Marketing</p>
                        <p className="text-gray-700">Create content that educates, attracts, and converts</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                    <ArrowIcon />

                      <div>
                        <p className="font-semibold text-lg text-black">Email Marketing & Automation</p>
                        <p className="text-gray-700">Nurture leads and retain customers with smart workflows</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                    <ArrowIcon />

                      <div>
                        <p className="font-semibold text-lg text-black">Influencer Marketing</p>
                        <p className="text-gray-700">Collaborate with creators to build trust and reach</p>
                      </div>
                    </div>
                  </div>
                  {/* Right: Illustration */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-full">
                      <Image
                        src="/ChatGPT Image Jan 16, 2026, 11_12_36 AM 1.png"
                        alt="Digital Marketing Team"
                        width={800}
                        height={800}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Why Businesses Choose Us */}
              <div className="mb-20">
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-black mb-12">
                  Why Businesses Choose Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                 <img src="/2 (3).png" alt="" />
                 <img src="/3 (1).png" alt="" />
                 <img src="/5.png" alt="" />
                <img src="/4 (1).png" alt="" />
                 <img src="/6.png" alt="" />
                </div>
              </div>

              {/* 3. This Service Is Ideal For */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12">
                  This Service Is Ideal For
                </h2>
                <div className="max-w-4xl space-y-4">
                  <div className="flex items-start gap-3">
                  <ArrowIcon />

                    <p className="text-lg text-gray-700"><span className="font-semibold text-black">Local businesses</span> looking to grow visibility and leads</p>
                  </div>
                  <div className="flex items-start gap-3">
                  <ArrowIcon />

                    <p className="text-lg text-gray-700"><span className="font-semibold text-black">Startups</span> aiming for fast and sustainable growth</p>
                  </div>
                  <div className="flex items-start gap-3">
                  <ArrowIcon />

                    <p className="text-lg text-gray-700"><span className="font-semibold text-black">E-commerce brands</span> focused on conversions and sales</p>
                  </div>
                  <div className="flex items-start gap-3">
                  <ArrowIcon />

                    <p className="text-lg text-gray-700"><span className="font-semibold text-black">Service-based businesses</span> needing qualified inquiries</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        
          <section 
            className="w-full pb-10 px-6"
            style={{
              background: 'linear-gradient(to right, rgba(100, 203, 113, 0.05), rgba(255, 255, 255, 0.8))'
            }}
          >
            <div className="container mx-auto max-w-6xl">
              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-2xl font-bold text-[#181818] text-center mb-16 leading-tight max-w-5xl mx-auto">
                Delivering well-crafted, experience-driven & technology-powered <br /> solutions that help brands grow with clarity and confidence
              </h2>

              {/* Statistics Counters */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <div className="text-center animate-fadeInUp animation-delay-100 hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                    +150
                  </div>
                  <div className="text-base md:text-lg text-black">
                    Projects Delivered
                  </div>
                </div>
                <div className="text-center animate-fadeInUp animation-delay-200 hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                    +7
                  </div>
                  <div className="text-base md:text-lg text-black">
                    Years of Experience
                  </div>
                </div>
                <div className="text-center animate-fadeInUp animation-delay-300 hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                    +80
                  </div>
                  <div className="text-base md:text-lg text-black">
                    Clients Worked With
                  </div>
                </div>
                <div className="text-center animate-fadeInUp animation-delay-400 hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                    +10
                  </div>
                  <div className="text-base md:text-lg text-black">
                    Awards & Recognition
                  </div>
                </div>
              </div>

            </div>
              {/* Services List - Infinite Slider */}
              <div className="w-full overflow-hidden">
                <div className="flex items-center gap-3 md:gap-4 text-sm md:text-base animate-scroll-left whitespace-nowrap">
                  {/* First set of items */}
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-black uppercase flex-shrink-0">DIGITAL MARKETING</span>
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-black uppercase flex-shrink-0">WEBSITE, APP & BRANDING</span>
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-black uppercase flex-shrink-0">MOBILE & WEB APP DEVELOPMENT</span>
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-black uppercase flex-shrink-0">ANALYTICS & GROWTH SOLUTIONS</span>
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-black uppercase flex-shrink-0">AUTOMATION & CRM SOLUTIONS</span>
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-black uppercase flex-shrink-0">INDUSTRY-FOCUSED</span>
                  
                  {/* Duplicate set for seamless loop */}
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-black uppercase flex-shrink-0">DIGITAL MARKETING</span>
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-black uppercase flex-shrink-0">WEBSITE, APP & BRANDING</span>
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-black uppercase flex-shrink-0">MOBILE & WEB APP DEVELOPMENT</span>
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-black uppercase flex-shrink-0">ANALYTICS & GROWTH SOLUTIONS</span>
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-black uppercase flex-shrink-0">AUTOMATION & CRM SOLUTIONS</span>
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-black uppercase flex-shrink-0">INDUSTRY-FOCUSED</span>
                </div>
              </div>
          </section>
            

        <TestimonialSection />

          {/* Team Section */}
          <TeamSection />
</div>



          {/* FAQ Section */}
          <FAQSection />

          {/* Footer */}
          <Footer />
    </div>
  );
}

