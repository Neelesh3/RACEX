"use client";

import React from "react";
import { CloudRain, Sun, Flame } from "lucide-react";
import type { Race } from "@/types/race";
import type { RaceDetails } from "@/types/race-details";
import { useTheme } from "@/lib/theme/theme-utils";

interface RaceHighlightsProps {
  race: Race;
  details: RaceDetails;
}

export default function RaceHighlights({ race, details }: RaceHighlightsProps) {
  const { currentTheme } = useTheme();
  const isConcluded = race.status === "completed";

  return (
    <div className="space-y-8">
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 block">
        {"// WEATHER & STRATEGY BRIEFING"}
      </span>

      {/* Atmospheric Briefing (Weather & degradation) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Weather Vitals */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 space-y-4">
          <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest block">Weekend Atmosphere</span>
          
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center transition-all duration-1000"
              style={{ color: currentTheme.accent }}
            >
              {isConcluded ? <Sun className="w-5 h-5" /> : <CloudRain className="w-5 h-5 animate-pulse" />}
            </div>
            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">Forecast Condition</span>
              <span className="text-xs font-bold text-white mt-0.5 block">
                {isConcluded ? "Dry • 0% Rain Risk" : "Partially Cloudy • 20% Rain Risk"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/[0.04] text-xs font-mono">
            <div>
              <span className="text-neutral-500 block">Air Temp</span>
              <span className="font-bold text-white block mt-0.5">{isConcluded ? "24°C" : "22°C"}</span>
            </div>
            <div>
              <span className="text-neutral-500 block">Track Temp</span>
              <span className="font-bold text-white block mt-0.5">{isConcluded ? "38°C" : "32°C"}</span>
            </div>
          </div>
        </div>

        {/* Tyre Compound Selection */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 space-y-4">
          <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest block">Nominated Compounds</span>
          
          {/* Tyre circular badges */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 rounded-full border-2 border-white bg-[#050505] flex items-center justify-center text-[8px] font-bold text-white">H</div>
              <span className="text-[8px] text-neutral-500">Hard (C1)</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 rounded-full border-2 border-[#FFE600] bg-[#050505] flex items-center justify-center text-[8px] font-bold text-[#FFE600]">M</div>
              <span className="text-[8px] text-neutral-500">Med (C2)</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 rounded-full border-2 border-[#E10600] bg-[#050505] flex items-center justify-center text-[8px] font-bold text-[#E10600]">S</div>
              <span className="text-[8px] text-neutral-500">Soft (C3)</span>
            </div>
          </div>

          <p className="text-[10px] text-neutral-500 leading-relaxed">
            Standard Pirelli tire allocation with soft compound C3 optimal for qualifying shootout attempts.
          </p>
        </div>
      </div>

      {/* Strategy Recommendation Panel */}
      <div 
        className="rounded-2xl border p-6 space-y-3 transition-all duration-1000"
        style={{ borderColor: currentTheme.border, background: `linear-gradient(90deg, ${currentTheme.glow} 0%, transparent 100%)` }}
      >
        <div className="flex items-center gap-2" style={{ color: currentTheme.accent }}>
          <Flame className="w-4 h-4" />
          <h4 className="text-xs font-black uppercase tracking-wider text-white">Recommended Strategy</h4>
        </div>
        <p className="text-xs text-neutral-400 leading-relaxed">
          {isConcluded 
            ? "Completed Strategy: Single pitstop, starting on Medium tires, swapping to Hard compound on Lap 21." 
            : "Projected Strategy: 1-stop Medium (Lap 1-18) to Hard (Lap 19-57). High thermal degradation risk requires lift-and-coast telemetry management."
          }
        </p>
      </div>

      {/* Narrative overview */}
      <div className="space-y-4 pt-6 border-t border-white/[0.05]">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider">Historical Intelligence</h3>
        <p className="text-xs sm:text-sm leading-relaxed text-neutral-400">
          {details.overview}
        </p>
      </div>
    </div>
  );
}
