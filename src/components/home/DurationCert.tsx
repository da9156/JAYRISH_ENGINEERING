import React from "react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/data/business";
import { Clock, MapPin, Award, ArrowRight, MessageCircle } from "lucide-react";

export const DurationCert: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-brand-navy-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid-dark opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-orange/20 text-brand-orange-light border border-brand-orange/30">
            Structured Education
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Start Learning. <span className="text-gradient-orange">Strengthen Your Technical Skills.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Our courses are structured to deliver comprehensive theory, blueprint reading, and simulation proficiency.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Course Duration</h3>
            <p className="text-sm text-slate-300">
              Most courses are designed around an approximate <strong className="text-white">3-month</strong> timeline. Actual duration depends on individual course depth and schedule.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Training Mode</h3>
            <p className="text-sm text-slate-300">
              <strong className="text-white">Classroom / Offline</strong> training at our facility in Vikhroli East, Mumbai, with direct instructor guidance and personal doubt clearing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Certification</h3>
            <p className="text-sm text-slate-300">
              Receive a recognized <strong className="text-white">Course Completion Certificate</strong> upon successful completion of curriculum topics and practical evaluations.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center pt-4">
          <a
            href={getWhatsAppUrl("Hello JAYRISH ENGINEERING, I want to enquire about course duration, fees, and upcoming admission batches.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-brand-orange hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/30 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Enquire About Admissions</span>
          </a>
        </div>
      </div>
    </section>
  );
};
