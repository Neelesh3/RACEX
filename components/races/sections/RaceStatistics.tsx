"use client";

import React from "react";
import type { RaceDetails } from "@/types/race-details";

interface RaceStatisticsProps {
  details: RaceDetails;
}

export default function RaceStatistics({ details }: RaceStatisticsProps) {
  const stats = details.statistics;
  if (!stats) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-sm font-bold tracking-wider uppercase text-[#808080] border-l border-[#E10600] pl-3">
        Circuit Specifications
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-4 text-center">
          <span className="text-2xl font-black text-white">{stats.totalLaps}</span>
          <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest block mt-1">Total Laps</span>
        </div>
        
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-4 text-center">
          <span className="text-2xl font-black text-white">{stats.raceDistance}</span>
          <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest block mt-1">Race Distance</span>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-4 text-center">
          <span className="text-2xl font-black text-white">{stats.corners}</span>
          <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest block mt-1">Turns / Corners</span>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-4 text-center col-span-2 sm:col-span-1">
          <span className="text-2xl font-black text-white">{stats.drsZones}</span>
          <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest block mt-1">DRS Zones</span>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-4 text-center col-span-2">
          <span className="text-2xl font-black text-[#E10600] font-mono">{stats.lapRecord}</span>
          <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest block mt-1">Lap Record Time</span>
        </div>
      </div>
    </div>
  );
}
