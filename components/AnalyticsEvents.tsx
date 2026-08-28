"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const linkLocation = window.location.pathname;

      if (href.startsWith("tel:")) {
        trackEvent("click_phone", { link_location: linkLocation });
      } else if (href.startsWith("mailto:")) {
        trackEvent("click_email", { link_location: linkLocation });
      } else if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        trackEvent("click_whatsapp", { link_location: linkLocation });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
