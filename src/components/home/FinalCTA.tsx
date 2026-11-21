import React from "react";
import Link from "next/link";
import { businessInfo, getWhatsAppUrl } from "@/data/business";
import { Phone, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-navy-deep via-brand-navy-dark to-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid-dark opacity-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-orange/20 text-brand-orange-light border border-brand-orange/30">
          <ShieldCheck className="w-4 h-4 text-brand-orange" />
          <span>Take the Next Step</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Take the Next Step in Your <br />
            <span className="text-gradient-orange">Engineering Career</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore CNC, VMC, and CAD/CAM training programs at JAYRISH ENGINEERING. Contact us to learn about course details, fees, available batches, and admissions.
          </p>
        </div>

        {/* 3 Prominent Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={`tel:${businessInfo.phoneFormatted.replace(/\s+/g, "")}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-brand-navy-dark bg-white hover:bg-slate-100 transition-all shadow-lg shadow-white/10"
          >
            <Phone className="w-4 h-4 text-brand-orange" />
            <span>Call Now: {businessInfo.phone}</span>
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/30"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp Us</span>
          </a>

          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-brand-orange hover:bg-brand-orange-dark transition-all shadow-lg shadow-brand-orange/30"
          >
            <span>Explore Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
