"use client";

import React from "react";
import Script from "next/script";

// GA Measurement ID from environment variable or fallback
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export const GoogleAnalytics: React.FC = () => {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </>
  );
};

// Event tracking helper functions for conversion actions
export function trackEvent(action: string, params: Record<string, any> = {}) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, params);
  }
}

export function trackPhoneClick(phone: string = "+91 82374 97354") {
  trackEvent("phone_call_click", {
    event_category: "Contact",
    event_label: phone,
    value: 1
  });
}

export function trackWhatsAppClick(source: string = "general") {
  trackEvent("whatsapp_click", {
    event_category: "Contact",
    event_label: source,
    value: 1
  });
}

export function trackEnquirySubmit(course: string, qualification: string) {
  trackEvent("enquiry_form_submit", {
    event_category: "Leads",
    event_label: course,
    qualification: qualification,
    value: 1
  });
}
