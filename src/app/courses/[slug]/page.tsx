import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { coursesData, getCourseBySlug } from "@/data/courses";
import { businessInfo, getCourseWhatsAppUrl } from "@/data/business";
import { CourseCard } from "@/components/common/CourseCard";
import { JsonLd } from "@/components/common/JsonLd";
import {
  Clock,
  MapPin,
  Award,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Phone,
  ArrowLeft,
  ChevronRight,
  BookOpen,
  Users
} from "lucide-react";

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug
  }));
}

export async function generateMetadata({
  params
}: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found"
    };
  }

  const pageTitle = course.seoTitle || `${course.title} in Mumbai | JAYRISH ENGINEERING`;
  const pageDescription = course.seoDescription || course.shortDescription;
  const pageCanonical = `https://www.jayrishengineering.com/courses/${slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: pageCanonical
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageCanonical,
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: `${course.title} - JAYRISH ENGINEERING Mumbai`
        }
      ]
    }
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const whatsappUrl = getCourseWhatsAppUrl(course.title);

  // Related courses
  const relatedCourses = coursesData.filter((c) =>
    course.relatedSlugs.includes(c.slug)
  );

  // Breadcrumb Schema
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
        name: "Courses",
        item: "https://www.jayrishengineering.com/courses"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.title,
        item: `https://www.jayrishengineering.com/courses/${course.slug}`
      }
    ]
  };

  // Schema.org Course structured data
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.fullDescription,
    url: `https://www.jayrishengineering.com/courses/${course.slug}`,
    provider: {
      "@type": "EducationalOrganization",
      name: businessInfo.legalName,
      sameAs: "https://www.jayrishengineering.com",
      url: "https://www.jayrishengineering.com"
    },
    educationalCredentialAwarded: "Course Completion Certificate",
    courseMode: "In-person",
    timeToComplete: course.duration
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={courseSchema} />

      <div className="space-y-12 sm:space-y-16 py-8 sm:py-12">
        {/* Breadcrumb Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-orange transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/courses" className="hover:text-brand-orange transition-colors">
              Courses
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-900 truncate">
              {course.title}
            </span>
          </nav>
        </div>

        {/* Course Hero Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-brand-navy-deep text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 industrial-grid-dark opacity-10" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-orange text-white">
                    {course.category}
                  </span>
                  {course.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-brand-orange-light border border-brand-orange/30">
                      {course.badge}
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  {course.title}
                </h1>
                <p className="text-base sm:text-lg text-slate-200 font-medium">
                  {course.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {course.shortDescription}
                </p>

                {/* Meta stats pills */}
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <Clock className="w-4 h-4 text-brand-orange" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold">
                    <MapPin className="w-4 h-4 text-brand-orange" />
                    <span>{course.trainingMode}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>{course.certification}</span>
                  </div>
                </div>
              </div>

              {/* Right Course Hero Image */}
              <div className="lg:col-span-4">
                <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-brand-orange/30 shadow-xl bg-slate-900">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Callout if present */}
        {course.disclaimer && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 text-xs sm:text-sm">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <p className="font-bold">Important Notice:</p>
                <p>{course.disclaimer}</p>
              </div>
            </div>
          </section>
        )}

        {/* Main Content Layout: Syllabus + Sticky Sidebar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 8 Columns: Overview, What You Learn & Detailed Syllabus */}
            <div className="lg:col-span-8 space-y-10">
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Course Overview
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {course.fullDescription}
                </p>
              </div>

              {/* Key Highlights / What you will learn */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-brand-orange" />
                  <span>Key Highlights & Outcomes</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  {course.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Syllabus Modules */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    Comprehensive Course Syllabus
                  </h3>
                  <span className="text-xs text-slate-500 font-semibold">
                    {course.syllabus.length} Modules
                  </span>
                </div>

                <div className="space-y-4">
                  {course.syllabus.map((mod, modIdx) => (
                    <div
                      key={modIdx}
                      className="rounded-xl border border-slate-200 bg-white p-5 space-y-3 shadow-subtle hover:border-brand-navy/30 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-brand-navy/10 text-brand-navy font-bold text-xs flex items-center justify-center shrink-0">
                          {modIdx + 1}
                        </span>
                        <h4 className="text-base font-bold text-slate-900">
                          {mod.title}
                        </h4>
                      </div>

                      <ul className="space-y-2 pl-10 text-xs sm:text-sm text-slate-600">
                        {mod.topics.map((topic, topicIdx) => (
                          <li key={topicIdx} className="flex items-start gap-2">
                            <span className="text-brand-orange font-bold">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Is This For */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand-navy" />
                  <span>Who Should Take This Course?</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.eligibility.map((el, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>{el}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Columns: Sticky Action & Admissions Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 rounded-2xl bg-white border border-slate-200 shadow-card p-6 space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Admissions & Batch Inquiries
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Join This Program
                  </h3>
                  <p className="text-xs text-slate-600">
                    Contact JAYRISH ENGINEERING to verify fee structure, available batch timings, and seat availability.
                  </p>
                </div>

                {/* Quick Info Grid */}
                <div className="space-y-2.5 text-xs text-slate-700 py-3 border-y border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Duration</span>
                    <span className="font-bold text-slate-900">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Training Mode</span>
                    <span className="font-bold text-slate-900">{course.trainingMode}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Certification</span>
                    <span className="font-bold text-emerald-700">Certificate Provided</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Course Fees</span>
                    <span className="font-bold text-brand-orange">Contact for Fees</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Batch Options</span>
                    <span className="font-semibold text-slate-900">Weekday & Weekend</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${businessInfo.phoneFormatted.replace(/\s+/g, "")}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-brand-navy bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>Call: {businessInfo.phone}</span>
                  </a>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 text-[11px] text-slate-500 text-center leading-relaxed">
                  📍 Training Campus: Vikhroli East, Mumbai. Easy commute from Vikhroli Railway Station.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses Section */}
        {relatedCourses.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-10 border-t border-slate-200">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Related Training Programs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCourses.map((rel) => (
                <CourseCard key={rel.id} course={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
