// components/races/UpcomingRace.tsx

"use client";

import React, { useState, useEffect } from "react";
import { CalendarDays, Clock3, Flag, MapPin } from "lucide-react";


import type { Race } from "@/types/race";


interface UpcomingRaceProps {
  race: Race|null;
}


export default function UpcomingRace({ race }: UpcomingRaceProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
    isLive: false,
  });

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    if (!mounted || !race) return;

    const calculateTime = () => {
      const targetTimeStr = race.date.includes("T") ? race.date : `${race.date}T14:00:00Z`;
      const targetDate = new Date(targetTimeStr).getTime();
      const now = Date.now();
      const difference = targetDate - now;
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
  }, [race, mounted]);

  if (!race) return null;
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-2xl">
      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        <div>
          <div className="mb-3 inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Round {race.round}
          </div>

          <h2 className="text-3xl font-bold text-white">{race.name}</h2>

          <div className="mt-4 flex flex-col gap-3 text-zinc-300">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-red-500" />
              <span>{race.circuit}</span>
            </div>

            <div className="flex items-center gap-3">
              <Flag className="h-5 w-5 text-red-500" />
              <span>{race.country}</span>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-red-500" />
              <span>{race.date}</span>
            </div>
          </div>
        </div>

        <div className="min-w-[280px] rounded-2xl border border-red-500/20 bg-red-500/10 p-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-red-400">
            <Clock3 className="h-5 w-5" />
            <span className="font-semibold uppercase tracking-wider text-xs">
              {timeLeft.isLive ? "EVENT ACTIVE" : timeLeft.isOver ? "EVENT STATUS" : "T-MINUS TO LIGHTS OUT"}
            </span>
          </div>

          <p className="mt-4 text-3xl font-black text-white font-mono tracking-tight tabular-nums">
            {!mounted
              ? "00 : 00 : 00 : 00"
              : timeLeft.isLive
              ? "RACE LIVE"
              : timeLeft.isOver
              ? "CONCLUDED"
              : `${timeLeft.days.toString().padStart(2, "0")}d : ${timeLeft.hours
                  .toString()
                  .padStart(2, "0")}h : ${timeLeft.minutes
                  .toString()
                  .padStart(2, "0")}m : ${timeLeft.seconds.toString().padStart(2, "0")}s`}
          </p>

          <p className="mt-2 text-xs text-zinc-400">
            {!mounted
              ? "Calculating schedule..."
              : timeLeft.isLive
              ? "Live telemetry feed active"
              : timeLeft.isOver
              ? "All sessions completed"
              : "Days : Hours : Minutes : Seconds"}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="mb-5 text-lg font-semibold text-white">
          Weekend Schedule
        </h3>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
            <p className="text-sm text-zinc-400">Practice</p>
            <p className="mt-2 font-semibold text-white">
              {"TBD"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
            <p className="text-sm text-zinc-400">Qualifying</p>
            <p className="mt-2 font-semibold text-white">
              {"TBD"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
            <p className="text-sm text-zinc-400">Race</p>
            <p className="mt-2 font-semibold text-white">
              {race.date}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}