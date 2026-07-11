"use client";

import { motion } from "framer-motion";
import type { Circuit } from "@/types/circuit";
import type { CircuitDetails } from "@/types/circuit-details";
import { Trophy, Calendar, User, Shield, Timer } from "lucide-react";

interface CircuitWinnersProps {
  circuit: Circuit;
  details: CircuitDetails;
}

export function CircuitWinners({ circuit, details }: CircuitWinnersProps) {
  // Sort previous winners in descending order (most recent first)
  const sortedWinners = [...details.previousWinners].sort((a, b) => b.year - a.year);

  // If no winner history is available, render the premium placeholder
  if (sortedWinners.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center rounded-[20px] border border-[#242424] bg-[#111111] p-12 text-center max-w-xl mx-auto"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
          <Trophy className="h-5 w-5 text-neutral-500" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">No Historical Data</h3>
        <p className="text-xs text-neutral-400">
          No historical winner data available.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[20px] border border-[#242424] bg-[#111111] p-8 lg:p-10"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
          <Trophy className="h-5 w-5 text-[#E10600]" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Previous Winners</h2>
          <p className="text-xs text-neutral-500 mt-1">
            Historical Grand Prix results at {circuit.name}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Table Header (hidden on mobile) */}
        <div className="hidden sm:grid grid-cols-4 px-6 text-xs font-semibold uppercase tracking-wider text-neutral-500">
          <span>Year</span>
          <span>Driver</span>
          <span>Team</span>
          <span className="text-right">Winning Time</span>
        </div>

        {/* Rows Grid */}
        <div className="space-y-2.5">
          {sortedWinners.map((winner, index) => (
            <motion.div
              key={winner.year}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center rounded-[14px] border border-[#242424] bg-[#050505] p-5 transition-all duration-300 hover:border-[#E10600]/30 hover:bg-[#0a0a0a] group"
            >
              {/* Year Column */}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#E10600] shrink-0 sm:hidden" />
                <span className="text-base font-black text-[#E10600] sm:text-white sm:font-bold">
                  {winner.year}
                </span>
              </div>

              {/* Driver Column */}
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-neutral-500 shrink-0 sm:hidden" />
                <span className="text-base font-bold text-white group-hover:text-[#E10600] transition-colors">
                  {winner.driver}
                </span>
              </div>

              {/* Team Column */}
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-neutral-500 shrink-0 sm:hidden" />
                <span className="text-sm font-semibold text-neutral-400">
                  {winner.team}
                </span>
              </div>

              {/* Winning Time Column */}
              <div className="flex items-center justify-between sm:justify-end gap-2 text-right">
                <span className="text-xs text-neutral-500 uppercase sm:hidden">Time</span>
                <div className="flex items-center gap-1.5 justify-end">
                  <Timer className="h-4 w-4 text-neutral-500 shrink-0" />
                  <span className="text-sm font-semibold text-white tracking-wider">
                    {winner.time}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
