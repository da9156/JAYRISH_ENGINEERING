import React from "react";
import Link from "next/link";
import Image from "next/image";
import { businessInfo, getWhatsAppUrl } from "@/data/business";
import {
  ArrowRight,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Cpu,
  Layers,
  Award
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-navy-deep text-white">
      {/* Background Industrial Machine Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/courses/VMC Machine Operating Training.png"
          alt="CNC and VMC Machining Center Workshop"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity scale-105 transform motion-safe:animate-pulseSlow"
          sizes="100vw"
        />
        {/* Multilayered high-end gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-deep via-brand-navy-dark/95 to-brand-navy-deep/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep via-transparent to-brand-navy-deep/80" />
        <div className="absolute inset-0 industrial-grid-dark opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Location & Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/60 border border-brand-orange/40 text-brand-orange-light text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-sm">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Vikhroli East, Mumbai, Maharashtra</span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                CNC & VMC Operating and <br className="hidden sm:inline" />
                <span className="text-gradient-orange">Programming Training</span>{" "}
                Institute
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-slate-200">
                Build Your Future in Modern Manufacturing and Engineering.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Learn CNC and VMC machine operation, manual G/M code programming, and industry-standard CAD/CAM software with{" "}
              <strong className="text-white font-bold">JAYRISH ENGINEERING</strong>. Structured classroom technical training designed for engineering students, freshers, job seekers, and working professionals.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-brand-orange hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Offline Classroom</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>~3 Month Duration</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Certificate Awarded</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Siemens & Fanuc</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Feature Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative rounded-2xl p-6 bg-gradient-to-br from-brand-navy-light/40 via-brand-navy-dark/70 to-brand-navy-deep border border-brand-orange/30 shadow-2xl backdrop-blur-md">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-orange/15 rounded-full blur-2xl" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Admissions Open
                  </span>
                </div>
                <span className="text-[11px] font-bold text-brand-orange-light bg-brand-orange/15 px-2.5 py-0.5 rounded-full">
                  2024–2025 Batches
                </span>
              </div>

              <div className="py-5 space-y-4">
                <div className="relative h-44 w-full rounded-xl overflow-hidden border border-slate-700 bg-slate-900">
                  <Image
                    src="/assets/courses/CNC Programming Training.png"
                    alt="CNC Controller Screen Simulation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-mono text-emerald-400">
                      G00 X50.0 Z2.0 ; G71 U2.0 R0.5 ;
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Target Tech</span>
                    <span className="font-bold text-white">CNC Lathe & 3-Axis VMC</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Software Suite</span>
                    <span className="font-bold text-white">Mastercam · Delcam · AutoCAD</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">Weekly Batches</span>
                    <span className="font-bold text-emerald-400">Weekday & Weekend Slots</span>
                  </div>
                </div>
              </div>

              <a
                href={`tel:${businessInfo.phoneFormatted.replace(/\s+/g, "")}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-brand-navy hover:bg-brand-navy-light border border-slate-600 transition-colors"
              >
                <span>Call Admissions: {businessInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
