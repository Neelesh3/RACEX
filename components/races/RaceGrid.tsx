import type { Race } from "@/types/race";

import { RaceCard } from "./RaceCard";

interface RaceGridProps {
  races: Race[];
}

export function RaceGrid({ races }: RaceGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {races.map((race) => (
        <RaceCard key={race.id} race={race} />
      ))}
    </div>
  );
}