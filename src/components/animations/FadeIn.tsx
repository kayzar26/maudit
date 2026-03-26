import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  yOffset?: number;
  animate?: boolean;
}

/**
 * FadeIn Component (Inert Version)
 * 
 * To restore animations:
 * 1. Add "use client" at the top
 * 2. Import { motion } from "framer-motion"
 * 3. Replace the return with a <motion.div> using initial/whileInView props.
 */
export function FadeIn({
  children,
  className = "",
}: FadeInProps) {
  // Animations disabled globally to fix hydration errors and performance issues.
  // Returning a plain div ensures zero mismatch between server and client.
  return <div className={className}>{children}</div>;
}
