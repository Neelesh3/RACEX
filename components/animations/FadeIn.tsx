"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FADE_IN_VARIANTS,
  FADE_UP_VARIANTS,
  FADE_DOWN_VARIANTS,
  FADE_LEFT_VARIANTS,
  FADE_RIGHT_VARIANTS,
  DEFAULT_TRANSITION,
} from "@/constants/animation-variants";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export function FadeIn({
  children,
  direction = "up",
  delay,
  duration,
  once = true,
  className,
}: FadeInProps) {
  // Map direction value to centralized motion variants
  const variants = useMemo(() => {
    switch (direction) {
      case "none":
        return FADE_IN_VARIANTS;
      case "down":
        return FADE_DOWN_VARIANTS;
      case "left":
        return FADE_LEFT_VARIANTS;
      case "right":
        return FADE_RIGHT_VARIANTS;
      case "up":
      default:
        return FADE_UP_VARIANTS;
    }
  }, [direction]);

  // Derive final transition options without hardcoding ease curves or default values
  const transition = useMemo(() => {
    return {
      ...DEFAULT_TRANSITION,
      ...(delay !== undefined && { delay }),
      ...(duration !== undefined && { duration }),
    };
  }, [delay, duration]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
