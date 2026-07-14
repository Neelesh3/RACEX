"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGarage } from "./useGarageAnimation";
import { GARAGE_TEAMS } from "./GarageState";

export function GarageBackground() {
  const { displayTeamIndex } = useGarage();
  const team = GARAGE_TEAMS[displayTeamIndex];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#050505] z-0">
      {/* Morphing Gradient Layer */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`bg-${team.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{ background: team.gradient }}
          className="absolute inset-0 w-full h-full"
        />
      </AnimatePresence>

      {/* Volumetric Brand Glow behind the F1 car */}
      <AnimatePresence mode="popLayout">
        {/* Large Diffuse Brand Glow */}
        <motion.div
          key={`glow-large-${team.id}`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.24, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          style={{ backgroundColor: team.primaryColor }}
          className="absolute left-1/2 lg:left-[55%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[500px] rounded-full blur-[110px] sm:blur-[130px] mix-blend-screen pointer-events-none"
        />
        {/* High-intensity Core Accent Glow */}
        <motion.div
          key={`glow-core-${team.id}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.18, scale: 0.95 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ backgroundColor: team.primaryColor }}
          className="absolute left-1/2 lg:left-[55%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[250px] rounded-full blur-[50px] sm:blur-[70px] mix-blend-screen pointer-events-none"
        />
      </AnimatePresence>

      {/* Premium Carbon / Tech Grid Overlay (Simulated) */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Noise Overlay for grit and analog grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none bg-repeat mix-blend-overlay"
        style={{
          backgroundImage: `url('/textures/noise-overlay.png')`,
        }}
      />

      {/* Deep cinematic vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_95%)] opacity-85 pointer-events-none" />
    </div>
  );
}
