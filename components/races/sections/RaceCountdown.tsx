"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import type { Race } from "@/types/race";

interface RaceCountdownProps {
  race: Race;
}

export default function RaceCountdown({ race }: RaceCountdownProps) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const isCompleted = race.status === "completed";
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isOver: isCompleted,
    };
  });

  useEffect(() => {
    if (race.status === "completed") {
      return;
    }

    const calculateTime = () => {
      const targetDate = new Date(`${race.date}T14:00:00Z`).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft((prev) => ({ ...prev, isOver: true }));
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [race.date, race.status]);

  if (timeLeft.isOver) {
    return (
      <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/[0.06] bg-white/[0.01] max-w-md mx-auto text-center mt-[-45px] relative z-20 backdrop-blur-md">
        <span className="text-[9px] font-black uppercase tracking-widest text-[#808080]">Briefing status</span>
        <span className="text-xs font-bold text-white uppercase tracking-wider mt-1.5 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neutral-600 animate-pulse" />
          Event Concluded
        </span>
      </div>
    );
  }

  return (
    <div className="relative z-20 mt-[-45px] max-w-xl mx-auto px-8 py-5 rounded-2xl border border-[#E10600]/20 bg-[#0A0A0A]/90 backdrop-blur-md shadow-2xl flex flex-col items-center gap-4">
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E10600] flex items-center gap-2">
        <Clock className="w-4 h-4 animate-spin" style={{ animationDuration: "10s" }} />
        <span>T-MINUS TO LIGHTS OUT</span>
      </span>

      <div className="grid grid-cols-4 gap-6 text-center font-mono w-full">
        <div>
          <span className="block text-3xl sm:text-4xl font-black text-white tracking-tight tabular-nums">
            {timeLeft.days.toString().padStart(2, "0")}
          </span>
          <span className="text-[9px] font-bold text-[#808080] uppercase tracking-widest mt-1 block">Days</span>
        </div>
        <div className="border-l border-white/[0.05] pl-6">
          <span className="block text-3xl sm:text-4xl font-black text-white tracking-tight tabular-nums">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
          <span className="text-[9px] font-bold text-[#808080] uppercase tracking-widest mt-1 block">Hrs</span>
        </div>
        <div className="border-l border-white/[0.05] pl-6">
          <span className="block text-3xl sm:text-4xl font-black text-white tracking-tight tabular-nums">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
          <span className="text-[9px] font-bold text-[#808080] uppercase tracking-widest mt-1 block">Mins</span>
        </div>
        <div className="border-l border-[#E10600]/25 pl-6">
          <span className="block text-3xl sm:text-4xl font-black text-[#E10600] tracking-tight tabular-nums">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
          <span className="text-[9px] font-bold text-[#808080] uppercase tracking-widest mt-1 block">Secs</span>
        </div>
      </div>
    </div>
  );
}
