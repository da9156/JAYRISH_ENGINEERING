import React from "react";
import Link from "next/link";
import Image from "next/image";
import { businessInfo } from "@/data/business";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ArrowRight, CheckCircle2, Shield, Settings, Monitor, Wrench } from "lucide-react";

export const IntroSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white industrial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="About Our Institute"
              title="Welcome to"
              highlight="JAYRISH ENGINEERING"
              subtitle="Specialised Technical Training in Vikhroli East, Mumbai"
            />

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900 font-bold">JAYRISH ENGINEERING</strong> is a dedicated technical training institute specialising in CNC and VMC machine operation, manual programming methodologies, and industry-standard CAD/CAM software.
              </p>
              <p>
                Our classroom programs are carefully structured to help engineering students, freshers, job seekers, and working professionals master the fundamentals of modern machining technology, Siemens CNC controls, Mastercam 2D & 3D, Delcam, AutoCAD drafting, machine setup, and tooling.
              </p>
              <p>
                Our mission is to help learners build a rock-solid technical foundation and acquire practical skills directly relevant to the manufacturing, toolroom, and engineering sectors.
              </p>
            </div>

            {/* Core Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <Settings className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">CNC & VMC Programming</h4>
                  <p className="text-xs text-slate-500">G-Codes, M-Codes, canned cycles & offsets</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <Monitor className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">CAD/CAM Software</h4>
                  <p className="text-xs text-slate-500">Mastercam 2D/3D, Delcam & AutoCAD</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-brand-navy hover:bg-brand-navy-light transition-all shadow-md"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Visual Card with JE Emblem */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-deep p-8 text-white shadow-2xl overflow-hidden border border-brand-navy/60">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl -mr-16 -mt-16" />

              {/* Standalone JE Gear & Spindle Emblem */}
              <div className="relative h-44 w-auto aspect-square mx-auto mb-6">
                <Image
                  src="/assets/logo/Standalone 3D gear and JE symbol logo.png"
                  alt="JAYRISH ENGINEERING Emblem"
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>

              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Technical Precision & Excellence
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  "From Engineering Knowledge to Industrial Skills."
                </p>

                <div className="pt-4 border-t border-brand-navy-light/40 space-y-2 text-xs text-left text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Focus on practical shop-floor blueprints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Siemens & Fanuc control systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Classroom offline batches in Vikhroli East</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
