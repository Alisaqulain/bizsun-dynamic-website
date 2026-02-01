"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FAQSection from "../faq-section";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";



export default function JoinOurTeam() {
  const router = useRouter();

  const values = [
    {
      title: "Company Values",
      desc: "At Bizsun Creative, trust, transparency, and collaboration form the foundation of everything we do. We believe in learning together,supporting one another, and creating work that we can truly be proud of.",
      image: "/join 1.1.png",
    },
    {
      title: "Friendly & Supportive Culture",
      desc: "We foster a positive and inclusive work environment where ideas are respected, teamwork is encouraged, and open communication helps everyone feel valued and heard.",
      image: "/join 1.2.png",
    },
    {
      title: "Work–Life Balance",
      desc: "We understand that great work comes from a healthy balance. Flexible work practices and mutual respect help our team manage both professional goals and personal well-being.",
      image: "/join 1.3.png",
    },
    {
      title: "Continuous Growth",
      desc: "Learning never stops at Bizsun Creative. We support skill development through real projects, mentorship, and opportunities that help you grow both professionally and creatively.",
      image: "/join 1.4.png",
    },
    {
      title: "Meaningful Work & Ownership",
      desc: "At Bizsun Creative, your work has real impact. You get ownership of projects, the freedom to take initiative, and the opportunity to see your ideas turn into meaningful outcomes for real businesses.",
      image: "/join 1.5.png",
    },
  ]

  const images = [
    {
      image: "/join 1.1.png",
      title: "I truly appreciate the culture at Bizsun Creative. It’s a place where ideas are respected, collaboration is encouraged, and learning happens every day. The team is supportive, and there’s always room to grow, experiment, and improve your skills while working on meaningful projects.",
      name: "Dolly Singh",
      position: "Product Designer"
    },
    {
      image: "/join 1.2.png",
      title: "Bizsun Creative encourages innovation and teamwork. I love how every challenge here turns into a learning opportunity, pushing me to deliver my best work.",
      name: "Aman Verma",
      position: "UI/UX Designer"
    },
    {
      image: "/join 1.3.png",
      title: "The collaborative environment at Bizsun Creative makes problem-solving enjoyable. Everyone’s ideas matter, and that motivates me to think creatively every day.",
      name: "Neha Sharma",
      position: "Frontend Developer"
    },
    {
      image: "/join 1.4.png",
      title: "What I value most about Bizsun Creative is the trust and flexibility. It allows me to experiment, improve my skills, and work on impactful digital products.",
      name: "Rahul Mehta",
      position: "Digital Marketing Strategist"
    },
    {
      image: "/join 1.5.png",
      title: "Bizsun Creative is a place where passion meets purpose. The supportive culture and inspiring projects make it a great environment to grow your career.",
      name: "Priya Nair",
      position: "Content Strategist"
    }
  ];


  const [active, setActive] = useState(0);

  const nextImage = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };



  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background + pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="hidden sm:block absolute top-20 left-20 w-64 h-64 rounded-full border border-gray-400" />
          <div className="hidden sm:block absolute top-40 right-32 w-48 h-48 rounded-full border border-gray-400" />
          <div className="hidden sm:block absolute bottom-32 left-1/3 w-32 h-32 rounded-full border border-gray-400" />
          <div className="hidden sm:block absolute top-1/2 right-1/4 w-96 h-px bg-gray-400 rotate-12" />
          <div className="hidden sm:block absolute top-1/3 left-1/4 w-80 h-px bg-gray-400 -rotate-12" />
        </div>
      </div>

      {/* Hero background */}
      <div
        className="relative z-10"
        style={{
          background:
            "linear-gradient(200deg, rgba(88, 183, 95, 0.5), rgba(100, 203, 113, 0.15), rgba(100, 203, 113, 0.12))",
        }}
      >
        <Header />

        {/* Hero section */}
        <main className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24 relative min-h-[70vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div className="max-w-xl">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-green-800 mb-2 sm:mb-3">
                JOIN OUR TEAM
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF9000] mb-3 sm:mb-4 leading-tight">
                Join Our Team
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#1F2933] leading-relaxed mb-4 sm:mb-6">
                At Bizsun Creative, we believe careers are built through
                meaningful work, continuous learning, and strong collaboration.
                We&apos;re a team of designers, marketers, developers, and
                strategists working together to solve real business challenges
                through creativity and technology.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-[#1F2933] leading-relaxed mb-6 sm:mb-8">
                Here, your ideas matter, your skills are nurtured, and your
                growth is supported at every stage. Whether you&apos;re
                starting your journey or looking to take the next step in your
                career, Bizsun Creative offers an environment where you can
                learn, contribute, and grow while creating impactful work that
                truly makes a difference.
              </p>
              <Link
                href="#open-roles"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm md:text-base font-semibold text-white shadow-lg hover:opacity-90 hover:scale-105 transition-transform"
                style={{
                  background:
                    "linear-gradient(to right, #64CB71, #418F40)",
                }}
              >
                Open Positions
              </Link>
            </div>
            
            {/* Right side image */}
            <div className="flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
              <Image
                src="/Group 27193.png"
                alt="Join Our Team"
                width={600}
                height={600}
                className="w-full max-w-xs sm:max-w-lg h-auto object-contain"
                priority
              />
            </div>
          </div>
        </main>
      </div>

      <div
        className="w-full flex flex-col gap-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(100, 203, 113, 0.12) 0%,rgba(100, 203, 113, 0.12) 30%,rgba(255, 240, 150, 0.18) 70%,rgba(255, 240, 150, 0.18) 100%)",
        }}
      >
        {/* Section 1 */}
        <section className="container mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20 md:py-28">
          <div className="max-w-[1360px] mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#181818] mb-6 sm:mb-10 px-4">
              What makes Bizsun a great place to work?
            </h2>

            <div
              className="grid gap-6 sm:gap-8 justify-items-center"
              style={{
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(160px, 1fr))",
              }}
            >

              {values.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white shadow-md p-4 sm:p-6 border border-[#E5F3E7]
                  flex flex-col items-center w-full max-w-[200px] mx-auto"
                >
                  <div className="w-full mb-3">
                    <Image className="w-full h-auto object-contain"
                      src={item.image}
                      alt={item.title}
                      width={200}
                      height={200}
                      sizes="(max-width: 200px) 100vw, 200px"
                    />
                  </div>

                  <div className="pt-4 sm:pt-8 text-center">
                    <h3 className="text-sm sm:text-base font-semibold text-[#181818] mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-700 text-left">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 sm:mt-24 mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#181818] mb-2 px-4">
              Don&apos;t just take our word for it!
            </h2>
            <p className="text-sm md:text-base text-gray-600 px-4">
              See the feedback from your teammates.
            </p>
          </div>
            {/* Container with blue border and gradient background */}
            <div className="w-full max-w-[1374px] mx-auto rounded-[18px] p-2 sm:p-4 md:p-6"
              style={{
                background: "linear-gradient(to right, #ffffff 0%, rgba(255, 255, 240, 0.5) 50%, rgba(255, 240, 150, 0.3) 100%)"
              }}
            >
              <div className="w-full max-w-[1374px] mx-auto rounded-[18px] bg-white shadow-lg p-4 sm:p-6 md:p-8 lg:p-12 min-h-[400px] md:min-h-[600px] flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12">
                {/* Left – Testimonial Card */}
                <div className="flex-1 flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-8 w-full md:w-auto">
                  {/* Person Image */}
                  <div className="flex-shrink-0 w-full md:w-auto mx-auto md:mx-0 max-w-[200px] md:max-w-none">
                      <Image
                        src="/Frame 30 (1).png"
                        alt={images[active].name}
                        width={242}
                        height={600}
                        className="w-full h-auto md:h-full object-cover"
                        priority
                      />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 w-full">
                    <div className="relative mb-3 sm:mb-4 md:mb-6">
                      <svg
                        className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800 mb-3 sm:mb-4 md:mb-6">
                      {images[active].title}
                    </p>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-gray-900">{images[active].name}</h4>
                      <span className="text-xs sm:text-sm text-gray-500">{images[active].position}</span>
                    </div>
                  </div>
                </div>

                {/* Right – People Collage */}
                <div className="flex-shrink-0 flex gap-2 md:gap-0 h-auto md:h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] w-full md:w-auto justify-center md:justify-end">
                  <div className="hidden md:block">
                    <Image
                      src="/Frame 31.png"
                      alt="Team member"
                      width={144}
                      height={500}
                      className="w-full h-[500px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="hidden md:block h-full">
                    <Image
                      src="/Frame 32.png"
                      alt="Team member"
                      width={144}
                      height={500}
                      className="w-full h-[500px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="hidden md:block h-full">
                    <Image
                      src="/Frame 33.png"
                      alt="Team member"
                      width={144}
                      height={500}
                      className="w-full h-[500px] object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Arrows - Below testimonial card */}
              <div className="flex justify-center gap-3 mt-6">
                <button
                  onClick={prevImage}
                  className="w-10 h-10 rounded-lg bg-green-100 hover:bg-green-200 text-green-700 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="w-10 h-10 rounded-lg bg-green-100 hover:bg-green-200 text-green-700 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>


          </div>
        </section>

        {/* Recruitment Process Section */}
        <section className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#181818] mb-3 sm:mb-4 text-center px-4">
              How to Become a Part of Bizsun Creative?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center mb-8 sm:mb-12 px-4">
              Joining Bizsun Creative is simple and transparent. Follow the steps below <br className="hidden sm:block" /> to begin your journey with us.
            </p>

            <div className="relative overflow-hidden">
              {/* Timeline Line */}
              <img
                src="/image.png"
                alt="Recruitment Process Timeline"
                className="w-full h-auto object-contain"
                style={{
                  WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 100%)",
                  maskImage: "radial-gradient(circle, black 60%, transparent 100%)"
                }}
              />
            </div>
          </div>
        </section>

        {/* Positions Section */}
        <section id="open-roles" className="container mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20 md:pb-28">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#181818] mb-3 sm:mb-4 text-center px-4">
              Positions We&apos;re Always Looking For
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center mb-8 sm:mb-12 px-4">
              We&apos;re constantly on the lookout for creative, curious, and driven people who want to grow with us.
            </p>

            {/* Job Roles Grid */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              {/* Top Row - 5 cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {/* Graphic Designer */}
                <div className="w-full">
                  <img src="/2 (6).png" alt="Graphic Designer" className="w-full h-auto rounded-2xl" />
                </div>

                {/* Video Editor */}
                <div className="w-full">
                  <img src="/16.png" alt="Video Editor" className="w-full h-auto rounded-2xl" />
                </div>

                {/* Digital Marketing Executive */}
                <div className="w-full">
                  <img src="/17.png" alt="Digital Marketing Executive" className="w-full h-auto rounded-2xl" />
                </div>

                {/* Content Writer */}
                <div className="w-full">
                  <img src="/19.png" alt="Content Writer" className="w-full h-auto rounded-2xl" />
                </div>

                {/* UI/UX Designer */}
                <div className="w-full">
                  <img src="/18.png" alt="UI/UX Designer" className="w-full h-auto rounded-2xl" />
                </div>
              </div>

              {/* Bottom Row - 3 cards centered */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:max-w-xl lg:mx-auto">
                {/* Web Developer */}
                <div className="w-full">
                  <img src="/22.png" alt="Web Developer" className="w-full h-auto rounded-2xl" />
                </div>

                {/* Social Media Manager */}
                <div className="w-full">
                  <img src="/20.png" alt="Social Media Manager" className="w-full h-auto rounded-2xl" />
                </div>

                {/* Business Development / Client Coordinator */}
                <div className="w-full">
                  <img src="/23.png" alt="Business Development / Client Coordinator" className="w-full h-auto rounded-2xl" />
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mb-6 sm:mb-8 px-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Don&apos;t see a role that fits? Send us your portfolio anyway.
              </p>
            </div>

            {/* Apply Now Button */}
            <div className="text-center px-4">
            <Link href="/contact" className="text-white px-6 sm:px-12 md:px-17 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:opacity-90 hover:scale-105 hover:shadow-xl animate-fadeInUp animation-delay-400 inline-block" style={{ background: 'linear-gradient(to right, #64CB71, #418F40)' }}>
            Apply Now
          </Link>
            </div>
          </div>
        </section>
       
      </div>

      {/* FAQ section reused */}
      <FAQSection />

      <Footer />
    </div>
  );
}
