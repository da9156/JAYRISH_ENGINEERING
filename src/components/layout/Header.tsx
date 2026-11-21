"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { businessInfo, getWhatsAppUrl } from "@/data/business";
import { navigationItems } from "@/data/navigation";
import { MobileNav } from "./MobileNav";
import { Phone, MessageCircle, Menu, ChevronDown, MapPin } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top micro bar for location and contact */}
      <div className="hidden lg:block bg-brand-navy-dark text-slate-300 text-xs py-1.5 border-b border-brand-navy/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>Vikhroli East, Mumbai (Near Station Rd, Side Colony)</span>
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 font-medium">
              Training Mode: Classroom / Offline
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${businessInfo.phoneFormatted.replace(/\s+/g, "")}`}
              className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>Call: {businessInfo.phone}</span>
            </a>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Hours: 9:00 AM – 9:30 PM (All 7 Days)</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md ${
          isScrolled
            ? "shadow-md border-b border-slate-200/80 py-2.5"
            : "border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo with proper proportions and clear space */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 group focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-lg p-0.5"
            >
              <div className="relative h-13 sm:h-16 lg:h-20 w-40 sm:w-52 lg:w-64 aspect-[2.22/1]">
                <Image
                  src="/assets/logo/Complete logo.png"
                  alt="JAYRISH ENGINEERING - CNC & VMC Training Institute"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 210px, 260px"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navigationItems.map((item) => {
                if (item.children) {
                  return (
                    <div
                      key={item.title}
                      className="relative"
                      onMouseEnter={() => setCoursesDropdownOpen(true)}
                      onMouseLeave={() => setCoursesDropdownOpen(false)}
                    >
                      <button
                        className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors rounded-md group"
                        onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                      >
                        <span>{item.title}</span>
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-brand-orange" />
                      </button>

                      {coursesDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-200/90 py-2 animate-fade-in z-50">
                          <div className="px-3.5 py-1.5 border-b border-slate-100 mb-1">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                              Our Technical Courses
                            </span>
                          </div>
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="block px-3.5 py-2 hover:bg-slate-50 transition-colors group/sub"
                              onClick={() => setCoursesDropdownOpen(false)}
                            >
                              <div className="text-xs font-bold text-slate-800 group-hover/sub:text-brand-orange transition-colors">
                                {child.title}
                              </div>
                              {child.description && (
                                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                  {child.description}
                                </p>
                              )}
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
                    className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors rounded-md"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${businessInfo.phoneFormatted.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-brand-navy bg-brand-navy/5 border border-brand-navy/20 hover:bg-brand-navy hover:text-white transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>Call Now</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-sm shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200"
                aria-label="WhatsApp Us"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
