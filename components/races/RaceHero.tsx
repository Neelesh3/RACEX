// components/races/RaceHero.tsx

"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, Flag, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Race } from "@/types/race";
import type { RaceDetails } from "@/types/race-details";

interface RaceHeroProps {
  race?: Race;
  details?: RaceDetails;
}

export default function RaceHero({ race, details }: RaceHeroProps) {
  // --------------------------------
  // Mode 2: Race Detail Page
  // --------------------------------
  if (race && details) {
    const formatDate = (dateString: string) => {
      try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      } catch {
        return dateString;
      }
    };

    const getStatusStyles = (status: Race["status"]) => {
      switch (status) {
        case "live":
          return "bg-[#E10600]/10 text-[#E10600] border-[#E10600]/30";
        case "completed":
          return "bg-emerald-500/10 text-emerald-400 border-emerald-500/25";
        case "upcoming":
        default:
          return "bg-blue-500/10 text-blue-400 border-blue-500/25";
      }
    };

    const heroImageSrc = race.heroImage || (details.gallery && details.gallery[0]) || "";

    return (
      <section className="relative overflow-hidden border-b border-[#242424] bg-[#050505] py-16 lg:py-20">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E10600]/10 via-zinc-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(225,6,0,0.12),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            {/* Left Column: Metadata & Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6 flex flex-wrap gap-2.5">
                <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-400 backdrop-blur">
                  Round {race.round}
                </span>
                <span
                  className={`inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur ${getStatusStyles(
                    race.status
                  )}`}
                >
                  {race.status}
                </span>
              </div>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {race.name}
              </h1>

              <p className="mt-6 text-base leading-relaxed text-zinc-300">
                {race.description}
              </p>

              {/* Dynamic Metadata Cards */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="flex gap-3 rounded-xl border border-[#242424] bg-[#111111] p-4 transition-colors hover:border-[#E10600]/20">
                  <MapPin className="mt-0.5 h-4.5 w-4.5 text-[#E10600] shrink-0" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                      Circuit
                    </p>
                    <p className="mt-1 text-xs font-bold text-white leading-tight">
                      {race.circuit}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-xl border border-[#242424] bg-[#111111] p-4 transition-colors hover:border-[#E10600]/20">
                  <Flag className="mt-0.5 h-4.5 w-4.5 text-[#E10600] shrink-0" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                      Location
                    </p>
                    <p className="mt-1 text-xs font-bold text-white leading-tight">
                      {race.location}, {race.country}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-xl border border-[#242424] bg-[#111111] p-4 transition-colors hover:border-[#E10600]/20">
                  <CalendarDays className="mt-0.5 h-4.5 w-4.5 text-[#E10600] shrink-0" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                      Date
                    </p>
                    <p className="mt-1 text-xs font-bold text-white leading-tight">
                      {formatDate(race.date)}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={`/circuits/${details.circuitSlug}`}>
                  <Button size="lg" className="bg-red-600 hover:bg-red-500 font-semibold gap-2">
                    View Circuit Details
                    <ArrowRight className="h-4.5 w-4.5" />
                  </Button>
                </Link>
                <Link href="/races">
                  <Button size="lg" variant="outline" className="font-semibold gap-2">
                    <ArrowLeft className="h-4.5 w-4.5" />
                    Back to Calendar
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Hero Image Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.015 }}
              className="relative aspect-video overflow-hidden rounded-[20px] border border-[#242424] bg-[#111111]"
            >
              {heroImageSrc && (
                <Image
                  src={heroImageSrc}
                  alt={race.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // --------------------------------
  // Mode 1: Listing Page (Default fallback)
  // --------------------------------
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