"use client";

import React from "react";
import ChampionshipHero from "./sections/ChampionshipHero";
import SeasonProgress from "./sections/SeasonProgress";
import DriverStandings from "./sections/DriverStandings";
import ConstructorStandings from "./sections/ConstructorStandings";
import ChampionshipInsights from "./sections/ChampionshipInsights";

export function StandingsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full blur-[140px] opacity-10 pointer-events-none mix-blend-screen bg-red-600/[0.08]" />
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#050505_95%)] opacity-90 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
        {/* ── 1. Championship Hero Spotlight ── */}
        <ChampionshipHero />

        {/* ── 2. Season Progress Indicator ── */}
        <SeasonProgress />

        {/* ── 3. Standing Battle Splits (Drivers vs Constructors) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <DriverStandings />
          <ConstructorStandings />
        </div>

        {/* ── 4. Championship Insights ── */}
        <ChampionshipInsights />
      </div>
    </main>
  );
}
