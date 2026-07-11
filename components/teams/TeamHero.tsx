"use client";

import { motion } from "framer-motion";
import { ArrowRight, Factory, Trophy, Users, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Team } from "@/types/team";
import type { TeamDetails } from "@/types/team-details";

interface TeamHeroProps {
  team?: Team;
  details?: TeamDetails;
}

export function TeamHero({
  team,
  details,
}: TeamHeroProps) {
  // ----------------------------
  // LIST PAGE (Existing)
  // ----------------------------
  if (!team || !details) {
    return (
      <section className="relative overflow-hidden bg-[#050505] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute -right-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#E10600]/[0.03] blur-[120px]" />
          <div className="absolute -left-[5%] bottom-[5%] h-[300px] w-[300px] rounded-full bg-[#1E41FF]/[0.02] blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#E10600]">
              <Users className="h-4 w-4" />
              2026 Season
            </span>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Formula One
              <br />
              <span className="text-[#E10600]">
                Constructors
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#B5B5B5] sm:text-lg">
              Discover the elite teams engineering the
              fastest machines on Earth. From legendary
              marques to ambitious newcomers, explore every
              constructor competing for glory.
            </p>

            <a
              href="#teams-grid"
              className={cn(
                "mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl",
                "bg-[#E10600] px-7 text-sm font-semibold text-white",
                "transition-all duration-200",
                "hover:bg-[#FF1A1A] hover:shadow-[0_0_30px_rgba(225,6,0,0.25)]",
                "active:scale-[0.98]"
              )}
            >
              Explore Teams
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  // ----------------------------
  // DETAIL PAGE
  // ----------------------------

  return (
    <section className="relative overflow-hidden bg-[#050505] pt-32 pb-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E10600]/10 via-transparent to-transparent" />

        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#E10600]/5 blur-[160px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          <div>
            <span className="inline-flex rounded-full border border-[#E10600]/30 bg-[#E10600]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#E10600]">
              Formula One Constructor
            </span>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-white md:text-7xl">
              {team.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#B5B5B5]">
              {details.overview}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 rounded-xl border border-[#242424] bg-[#111111] p-4">
                <MapPin className="mt-1 h-5 w-5 text-[#E10600]" />
                <div>
                  <p className="text-xs uppercase text-[#777]">
                    Base
                  </p>
                  <p className="font-semibold text-white">
                    {details.base}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-xl border border-[#242424] bg-[#111111] p-4">
                <Factory className="mt-1 h-5 w-5 text-[#E10600]" />
                <div>
                  <p className="text-xs uppercase text-[#777]">
                    Engine
                  </p>
                  <p className="font-semibold text-white">
                    {details.engineSupplier}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-xl border border-[#242424] bg-[#111111] p-4">
                <Users className="mt-1 h-5 w-5 text-[#E10600]" />
                <div>
                  <p className="text-xs uppercase text-[#777]">
                    Team Principal
                  </p>
                  <p className="font-semibold text-white">
                    {details.teamPrincipal}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-xl border border-[#242424] bg-[#111111] p-4">
                <Trophy className="mt-1 h-5 w-5 text-[#E10600]" />
                <div>
                  <p className="text-xs uppercase text-[#777]">
                    Championships
                  </p>
                  <p className="font-semibold text-white">
                    {details.worldChampionships}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-3xl border border-[#242424] bg-[#111111]"
          >
            <img
              src={team.carImage}
              alt={team.name}
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}