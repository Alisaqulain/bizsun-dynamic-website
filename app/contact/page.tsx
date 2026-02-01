"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call here
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background with gradient */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(to bottom, rgba(100, 203, 113, 0.2), rgba(255, 255, 255, 1))',
        }}
      />

      <div className="relative z-10 flex flex-col flex-grow">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-grow">
          {/* Hero Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FF9000] mb-3 sm:mb-4 px-4"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-4">
              Ready to transform your brand? Let&apos;s start a conversation about your project.
            </p>
          </div>

          {/* Contact Form and Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Contact Form - Left Side (2 columns) */}
            <div className="lg:col-span-2">
              <div 
                className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Send us a Message
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone <span className="text-gray-400 text-xs">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this regarding?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information - Right Side (1 column) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg h-full">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                      <a 
                        href="mailto:info@bizsoncreative.com" 
                        className="text-gray-600 hover:text-green-600 transition-colors"
                      >
                        info@bizsoncreative.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                      <a 
                        href="tel:+917044178863" 
                        className="text-gray-600 hover:text-green-600 transition-colors"
                      >
                        +91 7044178863
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Locations</h3>
                      <p className="text-gray-600">Kolkata</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-8 sm:mt-12 md:mt-16 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                Find Us on Map
              </h2>
              <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps?q=22.6008889,88.4258333&hl=en&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-2">
                  <strong>Address:</strong> Kolkata, West Bengal, India
                </p>
                <p className="text-sm text-gray-500">
                  Coordinates: 22°36'03.2"N, 88°25'33.0"E
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

