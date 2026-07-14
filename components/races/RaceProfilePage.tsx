"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Race } from "@/types/race";
import type { RaceDetails } from "@/types/race-details";

import RaceHero from "./sections/RaceHero";
import RaceCountdown from "./sections/RaceCountdown";
import RaceSchedule from "./sections/RaceSchedule";
import RaceHighlights from "./sections/RaceHighlights";
import RaceStatistics from "./sections/RaceStatistics";
import RaceHistory from "./sections/RaceHistory";

interface RaceProfilePageProps {
  race: Race;
  details: RaceDetails;
}

export function RaceProfilePage({ race, details }: RaceProfilePageProps) {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full blur-[140px] opacity-10 pointer-events-none mix-blend-screen bg-red-600/[0.12]" />
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#050505_95%)] opacity-90 pointer-events-none" />
      </div>

      {/* Back button */}
      <div className="absolute top-28 left-6 sm:left-12 z-30 pointer-events-auto">
        <Link
          href="/races"
          className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/55 hover:text-white uppercase transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Races calendar</span>
        </Link>
      </div>

      {/* ── 1. Hero & Countdown ── */}
      <RaceHero race={race} />
      <RaceCountdown race={race} />

      {/* ── 2. Information Briefing (Schedule & Stats) ── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Schedule (7 cols) */}
        <div className="lg:col-span-7">
          <RaceSchedule race={race} />
        </div>

        {/* Right: Technical Stats (5 cols) */}
        <div className="lg:col-span-5">
          <RaceStatistics details={details} />
        </div>

      </section>

      {/* ── 3. Narration & Historical Standings ── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 border-t border-white/[0.05] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Highlights Narrative (7 cols) */}
        <div className="lg:col-span-7">
          <RaceHighlights race={race} details={details} />
        </div>

        {/* Right: History & Previous Winners (5 cols) */}
        <div className="lg:col-span-5">
          <RaceHistory details={details} />
        </div>

      </section>

      {/* Footer Explore CTAs */}
      <section className="relative z-10 border-t border-white/[0.05] bg-white/[0.01]">
        <div className="container mx-auto px-6 py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="mb-4 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white/55">
              Continue Exploring
            </span>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">
              Discover Every Race Track Layout
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#B5B5B5]">
              Explore details on historic circuit layouts, corners, DRS zones, and telemetry.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link 
                href="/races"
                className="inline-flex h-11 items-center justify-center bg-white px-6 text-xs font-bold uppercase tracking-wider text-black rounded-lg transition-transform duration-200 active:scale-98 hover:scale-[1.02]"
              >
                Back to calendar
              </Link>
              <Link 
                href="/circuits"
                className="inline-flex h-11 items-center justify-center border border-white/15 hover:border-white/20 bg-transparent px-6 text-xs font-bold uppercase tracking-wider text-white rounded-lg transition-transform duration-200 active:scale-98 hover:scale-[1.02]"
              >
                Explore Circuits
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
