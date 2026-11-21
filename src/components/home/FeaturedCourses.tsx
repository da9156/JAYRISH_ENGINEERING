import React from "react";
import Link from "next/link";
import { coursesData } from "@/data/courses";
import { CourseCard } from "@/components/common/CourseCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ArrowRight } from "lucide-react";

export const FeaturedCourses: React.FC = () => {
  // Highlight the 4 main courses specified in the brief:
  // 1. CNC Programming Course
  // 2. VMC Programming Course
  // 3. Mastercam 2D & 3D Training
  // 4. AutoCAD Training
  const mainCourses = [
    coursesData.find((c) => c.slug === "cnc-programming")!,
    coursesData.find((c) => c.slug === "vmc-programming")!,
    coursesData.find((c) => c.slug === "mastercam-2d-3d")!,
    coursesData.find((c) => c.slug === "autocad")!
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            badge="Top Training Programs"
            title="Our Main"
            highlight="Training Categories"
            subtitle="Explore our most sought-after technical courses designed for mechanical engineers and technicians."
          />

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-orange transition-colors"
          >
            <span>View All 11 Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Prominent Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainCourses.map((course) => (
            <CourseCard key={course.id} course={course} featured={true} />
          ))}
        </div>

        {/* Catalog Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              Looking for Machine Operating, Delcam or Siemens Controls?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              We offer 11 specialized training courses covering machine handling, tooling setup, and CAM software.
            </p>
          </div>

          <Link
            href="/courses"
            className="shrink-0 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-navy hover:bg-brand-navy-light transition-colors shadow-sm"
          >
            Browse Complete Course Catalog →
          </Link>
        </div>
      </div>
    </section>
  );
};
