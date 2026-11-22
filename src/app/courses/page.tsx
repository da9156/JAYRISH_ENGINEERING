import type { Metadata } from "next";
import { coursesData } from "@/data/courses";
import { CourseCard } from "@/components/common/CourseCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { JsonLd } from "@/components/common/JsonLd";
import { getWhatsAppUrl } from "@/data/business";
import { MessageCircle, Phone, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "CNC, VMC & CAD/CAM Courses in Mumbai | JAYRISH ENGINEERING",
  description:
    "Explore 11 technical training programs at JAYRISH ENGINEERING, including CNC, VMC, Siemens CNC, Mastercam, Delcam and AutoCAD in Mumbai.",
  alternates: {
    canonical: "https://www.jayrishengineering.com/courses"
  },
  openGraph: {
    title: "CNC, VMC & CAD/CAM Courses in Mumbai | JAYRISH ENGINEERING",
    description:
      "Explore 11 technical training programs at JAYRISH ENGINEERING, including CNC, VMC, Siemens CNC, Mastercam, Delcam and AutoCAD in Mumbai.",
    url: "https://www.jayrishengineering.com/courses",
    siteName: "JAYRISH ENGINEERING",
    images: [
      {
        url: "/assets/logo/image copy.png",
        width: 1200,
        height: 630,
        alt: "CNC, VMC and CAD/CAM Training Courses - JAYRISH ENGINEERING Mumbai"
      }
    ]
  }
};

export default function CoursesPage() {
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
        name: "Courses",
        item: "https://www.jayrishengineering.com/courses"
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
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span>Full Curriculum</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Our Training <span className="text-gradient-orange">Courses</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore 11 specialised technical courses covering machine operation, manual programming, and CAD/CAM software. Designed for students, freshers, and technicians.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              All Available Programs ({coursesData.length} Courses)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Select any course card to inspect its full syllabus modules, eligibility, and duration.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Classroom Offline Batches Available</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Course Consultation Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-brand-navy-dark to-brand-navy p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Unsure which course suits your career goals?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Talk directly with our admissions counselor. We will guide you based on your qualification, background, and whether you need operator or programmer-level expertise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl("Hello JAYRISH ENGINEERING, I need course guidance to choose the right training program.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Get WhatsApp Guidance</span>
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
