"use client";

import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "outline"
  | "ghost"
  | "outlineGray";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-2xl font-body transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",

  secondary: "bg-secondary text-secondary-foreground hover:opacity-90 text-primary",

  accent: "bg-accent text-accent-foreground hover:scale-105 shadow-custom",

  outline: "border border-border text-foreground hover:bg-muted",

  ghost: "text-foreground hover:bg-muted",
  outlineGray:
    "border border-ring text-foreground hover:bg-accent dark:hover:bg-primary/10",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-small",
  md: "h-11 px-6 text-paragraph",
  lg: "h-14 px-8 text-section-title",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
