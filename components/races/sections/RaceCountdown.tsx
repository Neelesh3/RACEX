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
      const targetDate = new Date(`${race.date}T14:00:00Z`).getTime(); // Assuming standard 14:00 local/UTC GP start
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
      <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/[0.06] bg-white/[0.01] max-w-md mx-auto text-center mt-[-40px] relative z-20 backdrop-blur-md">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#808080]">Event Status</span>
        <span className="text-sm font-bold text-white uppercase tracking-wider mt-1 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neutral-500 animate-pulse" />
          Grand Prix Concluded
        </span>
      </div>
    );
  }

  return (
    <div className="relative z-20 mt-[-40px] max-w-lg mx-auto px-6 py-4 rounded-2xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-md shadow-2xl flex flex-col items-center gap-3">
      <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#E10600] flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5" />
        <span>T-minus to track reveal</span>
      </span>

      <div className="grid grid-cols-4 gap-4 sm:gap-6 text-center">
        <div>
          <span className="block text-2xl sm:text-3xl font-black text-white tabular-nums">
            {timeLeft.days.toString().padStart(2, "0")}
          </span>
          <span className="text-[8px] font-bold text-[#808080] uppercase tracking-widest mt-0.5 block">Days</span>
        </div>
        <div className="border-l border-white/[0.04] pl-4 sm:pl-6">
          <span className="block text-2xl sm:text-3xl font-black text-white tabular-nums">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
          <span className="text-[8px] font-bold text-[#808080] uppercase tracking-widest mt-0.5 block">Hrs</span>
        </div>
        <div className="border-l border-white/[0.04] pl-4 sm:pl-6">
          <span className="block text-2xl sm:text-3xl font-black text-white tabular-nums">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
          <span className="text-[8px] font-bold text-[#808080] uppercase tracking-widest mt-0.5 block">Mins</span>
        </div>
        <div className="border-l border-white/[0.04] pl-4 sm:pl-6">
          <span className="block text-2xl sm:text-3xl font-black text-white tabular-nums">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
          <span className="text-[8px] font-bold text-[#808080] uppercase tracking-widest mt-0.5 block">Secs</span>
        </div>
      </div>
    </div>
  );
}
