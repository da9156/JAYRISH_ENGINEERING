import React from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import {
  Target,
  Users,
  Monitor,
  Calendar,
  Award,
  Factory
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Target,
      title: "Specialised Technical Training",
      description: "Dedicated curriculum focused squarely on CNC turning, VMC milling, manual G/M code programming, and modern CAD/CAM software."
    },
    {
      icon: Users,
      title: "Student & Professional Learning",
      description: "Designed for diploma and engineering degree students, freshers, job seekers, and existing machine operators looking to upgrade their skills."
    },
    {
      icon: Monitor,
      title: "Software-Based Training",
      description: "Practical learning on industry tools including Mastercam 2D & 3D, Delcam (PowerMill), AutoCAD drafting, and Siemens CNC controls."
    },
    {
      icon: Calendar,
      title: "Structured Learning",
      description: "Courses are systematically designed around an approximate three-month training timeline with modular step-by-step progress."
    },
    {
      icon: Award,
      title: "Course Completion Certificate",
      description: "Receive a verified course completion certificate upon successful fulfillment of the course syllabus and final evaluation."
    },
    {
      icon: Factory,
      title: "Manufacturing-Oriented Knowledge",
      description: "Learn practical workpiece clamping, tooling selection, coordinate offsets, and machining strategies used on real industrial shop floors."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          centered
          badge="Why JAYRISH ENGINEERING"
          title="Develop Your Engineering Skills with the"
          highlight="Right Technical Training"
          subtitle="We focus on core technical knowledge, practical blueprint comprehension, and software fluency required by the manufacturing industry."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:shadow-card hover:border-brand-orange/40 transition-all duration-300 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-orange group-hover:text-white transition-colors flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-orange transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
