import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
      >
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full border border-gray-400"></div>
          <div className="absolute top-40 right-8 sm:right-16 md:right-32 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 rounded-full border border-gray-400"></div>
          <div className="absolute bottom-32 left-1/3 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 rounded-full border border-gray-400"></div>
          <div className="absolute top-1/2 right-1/4 w-48 sm:w-64 md:w-96 h-px bg-gray-400 transform rotate-12 hidden sm:block"></div>
          <div className="absolute top-1/3 left-1/4 w-40 sm:w-60 md:w-80 h-px bg-gray-400 transform -rotate-12 hidden sm:block"></div>
        </div>
      </div>

      <div className="relative z-10"  style={{ 
          background: 'linear-gradient(to bottom, rgba(100, 203, 113, 0.3), rgba(100, 203, 113, 0.5))',
        }}>
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col items-center text-center relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FF9000] mb-4 sm:mb-6 mt-2 leading-tight animate-fadeInUp px-4" style={{ fontFamily: 'var(--font-syne)' }}>
            Building Scalable Digital <br className="hidden sm:block" /> Growth for Modern Brands
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#6B6B6B] max-w-3xl mb-8 sm:mb-12 leading-relaxed animate-fadeInUp animation-delay-300 px-4">
            Bizsun Creative is a full-service digital agency focused on helping businesses grow through strategy, creativity, and technology. We work with startups, growing brands, and enterprises to build strong digital foundations, meaningful brand experiences, and performance-driven marketing systems. From digital marketing and branding to web and app development, our solutions are designed to deliver measurable results, long-term value, and sustainable growth in an ever-evolving digital landscape.
          </p>

          {/* Our Story Section */}
          <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8">Our Story</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Bizsun Creative was founded with a simple belief – digital success is not about random tactics, but about clear strategy and consistent execution. What started as a small creative initiative has grown into a multi-disciplinary digital agency serving clients across industries and cities. Over the years, we have partnered with ambitious businesses to transform ideas into impactful digital solutions, combining marketing, design, technology, and automation under one roof.
            </p>
          </section>
        </main>
      </div>

      {/* Meet the Founder Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">Meet the Founder</h2>
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">Abhinav – Founder & Strategic Lead</h3>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">IIT Madras</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Bizsun Creative is led by Abhinav, an IIT Madras alumnus, whose strong foundation in technology and problem-solving drives the agency&apos;s strategic approach. With a deep understanding of digital systems, business growth, and innovation, Abhinav envisioned Bizsun as an agency that bridges creativity with logic. His leadership ensures every solution is data-driven, scalable, and aligned with real business goals – not just visual appeal.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-80 md:h-96">
              <Image
                src="/Frame 30.png"
                alt="Abhinav - Founder & Strategic Lead"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8">Our Approach</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          At Bizsun Creative, we don&apos;t believe in one-size-fits-all solutions. Our approach starts with understanding your business, audience, and objectives. We then design strategies that align creativity with performance, execution with analytics, and short-term wins with long-term growth. Every project goes through continuous optimization, ensuring clarity, transparency, and measurable impact at every stage.
        </p>
      </section>

      {/* Our Presence Across India Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Our Presence Across India</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          With a growing team and operations across multiple cities, Bizsun Creative serves clients nationwide with a local understanding and global outlook.
        </p>
        
        {/* Cities List */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Bangalore</span>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Kolkata</span>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Noida</span>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Ahmedabad</span>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Varanasi</span>
        </div>
        
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Our distributed presence allows us to collaborate closely with businesses across regions while maintaining consistent quality and service standards.
        </p>
      </section>

      {/* Let's Build Something Impactful Together Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Let&apos;s Build Something Impactful Together</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          Whether you&apos;re a startup or an established brand, we&apos;re here to help you grow with clarity, creativity, and confidence.
        </p>
        <Link href="/contact" className="text-white cursor-pointer px-6 sm:px-12 md:px-6 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:opacity-90 hover:scale-105 hover:shadow-xl animate-fadeInUp animation-delay-400" style={{ background: 'linear-gradient(to right, #64CB71, #418F40)' }}>
          Let&apos;s Collaborate
           <img src="/Background (1).png" alt="" className="inline ml-3 mb-1" />
          </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

