"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Trophy, Medal, Hash, ChevronRight, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { drivers } from "@/lib/drivers";
import type { Driver } from "@/types/driver";
import { CountryFlag } from "@/components/ui/CountryFlag";

const featuredDrivers = drivers.slice(0, 6);

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
      <div className="flex items-center gap-1 text-[#808080]">
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
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/drivers/${driver.slug}`}
        aria-label={`View ${driver.name} profile`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
      >
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="relative overflow-hidden rounded-2xl border border-[#242424] bg-[#111111] hover:border-neutral-700/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group">
            {/* Subtle carbon overlay */}
            <div className="absolute inset-0 bg-[url('/textures/carbon-fiber.png')] bg-cover opacity-[0.025] pointer-events-none rounded-2xl" />
            {/* Team color strip */}
            <div
              className="h-1 w-full relative z-10"
              style={{ backgroundColor: driver.teamColor }}
            />

            <CardContent className="p-5 relative z-10">
              {/* Photo + info row */}
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
                  <div className="mt-1 flex items-center gap-2 text-xs text-[#808080]">
                    <span className="flex items-center gap-1.5">
                      <CountryFlag country={driver.country} fallback={driver.flag} />
                      {driver.country}
                    </span>
                  </div>
                </div>

                {/* Number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#181818] border border-[#242424] group-hover:border-neutral-700 transition-colors">
                  <span className="text-sm font-bold text-white tabular-nums">
                    {driver.number}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-[#242424] bg-[#0B0B0B] p-3">
                <StatItem icon={Trophy} value={driver.wins} label="Wins" />
                <StatItem icon={Medal} value={driver.podiums} label="Podiums" />
                <StatItem icon={Hash} value={driver.points} label="Points" />
              </div>

              {/* CTA */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-[#808080]">
                  View Profile
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#242424] bg-[#181818] text-[#808080]">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Link>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────────────── */

export function FeaturedDrivers() {
  return (
    <section
      className="relative bg-[#050505] py-20 md:py-28"
      aria-labelledby="featured-drivers-heading"
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
            <span className="text-sm font-semibold uppercase tracking-wider text-[#E10600]">
              Featured Drivers
            </span>
            <h2
              id="featured-drivers-heading"
              className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Meet the Grid
            </h2>
          </div>

          <Link
            href="/drivers"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent hover:border-accent active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            View All Drivers
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredDrivers.map((driver, index) => (
            <DriverCard key={driver.id} driver={driver} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}