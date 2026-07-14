"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import type { Race } from "@/types/race";

interface RaceScheduleProps {
  race: Race;
}

export default function RaceSchedule({ race }: RaceScheduleProps) {
  const scheduleItems = [
    { name: "Free Practice 1", time: race.sessions.fp1, type: "practice" },
    { name: "Free Practice 2", time: race.sessions.fp2, type: "practice" },
    { name: "Free Practice 3", time: race.sessions.fp3, type: "practice" },
    { name: "Qualifying Shootout", time: race.sessions.qualifying, type: "qualifying" },
    { name: "Grand Prix Race", time: race.sessions.race, type: "race" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-sm font-bold tracking-wider uppercase text-[#808080] border-l border-[#E10600] pl-3">
        Weekend Session Schedule
      </h2>

      <div className="flex flex-col gap-4">
        {scheduleItems.map((item, idx) => {
          const isRaceSession = item.type === "race";
          const isConcluded = race.status === "completed";

          return (
            <div
              key={item.name}
              className={`rounded-2xl border p-5 flex items-center justify-between transition-all duration-300 ${
                isRaceSession 
                  ? "border-[#E10600]/30 bg-gradient-to-r from-[#E10600]/5 to-transparent hover:border-[#E10600]/50" 
                  : "border-white/[0.06] bg-white/[0.01] hover:border-white/[0.1]"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-black ${
                  isRaceSession 
                    ? "bg-[#E10600] text-white" 
                    : "bg-white/[0.05] text-[#808080]"
                }`}>
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">{item.name}</h4>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-0.5 block">{item.type} session</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-right">
                <div>
                  <span className="block text-xs font-mono text-white/80 tabular-nums">{item.time}</span>
                  <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-wider mt-0.5 block">{race.date}</span>
                </div>
                {isConcluded && (
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
