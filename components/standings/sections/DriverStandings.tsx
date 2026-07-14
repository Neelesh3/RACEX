"use client";

import React from "react";
import { motion } from "framer-motion";
import { CountryFlag } from "@/components/ui/CountryFlag";
import { driverStandings } from "@/lib/standings";

export default function DriverStandings() {
  const leaderPoints = driverStandings[0]?.points || 0;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end border-b border-white/[0.05] pb-3">
        <div>
          <h2 className="text-sm font-bold tracking-wider uppercase text-[#808080] border-l border-[#E10600] pl-3">
            Drivers Championship
          </h2>
        </div>
        <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
          Points & Gaps
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {driverStandings.map((driver, idx) => {
          const gap = leaderPoints - driver.points;
          const isLeader = idx === 0;

          // Simple team color resolver fallback
          const teamColors: Record<string, string> = {
            "Red Bull Racing": "#3671C6",
            "McLaren": "#FF8000",
            "Ferrari": "#DC0000",
            "Mercedes": "#27F4D2",
            "Aston Martin": "#006F62",
            "Williams": "#005AFF",
            "Haas": "#B6BABD",
            "Alpine": "#0090FF",
            "Racing Bulls": "#6692FF",
            "Kick Sauber": "#52E252",
          };
          const resolvedColor = teamColors[driver.team] || "#E10600";

          return (
            <motion.div
              key={driver.driverId}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              className="group flex items-center justify-between p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-300"
            >
              {/* Position & Team Color stripe */}
              <div className="flex items-center gap-4 min-w-0">
                <span className="text-sm font-black font-mono w-6 text-neutral-500 tabular-nums">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                
                {/* Team color vertical line */}
                <div 
                  className="w-1.5 h-6 rounded-full shrink-0" 
                  style={{ backgroundColor: resolvedColor }}
                />

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm truncate group-hover:text-[#E10600] transition-colors">
                      {driver.driverName}
                    </span>
                    <CountryFlag country={driver.country} fallback={driver.flag} className="w-3.5 h-2.5 rounded-sm shrink-0" />
                  </div>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider block mt-0.5">
                    {driver.team}
                  </span>
                </div>
              </div>

              {/* Stats & Gaps */}
              <div className="flex items-center gap-6 sm:gap-10 shrink-0 text-right">
                <div className="hidden sm:block">
                  <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest block">wins / podiums</span>
                  <span className="text-xs text-white/70 font-mono mt-0.5 block">
                    {driver.wins}W · {driver.podiums}P
                  </span>
                </div>
                
                <div>
                  <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest block">gap</span>
                  <span className="text-xs font-mono mt-0.5 block text-neutral-400">
                    {isLeader ? "Leader" : `-${gap} PTS`}
                  </span>
                </div>

                <div className="w-16">
                  <span className="text-[9px] font-bold text-[#E10600] uppercase tracking-widest block">points</span>
                  <span className="text-base font-black text-white font-mono mt-0.5 block">
                    {driver.points}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
