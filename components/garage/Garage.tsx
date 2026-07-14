"use client";

import React from "react";
import { GarageProvider, useGarage } from "./useGarageAnimation";
import { GarageBackground } from "./GarageBackground";
import { GarageTypography } from "./GarageTypography";
import { GarageCar } from "./GarageCar";
import { GarageCards } from "./GarageCards";
import { GarageNavigation } from "./GarageNavigation";
import { GARAGE_TEAMS } from "./GarageState";

function GarageLayout() {
  const { displayTeamIndex } = useGarage();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050505] select-none flex flex-col justify-between">
      {/* Top Premium Brand Header */}
      <div className="absolute top-24 inset-x-0 z-30 px-6 sm:px-12 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <span className="text-xs font-black tracking-[0.25em] text-[#E10600]">RACEX</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="text-xs font-bold tracking-widest text-white/60 uppercase">CONSTRUCTOR GARAGE</span>
        </div>
        <div className="text-xs font-mono font-bold tracking-[0.2em] text-white/40 pointer-events-auto">
          {(displayTeamIndex + 1).toString().padStart(2, "0")} / {GARAGE_TEAMS.length.toString().padStart(2, "0")}
        </div>
      </div>

      {/* Synchronized Visual Layers */}
      <GarageBackground />
      <GarageTypography />
      <GarageCar />
      <GarageCards />
      <GarageNavigation />

      {/* Subtle bottom indicator line or helper text */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-[10px] font-bold tracking-widest text-white/20 uppercase text-center">
        Use Arrows to Explore Constructors
      </div>
    </div>
  );
}

export default function Garage() {
  return (
    <GarageProvider>
      <GarageLayout />
    </GarageProvider>
  );
}
export { Garage };
