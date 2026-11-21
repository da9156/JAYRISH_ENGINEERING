import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "navy" | "orange" | "green" | "gray" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "navy",
  size = "md",
  className
}) => {
  const variantStyles = {
    navy: "bg-brand-navy/10 text-brand-navy border-brand-navy/20",
    orange: "bg-brand-orange/10 text-brand-orange-dark border-brand-orange/30",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200",
    gray: "bg-slate-100 text-slate-700 border-slate-200",
    outline: "bg-transparent text-slate-700 border-slate-300"
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs font-medium",
    md: "px-2.5 py-1 text-xs sm:text-sm font-semibold"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};
