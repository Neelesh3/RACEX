"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MapPin, Trophy } from "lucide-react";
import { CountryFlag } from "@/components/ui/CountryFlag";
import { Card, CardContent } from "@/components/ui/card";
import type { Team } from "@/types/team";

interface TeamCardProps {
  team: Team;
  index: number;
}

export function TeamCard({ team, index }: TeamCardProps) {
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
          href={`/teams/${team.slug}`}
          aria-label={`View ${team.name} profile`}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
        >
          <Card className="overflow-hidden rounded-2xl border border-[#242424] bg-[#111111]">
            <div
              className="h-1 w-full"
              style={{ backgroundColor: team.brandColor }}
            />
            
            {/* Team Car Banner */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
              <Image
                src={team.carImage}
                alt={`${team.name} F1 Car`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 z-10">
                <CountryFlag country={team.country} fallback={team.flag} />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  {team.country}
                </span>
              </div>
            </div>

            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-lg font-bold text-white transition-colors group-hover:text-[#E10600]">
                    {team.name}
                  </h3>
                  <p className="mt-1 flex items-center gap-1 text-xs text-neutral-500">
                    <MapPin className="h-3.5 w-3.5 text-neutral-600 shrink-0" />
                    <span className="truncate">{team.base}</span>
                  </p>
                </div>

                {/* Team Logo Badge */}
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-[#050505] border border-[#242424] p-1.5">
                  <Image
                    src={team.logo}
                    alt={`${team.name} logo`}
                    fill
                    className="object-contain p-1"
                    sizes="40px"
                  />
                </div>
              </div>

              {/* Stats Strip */}
              <div className="mt-5 grid grid-cols-2 gap-2 rounded-xl border border-[#242424] bg-[#050505] p-3 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                    Principal
                  </span>
                  <span className="mt-0.5 truncate text-xs font-semibold text-white max-w-full">
                    {team.teamPrincipal}
                  </span>
                </div>
                <div className="flex flex-col items-center border-l border-[#242424]">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                    Championships
                  </span>
                  <span className="mt-0.5 flex items-center gap-1 text-xs font-bold text-white">
                    <Trophy className="h-3 w-3 text-yellow-500" />
                    {team.championships}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-neutral-500">
                  View Profile
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#242424] bg-[#181818] text-neutral-500">
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