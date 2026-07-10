"use client";

import { teams } from "@/lib/teams";
import { TeamCard } from "./TeamCard";

export function TeamGrid() {
  return (
    <section id="teams-grid" className="py-12 md:py-16 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teams.map((team, index) => (
            <TeamCard key={team.id} team={team} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}