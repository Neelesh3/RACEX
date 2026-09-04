"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGarage } from "./useGarageAnimation";
import { GARAGE_TEAMS } from "./GarageState";
import { Trophy, User } from "lucide-react";
import { useCursor } from "@/components/cursor";

export function GarageCards() {
  const { displayTeamIndex } = useGarage();
  const team = GARAGE_TEAMS[displayTeamIndex];
  const { setCursorState, setCursorLabel, resetCursor } = useCursor();

  return (
    <div className="absolute inset-x-0 bottom-4 sm:bottom-8 md:bottom-12 z-30 px-4 sm:px-8 md:px-12 pointer-events-none select-none max-h-[50vh] md:max-h-none overflow-y-auto">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-stretch gap-4 sm:gap-6 pointer-events-auto">
        
        {/* Left Card: Profile & Story */}
        <div className="w-full md:w-[33%] flex">
          <AnimatePresence mode="wait">
            <motion.div
              key={`card-left-${team.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              onMouseEnter={() => {
                setCursorState("card");
                setCursorLabel("ABOUT");
              }}
              onMouseLeave={resetCursor}
              style={{ borderTop: `2px solid ${team.primaryColor}` }}
              className="flex flex-col flex-1 rounded-xl border border-white/[0.06] bg-black/60 backdrop-blur-xl p-5 shadow-2xl transition-all duration-300 hover:border-white/[0.12] hover:bg-black/75"
            >
              {/* Header: Logo & Identity */}
              <div className="flex items-center gap-3 mb-3">
                {team.logoAsset ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                     src={team.logoAsset} 
                     alt={`${team.teamName} Logo`} 
                     className="w-8 h-8 object-contain invert brightness-0"
                     onError={(e) => {
                       // Fallback if logo fails
                       (e.target as HTMLElement).style.display = "none";
                     }}
                  />
                ) : null}
                <div>
                  <h3 className="text-base font-black tracking-wider text-white uppercase">{team.teamName}</h3>
                  <div className="flex items-center gap-2 mt-0.5 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    <span>{team.carName}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{team.season}</span>
                  </div>
                </div>
              </div>

              {/* Story Narrative */}
              <p className="text-xs leading-relaxed text-white/70 tracking-wide font-normal flex-1">
                {team.shortStory}
              </p>

              {/* Engine Specs */}
              <div className="mt-3 pt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px]">
                <span className="font-bold text-white/40 uppercase tracking-widest">Engine Partner</span>
                <span className="font-extrabold text-white uppercase tracking-widest">{team.engine}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Card: Stats & Lineup */}
        <div className="w-full md:w-[38%] flex">
          <AnimatePresence mode="wait">
            <motion.div
              key={`card-right-${team.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              onMouseEnter={() => {
                setCursorState("card");
                setCursorLabel("STATS");
              }}
              onMouseLeave={resetCursor}
              style={{ borderTop: `2px solid ${team.primaryColor}` }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 rounded-xl border border-white/[0.06] bg-black/60 backdrop-blur-xl p-5 shadow-2xl transition-all duration-300 hover:border-white/[0.12] hover:bg-black/75"
            >
              {/* Grid Col 1: Statistics */}
              <div className="flex flex-col justify-between gap-3">
                <div className="flex items-center gap-2 mb-1 text-white/40 uppercase tracking-widest font-bold text-[10px]">
                  <Trophy className="w-3 h-3 text-[#E10600]" />
                  <span>Legacy</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 flex-1">
                  <div className="flex flex-col justify-center rounded-lg bg-white/[0.03] border border-white/[0.04] p-2 text-center transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10">
                    <span className="text-base font-black text-white tracking-wider">{team.championships}</span>
                    <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest mt-0.5">Titles</span>
                  </div>
                  <div className="flex flex-col justify-center rounded-lg bg-white/[0.03] border border-white/[0.04] p-2 text-center transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10">
                    <span className="text-base font-black text-white tracking-wider">{team.wins}</span>
                    <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest mt-0.5">Wins</span>
                  </div>
                  <div className="flex flex-col justify-center rounded-lg bg-white/[0.03] border border-white/[0.04] p-2 text-center transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10">
                    <span className="text-base font-black text-white tracking-wider">{team.podiums}</span>
                    <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest mt-0.5">Podium</span>
                  </div>
                </div>
              </div>

              {/* Grid Col 2: Drivers */}
              <div className="flex flex-col justify-between gap-2 border-t sm:border-t-0 sm:border-l border-white/[0.06] pt-3 sm:pt-0 sm:pl-4">
                <div className="flex items-center gap-2 mb-1 text-white/40 uppercase tracking-widest font-bold text-[10px]">
                  <User className="w-3 h-3 text-[#E10600]" />
                  <span>Lineup</span>
                </div>

                <div className="flex flex-col gap-2 flex-1 justify-center">
                  {team.drivers.map((driver) => (
                    <div 
                      key={driver.name}
                      className="flex items-center justify-between rounded-lg bg-white/[0.02] border border-white/[0.04] px-3 py-1.5 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/10"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs">{driver.flag}</span>
                        <span className="text-[11px] font-semibold text-white tracking-wide">{driver.name}</span>
                      </div>
                      <span className="text-[11px] font-black text-[#E10600] tabular-nums">#{driver.number}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
