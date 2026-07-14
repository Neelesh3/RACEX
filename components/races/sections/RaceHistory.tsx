"use client";

import React from "react";
import { Trophy } from "lucide-react";
import type { RaceDetails } from "@/types/race-details";

interface RaceHistoryProps {
  details: RaceDetails;
}

export default function RaceHistory({ details }: RaceHistoryProps) {
  const history = details.winnerHistory || [];

  return (
    <div className="space-y-6">
      <h2 className="text-sm font-bold tracking-wider uppercase text-[#808080] border-l border-[#E10600] pl-3">
        Grand Prix History
      </h2>

      {/* Narrative details */}
      {details.history && (
        <p className="text-xs sm:text-sm leading-relaxed text-[#B5B5B5]">
          {details.history}
        </p>
      )}

      {/* Previous Winners List Card */}
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 space-y-4">
        <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 flex items-center gap-2">
          <Trophy className="w-3.5 h-3.5 text-[#E10600]" />
          <span>Recent Winners History</span>
        </h3>

        <div className="space-y-3">
          {history.slice(0, 4).map((w, idx) => (
            <div
              key={`${w.year}-${idx}`}
              className="flex justify-between items-center text-xs border-b border-white/[0.04] pb-2 last:border-0 last:pb-0"
            >
              <div>
                <span className="font-bold text-white block">{w.driver}</span>
                <span className="text-[10px] text-neutral-500 mt-0.5 block">{w.team}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-white/60 block">{w.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
