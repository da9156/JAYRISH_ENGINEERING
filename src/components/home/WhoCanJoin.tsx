import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/common/SectionHeading";
import {
  GraduationCap,
  Briefcase,
  Wrench,
  Compass,
  FileCheck2,
  Cpu,
  UserCheck
} from "lucide-react";

export const WhoCanJoin: React.FC = () => {
  const targetProfiles = [
    { title: "Diploma Students", icon: GraduationCap, note: "Mechanical & Automobile" },
    { title: "BE / B.Tech Graduates", icon: Compass, note: "Fresh engineers entering core manufacturing" },
    { title: "Mechanical Engineering Students", icon: Cpu, note: "Bridging theory with industry programming" },
    { title: "Freshers & Job Seekers", icon: FileCheck2, note: "Building marketable technical skills" },
    { title: "Existing Machine Operators", icon: Wrench, note: "Upgrading from helper to programmer" },
    { title: "Working Professionals", icon: Briefcase, note: "Looking to master CAD/CAM software" },
    { title: "ITI Machinists & Millers", icon: UserCheck, note: "Advancing to precision CNC controls" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          centered
          badge="Eligibility & Audience"
          title="Who Can Join Our"
          highlight="Training Programs?"
          subtitle="Whether you are taking your first steps in engineering or upgrading your existing workshop knowledge, our courses provide a clear, practical path forward."
        />

        {/* Profiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {targetProfiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <div
                key={profile.title}
                className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-subtle hover:border-brand-navy hover:shadow-card transition-all text-center flex flex-col items-center justify-center space-y-2.5 group"
              >
                <div className="w-12 h-12 rounded-full bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-orange transition-colors">
                  {profile.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-tight">
                  {profile.note}
                </p>
              </div>
            );
          })}

          {/* Callout box in grid */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white text-center flex flex-col items-center justify-center space-y-3 shadow-md col-span-2 sm:col-span-1">
            <span className="text-xs uppercase tracking-wider font-bold text-brand-orange-light">
              Flexible Batches
            </span>
            <p className="text-xs text-slate-200">
              Weekday & weekend batches designed for college students & shift workers.
            </p>
            <Link
              href="/contact"
              className="text-xs font-bold text-brand-orange-light hover:text-white transition-colors underline"
            >
              Enquire About Timings →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
