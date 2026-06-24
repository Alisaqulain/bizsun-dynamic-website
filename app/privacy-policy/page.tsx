import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Bizsun Creative collects, uses, and protects your personal information when you visit our website or contact us.",
  openGraph: {
    title: "Privacy Policy | Bizsun Creative",
    url: "/privacy-policy",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

const LAST_UPDATED = "June 3, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page min-h-screen flex flex-col">
      <div className="relative z-10 flex flex-col flex-grow">
        <Header />

        <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-grow max-w-4xl">
          <div className="text-center mb-10 sm:mb-14">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF9000] mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-zinc-500">
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          <article className="legal-content contact-form-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 space-y-8">
            <section>
              <p className="legal-lead">
                Bizsun Creative (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates{" "}
                <Link href="/" className="legal-link">
                  www.bizsuncreative.com
                </Link>
                . This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website, submit a contact form, email us, or
                otherwise interact with our digital agency services.
              </p>
            </section>

            <section>
              <h2>1. Who we are</h2>
              <p>
                <strong>Bizsun Creative</strong> is a full-service digital agency offering software
                development, digital marketing, branding, web and app development, analytics, and
                automation services.
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@bizsoncreative.com" className="legal-link">
                    info@bizsoncreative.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+917044178863" className="legal-link">
                    +91 7044178863
                  </a>
                </li>
                <li>
                  <strong>Location:</strong> Kolkata, India (remote services worldwide)
                </li>
                <li>
                  <strong>Contact page:</strong>{" "}
                  <Link href="/contact" className="legal-link">
                    bizsuncreative.com/contact
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h2>2. Information we collect</h2>
              <h3>Information you provide directly</h3>
              <p>When you use our website, you may voluntarily share personal information, including:</p>
              <ul>
                <li>
                  <strong>Contact form</strong> (on our Contact page): name, email address, phone
                  number, subject, and message content.
                </li>
                <li>
                  <strong>Email or phone inquiries:</strong> any details you include when reaching
                  out about projects, partnerships, or careers.
                </li>
                <li>
                  <strong>Career interest:</strong> if you contact us regarding roles listed on our{" "}
                  <Link href="/join-our-team" className="legal-link">
                    Join Our Team
                  </Link>{" "}
                  page, we may receive your résumé, portfolio links, and related professional
                  information.
                </li>
              </ul>

              <h3>Information collected automatically</h3>
              <p>
                When you browse our site, standard web technologies may collect limited technical
                data, such as:
              </p>
              <ul>
                <li>IP address, browser type, device type, and operating system</li>
                <li>Pages viewed, referring URLs, and approximate visit time</li>
                <li>General location derived from IP (city/region level)</li>
              </ul>
              <p>
                This data is typically collected through our hosting provider and server logs to
                maintain security, diagnose errors, and understand site usage.
              </p>
            </section>

            <section>
              <h2>3. How we use your information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Discuss, scope, and deliver our agency services</li>
                <li>Process career-related communications when you apply or express interest</li>
                <li>Improve our website, content, and user experience</li>
                <li>Maintain the security and integrity of our site and systems</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
              <p>
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2>4. Legal basis for processing</h2>
              <p>Depending on your location and the context, we process personal data based on:</p>
              <ul>
                <li>
                  <strong>Consent</strong> — when you submit a form or contact us voluntarily
                </li>
                <li>
                  <strong>Legitimate interests</strong> — to operate our business, secure our
                  website, and communicate with prospective clients
                </li>
                <li>
                  <strong>Contractual necessity</strong> — when processing is required to deliver
                  services you request
                </li>
                <li>
                  <strong>Legal obligation</strong> — when required by law or regulatory request
                </li>
              </ul>
            </section>

            <section>
              <h2>5. Cookies and similar technologies</h2>
              <p>
                Our website may use essential cookies and local storage required for basic
                functionality (for example, session preferences or security). We do not currently
                deploy third-party advertising cookies on this site.
              </p>
              <p>
                If we introduce analytics or marketing tools in the future (such as Google Analytics
                or similar services), we will update this policy and, where required, request your
                consent before non-essential cookies are placed.
              </p>
              <p>
                You can control cookies through your browser settings. Disabling cookies may affect
                certain site features.
              </p>
            </section>

            <section>
              <h2>6. Third-party services</h2>
              <p>
                We use trusted third-party services that may process limited data on our behalf or
                when you interact with embedded content:
              </p>
              <ul>
                <li>
                  <strong>Google Fonts</strong> — typography may be loaded from Google servers
                  (subject to Google&apos;s privacy policy)
                </li>
                <li>
                  <strong>Google Maps</strong> — our Contact page embeds a map; Google may collect
                  usage data when you interact with the map
                </li>
                <li>
                  <strong>Hosting &amp; infrastructure</strong> — our site is hosted on secure
                  third-party infrastructure that processes server logs and traffic data
                </li>
              </ul>
              <p>
                These providers have their own privacy policies. We encourage you to review them
                when using embedded features.
              </p>
            </section>

            <section>
              <h2>7. How we share information</h2>
              <p>We may share personal information only in these circumstances:</p>
              <ul>
                <li>
                  With service providers who assist us (hosting, email, or technical support) under
                  confidentiality obligations
                </li>
                <li>With your consent or at your direction</li>
                <li>To comply with law, court order, or protect our rights, safety, or property</li>
                <li>
                  In connection with a business transfer (merger, acquisition, or asset sale), with
                  notice where required
                </li>
              </ul>
            </section>

            <section>
              <h2>8. Data retention</h2>
              <p>
                We retain personal information only as long as necessary for the purposes described
                in this policy — typically for the duration of our communication, project engagement,
                or as required by law. Contact form submissions and business correspondence may be
                kept for record-keeping and follow-up unless you request deletion, subject to legal
                retention requirements.
              </p>
            </section>

            <section>
              <h2>9. Data security</h2>
              <p>
                We implement reasonable administrative, technical, and organizational measures to
                protect your information. However, no method of transmission over the Internet or
                electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2>10. Your rights and choices</h2>
              <p>
                Depending on applicable law (including India&apos;s Digital Personal Data Protection
                Act and, where relevant, GDPR), you may have the right to:
              </p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data, subject to legal exceptions</li>
                <li>Withdraw consent where processing is consent-based</li>
                <li>Object to or restrict certain processing activities</li>
              </ul>
              <p>
                To exercise these rights, email us at{" "}
                <a href="mailto:info@bizsoncreative.com" className="legal-link">
                  info@bizsoncreative.com
                </a>
                . We will respond within a reasonable timeframe.
              </p>
            </section>

            <section>
              <h2>11. Children&apos;s privacy</h2>
              <p>
                Our website and services are not directed to individuals under 18. We do not
                knowingly collect personal information from children. If you believe a child has
                provided us data, please contact us and we will delete it promptly.
              </p>
            </section>

            <section>
              <h2>12. International visitors</h2>
              <p>
                Bizsun Creative is based in India. If you access our site from outside India, your
                information may be transferred to and processed in India or other countries where
                our service providers operate. By using our site, you acknowledge such transfers
                where permitted by law.
              </p>
            </section>

            <section>
              <h2>13. Links to other websites</h2>
              <p>
                Our site may link to third-party websites (such as social media platforms). We are
                not responsible for the privacy practices of those sites. We recommend reviewing
                their policies before providing personal information.
              </p>
            </section>

            <section>
              <h2>14. Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The &quot;Last updated&quot;
                date at the top reflects the latest revision. Material changes will be posted on
                this page. Continued use of our website after updates constitutes acceptance of the
                revised policy.
              </p>
            </section>

            <section>
              <h2>15. Contact us</h2>
              <p>
                For privacy-related questions, requests, or complaints, contact us at:
              </p>
              <ul>
                <li>
                  Email:{" "}
                  <a href="mailto:info@bizsoncreative.com" className="legal-link">
                    info@bizsoncreative.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:+917044178863" className="legal-link">
                    +91 7044178863
                  </a>
                </li>
                <li>
                  Web:{" "}
                  <Link href="/contact" className="legal-link">
                    Contact form
                  </Link>
                </li>
              </ul>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </div>
  );
}
