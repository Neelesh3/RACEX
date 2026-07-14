"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGarage } from "./useGarageAnimation";
import { GARAGE_TEAMS } from "./GarageState";
import { Trophy, User } from "lucide-react";

export function GarageCards() {
  const { displayTeamIndex } = useGarage();
  const team = GARAGE_TEAMS[displayTeamIndex];

  return (
    <div className="absolute inset-x-0 bottom-8 md:bottom-12 z-30 px-6 sm:px-12 pointer-events-none select-none">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-stretch gap-6 pointer-events-auto">
        
        {/* Left Card: Profile & Story */}
        <div className="w-full md:w-[40%] flex">
          <AnimatePresence mode="wait">
            <motion.div
              key={`card-left-${team.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              style={{ borderTop: `2px solid ${team.primaryColor}` }}
              className="flex flex-col flex-1 rounded-2xl border border-white/[0.06] bg-black/60 backdrop-blur-xl p-5 md:p-6 shadow-2xl transition-all duration-300 hover:border-white/[0.12] hover:bg-black/75"
            >
              {/* Header: Logo & Identity */}
              <div className="flex items-center gap-4 mb-4">
                {team.logoAsset ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={team.logoAsset} 
                    alt={`${team.teamName} Logo`} 
                    className="w-10 h-10 object-contain invert brightness-0"
                    onError={(e) => {
                      // Fallback if logo fails
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                ) : null}
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">{team.teamName}</h3>
                  <div className="flex items-center gap-2 mt-0.5 text-xs font-semibold text-white/50 uppercase tracking-widest">
                    <span>{team.carName}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{team.season}</span>
                  </div>
                </div>
              </div>

              {/* Story Narrative */}
              <p className="text-sm leading-relaxed text-[#B5B5B5] font-normal flex-1">
                {team.shortStory}
              </p>

              {/* Engine Specs */}
              <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs">
                <span className="font-semibold text-white/40 uppercase tracking-wider">Engine Partner</span>
                <span className="font-bold text-white uppercase tracking-wider">{team.engine}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Card: Stats & Lineup */}
        <div className="w-full md:w-[45%] flex">
          <AnimatePresence mode="wait">
            <motion.div
              key={`card-right-${team.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              style={{ borderTop: `2px solid ${team.primaryColor}` }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 rounded-2xl border border-white/[0.06] bg-black/60 backdrop-blur-xl p-5 md:p-6 shadow-2xl transition-all duration-300 hover:border-white/[0.12] hover:bg-black/75"
            >
              {/* Grid Col 1: Statistics */}
              <div className="flex flex-col justify-between gap-4">
                <div className="flex items-center gap-2 mb-1 text-[#808080] uppercase tracking-wider font-semibold text-xs">
                  <Trophy className="w-3.5 h-3.5 text-[#E10600]" />
                  <span>Team Legacy</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 flex-1">
                  <div className="flex flex-col justify-center rounded-xl bg-white/[0.03] border border-white/[0.04] p-3 text-center transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10">
                    <span className="text-xl font-black text-white">{team.championships}</span>
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider mt-0.5">Titles</span>
                  </div>
                  <div className="flex flex-col justify-center rounded-xl bg-white/[0.03] border border-white/[0.04] p-3 text-center transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10">
                    <span className="text-xl font-black text-white">{team.wins}</span>
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider mt-0.5">Wins</span>
                  </div>
                  <div className="flex flex-col justify-center rounded-xl bg-white/[0.03] border border-white/[0.04] p-3 text-center transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10">
                    <span className="text-xl font-black text-white">{team.podiums}</span>
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider mt-0.5">Podiums</span>
                  </div>
                </div>
              </div>

              {/* Grid Col 2: Drivers */}
              <div className="flex flex-col justify-between gap-3 border-t sm:border-t-0 sm:border-l border-white/[0.06] pt-4 sm:pt-0 sm:pl-4">
                <div className="flex items-center gap-2 mb-1 text-[#808080] uppercase tracking-wider font-semibold text-xs">
                  <User className="w-3.5 h-3.5 text-[#E10600]" />
                  <span>Driver Lineup</span>
                </div>

                <div className="flex flex-col gap-2 flex-1 justify-center">
                  {team.drivers.map((driver) => (
                    <div 
                      key={driver.name}
                      className="flex items-center justify-between rounded-xl bg-white/[0.02] border border-white/[0.04] px-3 py-2 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/10"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{driver.flag}</span>
                        <span className="text-xs font-bold text-white">{driver.name}</span>
                      </div>
                      <span className="text-xs font-black text-[#E10600] tabular-nums">#{driver.number}</span>
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
