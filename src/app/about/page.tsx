import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { businessInfo, getWhatsAppUrl } from "@/data/business";
import { SectionHeading } from "@/components/common/SectionHeading";
import { JsonLd } from "@/components/common/JsonLd";
import {
  ShieldCheck,
  Target,
  Eye,
  CheckCircle2,
  Compass,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin
} from "lucide-react";

export const metadata: Metadata = {
  title: "About JAYRISH ENGINEERING | CNC & VMC Training Mumbai",
  description:
    "Learn about JAYRISH ENGINEERING, a technical training institute in Vikhroli East, Mumbai, offering CNC, VMC and CAD/CAM education.",
  alternates: {
    canonical: "https://www.jayrishengineering.com/about"
  },
  openGraph: {
    title: "About JAYRISH ENGINEERING | CNC & VMC Training Mumbai",
    description:
      "Learn about JAYRISH ENGINEERING, a technical training institute in Vikhroli East, Mumbai, offering CNC, VMC and CAD/CAM education.",
    url: "https://www.jayrishengineering.com/about",
    siteName: "JAYRISH ENGINEERING",
    images: [
      {
        url: "/assets/logo/image copy.png",
        width: 1200,
        height: 630,
        alt: "About JAYRISH ENGINEERING - Technical Training Institute in Mumbai"
      }
    ]
  }
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.jayrishengineering.com/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://www.jayrishengineering.com/about"
      }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Page Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-navy-deep text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 industrial-grid-dark opacity-10" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/20 text-brand-orange-light border border-brand-orange/30">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span>Institute Profile</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              About <span className="text-gradient-orange">JAYRISH ENGINEERING</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Bridging academic engineering knowledge with shop-floor precision and industrial machining skills in Vikhroli East, Mumbai.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="Our Identity"
              title="Dedicated Technical Education in"
              highlight="Machining Technology"
              subtitle="Located in Vikhroli East, Mumbai, Maharashtra."
            />

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900 font-bold">JAYRISH ENGINEERING</strong> is a technical training institute located in Vikhroli East, Mumbai, Maharashtra. We specialise in CNC and VMC machine operating and programming courses, along with comprehensive CAD/CAM software training.
              </p>
              <p>
                Our training programs aim to help students and working professionals understand the fundamentals of machining technology, programming methodologies, machine setup, and engineering software.
              </p>
              <p>
                We believe that technical knowledge and continuous skill development are essential for building a strong, enduring career in the precision manufacturing and tooling industry.
              </p>
              <p>
                Our programs are specifically structured for learners at different stages of their engineering journey — from fresh diploma and degree holders looking for their first breakthrough, to working technicians and operators looking to step up into programmer and supervisory roles.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-brand-navy hover:bg-brand-navy-light transition-all shadow-md"
              >
                <span>Browse All Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border border-slate-200 shadow-card p-6 sm:p-8 space-y-6">
              <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src="/assets/courses/Delcam Programming Training.png"
                  alt="CAD/CAM Machining Simulation"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">
                  Classroom Learning Methodology
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every concept is taught systematically from basic 2D drawings to Cartesian coordinate math, tool offsets, and canned machining cycles.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Focus on real manufacturing drawing interpretation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Fanuc & Siemens controller syntax mastery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Verification through CAD/CAM toolpath simulation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-navy/10 text-brand-navy flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To provide structured technical education in CNC, VMC, and CAD/CAM technologies and help learners develop valuable engineering and manufacturing skills that meet industrial standards.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange-dark flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To become a trusted technical training destination for individuals interested in CNC machining, programming, and manufacturing technology across Mumbai and Maharashtra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-brand-orange font-bold text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Campus Location</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Vikhroli East, Mumbai, Maharashtra
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              {businessInfo.address.fullAddress}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-navy hover:bg-brand-navy-light transition-colors"
            >
              Contact & Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
