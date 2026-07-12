"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { PAGE_TRANSITION_VARIANTS, DEFAULT_TRANSITION } from "@/constants/animation-variants";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      variants={PAGE_TRANSITION_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={DEFAULT_TRANSITION}
      className={className}
    >
      {children}
    </motion.div>
  );
}
