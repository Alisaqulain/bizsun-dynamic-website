export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "1798567814753534";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fires `fbq('track', 'Lead')` immediately after successful form validation.
 * Also sends a noscript-style image beacon as backup.
 */
export function trackMetaLead(): void {
  if (typeof window === "undefined") return;

  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }

  // Backup beacon in case the popup interrupts the primary fbq request
  const img = new Image(1, 1);
  img.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=Lead&noscript=1`;
}

/**
 * Opens WhatsApp without losing the user-gesture chain (avoids popup blockers)
 * while giving the Lead pixel a moment to send.
 */
export function openWhatsAppAfterLead(url: string): void {
  // Step 1: Lead event — must fire before WhatsApp redirect
  trackMetaLead();

  // Step 2: Open blank tab synchronously (preserves user click for popup blockers)
  const popup = window.open("about:blank", "_blank");

  // Step 3: Redirect to WhatsApp after pixel has time to send
  window.setTimeout(() => {
    if (popup && !popup.closed) {
      popup.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }, 300);
}
