import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Race } from "@/types/race";
import { CountryFlag } from "@/components/ui/CountryFlag";
import { useAudio } from "@/lib/audio/useAudio";
import { useCursor } from "@/components/cursor";

interface RaceCardProps {
  race: Race;
}

export function RaceCard({ race }: RaceCardProps) {
  const { play } = useAudio();
  const { setCursorState, setCursorLabel, resetCursor } = useCursor();
  const isFinished = race.status.toLowerCase() === "finished";

  return (
    <article 
      onMouseEnter={() => {
        play("hover");
        setCursorState("card");
        setCursorLabel("DETAILS");
      }}
      onMouseLeave={resetCursor}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-950/80 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40"
    >
      <div className="h-1 bg-red-600" />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-red-500">
              Round {race.round}
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              {race.name}
            </h3>
          </div>

          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${isFinished
                ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                : "border-amber-500/20 bg-amber-500/10 text-amber-400"
              }`}
          >
            {race.status}
          </span>
        </div>

        <div className="space-y-3 text-sm">
          <InfoRow
            icon={<CountryFlag country={race.country} fallback={race.flag} className="w-5 h-3.5" type="circuit" />}
            label="Country"
            value={race.country}
          />

          <InfoRow
            icon={<MapPin className="h-4 w-4" />}
            label="Circuit"
            value={race.circuit}
          />

          <InfoRow
            icon={<CalendarDays className="h-4 w-4" />}
            label="Date"
            value={race.date}
          />

          {isFinished && race.winner ? (
            <InfoRow
              icon={<Trophy className="h-4 w-4 text-yellow-400" />}
              label="Winner"
              value={race.winner}
            />
          ) : null}
        </div>

        <Link href={`/races/${race.slug}`} className="mt-6" onClick={() => play("click")}>
          <Button className="w-full">
            View Details
          </Button>
        </Link>
      </div>
    </article>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2">
      <div className="flex items-center gap-2 text-zinc-400">
        {icon}
        <span>{label}</span>
      </div>

      <span className="text-right font-medium text-white">{value}</span>
    </div>
  );
}