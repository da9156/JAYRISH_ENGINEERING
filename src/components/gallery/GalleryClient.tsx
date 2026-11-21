"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: "CNC Machines" | "VMC Machines" | "CAD/CAM Software" | "Training Sessions" | "Classroom" | "Institute";
  image: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "Fanuc Oi-MF Controller Programming",
    category: "CNC Machines",
    image: "/assets/courses/CNC Programming Training.png",
    description: "Operator programming and G-code execution on modern CNC console display."
  },
  {
    id: "g-2",
    title: "VMC-850 Industrial Machining Center",
    category: "VMC Machines",
    image: "/assets/courses/VMC Machine Operating Training.png",
    description: "Vertical Machining Center with enclosure, tool magazine, and controller console."
  },
  {
    id: "g-3",
    title: "Haas VMC Controller & Coordinate Readout",
    category: "VMC Machines",
    image: "/assets/courses/VMC Programming Training.png",
    description: "Active work coordinates (G54), spindle RPM, and tool offsets monitoring."
  },
  {
    id: "g-4",
    title: "Mastercam 3D Surface Machining Toolpath",
    category: "CAD/CAM Software",
    image: "/assets/courses/Mastercam 2D & 3D Training.png",
    description: "3-axis high-speed raster toolpath simulation and cutter contact verification."
  },
  {
    id: "g-5",
    title: "Delcam PowerMill Die & Mold CAM Simulation",
    category: "CAD/CAM Software",
    image: "/assets/courses/Delcam Programming Training.png",
    description: "Roughing clearance and steep/shallow finishing strategies on complex mold surfaces."
  },
  {
    id: "g-6",
    title: "JAYRISH ENGINEERING Complete Brand Logo",
    category: "Institute",
    image: "/assets/logo/Complete logo.png",
    description: "Official institute identity: Learn · Practice · Excel."
  },
  {
    id: "g-7",
    title: "Precision JE 3D Gear & Tool Spindle Emblem",
    category: "Institute",
    image: "/assets/logo/Standalone 3D gear and JE symbol logo.png",
    description: "Symbolizing machining technology, cutting tools, and technical mastery."
  }
];

export const GalleryClient: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "CNC Machines",
    "VMC Machines",
    "CAD/CAM Software",
    "Training Sessions",
    "Classroom",
    "Institute"
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const prevImage = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const nextImage = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex, filteredItems.length]);

  const currentItem =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === cat
                ? "bg-brand-navy text-white shadow-md shadow-brand-navy/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {filteredItems.length === 0 ? (
        <div className="p-12 text-center text-slate-500 rounded-2xl border border-dashed border-slate-300">
          <p className="text-sm font-semibold">
            Photos for "{activeCategory}" will be updated soon.
          </p>
          <p className="text-xs text-slate-400 mt-1">
            New institute and workshop photographs are added regularly.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-subtle hover:shadow-card cursor-pointer transition-all"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-white/90 text-brand-navy shadow-sm">
                  {item.category}
                </span>
              </div>

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <h4 className="text-sm font-bold text-white group-hover:text-brand-orange-light transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo viewer: ${currentItem.title}`}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh]">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            <div className="text-center text-white space-y-1">
              <span className="text-xs font-bold text-brand-orange-light uppercase tracking-wider">
                {currentItem.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                {currentItem.description}
              </p>
              <p className="text-[11px] text-slate-400">
                Use Left / Right arrow keys to navigate, Esc to close
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
