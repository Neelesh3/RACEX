"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Trophy, Medal, Hash, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { drivers } from "@/lib/drivers";
import type { Driver } from "@/types/driver";
import { CountryFlag } from "@/components/ui/CountryFlag";

const filterChips = [
  "All",
  "Red Bull",
  "Ferrari",
  "Mercedes",
  "McLaren",
  "Aston Martin",
  "Alpine",
  "Williams",
  "Racing Bulls",
  "Haas",
  "Kick Sauber"
];

/* ── Stat Item ─────────────────────────────────────────────────── */

function StatItem({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Trophy;
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-1 text-muted-foreground">
        <Icon className="h-3 w-3" />
        <span className="text-[10px] font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>
      <span className="text-sm font-bold text-white tabular-nums">
        {value}
      </span>
    </div>
  );
}

/* ── Driver Card ───────────────────────────────────────────────── */

function DriverCard({ driver, index }: { driver: Driver; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href={`/drivers/${driver.slug}`}
          aria-label={`View ${driver.name} profile`}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
        >
          <Card className="relative overflow-hidden rounded-2xl border border-[#242424] bg-[#111111] hover:border-neutral-700/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group">
            {/* Subtle carbon overlay */}
            <div className="absolute inset-0 bg-[url('/textures/carbon/carbon-fiber.png')] bg-cover opacity-[0.025] pointer-events-none rounded-2xl" />
            <div
              className="h-1 w-full relative z-10"
              style={{ backgroundColor: driver.teamColor }}
            />
            <CardContent className="p-5 relative z-10">
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-zinc-950 border border-white/5 flex items-center justify-center">
                  {driver.image === "/icons/helmet.svg" ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#181818] to-neutral-950">
                      <span className="absolute text-[26px] font-black tracking-tighter opacity-15 select-none" style={{ color: driver.teamColor }}>
                        {driver.number}
                      </span>
                      <Image
                        src="/icons/helmet.svg"
                        alt={driver.name}
                        width={24}
                        height={24}
                        className="opacity-70 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                        style={{ filter: `drop-shadow(0 0 6px ${driver.teamColor}30)` }}
                      />
                    </div>
                  ) : (
                    <Image
                      src={driver.image}
                      alt={driver.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="64px"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-base font-bold text-white transition-colors group-hover:text-[#E10600]">
                    {driver.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-neutral-400">{driver.team}</p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <CountryFlag country={driver.country} fallback={driver.flag} />
                      {driver.country}
                    </span>
                  </div>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#181818] border border-[#242424] group-hover:border-neutral-700 transition-colors">
                  <span className="text-sm font-bold text-white tabular-nums">
                    {driver.number}
                  </span>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-border bg-[#0B0B0B] p-3">
                <StatItem icon={Trophy} value={driver.wins} label="Wins" />
                <StatItem icon={Medal} value={driver.podiums} label="Podiums" />
                <StatItem icon={Hash} value={driver.points} label="Points" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                  View Profile
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-[#181818] text-muted-foreground">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </motion.div>
    </motion.div>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */

export default function DriversPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDrivers = useMemo(() => {
    return drivers.filter((driver) => {
      // 1. Team filter
      const matchesTeam =
        activeFilter === "All" ||
        driver.team.toLowerCase().includes(activeFilter.toLowerCase()) ||
        (activeFilter === "RB" && driver.team === "Racing Bulls");

      // 2. Search query filter
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        driver.name.toLowerCase().includes(query) ||
        driver.team.toLowerCase().includes(query) ||
        driver.country.toLowerCase().includes(query);

      return matchesTeam && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050505] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute -right-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#E10600]/[0.03] blur-[120px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto px-4 relative"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#E10600]">
            2026 Season
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Drivers
          </h1>
          <p className="mt-4 max-w-xl text-base text-[#B5B5B5]">
            Meet the 20 elite drivers competing for the Formula 1 World Championship.
          </p>
        </motion.div>
      </section>

      {/* Search + Filters */}
      <section className="border-b border-border bg-[#050505] pb-8">
        <div className="container mx-auto px-4">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search drivers, teams, nationalities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-sm text-white placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </motion.div>

          {/* Filter Chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {filterChips.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => setActiveFilter(chip)}
                className={`inline-flex h-9 items-center rounded-lg border px-4 text-xs font-medium transition-colors cursor-pointer ${
                  chip === activeFilter
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-white"
                }`}
              >
                {chip}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {filteredDrivers.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredDrivers.map((driver, index) => (
                <DriverCard key={driver.id} driver={driver} index={index} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Search className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-lg font-bold text-white mb-1">No drivers found</h3>
              <p className="text-sm text-muted-foreground">
                No drivers match your search query or team filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}