"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { STAGGER_CONTAINER_VARIANTS } from "@/constants/animation-variants";

interface StaggerProps {
  children: React.ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

export function Stagger({
  children,
  delay,
  staggerDelay,
  className,
}: StaggerProps) {
  // Override container settings cleanly using parameters without hardcoding values
  const variants = useMemo(() => {
    return {
      hidden: STAGGER_CONTAINER_VARIANTS.hidden,
      visible: {
        ...STAGGER_CONTAINER_VARIANTS.visible,
        transition: {
          ...STAGGER_CONTAINER_VARIANTS.visible.transition,
          ...(staggerDelay !== undefined && { staggerChildren: staggerDelay }),
          ...(delay !== undefined && { delayChildren: delay }),
        },
      },
    };
  }, [delay, staggerDelay]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
