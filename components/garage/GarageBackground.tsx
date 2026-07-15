"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useGarage } from "./useGarageAnimation";
import { GARAGE_TEAMS } from "./GarageState";

/**
 * GarageBackground
 *
 * Visual layer stack (bottom → top):
 * 1. Constructor Background Image (.webp) — the real garage environment
 * 2. Dark Cinematic Overlay — preserves readability
 * 3. Subtle Vignette — draws focus to center
 * 4. Noise Texture — analog film grain
 * 5. Volumetric Brand Halo — colored glow behind the car
 * 6. Tech Grid Overlay — subtle mechanical grid pattern
 */
export function GarageBackground() {
  const { displayTeamIndex } = useGarage();
  const team = GARAGE_TEAMS[displayTeamIndex];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#050505] z-0">

      {/* ─── Layer 1: Constructor Background Image ─── */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`bg-img-${team.id}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={team.backgroundAsset}
            alt={`${team.teamName} garage environment`}
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
            style={{
              opacity: 0.3,
              filter: "brightness(0.7) saturate(0.85)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ─── Layer 2: Dark Cinematic Overlay ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,5,0.75) 0%, rgba(5,5,5,0.5) 40%, rgba(5,5,5,0.65) 70%, rgba(5,5,5,0.9) 100%)",
        }}
      />

      {/* ─── Layer 3: Subtle Vignette ─── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#050505_90%)] opacity-90 pointer-events-none" />

      {/* ─── Layer 4: Noise Texture ─── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat mix-blend-overlay"
        style={{
          backgroundImage: "url('/textures/noise/noise.png')",
          backgroundSize: "256px 256px",
        }}
      />

      {/* ─── Layer 5: Volumetric Brand Halo ─── */}
      <AnimatePresence mode="popLayout">
        {/* Large Diffuse Glow */}
        <motion.div
          key={`glow-large-${team.id}`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.2, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          style={{ backgroundColor: team.primaryColor }}
          className="absolute left-1/2 lg:left-[55%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[500px] rounded-full blur-[110px] sm:blur-[130px] mix-blend-screen pointer-events-none"
        />
        {/* Concentrated Core Glow */}
        <motion.div
          key={`glow-core-${team.id}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.14, scale: 0.95 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ backgroundColor: team.primaryColor }}
          className="absolute left-1/2 lg:left-[55%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[250px] rounded-full blur-[50px] sm:blur-[70px] mix-blend-screen pointer-events-none"
        />
      </AnimatePresence>

      {/* ─── Layer 6: Gradient Tint (team-colored atmosphere) ─── */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`gradient-${team.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{ background: team.gradient }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      </AnimatePresence>

      {/* ─── Layer 7: Tech Grid Overlay ─── */}
      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
