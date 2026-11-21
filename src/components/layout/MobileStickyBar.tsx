"use client";

import React, { useState, useEffect } from "react";
import { businessInfo, getWhatsAppUrl } from "@/data/business";
import { Phone, MessageCircle } from "lucide-react";

export const MobileStickyBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls down 120px
      setVisible(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-2.5 sm:hidden animate-fade-up">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${businessInfo.phoneFormatted.replace(/\s+/g, "")}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-brand-navy text-white text-xs font-bold shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-brand-orange-light" />
          <span>Call Now</span>
        </a>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-sm active:scale-95 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
