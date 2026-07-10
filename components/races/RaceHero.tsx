// components/races/RaceHero.tsx

"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RaceHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-zinc-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.18),transparent_55%)]" />

      <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-6 py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 backdrop-blur">
            <CalendarDays className="h-4 w-4" />
            2026 Formula One Championship
          </div>

          <h1 className="text-5xl font-black tracking-tight text-white md:text-6xl xl:text-7xl">
            Formula One
            <span className="block bg-gradient-to-r from-red-500 via-white to-red-400 bg-clip-text text-transparent">
              Race Calendar
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Explore every Grand Prix weekend with race schedules, circuits,
            qualifying sessions, standings, and upcoming events throughout the
            Formula One season.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/races">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-500"
              >
                Explore Calendar
              </Button>
            </Link>
            <Link href="/standings">
              <Button
                size="lg"
                variant="outline"
              >
                Current Standings
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}