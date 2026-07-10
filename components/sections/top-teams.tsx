"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Driver {
  name: string;
  number: number;
  initials: string;
}

interface Team {
  id: string;
  name: string;
  shortName: string;
  color: string;
  shadowColor: string;
  drivers: [Driver, Driver];
  stats: {
    points: number;
    wins: number;
    podiums: number;
  };
  position: number;
  href: string;
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const TEAMS: Team[] = [
  {
    id: "red-bull",
    name: "Oracle Red Bull Racing",
    shortName: "Red Bull",
    color: "#3671C6",
    shadowColor: "rgba(54,113,198,0.35)",
    drivers: [
      { name: "Max Verstappen", number: 1, initials: "MV" },
      { name: "Sergio Pérez", number: 11, initials: "SP" },
    ],
    stats: { points: 387, wins: 8, podiums: 19 },
    position: 1,
    href: "/teams/red-bull",
  },
  {
    id: "mclaren",
    name: "McLaren Formula 1 Team",
    shortName: "McLaren",
    color: "#FF8000",
    shadowColor: "rgba(255,128,0,0.35)",
    drivers: [
      { name: "Lando Norris", number: 4, initials: "LN" },
      { name: "Oscar Piastri", number: 81, initials: "OP" },
    ],
    stats: { points: 347, wins: 5, podiums: 16 },
    position: 2,
    href: "/teams/mclaren",
  },
  {
    id: "ferrari",
    name: "Scuderia Ferrari",
    shortName: "Ferrari",
    color: "#E8002D",
    shadowColor: "rgba(232,0,45,0.35)",
    drivers: [
      { name: "Charles Leclerc", number: 16, initials: "CL" },
      { name: "Lewis Hamilton", number: 44, initials: "LH" },
    ],
    stats: { points: 298, wins: 3, podiums: 14 },
    position: 3,
    href: "/teams/ferrari",
  },
  {
    id: "mercedes",
    name: "Mercedes-AMG Petronas",
    shortName: "Mercedes",
    color: "#27F4D2",
    shadowColor: "rgba(39,244,210,0.25)",
    drivers: [
      { name: "George Russell", number: 63, initials: "GR" },
      { name: "Kimi Antonelli", number: 12, initials: "AK" },
    ],
    stats: { points: 251, wins: 2, podiums: 11 },
    position: 4,
    href: "/teams/mercedes",
  },
];

// ─── Logo placeholder ─────────────────────────────────────────────────────────

function TeamLogoPlaceholder({
  color,
  shortName,
}: {
  color: string;
  shortName: string;
}) {
  return (
    <div
      className="relative flex items-center justify-center w-14 h-14 rounded-xl overflow-hidden shrink-0"
      style={{ backgroundColor: `${color}18`, border: `1px solid ${color}30` }}
      aria-hidden="true"
    >
      {/* diagonal speed-stripe — signature F1 detail */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `repeating-linear-gradient(
            -45deg,
            ${color} 0px,
            ${color} 1px,
            transparent 1px,
            transparent 6px
          )`,
        }}
      />
      <span
        className="relative z-10 text-xs font-bold tracking-tighter select-none"
        style={{ color }}
      >
        {shortName.slice(0, 3).toUpperCase()}
      </span>
    </div>
  );
}

// ─── Stat cell ────────────────────────────────────────────────────────────────

function StatCell({
  value,
  label,
  color,
}: {
  value: number;
  label: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span
        className="text-xl font-extrabold tabular-nums leading-none"
        style={{ color }}
      >
        {value}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-white/35 select-none">
        {label}
      </span>
    </div>
  );
}

// ─── Driver pill ──────────────────────────────────────────────────────────────

function DriverPill({ driver, color }: { driver: Driver; color: string }) {
  return (
    <div className="flex items-center gap-2 min-w-0">
      <span
        className="flex items-center justify-center w-6 h-6 rounded-md text-[10px] font-bold shrink-0"
        style={{ backgroundColor: `${color}20`, color }}
        aria-hidden="true"
      >
        {driver.number}
      </span>
      <span className="text-xs text-white/60 truncate">{driver.name}</span>
    </div>
  );
}

// ─── Team card ────────────────────────────────────────────────────────────────

function TeamCard({ team }: { team: Team }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative h-full"
    >
      {/* outer glow on hover — rendered behind the card */}
      <motion.div
        aria-hidden="true"
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg"
        style={{ background: team.shadowColor }}
      />

      <Card
        className="
          relative h-full flex flex-col
          rounded-2xl overflow-hidden
          bg-card border-border
          backdrop-blur-xl
        "
      >
        {/* team color top bar */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: team.color }}
        />

        {/* position badge */}
        <div
          aria-hidden="true"
          className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
          style={{
            background: `${team.color}18`,
            color: team.color,
            border: `1px solid ${team.color}40`,
          }}
        >
          {team.position}
        </div>

        <CardHeader className="pt-6 pb-3 px-5">
          <div className="flex items-start gap-3 pr-8">
            <TeamLogoPlaceholder
              color={team.color}
              shortName={team.shortName}
            />
            <div className="min-w-0 pt-0.5">
              <CardTitle className="text-base font-bold text-white leading-tight truncate">
                {team.shortName}
              </CardTitle>
              <CardDescription className="text-xs text-white/40 mt-0.5 truncate">
                {team.name}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 px-5 pb-0 flex flex-col gap-4">
          {/* drivers */}
          <div className="flex flex-col gap-1.5">
            {team.drivers.map((driver) => (
              <DriverPill key={driver.number} driver={driver} color={team.color} />
            ))}
          </div>

          {/* divider */}
          <div
            className="h-px w-full"
            style={{ background: `${team.color}20` }}
            aria-hidden="true"
          />

          {/* stats */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <StatCell value={team.stats.points} label="Pts" color={team.color} />
            <StatCell value={team.stats.wins} label="Wins" color={team.color} />
            <StatCell value={team.stats.podiums} label="Pods" color={team.color} />
          </div>
        </CardContent>

        <CardFooter className="px-5 py-4 mt-4 border-t-0 bg-transparent">
          <Link
            href={team.href}
            className="
              group/cta inline-flex items-center justify-between w-full
              rounded-xl px-4 py-2.5
              text-xs font-semibold uppercase tracking-wider
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black
            "
            style={{
              background: `${team.color}15`,
              color: team.color,
              border: `1px solid ${team.color}30`,
            }}
            aria-label={`View ${team.shortName} team profile`}
          >
            <span>View team</span>
            <ChevronRight
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function TopTeams() {
  return (
    <motion.section
      aria-labelledby="top-teams-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        {/* header */}
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E8002D] mb-1">
              2026 Constructor Championship
            </p>
            <h2
              id="top-teams-heading"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-none"
            >
              Top Teams
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
  Explore the leading Formula 1 constructors, their drivers and season performance.
</p>
          </div>
          <Link
            href="/teams"
            className="
              text-xs font-medium text-white/40 hover:text-white/75
              transition-colors duration-150 underline-offset-4 hover:underline
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8002D] focus-visible:ring-offset-2 focus-visible:ring-offset-black
            "
          >
            All teams →
          </Link>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {TEAMS.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}