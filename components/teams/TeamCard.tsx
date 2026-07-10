"use client";

import type { Team } from "@/lib/teams";

interface TeamCardProps {
  team: Team;
  index: number;
}

export function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <h3>{team.name}</h3>
    </div>
  );
}