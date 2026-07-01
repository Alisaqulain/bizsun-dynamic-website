declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Fires `fbq('track', 'Lead')` — retries briefly if the pixel script is still loading. */
export function trackMetaLead(): void {
  if (typeof window === "undefined") return;

  const fire = () => {
    window.fbq?.("track", "Lead");
  };

  if (typeof window.fbq === "function") {
    fire();
    return;
  }

  let attempts = 0;
  const interval = window.setInterval(() => {
    attempts += 1;
    if (typeof window.fbq === "function") {
      fire();
      window.clearInterval(interval);
    } else if (attempts >= 20) {
      window.clearInterval(interval);
    }
  }, 100);
}
