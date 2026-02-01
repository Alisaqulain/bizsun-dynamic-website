import Image from "next/image";
import Link from "next/link";
import FAQSection from "../faq-section";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
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
          <h1 className="text-3xl md:text-7xl lg:text-8xl font-bold text-[#FF9000] mb-6 mt-2 leading-tight animate-fadeInUp" style={{ fontFamily: 'var(--font-syne)' }}>
          Software Development <br className="hidden sm:block" />
That Powers <br className="hidden sm:block" />
Your Business Growth
          </h1>

      

          {/* Description */}
          <p className="text-base md:text-lg text-[#6B6B6B] max-w-4xl mb-12 leading-relaxed animate-fadeInUp animation-delay-300">
          We build custom software solutions tailored to your business needs. From enterprise systems to API integrations, <br /> we deliver scalable, secure, and maintainable software that drives real business value.          </p>

          {/* CTA Button */}
          <Link href="/contact" className="text-white px-17 py-5 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:opacity-90 hover:scale-105 hover:shadow-xl animate-fadeInUp animation-delay-400 inline-block" style={{ background: 'linear-gradient(to right, #64CB71, #418F40)' }}>
            Get in Touch
          </Link>

          {/* Trusted By Section */}
        </main>
      </div>
          <div className="mt-[-30] w-full flex flex-col items-center"   style={{
              background: 'linear-gradient(to bottom right, rgba(100, 203, 113, 0.1), rgba(255, 240, 150, 0.2))'
            }}>
            <Image
              src="/Container.png"
              alt="Trusted By Companies"
              width={1200}
              height={200}
              className=" w-full max-w-8xl"
            />
         

       

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
                    Is your software limiting your business growth?
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                    <img src="/YERROW.png" alt="" />

                      <p className="text-lg text-gray-700">Using generic software that doesn't fit your workflow?</p>
                    </li>
                    <li className="flex items-start gap-3">
                    <img src="/YERROW.png" alt="" />

                      <p className="text-lg text-gray-700">Systems that don't scale with your business?</p>
                    </li>
                    <li className="flex items-start gap-3">
                    <img src="/YERROW.png" alt="" />

                      <p className="text-lg text-gray-700">Struggling with system integrations and data silos?</p>
                    </li>
                    <li className="flex items-start gap-3">
                    <img src="/YERROW.png" alt="" />

                      <p className="text-lg text-gray-700">Need ongoing support but can't find reliable developers?</p>
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
                    Our Approach to Software Development
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Our software development process is built on understanding your business needs first. We design and build custom solutions that integrate seamlessly with your existing systems, scale with your growth, and deliver measurable value. From initial planning to deployment and ongoing maintenance, we ensure your software works for your business—not against it.
                  </p>
                  {/* CTA Button */}
          <Link href="/contact" className="text-white cursor-pointer px-6 sm:px-12 md:px-6 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:opacity-90 hover:scale-105 hover:shadow-xl animate-fadeInUp animation-delay-400" style={{ background: 'linear-gradient(to right, #64CB71, #418F40)' }}>
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
                  What&apos;s Included in Our Software Development <br /> Services
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left: Services List */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                    <img src="/YERROW.png" alt="" />

                      <div>
                        <p className="font-semibold text-lg text-black">Custom Software Development</p>
                        <p className="text-gray-700">Tailored solutions for your business needs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                    <img src="/YERROW.png" alt="" />

                      <div>
                        <p className="font-semibold text-lg text-black">Enterprise Software Solutions</p>
                        <p className="text-gray-700">Scalable systems for large organizations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                    <img src="/YERROW.png" alt="" />

                      <div>
                        <p className="font-semibold text-lg text-black">API Development & Integration</p>
                        <p className="text-gray-700">Seamless connectivity between systems</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                    <img src="/YERROW.png" alt="" />

                      <div>
                        <p className="font-semibold text-lg text-black">Software Maintenance & Support</p>
                        <p className="text-gray-700">Ongoing updates and technical assistance</p>
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
                  <img src="/YERROW.png" alt="" />

                    <p className="text-lg text-gray-700"><span className="font-semibold text-black">Growing businesses</span> needing custom software solutions</p>
                  </div>
                  <div className="flex items-start gap-3">
                  <img src="/YERROW.png" alt="" />

                    <p className="text-lg text-gray-700"><span className="font-semibold text-black">Enterprises</span> requiring scalable and integrated systems</p>
                  </div>
                  <div className="flex items-start gap-3">
                  <img src="/YERROW.png" alt="" />

                    <p className="text-lg text-gray-700"><span className="font-semibold text-black">Companies</span> struggling with system integrations</p>
                  </div>
                  <div className="flex items-start gap-3">
                  <img src="/YERROW.png" alt="" />

                    <p className="text-lg text-gray-700"><span className="font-semibold text-black">Organizations</span> needing ongoing software maintenance</p>
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
            

           {/* Testimonials Section */}
        <section
          className="w-full py-20 px-6"
          style={{
            background: 'linear-gradient(to bottom, rgba(100, 203, 113, 0.05), rgba(255, 255, 255, 0.9))'
          }}
        >
          <div className="container mx-auto max-w-7xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-12 px-4">
              <div>
                <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-2">TESTIMONIALS</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                  WHAT MY CLIENTS SAY
                </h2>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right">
                <p className="text-xs sm:text-sm text-gray-400">Total Reviews</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#CACACE]">323</p>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 px-4">
              {/* Main Testimonial Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-96 lg:h-[360px]">
                <div className="relative w-full h-full">
                  <Image
                    src="/Mask group (1).png"
                    alt="Client testimonial"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
              </div>

              {/* Facts & Numbers Card */}
              <div className="bg-[#FFD59F] rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col justify-center shadow-lg">
                <p className="text-xs sm:text-sm text-[#1B1D1E99] uppercase tracking-wider mb-4 sm:mb-8">FACTS & NUMBERS</p>
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-3xl font-bold text-[#1B1D1E] mb-4">91%</div>
                <p className="text-base sm:text-lg md:text-xl lg:text-[15px] text-[#1B1D1E]">
                  clients recommend our <br className="hidden sm:block" /> services.
                </p>
              </div>
            </div>

            {/* Bottom Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className={`bg-white rounded-2xl p-6 shadow-lg relative hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fadeInUp ${item === 1 ? 'animation-delay-100' : item === 2 ? 'animation-delay-200' : 'animation-delay-300'}`}>
                  {/* Social Icons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-600"></div>
                    <div className="w-6 h-6 rounded-full bg-green-600"></div>
                    <div className="w-6 h-6 rounded-full bg-green-600"></div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Emily Johnson</h3>
                    <p className="text-sm text-gray-500">USA, California</p>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Damien&apos;s photography doesn&apos;t just capture moments; it captures emotions. Hes work is simply mesmerizing.
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center gap-3">
              <button className="w-12 h-12 rounded-lg bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-lg bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

          {/* Team Section */}
          <section 
            className="w-full py-20 px-6"
            style={{
              background: 'linear-gradient(to bottom right, rgba(100, 203, 113, 0.1), rgba(255, 240, 150, 0.2))'
            }}
          >
                        {/* Meet the Team Section */}
<div className="">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 text-center mb-14">
    Meet the creative minds <br />
    behind <span className="italic font-normal">our success</span>
  </h2>

  {/* Profile Cards Slider */}
  <div className="overflow-hidden mb-10 relative">
    <style dangerouslySetInnerHTML={{__html: `
      @keyframes scroll-right-to-left {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(-100% / 2));
        }
      }
      .slider-infinite {
        animation: scroll-right-to-left 25s linear infinite;
        width: max-content;
      }
      .slider-infinite:hover {
        animation-play-state: paused;
      }
      @media (max-width: 640px) {
        .slider-infinite {
          animation: scroll-right-to-left 30s linear infinite;
        }
      }
    `}} />
    <div className="flex slider-infinite">
      {[
        { name: "Shreya Gupta", role: "Graphic Designer", image: "/WhatsApp Image 2026-01-17 at 10.52.06 AM.jpeg" },
        { name: "Praful Kumar", role: "A Video Editor and Graphic Designer", image: "/WhatsApp Image 2026-01-16 at 1.55.21 PM.jpeg" },
        { name: "Syed Ali Zaddi", role: "Web & App Developer", image: "/WhatsApp Image 2026-01-16 at 1.56.10 PM.jpeg" }
      ].concat([
        { name: "Anas Ansari", role: "Web & App Developer <br />  SEO Expert", image: "/IMG-20241207-WA0010.jpg" },
        { name: "Priyanka Chopra", role: "Social Media Specialist", image: "/WhatsApp Image 2026-01-16 at 1.55.21 PM.jpeg" },
        { name: "Priyanka Chopra", role: "UI / UX Designer", image: "/WhatsApp Image 2026-01-16 at 1.56.10 PM.jpeg" }
      ]).map((member, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-screen sm:w-[400px] md:w-[350px] px-4"
        >
          <div
            className="rounded-3xl p-2 shadow-md bg-yellow-300 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            style={{ border: '1px solid #DFF2E1' }}
          >
            <div className="relative w-full h-92 rounded-2xl overflow-hidden bg-yellow-300">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[85%] bg-[#DFF2E1] rounded-b-3xl rounded-t-3xl px-2 py-2 text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: member.role }}></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
    {/* Let's Collaborate Section */}
    <div className="text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                  Let&apos;s shape the future of your <span className="italic font-serif">brand</span>
                </h2>
                <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                  From strategy to execution, we help brands grow with clarity, consistency, and thoughtfully crafted digital solutions.
                </p>
                     {/* CTA Button */}
          <Link href="/contact" className="text-white cursor-pointer px-6 sm:px-12 md:px-6 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:opacity-90 hover:scale-105 hover:shadow-xl animate-fadeInUp animation-delay-400" style={{ background: 'linear-gradient(to right, #64CB71, #418F40)' }}>
          Let&apos;s Collaborate
           <img src="/Background (1).png" alt="" className="inline ml-3 mb-1" />
          </Link>
              </div>
</div>
 </section>
</div>



          {/* FAQ Section */}
          <FAQSection />

          {/* Footer */}
          <Footer />
    </div>
  );
}

