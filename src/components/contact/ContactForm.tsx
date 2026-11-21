"use client";

import React, { useState } from "react";
import { coursesData } from "@/data/courses";
import { businessInfo } from "@/data/business";
import { CheckCircle2, AlertCircle, Send, Loader2, MessageCircle } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    courseInterested: "cnc-programming",
    qualification: "Diploma Engineering",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (minimum 2 characters).";
    }

    const cleanMobile = formData.mobileNumber.replace(/\D/g, "");
    if (!cleanMobile || cleanMobile.length < 10) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number.";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Find course title
    const selectedCourse = coursesData.find((c) => c.slug === formData.courseInterested);
    const courseTitle = selectedCourse ? selectedCourse.title : formData.courseInterested;

    // Simulate network submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Construct a well-structured WhatsApp message
    const waText = `*New Website Enquiry - JAYRISH ENGINEERING*%0A%0A*Name:* ${encodeURIComponent(
      formData.fullName
    )}%0A*Phone:* ${encodeURIComponent(formData.mobileNumber)}%0A*Email:* ${encodeURIComponent(
      formData.email || "Not provided"
    )}%0A*Course:* ${encodeURIComponent(courseTitle)}%0A*Qualification:* ${encodeURIComponent(
      formData.qualification
    )}%0A*Message:* ${encodeURIComponent(formData.message || "I want course details and fees.")}`;

    const waUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${waText}`;

    setIsSubmitting(false);
    setSubmitted(true);

    // Open WhatsApp in new tab
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-emerald-900">
          Enquiry Successfully Submitted!
        </h3>
        <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
          Thank you for contacting JAYRISH ENGINEERING. Your enquiry has been received and redirected to our WhatsApp coordinator. We will get back to you shortly.
        </p>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: "",
              mobileNumber: "",
              email: "",
              courseInterested: "cnc-programming",
              qualification: "Diploma Engineering",
              message: ""
            });
          }}
          className="mt-4 px-6 py-2.5 rounded-xl font-bold text-xs text-emerald-800 bg-white border border-emerald-300 hover:bg-emerald-100 transition-colors"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Full Name */}
      <div className="space-y-1">
        <label htmlFor="fullName" className="block text-xs font-bold text-slate-700">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="e.g. Rahul Sharma"
          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
            errors.fullName
              ? "border-red-400 focus:ring-red-200 bg-red-50/30"
              : "border-slate-200 focus:ring-brand-orange/20 focus:border-brand-orange"
          }`}
        />
        {errors.fullName && (
          <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.fullName}</span>
          </p>
        )}
      </div>

      {/* Mobile Number & Email Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="mobileNumber" className="block text-xs font-bold text-slate-700">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            required
            value={formData.mobileNumber}
            onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
            placeholder="e.g. 9820123456"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.mobileNumber
                ? "border-red-400 focus:ring-red-200 bg-red-50/30"
                : "border-slate-200 focus:ring-brand-orange/20 focus:border-brand-orange"
            }`}
          />
          {errors.mobileNumber && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.mobileNumber}</span>
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-xs font-bold text-slate-700">
            Email Address (Optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. rahul@example.com"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-400 focus:ring-red-200 bg-red-50/30"
                : "border-slate-200 focus:ring-brand-orange/20 focus:border-brand-orange"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      {/* Course Selection Dropdown */}
      <div className="space-y-1">
        <label htmlFor="courseInterested" className="block text-xs font-bold text-slate-700">
          Course Interested In <span className="text-red-500">*</span>
        </label>
        <select
          id="courseInterested"
          name="courseInterested"
          value={formData.courseInterested}
          onChange={(e) => setFormData({ ...formData, courseInterested: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange bg-white"
        >
          {coursesData.map((course) => (
            <option key={course.slug} value={course.slug}>
              {course.title} ({course.category})
            </option>
          ))}
          <option value="general-enquiry">General Enquiry / Not Sure</option>
        </select>
      </div>

      {/* Current Qualification */}
      <div className="space-y-1">
        <label htmlFor="qualification" className="block text-xs font-bold text-slate-700">
          Current Qualification
        </label>
        <select
          id="qualification"
          name="qualification"
          value={formData.qualification}
          onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange bg-white"
        >
          <option value="Diploma Engineering (Mechanical/Auto)">Diploma Engineering (Mechanical/Auto)</option>
          <option value="BE / B.Tech Graduate">BE / B.Tech Graduate</option>
          <option value="ITI Machinist / Tool & Die">ITI Machinist / Tool & Die</option>
          <option value="Existing Machine Operator / Technician">Existing Machine Operator / Technician</option>
          <option value="Working Professional">Working Professional</option>
          <option value="Fresher / Other">Fresher / Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label htmlFor="message" className="block text-xs font-bold text-slate-700">
          Your Message / Preferred Batch Timing
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="e.g. Please share fee structure and weekend batch availability."
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-dark active:scale-[0.99] transition-all shadow-md shadow-brand-orange/20 disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Enquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Enquiry</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-500 text-center">
        Your enquiry details will also connect directly to our admissions team on WhatsApp for instant response.
      </p>
    </form>
  );
};
