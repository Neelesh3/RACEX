"use client";

import React from "react";
import { motion } from "framer-motion";
import { seasonStats } from "@/lib/standings";

export default function SeasonProgress() {
  const percentComplete = (seasonStats.completedRounds / seasonStats.totalRounds) * 100;

  return (
    <section className="relative overflow-hidden border border-white/[0.06] bg-white/[0.01] rounded-3xl p-6 sm:p-8 mb-12">
      <h2 className="text-sm font-bold tracking-wider uppercase text-[#808080] border-l border-[#E10600] pl-3 mb-6">
        Season progress telemetry
      </h2>

      <div className="space-y-6">
        {/* Progress Bar Container */}
        <div>
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="font-bold text-white uppercase tracking-wider">
              Calendar Completion
            </span>
            <span className="font-mono text-neutral-400">
              {seasonStats.completedRounds} / {seasonStats.totalRounds} Rounds
            </span>
          </div>

          {/* Bar track */}
          <div className="w-full h-2.5 rounded-full bg-white/[0.04] overflow-hidden border border-white/[0.02]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${percentComplete}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#E10600]/80 to-[#E10600] rounded-full"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/[0.05]">
          <div className="text-center">
            <span className="block text-2xl font-black text-white">{seasonStats.completedRounds}</span>
            <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest block mt-0.5">Completed Races</span>
          </div>
          <div className="text-center border-l border-white/[0.05]">
            <span className="block text-2xl font-black text-white">{seasonStats.totalRounds - seasonStats.completedRounds}</span>
            <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest block mt-0.5">Remaining Races</span>
          </div>
          <div className="text-center border-l border-white/[0.05]">
            <span className="block text-2xl font-black text-white">{seasonStats.totalDrivers}</span>
            <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest block mt-0.5">Total Grid Competitors</span>
          </div>
          <div className="text-center border-l border-white/[0.05]">
            <span className="block text-2xl font-black text-white">{seasonStats.totalConstructors}</span>
            <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest block mt-0.5">Constructor Teams</span>
          </div>
        </div>
      </div>
    </section>
  );
}
