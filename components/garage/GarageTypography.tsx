"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGarage } from "./useGarageAnimation";
import { GARAGE_TEAMS } from "./GarageState";

export function GarageTypography() {
  const { displayTeamIndex } = useGarage();
  const team = GARAGE_TEAMS[displayTeamIndex];

  return (
    <div className="absolute inset-x-0 top-[28%] -translate-y-1/2 w-full flex justify-center items-center pointer-events-none select-none z-10 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.h2
          key={`typo-${team.id}`}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 0.05 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1], // Custom heavy ease out
          }}
          className="text-[12vw] font-black uppercase tracking-[0.15em] text-white text-center whitespace-nowrap leading-none"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.65)",
            color: "transparent",
          }}
        >
          {team.typography}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
