"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonBaseProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline" | "ghost" | "link";
  children: React.ReactNode;
}

export function ButtonBase({ children, className, variant = "primary", ...props }: ButtonBaseProps) {
  // We use Framer Motion for a premium, sleek hover animation
  // The 'primary' variant gets the classic green background but uses a sleek scale and bright text effect instead of the ugly black invert.
  
  const baseStyles = "relative overflow-hidden font-bold uppercase tracking-tight text-lg rounded-xl inline-flex items-center justify-center transition-colors duration-300";
  
  const variants = {
    primary: "bg-primary text-thm px-8 py-4 shadow-[0_4px_0_0_rgb(130,165,56)] hover:bg-[#b0d859] hover:shadow-[0_2px_0_0_rgb(130,165,56)] hover:mt-[2px] mb-[2px] transition-all duration-150",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-thm px-8 py-4",
    ghost: "bg-transparent text-secondary hover:bg-gray-100 hover:text-thm px-6 py-3",
    link: "text-primary hover:underline underline-offset-4 px-0 py-0",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Subtle shine effect that sweeps across the button on hover */}
      <motion.div
        className="absolute inset-0 z-0 bg-white/20"
        initial={{ x: "-100%", skewX: -20 }}
        whileHover={{ x: "200%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.button>
  );
}
