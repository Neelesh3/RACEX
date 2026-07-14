"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGarage } from "./useGarageAnimation";
import { GARAGE_TEAMS } from "./GarageState";
import { GARAGE_TIMELINE } from "./GarageTimeline";

export function GarageCar() {
  const { displayTeamIndex } = useGarage();
  const team = GARAGE_TEAMS[displayTeamIndex];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-20 overflow-hidden">
      <div className="relative w-full max-w-[85vw] md:max-w-[70vw] lg:max-w-[62vw] flex justify-center items-center mt-12 md:mt-24">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`car-${team.id}`}
            initial={{ x: "100vw", rotate: 6, scale: 1.08, opacity: 0 }}
            animate={{ x: 0, rotate: 0, scale: 1, opacity: 1 }}
            exit={{ x: "-100vw", rotate: -4, scale: 0.92, opacity: 0 }}
            transition={{
              x: GARAGE_TIMELINE.carSpring,
              rotate: GARAGE_TIMELINE.carSpring,
              scale: GARAGE_TIMELINE.carSpring,
              opacity: { duration: 0.4 },
            }}
            className="relative w-full h-auto flex items-center justify-center"
          >
            {/* The high-resolution transparent render of the Formula 1 car */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={team.carAsset}
              alt={`${team.teamName} - ${team.carName}`}
              className="w-full h-auto object-contain max-h-[45vh] md:max-h-[50vh] filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
            />

            {/* Double-layered realistic mechanical shadow */}
            {/* Layer 1: Ambient Occlusion (sharp and dark contact shadow directly under wheels) */}
            <div 
              className="absolute -bottom-2 left-[12%] right-[12%] h-3 bg-black/90 blur-[5px] rounded-full pointer-events-none" 
              style={{ mixBlendMode: "multiply" }}
            />
            {/* Layer 2: Wide Diffuse Ground Shadow */}
            <div 
              className="absolute -bottom-5 left-[5%] right-[5%] h-6 bg-black/55 blur-[15px] rounded-full pointer-events-none" 
              style={{ mixBlendMode: "multiply" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
