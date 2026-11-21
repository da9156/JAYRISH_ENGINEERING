import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Course } from "@/data/courses";
import { Badge } from "@/components/common/Badge";
import { getCourseWhatsAppUrl } from "@/data/business";
import { Clock, MapPin, Award, ArrowRight, MessageCircle } from "lucide-react";

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, featured = false }) => {
  const whatsappUrl = getCourseWhatsAppUrl(course.title);

  return (
    <div
      className={`group relative flex flex-col bg-white rounded-xl border transition-all duration-300 hover:shadow-card-hover overflow-hidden ${
        featured
          ? "border-brand-orange/40 shadow-card ring-1 ring-brand-orange/20"
          : "border-slate-200 shadow-subtle hover:border-brand-navy/30"
      }`}
    >
      {/* Course Banner Image */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/90 via-brand-navy-dark/40 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-white/95 text-brand-navy shadow-sm backdrop-blur-sm">
            {course.category}
          </span>
          {course.badge && (
            <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-brand-orange text-white shadow-sm">
              {course.badge}
            </span>
          )}
        </div>

        {/* Title over gradient at bottom of image */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-lg font-bold text-white leading-snug drop-shadow-sm group-hover:text-brand-orange-light transition-colors line-clamp-1">
            {course.title}
          </h3>
          <p className="text-xs text-slate-200 line-clamp-1">
            {course.subtitle}
          </p>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
        <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {course.shortDescription}
        </p>

        {/* Meta badges */}
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-brand-orange shrink-0" />
            <span className="truncate">{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-brand-navy shrink-0" />
            <span className="truncate">{course.trainingMode}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-md font-medium border border-emerald-100">
          <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span className="truncate">Certificate Awarded</span>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            href={`/courses/${course.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navy-light transition-colors shadow-sm"
          >
            <span>View Syllabus</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire on WhatsApp about ${course.title}`}
            className="inline-flex items-center justify-center p-2.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
            title="Instant WhatsApp Enquiry"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
