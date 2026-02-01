"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between relative">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
        <Image
          src="/logo.png"
          alt="Bizsun Creative Logo"
          width={150}
          height={50}
          className="w-24 sm:w-32 md:w-[150px] h-auto"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 bg-white/40 p-2 rounded-2xl text-black border-white border-1 shadow-lg backdrop-blur-sm">
        <Link href="/" className="px-4 py-2 text-gray-400 hover:text-gray-500 font-medium transition-all duration-300 hover:scale-105">
          Home
        </Link>
        <Link href="/#services" className="px-4 py-2 text-gray-400 hover:text-gray-500 font-medium transition-all duration-300 hover:scale-105">
          Services
        </Link>
        <Link href="/about-us" className="px-4 py-2 text-gray-400 hover:text-gray-500 font-medium transition-all duration-300 hover:scale-105">
          About
        </Link>
        <a 
          href="/Bizson Creative Production2.pptx" 
          download="Bizson Creative Production2.pptx"
          className="px-4 py-2 text-gray-400 hover:text-gray-500 font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          Portfolio
        </a>
        <Link href="/contact" className="px-4 py-2 text-gray-400 hover:text-gray-500 font-medium transition-all duration-300 hover:scale-105">
          Contact us
        </Link>
        <Link href="/join-our-team" className="px-4 py-2 text-gray-400 hover:text-gray-500 font-medium transition-all duration-300 hover:scale-105">
          Career
        </Link>
      </nav>

      {/* Desktop CTA Button */}
      <Link href="/contact" className="hidden md:flex bg-green-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium hover:bg-green-700 transition-all duration-300 items-center gap-2 hover:scale-105 hover:shadow-lg">
        Let&apos;s Collaborate
        <img src="/Background.png" alt="" className="w-4 h-4" />
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-all duration-300"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl mt-4 mx-4 p-6 z-50 border border-gray-200">
          <nav className="flex flex-col gap-4">
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 rounded-lg hover:bg-green-50"
            >
              Home
            </Link>
            <Link 
              href="/#services" 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 rounded-lg hover:bg-green-50"
            >
              Services
            </Link>
            <Link 
              href="/about-us" 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 rounded-lg hover:bg-green-50"
            >
              About
            </Link>
            <a 
              href="/Bizson Creative Production2.pptx" 
              download="Bizson Creative Production2.pptx"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 rounded-lg hover:bg-green-50 cursor-pointer"
            >
              Portfolio
            </a>
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 rounded-lg hover:bg-green-50"
            >
              Contact us
            </Link>
            <Link 
              href="/join-our-team" 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 rounded-lg hover:bg-green-50"
            >
              Career
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Let&apos;s Collaborate
              <img src="/Background.png" alt="" className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

