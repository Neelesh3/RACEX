"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { Race } from "@/types/race";
import { CountryFlag } from "@/components/ui/CountryFlag";

interface RaceHeroProps {
  race: Race;
}

export default function RaceHero({ race }: RaceHeroProps) {
  const heroImageSrc = race.heroImage || "";

  return (
    <section className="relative h-[65vh] w-full flex items-end justify-center pb-12 z-10 border-b border-white/[0.05]">
      {/* Background Hero Banner */}
      <div className="absolute inset-0 w-full h-full z-0">
        {heroImageSrc && (
          <Image
            src={heroImageSrc}
            alt={race.name}
            fill
            className="object-cover opacity-50 filter brightness-90 contrast-[1.02]"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
      </div>

      {/* Main Content Title */}
      <div className="relative text-center z-10 px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2.5 mb-4 text-xs font-black uppercase tracking-[0.25em]"
        >
          <span className="text-[#E10600]">ROUND {race.round}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="flex items-center gap-1.5 text-white/60">
            <CountryFlag country={race.country} fallback={race.flag} className="w-4 h-3 rounded-sm" />
            {race.country}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight"
        >
          {race.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-neutral-400 flex justify-center items-center gap-2"
        >
          <MapPin className="w-4.5 h-4.5 text-[#E10600]" />
          <span>{race.circuit} • {race.location}</span>
        </motion.p>
      </div>
    </section>
  );
}
