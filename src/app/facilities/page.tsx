import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/common/SectionHeading";
import { getWhatsAppUrl } from "@/data/business";
import {
  Settings,
  Cpu,
  Monitor,
  Wrench,
  Layers,
  AlertCircle,
  MessageCircle,
  Phone,
  CheckCircle2,
  Sliders
} from "lucide-react";

export const metadata: Metadata = {
  title: "Training Approach & Facilities",
  description:
    "Explore the technical training areas, software suites, and instruction methodologies at JAYRISH ENGINEERING, Vikhroli East, Mumbai."
};

export default function FacilitiesPage() {
  const facilityAreas = [
    {
      title: "CNC Machine Operation Concepts",
      icon: Settings,
      description:
        "Comprehensive instruction covering CNC lathe architecture, axis motion (X and Z), chuck clamping, soft jaws, tool turrets, and standard operating procedures (SOPs).",
      points: [
        "Control panel switches & emergency recovery",
        "Workpiece concentricity alignment",
        "Tool mounting & carbide insert geometries"
      ]
    },
    {
      title: "VMC Machine Operation Concepts",
      icon: Sliders,
      description:
        "3-Axis vertical milling concepts covering table travel, spindle speeds, feeds, toolholders (BT40/BT50), edge finders, and dial indicator alignment.",
      points: [
        "Work coordinate setting (G54-G59)",
        "Automatic Tool Changer (ATC) carousel handling",
        "Z-axis presetting and touch-off procedures"
      ]
    },
    {
      title: "CNC Turning Programming",
      icon: Cpu,
      description:
        "Drafting complete manual part programs from engineering blueprints using G-codes, M-codes, and turning roughing/threading canned cycles.",
      points: [
        "Canned cycles: G71, G72, G70, G76",
        "Tool nose radius compensation (G41/G42)",
        "Incremental vs. Absolute coordinate programming"
      ]
    },
    {
      title: "VMC Milling Programming",
      icon: Layers,
      description:
        "Prismatic part programming for vertical milling centers, featuring face milling, profile contouring, rectangular pocketing, and canned hole-making cycles.",
      points: [
        "Drilling, tapping & pecking cycles (G81-G84)",
        "Cutter radius compensation & lead-in/out",
        "Subprogram subroutines (M98/M99)"
      ]
    },
    {
      title: "Siemens CNC Controls",
      icon: Cpu,
      description:
        "Sinumerik controller programming and navigation, focusing on Siemens standard cycles (CYCLE81, CYCLE83, CYCLE71) and DIN 66025 structure.",
      points: [
        "Siemens HMI interface & work offsets",
        "Sinumerik tool management & D-offsets",
        "Program simulation & graphical proofing"
      ]
    },
    {
      title: "CAD/CAM Software Training",
      icon: Monitor,
      description:
        "Computer-aided manufacturing workflows using Mastercam, Delcam (PowerMill), and AutoCAD 2D drafting for 2D/3D toolpath creation and simulation.",
      points: [
        "Mastercam 2D & 3D solid/surface toolpaths",
        "Delcam high-speed roughing & mold finishing",
        "AutoCAD 2D drafting, GD&T & orthographic views"
      ]
    },
    {
      title: "Machine Setup and Tooling Fundamentals",
      icon: Wrench,
      description:
        "Preparing machines for production runs, dial indicator sweeping, vice alignment, calculating cutting speeds and feeds, and first-off inspection.",
      points: [
        "Cutting tool insert nomenclature (ISO codes)",
        "Workholding fixtures & soft jaw boring",
        "Precision measurement with verniers & micrometers"
      ]
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-navy-deep text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 industrial-grid-dark opacity-10" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/20 text-brand-orange-light border border-brand-orange/30">
              Technical Infrastructure
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Our Training <span className="text-gradient-orange">Approach</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Detailed instruction across machine handling concepts, manual programming syntax, CAD/CAM workstations, and tooling setup methodology.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Disclaimer Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
          <div className="space-y-1 text-xs sm:text-sm">
            <h3 className="font-bold text-amber-950 text-sm sm:text-base">
              Facility Notice & Learning Environment
            </h3>
            <p className="text-amber-800 leading-relaxed">
              JAYRISH ENGINEERING delivers structured classroom and computer-based instruction focusing on CNC/VMC machine handling principles, control consoles, programming syntax, and CAD/CAM software. The availability of live workshop machinery and supervised practical floor training is subject to ongoing schedule confirmation. Please contact the institute directly to confirm current facility details.
            </p>
          </div>
        </div>
      </section>

      {/* Modular Facilities Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Curriculum Focus"
          title="Core Technical Training"
          highlight="Instruction Areas"
          subtitle="Explore the key technical disciplines taught in our classroom modules."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilityAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:shadow-card hover:border-brand-navy/30 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy/5 text-brand-navy flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                  {area.points.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-navy-dark text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold">
              Want to visit our training classroom?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule an in-person visit in Vikhroli East, Mumbai to meet our team and discuss course options.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hello JAYRISH ENGINEERING, I would like to schedule a visit to your institute in Vikhroli East.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-orange hover:bg-brand-orange-dark transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Schedule Campus Visit</span>
          </a>
        </div>
      </section>
    </div>
  );
}
