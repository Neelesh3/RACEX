"use client";

import React from "react";
import { motion } from "framer-motion";
import { constructorStandings } from "@/lib/standings";

export default function ConstructorStandings() {
  const leaderPoints = constructorStandings[0]?.points || 0;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end border-b border-white/[0.05] pb-3">
        <div>
          <h2 className="text-sm font-bold tracking-wider uppercase text-[#808080] border-l border-[#E10600] pl-3">
            Constructors Championship
          </h2>
        </div>
        <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
          Points & Gaps
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {constructorStandings.map((team, idx) => {
          const gap = leaderPoints - team.points;
          const isLeader = idx === 0;

          return (
            <motion.div
              key={team.teamId}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
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
                  style={{ backgroundColor: team.color }}
                />

                <div className="min-w-0">
                  <span className="font-bold text-white text-sm truncate group-hover:text-[#E10600] transition-colors block">
                    {team.teamName}
                  </span>
                  <span className="text-[9px] text-neutral-500 uppercase tracking-wider block mt-0.5">
                    {team.country}
                  </span>
                </div>
              </div>

              {/* Stats & Gaps */}
              <div className="flex items-center gap-6 sm:gap-10 shrink-0 text-right">
                <div className="hidden sm:block">
                  <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest block">wins / podiums</span>
                  <span className="text-xs text-white/70 font-mono mt-0.5 block">
                    {team.wins}W · {team.podiums}P
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
                    {team.points}
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
