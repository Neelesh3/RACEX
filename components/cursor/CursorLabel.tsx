"use client";

import React from "react";
import { motion, MotionValue, AnimatePresence } from "framer-motion";

interface CursorLabelProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  label: string;
  color: string;
}

export function CursorLabel({ x, y, label, color }: CursorLabelProps) {
  return (
    <AnimatePresence>
      {label && (
        <motion.div
          style={{
            x,
            y,
            translateX: "20px",
            translateY: "20px",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed top-0 left-0 pointer-events-none z-[99999] select-none"
        >
          <span
            style={{ borderColor: `${color}22` }}
            className="text-[9px] font-mono font-black tracking-[0.25em] uppercase px-2 py-0.5 rounded border bg-black/80 backdrop-blur-md text-white shadow-2xl"
          >
            {label}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
