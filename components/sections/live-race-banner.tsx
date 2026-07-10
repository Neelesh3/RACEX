"use client";

import Link from "next/link";
import { useEffect, useState,useCallback  } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Flag, Clock, ChevronRight } from "lucide-react";



// ─── Types ────────────────────────────────────────────────────────────────────

interface CountdownValues {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isLive: boolean;
}

interface RaceData {
    name: string;
    circuit: string;
    date: Date;
    location: string;
    round: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const RACE: RaceData = {
    name: "Belgian Grand Prix",
    circuit: "Circuit de Spa-Francorchamps",
    date: new Date("2026-07-26T13:00:00Z"),
    location: "Belgium",
    round: 14,
};

// ─── Countdown hook ───────────────────────────────────────────────────────────

function useCountdown(targetDate: Date): CountdownValues {
  const calculate = useCallback((): CountdownValues => {
    const diff = targetDate.getTime() - Date.now();

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isLive: true,
      };
    }

    const totalSeconds = Math.floor(diff / 1000);

    return {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
      isLive: false,
    };
  }, [targetDate]);

  const [countdown, setCountdown] = useState<CountdownValues>(() => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
  }));

  useEffect(() => {
    const update = () => {
      setCountdown(calculate());
    };

    update();

    const interval = window.setInterval(update, 1000);

    return () => window.clearInterval(interval);
  }, [calculate]);

  return countdown;
}
// ─── Sub-components ───────────────────────────────────────────────────────────

interface CountdownUnitProps {
    value: number;
    label: string;
    index: number;
}

function CountdownUnit({ value, label, index }: CountdownUnitProps) {
    const padded = String(value).padStart(2, "0");

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.08, ease: "easeOut" }}
            className="flex flex-col items-center"
            aria-label={`${value} ${label}`}
        >
            {/* digit block */}
            <div
                className="
          relative flex items-center justify-center
          w-14 h-14 sm:w-16 sm:h-16
          rounded-xl
          bg-white/[0.06] border border-white/10
          backdrop-blur-sm
          font-mono text-2xl sm:text-3xl font-bold tracking-tight
          text-white
        "
            >
                {/* subtle inner glow */}
                <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl bg-[#E8002D]/10 blur-md"
                />
                <span className="relative z-10">{padded}</span>
            </div>

            <span className="mt-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-white/50 select-none">
                {label}
            </span>
        </motion.div>
    );
}

function Separator() {
    return (
        <span
            aria-hidden="true"
            className="mb-5 text-white/30 text-2xl sm:text-3xl font-bold select-none"
        >
            :
        </span>
    );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function LiveRaceBanner() {
    const { days, hours, minutes, seconds, isLive } = useCountdown(RACE.date);

    const formattedDate = RACE.date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    });

    return (
        <section aria-labelledby="live-race-heading" className="w-full px-4 py-6 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="
          relative overflow-hidden
          rounded-2xl
          border border-white/10
          bg-[#0a0a0a]/80 backdrop-blur-xl
          shadow-[0_0_60px_-12px_rgba(232,0,45,0.25)]
        "
            >
                {/* ── Ambient glow layer ── */}
                <motion.div
                    aria-hidden="true"
                    animate={{ opacity: [0.4, 0.65, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="
            pointer-events-none absolute -top-20 -left-20
            w-72 h-72 rounded-full
            bg-[#E8002D]/20 blur-3xl
          "
                />
                <div
                    aria-hidden="true"
                    className="
            pointer-events-none absolute -bottom-16 -right-16
            w-56 h-56 rounded-full
            bg-[#E8002D]/10 blur-2xl
          "
                />

                {/* ── Red accent bar ── */}
                <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8002D] to-transparent opacity-70" />

                {/* ── Content ── */}
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8 p-6 sm:p-8">

                    {/* Left: label + race info */}
                    <div className="flex-1 min-w-0">
                        {/* Live / Next badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 mb-3"
                        >
                            {isLive ? (
                                <>
                                    <span
                                        aria-hidden="true"
                                        className="relative flex h-2.5 w-2.5"
                                    >
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8002D] opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E8002D]" />
                                    </span>
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E8002D]">
                                        Race Weekend Live
                                    </span>
                                </>
                            ) : (
                                <>
                                    <Flag className="w-3.5 h-3.5 text-[#E8002D]" aria-hidden="true" />
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E8002D]">
                                        Next Race · Round {RACE.round}
                                    </span>
                                </>
                            )}
                        </motion.div>

                        {/* Race name */}
                        <motion.h2
                            id="live-race-heading"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
                            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-none mb-1"
                        >
                            {RACE.name}
                        </motion.h2>

                        {/* Circuit + meta */}
                        <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                            className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2.5"
                        >
                            <span className="flex items-center gap-1.5 text-sm text-white/60">
                                <MapPin className="w-3.5 h-3.5 text-white/40 shrink-0" aria-hidden="true" />
                                {RACE.circuit}
                            </span>
                            <span aria-hidden="true" className="text-white/20 text-xs select-none hidden sm:inline">·</span>
                            <span className="flex items-center gap-1.5 text-sm text-white/60">
                                <Calendar className="w-3.5 h-3.5 text-white/40 shrink-0" aria-hidden="true" />
                                {formattedDate}
                            </span>
                        </motion.div>
                    </div>

                    {/* Centre: countdown or live label */}
                    <div className="flex-shrink-0">
                        {isLive ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#E8002D]/15 border border-[#E8002D]/30"
                                role="status"
                                aria-live="polite"
                            >
                                <Clock className="w-5 h-5 text-[#E8002D]" aria-hidden="true" />
                                <span className="text-lg font-bold text-white">Race Weekend Live</span>
                            </motion.div>
                        ) : (
                            <div
                             suppressHydrationWarning
                                className="flex items-center gap-1 sm:gap-2"
                                role="timer"
                                aria-label={`Time until race: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`}
                            >
                                <CountdownUnit value={days} label="Days" index={0} />
                                <Separator />
                                <CountdownUnit value={hours} label="Hours" index={1} />
                                <Separator />
                                <CountdownUnit value={minutes} label="Mins" index={2} />
                                <Separator />
                                <CountdownUnit value={seconds} label="Secs" index={3} />
                            </div>
                        )}
                    </div>

                    {/* Right: CTA button */}
                    <div className="flex-shrink-0 lg:pl-4">
                        <Link
                            href="/races/belgian-grand-prix-2026"
                            className="
    group inline-flex items-center gap-2
    px-5 py-3 sm:px-6 sm:py-3.5
    rounded-xl
    bg-[#E8002D] hover:bg-[#c4001e]
    text-white font-semibold text-sm sm:text-base
    transition-colors duration-200
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#E8002D]
    focus-visible:ring-offset-2
    focus-visible:ring-offset-black
    whitespace-nowrap
    shadow-[0_4px_20px_rgba(232,0,45,0.35)]
    hover:shadow-[0_4px_28px_rgba(232,0,45,0.5)]
  "
                            aria-label={`View details for the ${RACE.name}`}
                        >
                            View Race

                            <ChevronRight
                                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}