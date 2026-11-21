import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery/GalleryClient";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Image Gallery",
  description:
    "View photographs and simulations of CNC machines, VMC machining centers, Mastercam and Delcam software at JAYRISH ENGINEERING, Mumbai."
};

export default function GalleryPage() {
  return (
    <div className="space-y-12 sm:space-y-16 py-10 sm:py-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-navy-deep text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 industrial-grid-dark opacity-10" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/20 text-brand-orange-light border border-brand-orange/30">
              <ImageIcon className="w-4 h-4 text-brand-orange" />
              <span>Visual Media</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Institute & Technical <span className="text-gradient-orange">Gallery</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore CNC and VMC machinery, CAM toolpath simulations, and controller interfaces. Click on any photo to open full-screen lightbox.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Filterable Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryClient />
      </section>
    </div>
  );
}
