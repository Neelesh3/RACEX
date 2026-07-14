"use client";

import React from "react";
import { ArrowUpRight, Flame, Sparkles } from "lucide-react";

export default function ChampionshipInsights() {
  return (
    <section className="space-y-6">
      <h2 className="text-sm font-bold tracking-wider uppercase text-[#808080] border-l border-[#E10600] pl-3">
        Championship Insights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Momentum Card */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 hover:border-white/[0.1] transition-all duration-300">
          <div className="flex items-center gap-3 text-[#E10600]">
            <Flame className="w-5 h-5 animate-pulse" />
            <h4 className="text-xs font-black uppercase tracking-wider text-white">McLaren Momentum</h4>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-neutral-400">
            McLaren continues their exceptional rise, locking out the top two spots in the Driver Standings. Piastri and Norris have a combined 11 GP wins, securing a huge lead for the Woking team.
          </p>
        </div>

        {/* Contender Gap Card */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 hover:border-white/[0.1] transition-all duration-300">
          <div className="flex items-center gap-3 text-[#E10600]">
            <ArrowUpRight className="w-5 h-5" />
            <h4 className="text-xs font-black uppercase tracking-wider text-white">The Contender Gap</h4>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-neutral-400">
            Max Verstappen sits 81 points behind leader Piastri. With 12 rounds remaining in the 2026 calendar, Red Bull requires consistent wins to challenge McLaren&apos;s lead.
          </p>
        </div>

        {/* Rookie Watch Card */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 hover:border-white/[0.1] transition-all duration-300">
          <div className="flex items-center gap-3 text-[#E10600]">
            <Sparkles className="w-5 h-5" />
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Rookie Watch</h4>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-neutral-400">
            Mercedes rookie Kimi Antonelli is holding 7th position in the standings with 63 points, locking down a podium finish and proving his capability in the top tier of motorsport.
          </p>
        </div>
      </div>
    </section>
  );
}
