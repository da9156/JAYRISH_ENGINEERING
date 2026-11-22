import React from "react";

// GA Measurement ID or GTM ID from environment variable
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const GoogleAnalytics: React.FC = () => {
  if (!GA_ID) {
    return null;
  }

  const isGTM = GA_ID.startsWith("GTM-");
  const scriptSrc = isGTM
    ? `https://www.googletagmanager.com/gtm.js?id=${GA_ID}`
    : `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

  return (
    <>
      <script async src={scriptSrc} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${
              isGTM
                ? `window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });`
                : ""
            }
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
      {isGTM && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GA_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      )}
    </>
  );
};

// Event tracking helper functions for conversion actions
export function trackEvent(action: string, params: Record<string, any> = {}) {
  if (typeof window !== "undefined") {
    if ((window as any).gtag) {
      (window as any).gtag("event", action, params);
    }
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: action,
        ...params
      });
    }
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
