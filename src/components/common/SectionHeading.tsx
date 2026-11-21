import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  centered = false,
  dark = false,
  className
}) => {
  return (
    <div
      className={cn(
        "space-y-3",
        centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase",
            dark
              ? "bg-brand-navy-light/40 text-brand-orange-light border border-brand-orange/30"
              : "bg-brand-navy/5 text-brand-navy border border-brand-navy/10"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          {badge}
        </div>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight",
          dark ? "text-white" : "text-brand-navy-dark"
        )}
      >
        {title}{" "}
        {highlight && (
          <span className="text-gradient-orange inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed",
            dark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
