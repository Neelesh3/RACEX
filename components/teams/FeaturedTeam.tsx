"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, MapPin, Wrench, ChevronRight, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { featuredTeam } from "@/lib/teams";

export function FeaturedTeam() {
  const team = featuredTeam;

  return (
    <section className="py-16 md:py-24 bg-[#0B0B0B]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#E10600]">
            Featured Constructor
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Team of the Season
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <Link
            href={`/teams/${team.slug}`}
            aria-label={`View ${team.name} details`}
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            <Card
              className="overflow-hidden rounded-2xl border border-[#242424]"
              style={{
                background: `linear-gradient(135deg, ${team.brandColor}08 0%, #111111 50%)`,
              }}
            >
              <CardContent className="p-6 md:p-10">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                  {/* Left: Info */}
                  <div>
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-extrabold"
                        style={{
                          backgroundColor: team.brandColor + "20",
                          color: team.brandColor,
                        }}
                      >
                        {team.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white md:text-3xl">
                          {team.fullName}
                        </h3>
                        <div className="mt-1 flex items-center gap-2 text-sm text-[#808080]">
                          <span role="img" aria-label={team.country}>
                            {team.flag}
                          </span>
                          <span>{team.country}</span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-[#B5B5B5] md:text-base">
                      {team.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 rounded-xl border border-[#242424] bg-[#0B0B0B] px-4 py-2">
                        <MapPin className="h-4 w-4 text-[#808080]" />
                        <span className="text-sm text-white">{team.base}</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-xl border border-[#242424] bg-[#0B0B0B] px-4 py-2">
                        <Wrench className="h-4 w-4 text-[#808080]" />
                        <span className="text-sm text-white">{team.engine}</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-xl border border-[#242424] bg-[#0B0B0B] px-4 py-2">
                        <Users className="h-4 w-4 text-[#808080]" />
                        <span className="text-sm text-white">
                          Est. {team.founded}
                        </span>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl",
                        "border border-[#242424] bg-[#111111] px-5 text-sm font-semibold text-white",
                        "transition-all duration-200",
                        "hover:border-[#343434] hover:bg-[#181818]",
                        "active:scale-[0.98]"
                      )}
                    >
                      View Full Profile
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Right: Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-[#242424] bg-[#0B0B0B] p-5 text-center">
                      <Trophy className="mx-auto h-5 w-5 text-[#E10600]" />
                      <p className="mt-2 text-2xl font-bold text-white tabular-nums">
                        {team.championships}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-[#808080]">
                        Championships
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#242424] bg-[#0B0B0B] p-5 text-center">
                      <Trophy className="mx-auto h-5 w-5 text-[#E10600]" />
                      <p className="mt-2 text-2xl font-bold text-white tabular-nums">
                        {team.wins}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-[#808080]">
                        Race Wins
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#242424] bg-[#0B0B0B] p-5 text-center">
                      <Trophy className="mx-auto h-5 w-5 text-[#E10600]" />
                      <p className="mt-2 text-2xl font-bold text-white tabular-nums">
                        {team.podiums}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-[#808080]">
                        Podiums
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#242424] bg-[#0B0B0B] p-5 text-center">
                      <Trophy className="mx-auto h-5 w-5 text-[#E10600]" />
                      <p className="mt-2 text-2xl font-bold text-white tabular-nums">
                        {team.races}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-[#808080]">
                        Races
                      </p>
                    </div>
                  </div>
                </div>

                {/* Driver lineup */}
                <div className="mt-8 border-t border-[#242424] pt-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#808080]">
                    Current Driver Lineup
                  </span>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {team.drivers.map((driver) => (
                      <div
                        key={driver.id}
                        className="flex items-center gap-2 rounded-xl border border-[#242424] bg-[#0B0B0B] px-4 py-2.5"
                      >
                        <span role="img" aria-label={driver.name}>
                          {driver.flag}
                        </span>
                        <span className="text-sm font-medium text-white">
                          {driver.name}
                        </span>
                        <span
                          className="text-xs font-bold tabular-nums"
                          style={{ color: team.brandColor }}
                        >
                          #{driver.number}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}