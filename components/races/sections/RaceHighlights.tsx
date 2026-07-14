"use client";

import React from "react";
import { CloudRain, Sun, ShieldAlert, ShieldCheck } from "lucide-react";
import type { Race } from "@/types/race";
import type { RaceDetails } from "@/types/race-details";

interface RaceHighlightsProps {
  race: Race;
  details: RaceDetails;
}

export default function RaceHighlights({ race, details }: RaceHighlightsProps) {
  const isConcluded = race.status === "completed";

  return (
    <div className="space-y-8">
      {/* Narrative Section */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold tracking-wider uppercase text-[#808080] border-l border-[#E10600] pl-3">
          Grand Prix Intelligence Briefing
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-[#B5B5B5]">
          {race.description}
        </p>
        <p className="text-xs sm:text-sm leading-relaxed text-neutral-400">
          {details.overview}
        </p>
      </div>

      {/* Atmospheric Briefing (Weather / Climate Mock telemetry) */}
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-5">
        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest block mb-3">Atmospheric Telemetry</span>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-[#E10600]">
              {isConcluded ? <Sun className="w-5 h-5" /> : <CloudRain className="w-5 h-5 animate-bounce" />}
            </div>
            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">Forecast Condition</span>
              <span className="text-xs font-bold text-white mt-0.5 block">
                {isConcluded ? "Dry • Clear track conditions" : "Partially Cloudy • 30% Rain Risk"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-white/[0.05] pt-4 sm:pt-0 sm:pl-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-[#E10600]">
              {isConcluded ? <ShieldCheck className="w-5 h-5" /> : <ShieldAlert className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">Briefing Status</span>
              <span className="text-xs font-bold text-white mt-0.5 block">
                {isConcluded ? "Race Concluded Successfully" : "Active Weekend Setup • Operational"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
