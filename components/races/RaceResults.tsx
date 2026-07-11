"use client";

import { motion } from "framer-motion";
import type { Race } from "@/types/race";
import type { RaceDetails } from "@/types/race-details";
import { Trophy, Zap, Timer, Medal, Award } from "lucide-react";

interface RaceResultsProps {
  race: Race;
  details: RaceDetails;
}

export function RaceResults({ race, details }: RaceResultsProps) {
  // If race is not completed, show the premium placeholder card
  if (race.status !== "completed") {
    return (
      <div className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center rounded-[20px] border border-[#242424] bg-[#111111] p-12 text-center max-w-xl mx-auto"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
            <Trophy className="h-6 w-6 text-neutral-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Race Incomplete</h3>
          <p className="text-sm text-neutral-400">
            Results will be available after the race.
          </p>
        </motion.div>
      </div>
    );
  }

  // Find winner's team for detail consistency
  const winnerPodium = details.podium.find((p) => p.position === 1);
  const winnerTeam = winnerPodium ? winnerPodium.team : "";

  // Sort podium finishers
  const sortedPodium = [...details.podium].sort((a, b) => a.position - b.position);

  // Semantic styles for podium indicators
  const getPodiumBadgeStyles = (position: number) => {
    switch (position) {
      case 1: // Gold
        return "text-yellow-400 border-yellow-400/20 bg-yellow-400/5";
      case 2: // Silver
        return "text-neutral-300 border-neutral-300/20 bg-neutral-300/5";
      case 3: // Bronze
        return "text-amber-500 border-amber-500/20 bg-amber-500/5";
      default:
        return "text-neutral-400 border-[#242424] bg-[#050505]";
    }
  };

  return (
    <div className="space-y-6">
      {/* 3-Column Top Grid: Winner, Pole, Fastest Lap */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Winner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center rounded-[20px] border border-[#242424] bg-[#111111] p-6 text-center transition-colors hover:border-[#E10600]/30"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
            <Trophy className="h-6 w-6 text-[#E10600]" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Winner</span>
          <span className="mt-2 text-xl font-bold text-white">{race.winner}</span>
          {winnerTeam && (
            <span className="mt-1 text-xs text-neutral-400">{winnerTeam}</span>
          )}
        </motion.div>

        {/* Pole Position Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center rounded-[20px] border border-[#242424] bg-[#111111] p-6 text-center transition-colors hover:border-[#E10600]/30"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
            <Zap className="h-6 w-6 text-[#E10600]" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Pole Position</span>
          <span className="mt-2 text-xl font-bold text-white">{race.pole || "TBD"}</span>
          <span className="mt-1 text-xs text-neutral-400">&nbsp;</span>
        </motion.div>

        {/* Fastest Lap Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center rounded-[20px] border border-[#242424] bg-[#111111] p-6 text-center transition-colors hover:border-[#E10600]/30"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
            <Timer className="h-6 w-6 text-[#E10600]" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Fastest Lap</span>
          {details.fastestLap ? (
            <>
              <span className="mt-2 text-xl font-bold text-white">
                {details.fastestLap.driverName}
              </span>
              <span className="mt-1 text-xs text-neutral-400">
                {details.fastestLap.time} ({details.fastestLap.team})
              </span>
            </>
          ) : (
            <>
              <span className="mt-2 text-xl font-bold text-white">TBD</span>
              <span className="mt-1 text-xs text-neutral-400">&nbsp;</span>
            </>
          )}
        </motion.div>
      </div>

      {/* Full-width Podium Card */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[20px] border border-[#242424] bg-[#111111] p-8 lg:p-10"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
            <Award className="h-5 w-5 text-[#E10600]" />
          </div>
          <h2 className="text-2xl font-bold text-white">Podium Finishers</h2>
        </div>

        <div className="space-y-4">
          {sortedPodium.map((podium, index) => (
            <motion.div
              key={podium.position}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4 transition-colors hover:border-[#E10600]/30 group"
            >
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold transition-transform duration-300 group-hover:scale-105 ${getPodiumBadgeStyles(
                    podium.position
                  )}`}
                >
                  <Medal className="h-4 w-4" />
                </span>
                <span className="text-base font-bold text-white">{podium.driverName}</span>
              </div>
              <span className="text-sm font-semibold text-neutral-400 text-right">{podium.team}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
