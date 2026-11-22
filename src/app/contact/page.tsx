import type { Metadata } from "next";
import { businessInfo, getWhatsAppUrl } from "@/data/business";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/common/JsonLd";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact JAYRISH ENGINEERING | CNC & VMC Classes in Vikhroli Mumbai",
  description:
    "Contact JAYRISH ENGINEERING in Vikhroli East, Mumbai for CNC, VMC, Mastercam, AutoCAD training, course details and admissions.",
  alternates: {
    canonical: "https://www.jayrishengineering.com/contact"
  },
  openGraph: {
    title: "Contact JAYRISH ENGINEERING | CNC & VMC Classes in Vikhroli Mumbai",
    description:
      "Contact JAYRISH ENGINEERING in Vikhroli East, Mumbai for CNC, VMC, Mastercam, AutoCAD training, course details and admissions.",
    url: "https://www.jayrishengineering.com/contact",
    images: [
      {
        url: "/assets/courses/CNC Programming Training.png",
        width: 1200,
        height: 630,
        alt: "Contact JAYRISH ENGINEERING Vikhroli East Mumbai"
      }
    ]
  }
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.jayrishengineering.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: "https://www.jayrishengineering.com/contact"
      }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="space-y-16 sm:space-y-20 py-10 sm:py-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-navy-deep text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 industrial-grid-dark opacity-10" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/20 text-brand-orange-light border border-brand-orange/30">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span>Admissions & Inquiries</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Get in Touch with <span className="text-gradient-orange">JAYRISH ENGINEERING</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Have questions about CNC turning, VMC milling, or CAD/CAM training? Contact us to learn about course details, fee structures, and batch schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Main 2-Column Contact & Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 5 Columns: Institute Credentials & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                Visit or Call Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Institute Information
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We are conveniently located near Vikhroli Railway Station in Eastern Mumbai, accessible by central railway local trains and Eastern Express Highway.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4">
              {/* Address */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-orange uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Campus Address</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  {businessInfo.legalName}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {businessInfo.address.fullAddress}
                </p>
              </div>

              {/* Phone & WhatsApp */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-navy uppercase tracking-wider">
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Telephone & Instant Chat</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Phone Support:</span>
                    <a
                      href={`tel:${businessInfo.phoneFormatted.replace(/\s+/g, "")}`}
                      className="font-bold text-brand-navy hover:text-brand-orange transition-colors"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">WhatsApp Helpdesk:</span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      Chat Directly
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-brand-orange" />
                  <span>Business & Counseling Hours</span>
                </div>
                <p className="text-sm font-bold text-slate-900">
                  {businessInfo.workingHours.days}: {businessInfo.workingHours.timings}
                </p>
                <p className="text-xs text-slate-500">
                  {businessInfo.workingHours.note}
                </p>
              </div>

              {/* Verified Google Business Link */}
              {/* <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    Google Business Listing
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Verified Google Maps & Business Profile
                  </p>
                </div>
                <a
                  href={businessInfo.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-brand-navy hover:bg-brand-navy-light transition-colors"
                >
                  <span>View</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div> */}
            </div>
          </div>

          {/* Right 7 Columns: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200 shadow-card p-6 sm:p-10 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                  Online Registration
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Send Admission Enquiry
                </h3>
                <p className="text-xs text-slate-500">
                  Fill in your details below and our coordinator will respond with course syllabus, batch dates, and fee details.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Google Maps Section in Box Format */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-orange" />
              <span>Google Maps — Verified Location</span>
            </h3>
            <p className="text-xs text-slate-500">
              06 BLDG, FLAT NO. 64 /6, Station Rd, SIDE COLONY, Pirojshanagar, Vikhroli East, Mumbai - 400083
            </p>
          </div>

          <a
            href={businessInfo.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-dark transition-colors shrink-0"
          >
            <span>Open in Google Maps App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
          <iframe
            src={businessInfo.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JAYRISH ENGINEERING Google Maps Location in Vikhroli East, Mumbai"
          />
        </div>
      </section> */}
    </div>
    </>
  );
}
