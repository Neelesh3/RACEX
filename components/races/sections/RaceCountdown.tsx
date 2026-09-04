"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import type { Race } from "@/types/race";
import { useTheme } from "@/lib/theme/theme-utils";

interface RaceCountdownProps {
  race: Race;
}

export default function RaceCountdown({ race }: RaceCountdownProps) {
  const { currentTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: race.status === "completed",
    isLive: false,
  });

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    if (!mounted || race.status === "completed") {
      return;
    }

    const calculateTime = () => {
      const targetTimeStr = race.date.includes("T") ? race.date : `${race.date}T14:00:00Z`;
      const targetDate = new Date(targetTimeStr).getTime();
      const now = Date.now();
      const difference = targetDate - now;

      // Let the race live status persist for 2 hours during the Grand Prix duration
      const raceDuration = 2 * 60 * 60 * 1000;

      if (difference <= -raceDuration) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true, isLive: false });
        return;
      }

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: false, isLive: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false, isLive: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [race.date, race.status, mounted]);

  if (!mounted) {
    return (
      <div 
        className="relative z-20 mt-[-45px] max-w-xl mx-auto px-8 py-5 rounded-2xl border bg-[#0A0A0A]/90 backdrop-blur-md shadow-2xl flex flex-col items-center gap-4"
        style={{ borderColor: currentTheme.border }}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2" style={{ color: currentTheme.accent }}>
          <Clock className="w-4 h-4" />
          <span>ESTIMATING Race TIME...</span>
        </span>
        <div className="grid grid-cols-4 gap-6 text-center font-mono w-full opacity-50">
          <div>
            <span className="block text-3xl sm:text-4xl font-black text-white tracking-tight tabular-nums">00</span>
            <span className="text-[9px] font-bold text-[#808080] uppercase tracking-widest mt-1 block">Days</span>
          </div>
          <div className="border-l border-white/[0.05] pl-6">
            <span className="block text-3xl sm:text-4xl font-black text-white tracking-tight tabular-nums">00</span>
            <span className="text-[9px] font-bold text-[#808080] uppercase tracking-widest mt-1 block">Hrs</span>
          </div>
          <div className="border-l border-white/[0.05] pl-6">
            <span className="block text-3xl sm:text-4xl font-black text-white tracking-tight tabular-nums">00</span>
            <span className="text-[9px] font-bold text-[#808080] uppercase tracking-widest mt-1 block">Mins</span>
          </div>
          <div className="border-l pl-6" style={{ borderLeftColor: currentTheme.border }}>
            <span className="block text-3xl sm:text-4xl font-black tracking-tight tabular-nums" style={{ color: currentTheme.accent }}>00</span>
            <span className="text-[9px] font-bold text-[#808080] uppercase tracking-widest mt-1 block">Secs</span>
          </div>
        </div>
      </div>
    );
  }

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

  if (timeLeft.isLive) {
    return (
      <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 max-w-md mx-auto text-center mt-[-45px] relative z-20 backdrop-blur-md">
        <span className="text-[9px] font-black uppercase tracking-widest text-[#00E17A]">Telemetry Stream Active</span>
        <span className="text-xs font-bold text-white uppercase tracking-wider mt-1.5 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00E17A] animate-ping" />
          RACE LIVE
        </span>
      </div>
    );
  }

  return (
    <div 
      className="relative z-20 mt-[-45px] max-w-xl mx-auto px-4 sm:px-8 py-4 sm:py-5 rounded-2xl border bg-[#0A0A0A]/90 backdrop-blur-md shadow-2xl flex flex-col items-center gap-4 transition-all duration-1000"
      style={{ borderColor: currentTheme.border }}
    >
      <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2" style={{ color: currentTheme.accent }}>
        <Clock className="w-4 h-4 animate-spin" style={{ animationDuration: "10s" }} />
        <span>T-MINUS TO LIGHTS OUT</span>
      </span>

      <div className="grid grid-cols-4 gap-2 sm:gap-6 text-center font-mono w-full">
        <div>
          <span className="block text-2xl sm:text-4xl font-black text-white tracking-tight tabular-nums">
            {timeLeft.days.toString().padStart(2, "0")}
          </span>
          <span className="text-[9px] font-bold text-[#808080] uppercase tracking-widest mt-1 block">Days</span>
        </div>
        <div className="border-l border-white/[0.05] pl-2 sm:pl-6">
          <span className="block text-2xl sm:text-4xl font-black text-white tracking-tight tabular-nums">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
          <span className="text-[9px] font-bold text-[#808080] uppercase tracking-widest mt-1 block">Hrs</span>
        </div>
        <div className="border-l border-white/[0.05] pl-2 sm:pl-6">
          <span className="block text-2xl sm:text-4xl font-black text-white tracking-tight tabular-nums">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
          <span className="text-[9px] font-bold text-[#808080] uppercase tracking-widest mt-1 block">Mins</span>
        </div>
        <div className="border-l pl-2 sm:pl-6" style={{ borderLeftColor: currentTheme.border }}>
          <span className="block text-2xl sm:text-4xl font-black tracking-tight tabular-nums" style={{ color: currentTheme.accent }}>
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
          <span className="text-[9px] font-bold text-[#808080] uppercase tracking-widest mt-1 block">Secs</span>
        </div>
      </div>
    </div>
  );
}
