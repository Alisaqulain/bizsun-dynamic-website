"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function TestimonialSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const testimonials = [
    {
      name: "SHYAM STEEL",
      role: "Client Review",
      text: "They always deliver more than what they commit. The value addition is commendable.",
    },
    {
      name: "RUPA",
      role: "Client Review",
      text: "The team pulled the shoot off brilliantly in the stipulated time. Kudos!",
    },
  ];


  const testimonialImages = [
    "/Picture1.png",
    "/Picture3.png",
    "/Picture4.png",
    "/Picture5.png",
    "/Picture6.png",
    "/Picture7.png",
    "/Picture8.png",
    "/Picture9.png",
    "/Picture10.png",
    "/Picture11.png",
    "/Picture12.png",
    "/Picture13.png",
  ];

  useEffect(() => {
    if (testimonialImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % testimonialImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [testimonialImages.length]);

  return (
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
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 mb-8 px-4">
          {/* Main Testimonial Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-96 lg:h-[360px]">
            <div className="relative w-full h-full">
              <Image
                src={testimonialImages[currentImageIndex]}
                // src="/Picture1.png"
                alt="Client testimonial"
                fill
                className="object-cover transition-opacity duration-500"
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
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg relative hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fadeInUp ${index === 0 ? 'animation-delay-100' : index === 1 ? 'animation-delay-200' : 'animation-delay-300'}`}>
              {/* Social Icons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-6 h-6 rounded-full bg-green-600"></div>
                <div className="w-6 h-6 rounded-full bg-green-600"></div>
                <div className="w-6 h-6 rounded-full bg-green-600"></div>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
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
                {testimonial.text}
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
  );
}
