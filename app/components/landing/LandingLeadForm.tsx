"use client";

import { useState } from "react";
import Link from "next/link";
import { getLeadWhatsAppUrl, leadServiceOptions, type LeadFormData } from "@/lib/leads";

const initialForm: LeadFormData = {
  name: "",
  contact: "",
  businessName: "",
  service: "",
  location: "",
};

export default function LandingLeadForm() {
  const [form, setForm] = useState<LeadFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const fieldClass =
    "w-full px-4 py-3.5 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-brand-green/70 focus:ring-2 focus:ring-brand-green/25 focus:bg-white/[0.14]";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.contact.trim() || !form.businessName.trim() || !form.service || !form.location.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    const digits = form.contact.replace(/\D/g, "");
    if (digits.length < 10) {
      setError("Please enter a valid phone number (at least 10 digits).");
      return;
    }

    const url = getLeadWhatsAppUrl(form);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="landing-form-card rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/15 border border-brand-green/30">
          <svg className="h-7 w-7 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-syne text-2xl font-bold text-white mb-3">You&apos;re almost done!</h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 max-w-sm mx-auto">
          WhatsApp should open with your details pre-filled. Tap <strong className="text-white">Send</strong> so
          Abhinav receives your inquiry.
        </p>
        <button
          type="button"
          onClick={() => {
            window.open(getLeadWhatsAppUrl(form), "_blank", "noopener,noreferrer");
          }}
          className="btn-glow w-full sm:w-auto"
        >
          Open WhatsApp again
        </button>
        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          className="mt-4 block w-full text-sm text-zinc-500 hover:text-brand-green transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="landing-form-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
      <h2 className="font-syne text-xl sm:text-2xl font-bold text-white mb-2">
        Tell us about your project
      </h2>
      <p className="text-sm text-zinc-400 mb-6 sm:mb-8">
        Fill the form below — we&apos;ll connect you with Abhinav on WhatsApp within minutes.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="landing-form-label block text-sm font-semibold mb-2">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="contact" className="landing-form-label block text-sm font-semibold mb-2">
            Phone / WhatsApp <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            required
            autoComplete="tel"
            placeholder="+91 98765 43210"
            value={form.contact}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="businessName" className="landing-form-label block text-sm font-semibold mb-2">
            Business Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            autoComplete="organization"
            placeholder="Your company or brand"
            value={form.businessName}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="service" className="landing-form-label block text-sm font-semibold mb-2">
            Service Required <span className="text-red-400">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className={`${fieldClass} cursor-pointer`}
          >
            <option value="" disabled className="bg-[#1a1a1a] text-zinc-400">
              Select a service
            </option>
            {leadServiceOptions.map((option) => (
              <option key={option} value={option} className="bg-[#1a1a1a]">
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="location" className="landing-form-label block text-sm font-semibold mb-2">
            Your Location <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            autoComplete="address-level2"
            placeholder="City, State / Country"
            value={form.location}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>

        {error && (
          <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
            {error}
          </p>
        )}

        <button type="submit" className="btn-glow w-full text-base py-3.5 flex items-center justify-center gap-2">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Send to WhatsApp
        </button>

        <p className="text-[11px] text-zinc-600 text-center leading-relaxed">
          By submitting, you agree to be contacted via WhatsApp. See our{" "}
          <Link href="/privacy-policy" className="text-zinc-500 hover:text-brand-green underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
