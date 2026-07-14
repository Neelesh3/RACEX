"use client";

import React from "react";
import { Wind } from "lucide-react";
import type { RaceDetails } from "@/types/race-details";

interface RaceStatisticsProps {
  details: RaceDetails;
}

export default function RaceStatistics({ details }: RaceStatisticsProps) {
  const stats = details.statistics;
  if (!stats) return null;

  return (
    <div className="space-y-6">
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 block">
        {"// CIRCUIT SNAPSHOT & FAST FACTS"}
      </span>

      <div className="grid grid-cols-2 gap-4">
        {/* Fast Specs */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-5 text-center">
          <span className="text-3xl font-black text-white font-mono">{stats.totalLaps}</span>
          <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest block mt-1">Total Laps</span>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-5 text-center">
          <span className="text-3xl font-black text-white font-mono">{stats.raceDistance.split(" ")[0]}</span>
          <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest block mt-1">Distance (km)</span>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-5 text-center">
          <span className="text-3xl font-black text-white font-mono">{stats.corners}</span>
          <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest block mt-1">Turns / Corners</span>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-5 flex flex-col justify-center items-center">
          <div className="flex items-center gap-1 text-[#E10600]">
            <Wind className="w-4 h-4" />
            <span className="text-sm font-black text-white font-mono">{stats.drsZones} Zones</span>
          </div>
          <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest block mt-1">DRS Activation</span>
        </div>

        {/* Lap Record Highlight */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-5 col-span-2 text-center">
          <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest block mb-2">Track Lap Record Time</span>
          <span className="text-3xl font-black text-[#E10600] font-mono tracking-tight">{stats.lapRecord}</span>
        </div>
      </div>
    </div>
  );
}
