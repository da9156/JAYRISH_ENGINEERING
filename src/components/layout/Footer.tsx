import React from "react";
import Link from "next/link";
import Image from "next/image";
import { businessInfo, getWhatsAppUrl } from "@/data/business";
import { footerQuickLinks, footerCourseLinks } from "@/data/navigation";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy-deep text-slate-300 border-t border-brand-navy/40">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="relative h-14 w-52 bg-white rounded-lg p-2">
              <Image
                src="/assets/logo/Complete logo.png"
                alt="JAYRISH ENGINEERING"
                fill
                className="object-contain object-left px-1"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              JAYRISH ENGINEERING is a premier technical training institute in Vikhroli East, Mumbai, specialising in CNC and VMC machine operating, manual programming, and industry-standard CAD/CAM software.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-orange-light bg-brand-navy-dark/60 border border-brand-orange/30 px-3 py-1.5 rounded-md">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                <span>Learn · Practice · Excel</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white border-b border-brand-navy/60 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerQuickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-orange transition-colors flex items-center gap-2"
                  >
                    <span className="text-brand-orange">›</span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Course Offerings */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white border-b border-brand-navy/60 pb-2">
              Training Courses
            </h4>
            <ul className="space-y-2 text-xs">
              {footerCourseLinks.map((course) => (
                <li key={course.title}>
                  <Link
                    href={course.href}
                    className="hover:text-brand-orange transition-colors flex items-center gap-2 text-slate-300"
                  >
                    <CheckCircle2 className="w-3 h-3 text-brand-orange shrink-0" />
                    <span className="truncate">{course.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Google Business Link */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white border-b border-brand-navy/60 pb-2">
              Contact & Institute
            </h4>

            <div className="space-y-3 text-xs leading-relaxed text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>{businessInfo.address.fullAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a
                  href={`tel:${businessInfo.phoneFormatted.replace(/\s+/g, "")}`}
                  className="hover:text-white font-semibold"
                >
                  {businessInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{businessInfo.workingHours.days}: {businessInfo.workingHours.timings}</span>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={businessInfo.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>View Verified Google Business Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all text-xs shadow-sm mt-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Google Maps Box Format */}
        <div className="mt-12 pt-8 border-t border-brand-navy/40">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h5 className="text-sm font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>Our Institute Location — Vikhroli East, Mumbai</span>
              </h5>
              <p className="text-xs text-slate-400">
                Easy access from Vikhroli Station, Pirojshanagar & Eastern Express Highway.
              </p>
            </div>

            <a
              href={businessInfo.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange-light hover:text-white transition-colors"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-brand-navy/60 shadow-inner bg-slate-900">
            <iframe
              src={businessInfo.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JAYRISH ENGINEERING Location in Vikhroli East, Mumbai"
            />
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Disclaimer Bar */}
      <div className="bg-black/40 border-t border-brand-navy/50 py-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} JAYRISH ENGINEERING. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-500">
            {businessInfo.legalName} • Vikhroli East, Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
};
