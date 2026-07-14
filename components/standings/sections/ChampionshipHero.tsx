"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { seasonStats } from "@/lib/standings";

export default function ChampionshipHero() {
  return (
    <section className="relative overflow-hidden border border-white/[0.06] bg-white/[0.01] rounded-3xl p-8 md:p-12 mb-12">
      {/* Background glow matching leader team color (McLaren Papaya Orange #FF8700) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#FF8700]/[0.06] blur-[90px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-[10px] font-black tracking-[0.25em] text-[#E10600] uppercase block">
            CHAMPIONSHIP STANDINGS • SEASON {seasonStats.season}
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none text-white">
            THE TITLE FIGHT
          </h1>
          <p className="mt-4 text-sm text-neutral-400 max-w-xl leading-relaxed">
            Follow the drivers and constructors battling it out across the grid. Oscar Piastri leads the championship charge in a dominant McLaren season.
          </p>
        </div>

        {/* Highlight Leader Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-auto min-w-[280px] rounded-2xl border border-[#FF8700]/25 bg-[#FF8700]/5 p-6 text-center backdrop-blur-sm"
        >
          <Trophy className="w-8 h-8 text-[#FF8700] mx-auto mb-3" />
          <span className="text-[9px] font-black uppercase tracking-widest text-[#FF8700]">Championship Leader</span>
          <h3 className="text-xl font-black uppercase text-white mt-1">{seasonStats.leader}</h3>
          <span className="text-xs text-neutral-400 block mt-0.5">{seasonStats.leadingTeam}</span>
          
          <div className="mt-4 pt-4 border-t border-white/[0.05] grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-black text-white">266</span>
              <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-wider block">Points</span>
            </div>
            <div>
              <span className="text-sm font-black text-white">6</span>
              <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-wider block">GP Wins</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
