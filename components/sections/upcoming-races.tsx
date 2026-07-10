"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Route, Timer } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* ── Types ─────────────────────────────────────────────────────── */

interface Race {
  id: string;
  round: number;
  grandPrix: string;
  circuit: string;
  country: string;
  date: string;
  trackLength: string;
  laps: number;
  status: "upcoming" | "live" | "completed";
}

/* ── Mock Data ─────────────────────────────────────────────────── */

const races: Race[] = [
  {
    id: "china-2026",
    round: 5,
    grandPrix: "Chinese Grand Prix",
    circuit: "Shanghai International Circuit",
    country: "China",
    date: "2026-04-19",
    trackLength: "5.451 km",
    laps: 56,
    status: "upcoming",
  },
  {
    id: "miami-2026",
    round: 6,
    grandPrix: "Miami Grand Prix",
    circuit: "Miami International Autodrome",
    country: "United States",
    date: "2026-05-03",
    trackLength: "5.412 km",
    laps: 57,
    status: "upcoming",
  },
  {
    id: "imola-2026",
    round: 7,
    grandPrix: "Emilia Romagna Grand Prix",
    circuit: "Autodromo Enzo e Dino Ferrari",
    country: "Italy",
    date: "2026-05-17",
    trackLength: "4.909 km",
    laps: 63,
    status: "upcoming",
  },
  {
    id: "monaco-2026",
    round: 8,
    grandPrix: "Monaco Grand Prix",
    circuit: "Circuit de Monaco",
    country: "Monaco",
    date: "2026-05-24",
    trackLength: "3.337 km",
    laps: 78,
    status: "upcoming",
  },
  {
    id: "canada-2026",
    round: 9,
    grandPrix: "Canadian Grand Prix",
    circuit: "Circuit Gilles Villeneuve",
    country: "Canada",
    date: "2026-06-07",
    trackLength: "4.361 km",
    laps: 70,
    status: "upcoming",
  },
  {
    id: "spain-2026",
    round: 10,
    grandPrix: "Spanish Grand Prix",
    circuit: "Circuit de Barcelona-Catalunya",
    country: "Spain",
    date: "2026-06-21",
    trackLength: "4.657 km",
    laps: 66,
    status: "upcoming",
  },
];

/* ── Helpers ───────────────────────────────────────────────────── */

function formatDate(dateStr: string): string {
  const date = new Date(`${dateStr}T12:00:00`)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function daysUntil(dateStr: string): number {
  const now = new Date();
  const race = new Date(`${dateStr}T12:00:00`)
  const diff = race.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

/* ── Race Card ─────────────────────────────────────────────────── */

function RaceCard({ race, index }: { race: Race; index: number }) {
  const days = daysUntil(race.date);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href={`/races/${race.id}`}
          aria-label={`View ${race.grandPrix} details`}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
        >
          <Card className="overflow-hidden rounded-2xl border-border bg-card">
            <CardContent className="p-5">
              {/* Top row: Round + Status */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#808080]">
                  Round {race.round}
                </span>
                <Badge
                  variant="outline"
                  className="border-primary/30 text-primary bg-primary/5 text-[10px] uppercase tracking-wider"
                >
                  {race.status}
                </Badge>
              </div>

              {/* Grand Prix */}
              <h3 className="mt-3 text-lg font-bold text-white">
                {race.grandPrix}
              </h3>

              {/* Circuit */}
              <div className="mt-1 flex items-center gap-1.5 text-sm text-[#808080]">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{race.circuit}</span>
              </div>

              {/* Country */}
              <div className="mt-1 flex items-center gap-1.5 text-sm text-[#808080]">
                <span role="img" aria-label={race.country}>
                  {race.country === "China"
                    ? "🇨🇳"
                    : race.country === "United States"
                    ? "🇺🇸"
                    : race.country === "Italy"
                    ? "🇮🇹"
                    : race.country === "Monaco"
                    ? "🇲🇨"
                    : race.country === "Canada"
                    ? "🇨🇦"
                    : race.country === "Spain"
                    ? "🇪🇸"
                    : "🏳️"}
                </span>
                <span>{race.country}</span>
              </div>

              {/* Date */}
              <div className="mt-3 flex items-center gap-1.5 text-sm text-[#B5B5B5]">
                <Calendar className="h-3.5 w-3.5 shrink-0 text-[#808080]" />
                <span>{formatDate(race.date)}</span>
              </div>

              {/* Countdown placeholder */}
              <div className="mt-3 flex items-center gap-1.5 text-sm text-primary">
                <Timer className="h-3.5 w-3.5 shrink-0" />
                <span className="font-semibold">
                  {days === 0 ? "Today" : `${days} day${days === 1 ? "" : "s"} to go`}
                </span>
              </div>

              {/* Track info */}
              <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl border border-border bg-background p-3">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1 text-[#808080]">
                    <Route className="h-3 w-3" />
                    <span className="text-[10px] font-medium uppercase tracking-wider">
                      Length
                    </span>
                  </div>
                  <span className="text-sm font-bold text-white tabular-nums">
                    {race.trackLength}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1 text-[#808080]">
                    <Timer className="h-3 w-3" />
                    <span className="text-[10px] font-medium uppercase tracking-wider">
                      Laps
                    </span>
                  </div>
                  <span className="text-sm font-bold text-white tabular-nums">
                    {race.laps}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </motion.div>
    </motion.div>
  );
}

/* ── Section ───────────────────────────────────────────────────── */

export function UpcomingRaces() {
  return (
    <section
      className="relative bg-[#050505] py-20 md:py-28"
      aria-labelledby="upcoming-races-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[primary]">
              Calendar
            </span>
            <h2
              id="upcoming-races-heading"
              className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Upcoming Races
            </h2>
          </div>

          <Link
            href="/races"
           className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent hover:border-accent active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            View Calendar
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {races.map((race, index) => (
            <RaceCard key={race.id} race={race} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}