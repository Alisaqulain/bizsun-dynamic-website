'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const leftColumnFAQs: FAQItem[] = [
  {
    question: "WHAT SERVICES DO YOU SPECIALIZE IN?",
    answer: "We specialize in digital marketing, UI/UX design, website and app development, branding, automation, and growth-focused digital solutions tailored to each business.",
    defaultOpen: true
  },
  {
    question: "HOW DO YOU APPROACH A NEW PROJECT?",
    answer: "We start by understanding your business goals, target audience, and current challenges. Then we develop a customized strategy, create detailed plans, and execute with regular communication and iterative improvements."
  },
  {
    question: "WHO DO YOU TYPICALLY WORK WITH?",
    answer: "We work with ambitious businesses of all sizes, from startups to established enterprises, across various industries including e-commerce, SaaS, healthcare, finance, and more."
  },
  {
    question: "HOW LONG DOES A TYPICAL PROJECT TAKE?",
    answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while comprehensive digital transformation projects can take 3-6 months. We provide detailed timelines during the planning phase."
  }
];

const rightColumnFAQs: FAQItem[] = [
  {
    question: "DO YOU OFFER ONGOING SUPPORT AFTER PROJECT COMPLETION?",
    answer: "Yes, we offer various support packages including maintenance, updates, optimization, and ongoing consultation to ensure your digital solutions continue to perform at their best."
  },
  {
    question: "HOW DO YOU MEASURE SUCCESS?",
    answer: "We measure success through key performance indicators (KPIs) aligned with your business goals, such as website traffic, conversion rates, user engagement, revenue growth, and return on investment (ROI)."
  },
  {
    question: "CAN YOU WORK WITH EXISTING TEAMS OR SYSTEMS?",
    answer: "Absolutely. We collaborate seamlessly with internal teams and integrate with existing tools, platforms, and workflows.",
    defaultOpen: true
  },
  {
    question: "HOW CAN WE GET STARTED?",
    answer: "Getting started is easy! Simply reach out through our contact form or schedule a consultation. We'll discuss your needs, provide a proposal, and once approved, begin your project journey."
  }
];

function FAQItemComponent({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(item.defaultOpen || false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 text-left"
      >
        <h3 className="font-bold text-gray-800 text-base md:text-lg flex-1">
          {item.question}
        </h3>
        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
          {isOpen ? (
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>
      </button>
      {isOpen && (
        <p className="text-gray-600 mt-4 pr-12 leading-relaxed">
          {item.answer}
        </p>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section 
      className="w-full py-20 px-6"
      style={{
        background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.95), rgba(250, 248, 245, 0.9))'
      }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">FAQ&apos;S</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="space-y-0">
            {leftColumnFAQs.map((item, index) => (
              <FAQItemComponent key={index} item={item} />
            ))}
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>

          {/* Right Column */}
          <div className="space-y-0">
            {rightColumnFAQs.map((item, index) => (
              <FAQItemComponent key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

