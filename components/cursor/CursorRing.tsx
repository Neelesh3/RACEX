"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";
import { CursorState } from "./CursorProvider";

interface CursorRingProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  color: string;
  state: CursorState;
  isClicked: boolean;
}

export function CursorRing({ x, y, color, state, isClicked }: CursorRingProps) {
  // Map cursorState to Framer Motion variables
  let ringScale = 0;
  let ringOpacity = 0;
  let ringBorderWidth = 1.5;
  let scaleX = 1;
  let scaleY = 1;
  let glowIntensity = "0px 0px 0px rgba(0,0,0,0)";

  if (state === "hover") {
    ringScale = 1.1;
    ringOpacity = 0.8;
    glowIntensity = `0 0 15px ${color}33`;
  } else if (state === "card") {
    ringScale = 1.6;
    ringOpacity = 0.55;
    ringBorderWidth = 1.0;
    glowIntensity = `0 0 10px ${color}22`;
  } else if (state === "garage") {
    ringScale = 1.1;
    ringOpacity = 0.9;
    scaleX = 1.5;
    scaleY = 0.8;
    glowIntensity = `0 0 20px ${color}44`;
  } else if (state === "default") {
    // A micro outer ring to give that precision instrument feeling
    ringScale = 0.6;
    ringOpacity = 0.15;
    ringBorderWidth = 1.0;
  }

  // Click compression behavior
  if (isClicked && state !== "text" && state !== "hidden") {
    ringScale *= 0.75;
  }

  return (
    <motion.div
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        borderColor: color,
        boxShadow: glowIntensity,
      }}
      animate={{
        scale: ringScale,
        opacity: ringOpacity,
        borderWidth: `${ringBorderWidth}px`,
        scaleX,
        scaleY,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 24,
        mass: 0.6,
      }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-solid pointer-events-none z-[99998]"
    />
  );
}
