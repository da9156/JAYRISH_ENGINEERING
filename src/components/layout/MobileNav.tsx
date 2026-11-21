"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { businessInfo, getWhatsAppUrl } from "@/data/business";
import { navigationItems } from "@/data/navigation";
import { X, Phone, MessageCircle, MapPin, ChevronRight, Clock } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [coursesExpanded, setCoursesExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-in Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="relative h-12 w-44 aspect-[2.22/1]">
            <Image
              src="/assets/logo/Complete logo.png"
              alt="JAYRISH ENGINEERING"
              fill
              className="object-contain object-left"
              sizes="180px"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="p-4 flex-1 space-y-1">
          {navigationItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.title} className="space-y-1">
                  <button
                    onClick={() => setCoursesExpanded(!coursesExpanded)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-slate-800 rounded-lg hover:bg-slate-50 text-left"
                  >
                    <span>{item.title}</span>
                    <ChevronRight
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        coursesExpanded ? "rotate-90 text-brand-orange" : ""
                      }`}
                    />
                  </button>

                  {coursesExpanded && (
                    <div className="pl-4 space-y-1 border-l-2 border-brand-orange/30 ml-3 py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          onClick={onClose}
                          className="block px-3 py-2 text-xs font-semibold text-slate-600 hover:text-brand-orange rounded-md"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="block px-3 py-2.5 text-sm font-bold text-slate-800 rounded-lg hover:bg-slate-50 hover:text-brand-orange transition-colors"
              >
                {item.title}
              </Link>
            );
          })}

          {/* Quick info cards inside drawer */}
          <div className="pt-6 mt-6 border-t border-slate-100 space-y-3 text-xs text-slate-600">
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-800">Institute Location</p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Vikhroli East, Mumbai - 400083
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50">
              <Clock className="w-4 h-4 text-brand-navy shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-800">Working Hours</p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  9:00 AM – 9:30 PM (Mon – Sun)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Action Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${businessInfo.phoneFormatted.replace(/\s+/g, "")}`}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-brand-navy bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 text-brand-orange" />
            <span>Call: {businessInfo.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
