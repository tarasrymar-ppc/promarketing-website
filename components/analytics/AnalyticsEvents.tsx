"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

function getClickLabel(element: Element) {
  return (
    element.getAttribute("aria-label") ||
    element.textContent?.replace(/\s+/g, " ").trim() ||
    element.getAttribute("href") ||
    "unknown"
  );
}

function trackAnchorClick(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute("href") ?? "";
  const label = getClickLabel(anchor);
  const payload = {
    link_text: label,
    link_url: href,
  };

  if (href.startsWith("tel:")) {
    trackEvent("phone_clicked", payload);
    return;
  }

  if (href.startsWith("mailto:")) {
    trackEvent("email_clicked", payload);
    return;
  }

  if (href.includes("facebook.com")) {
    trackEvent("social_clicked", {
      ...payload,
      social_network: "facebook",
    });
    return;
  }

  if (href.includes("maps.app.goo.gl") || href.includes("google.com/maps") || href.includes("share.google")) {
    trackEvent("map_clicked", payload);
    return;
  }

  if (href.includes("/services/")) {
    trackEvent("service_link_clicked", payload);
    return;
  }

  if (href.includes("/contact") || href === "#contact" || href === "#form") {
    trackEvent("cta_clicked", {
      ...payload,
      cta_location: "site_link",
    });
  }
}

export default function AnalyticsEvents() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (anchor instanceof HTMLAnchorElement) {
        trackAnchorClick(anchor);
        return;
      }

      const button = target.closest("button[data-track-event]");
      if (button instanceof HTMLButtonElement) {
        trackEvent(button.dataset.trackEvent ?? "button_clicked", {
          button_text: getClickLabel(button),
          button_location: button.dataset.trackLocation,
        });
      }
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
