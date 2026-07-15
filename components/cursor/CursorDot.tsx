"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";

interface CursorDotProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  color: string;
  isClicked: boolean;
}

export function CursorDot({ x, y, color, isClicked }: CursorDotProps) {
  return (
    <motion.div
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: color,
      }}
      animate={{
        scale: isClicked ? 0.65 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 800,
        damping: 35,
      }}
      className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[99999] shadow-[0_0_10px_rgba(0,0,0,0.5)]"
    />
  );
}
