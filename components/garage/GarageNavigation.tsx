"use client";

import React from "react";
import { motion } from "framer-motion";
import { useGarage } from "./useGarageAnimation";
import { GARAGE_TEAMS } from "./GarageState";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function GarageNavigation() {
  const { nextTeam, prevTeam, isLocked, displayTeamIndex } = useGarage();
  const team = GARAGE_TEAMS[displayTeamIndex];

  return (
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4 md:px-8 z-30 pointer-events-none">
      
      {/* Prev Button */}
      <motion.button
        onClick={prevTeam}
        disabled={isLocked}
        className={cn(
          "pointer-events-auto flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full",
          "border bg-black/40 backdrop-blur-md text-white",
          "transition-all duration-300 ease-out",
          isLocked 
            ? "opacity-40 cursor-not-allowed border-white/[0.03]" 
            : "border-white/[0.08] cursor-pointer"
        )}
        whileHover={!isLocked ? { 
          borderColor: team.primaryColor, 
          boxShadow: `0 0 25px ${team.primaryColor}35`,
          backgroundColor: "rgba(255, 255, 255, 0.05)"
        } : {}}
        whileTap={!isLocked ? { scale: 0.95 } : {}}
        aria-label="Previous Team"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>

      {/* Next Button */}
      <motion.button
        onClick={nextTeam}
        disabled={isLocked}
        className={cn(
          "pointer-events-auto flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full",
          "border bg-black/40 backdrop-blur-md text-white",
          "transition-all duration-300 ease-out",
          isLocked 
            ? "opacity-40 cursor-not-allowed border-white/[0.03]" 
            : "border-white/[0.08] cursor-pointer"
        )}
        whileHover={!isLocked ? { 
          borderColor: team.primaryColor, 
          boxShadow: `0 0 25px ${team.primaryColor}35`,
          backgroundColor: "rgba(255, 255, 255, 0.05)"
        } : {}}
        whileTap={!isLocked ? { scale: 0.95 } : {}}
        aria-label="Next Team"
      >
        {isLocked ? (
          <Loader2 className="w-5 h-5 md:w-6 md:h-6 animate-spin text-white/60" />
        ) : (
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </motion.button>

    </div>
  );
}
