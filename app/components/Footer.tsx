"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* CTA */}
          <div>
            <p className="text-xs text-gray-400 mb-3 uppercase">
              Let's turn ideas into impact
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's Work Together
            </h2>

            <Link
              href="/contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition cursor-pointer"
            >
              Contact Us
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs text-gray-400 mb-4 uppercase">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors cursor-pointer block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors cursor-pointer block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors cursor-pointer block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/join-our-team" className="hover:text-white transition-colors cursor-pointer block">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors cursor-pointer block">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs text-gray-400 mb-4 uppercase">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/software" className="hover:text-white transition-colors cursor-pointer block">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/digital" className="hover:text-white transition-colors cursor-pointer block">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/branding" className="hover:text-white transition-colors cursor-pointer block">
                  Website & Branding
                </Link>
              </li>
              <li>
                <Link href="/app-web-development" className="hover:text-white transition-colors cursor-pointer block">
                  App & Web
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xs text-gray-400 mb-4 uppercase">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/analytics" className="hover:text-white transition-colors cursor-pointer block">
                  Analytics & Growth
                </Link>
              </li>
              <li>
                <Link href="/automation" className="hover:text-white transition-colors cursor-pointer block">
                  Automation & CRM
                </Link>
              </li>
              <li>
                <Link href="/industry-focused" className="hover:text-white transition-colors cursor-pointer block">
                  Industry Focused
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-xs text-gray-400">
            © 2026 Bizsun. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
