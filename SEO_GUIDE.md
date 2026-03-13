# SEO Guide – Bizsun Creative Website

This guide covers **on-page** (already implemented) and **off-page** actions to maximize search visibility.

---

## On-Page SEO (Implemented)

- **Metadata**: Unique title, description, and keywords per page (home, about, contact, all service pages, careers).
- **Open Graph & Twitter**: Social sharing titles and descriptions set for all pages.
- **Canonical & robots**: `metadataBase` and `robots` configured; sitemap and `robots.txt` generated.
- **Structured data**: Organization and WebSite JSON-LD on the site.
- **Semantic HTML**: Single H1 per page, clear heading hierarchy (H2, H3).
- **Internal linking**: Header, footer, and in-content links to all main sections and service pages.
- **Image alt text**: Descriptive or `role="presentation"` for decorative images.
- **Sitemap**: `/sitemap.xml` (auto-generated from `app/sitemap.ts`).
- **Robots**: `/robots.txt` (allow all, sitemap reference in `app/robots.ts`).

---

## Before Launch – Required Steps

### 1. Set your live domain

In **Production**, set:

```env
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com
```

Update `lib/seo.ts` if you prefer a default there. This is used for canonical URLs, sitemap, and Open Graph.

### 2. Add social profile URLs (optional but recommended)

In `app/layout.tsx`, in the `jsonLdOrganization` object, add your real URLs to the `sameAs` array, for example:

```ts
sameAs: [
  "https://www.linkedin.com/company/your-company",
  "https://twitter.com/yourhandle",
  "https://www.facebook.com/yourpage",
  "https://www.instagram.com/yourhandle",
],
```

### 3. Optional: Google / Yandex verification

In `app/layout.tsx`, under `metadata.verification`, add when you have the codes:

```ts
verification: {
  google: "your-google-verification-code",
  yandex: "your-yandex-verification-code",
},
```

---

## Off-Page SEO – Action Checklist

### 1. Google Search Console

- Go to [Google Search Console](https://search.google.com/search-console).
- Add property with your exact live URL (e.g. `https://www.bizsuncreative.com`).
- Verify via HTML tag (use the `verification.google` meta above), DNS, or file upload.
- After verification: **Submit sitemap**: `https://www.yourdomain.com/sitemap.xml`.
- Use **URL Inspection** to request indexing for key pages (home, services, contact).

### 2. Bing Webmaster Tools

- [Bing Webmaster Tools](https://www.bing.com/webmasters).
- Add site and verify (meta tag or DNS).
- Submit the same sitemap URL.

### 3. Backlinks (Off-Page Authority)

- **Business listings**: Add the site to Google Business Profile, Bing Places, Clutch, GoodFirms, and relevant directories (e.g. design/agency lists).
- **Content & PR**: Publish articles, case studies, or press releases and get links from industry sites, blogs, or news.
- **Partners & clients**: Ask partners or clients for a “partner” or “client” link where appropriate.
- **Social profiles**: Link the website from all official social profiles (LinkedIn, Twitter, Facebook, Instagram, etc.).
- **Avoid**: Buying links or using link farms; focus on relevant, editorial links.

### 4. Local SEO (if you serve specific areas)

- **Google Business Profile**: Create/claim and keep NAP (Name, Address, Phone) consistent with the site (e.g. footer/contact).
- **Local schema**: If you add a physical address, consider LocalBusiness or place schema (can be added later in `layout.tsx` or a dedicated component).
- **Local citations**: Same NAP on directories, chamber of commerce, and local listings.

### 5. Technical & Performance

- **HTTPS**: Ensure the live site is served over HTTPS (handled by your host).
- **Mobile-friendly**: Site is responsive; confirm in Search Console “Mobile usability.”
- **Core Web Vitals**: Use Search Console and PageSpeed Insights; optimize images (Next.js `Image` is already in use) and avoid heavy render-blocking assets.
- **Crawlability**: Keep `/robots.txt` and sitemap updated; avoid blocking important pages in `robots`.

### 6. Content & Keywords

- **Primary keywords** (already reflected in metadata):  
  digital agency, software development, digital marketing, web development, app development, branding, SEO, Bizsun Creative.
- **Long-tail**: Use phrases like “custom software development agency,” “digital marketing company [city],” “web and app development services” in headings and body copy where natural.
- **Blog (optional)**: A `/blog` with articles on “software development,” “digital marketing tips,” “branding best practices” can attract more long-tail traffic and backlinks.

### 7. Regular Maintenance

- **Search Console**: Check coverage, mobile usability, and Core Web Vitals monthly.
- **Sitemap**: Already auto-generated; if you add new routes, include them in `lib/seo.ts` `routes` and they will appear in the sitemap.
- **Broken links**: Periodically check internal and important external links (e.g. with Screaming Frog or similar).
- **Structured data**: Use [Rich Results Test](https://search.google.com/test/rich-results) to validate Organization/WebSite (and any future FAQ or Article schema).

---

## Quick Reference – Key URLs (after launch)

| Item        | URL (replace with your domain)     |
|------------|-------------------------------------|
| Sitemap    | `https://www.yourdomain.com/sitemap.xml` |
| Robots     | `https://www.yourdomain.com/robots.txt`  |
| Search Console | Submit sitemap and key URLs here   |

---

## Summary

- **On-page**: Metadata, structured data, sitemap, robots, internal links, and image alt text are in place.
- **Off-page**: Verify the site in Google and Bing, submit the sitemap, build quality backlinks, keep NAP consistent for local SEO, and monitor Search Console and performance.

Setting `NEXT_PUBLIC_SITE_URL` and submitting your sitemap to Google and Bing are the two highest-impact next steps after deployment.
