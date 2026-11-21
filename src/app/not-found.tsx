import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-slate-50">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="relative h-28 w-28 mx-auto">
          <Image
            src="/assets/logo/Standalone 3D gear and JE symbol logo.png"
            alt="JAYRISH ENGINEERING"
            fill
            className="object-contain"
          />
        </div>

        <div className="space-y-2">
          <span className="text-4xl sm:text-6xl font-extrabold text-brand-navy">
            404
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page you are looking for doesn't exist or has been moved. Explore our training courses or return to the homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-navy hover:bg-brand-navy-light transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-brand-navy bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Browse Courses</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
