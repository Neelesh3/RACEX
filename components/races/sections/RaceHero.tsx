"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { Race } from "@/types/race";
import { CountryFlag } from "@/components/ui/CountryFlag";
import { useTheme } from "@/lib/theme/theme-utils";

// Static particle templates to maintain rendering purity in React 19
const PARTICLE_TEMPLATES = [
  { id: 1, x: 12, y: 70, size: 2.1, duration: 10 },
  { id: 2, x: 45, y: 55, size: 1.5, duration: 12 },
  { id: 3, x: 78, y: 65, size: 2.8, duration: 14 },
  { id: 4, x: 23, y: 45, size: 1.2, duration: 11 },
  { id: 5, x: 56, y: 72, size: 2.5, duration: 13 },
  { id: 6, x: 89, y: 50, size: 1.8, duration: 15 },
  { id: 7, x: 34, y: 80, size: 2.2, duration: 16 },
  { id: 8, x: 67, y: 35, size: 1.6, duration: 9 },
];

interface RaceHeroProps {
  race: Race;
}

export default function RaceHero({ race }: RaceHeroProps) {
  const heroImageSrc = race.heroImage || "";
  const mapUrl = `/circuits/layouts/${race.id}.svg`;
  const { currentTheme } = useTheme();

  return (
    <section className="relative h-[85vh] w-full flex flex-col justify-end pb-20 z-10 border-b border-white/[0.05]">
      {/* Background Hero Banner */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {heroImageSrc && (
          <motion.div
            initial={{ scale: 1.02 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 12, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={heroImageSrc}
              alt={race.name}
              fill
              className="object-cover opacity-35 filter brightness-[0.7] contrast-[1.02]"
              priority
              sizes="100vw"
            />
          </motion.div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
      </div>

      {/* Floating Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {PARTICLE_TEMPLATES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              boxShadow: `0 0 8px ${currentTheme.glow}`,
            }}
            animate={{
              y: ["0vh", "-15vh"],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Circuit Silhouette Watermark */}
      <div className="absolute top-[15%] right-[5%] w-[35vw] h-[35vw] opacity-[0.03] pointer-events-none select-none z-0">
        <Image
          src={mapUrl}
          alt="Circuit silhouette"
          fill
          className="object-contain filter invert brightness-100"
        />
      </div>

      {/* Giant Watermarked Translucent Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 mt-20">
        <span className="text-[20vw] font-black uppercase text-white/[0.015] leading-none text-center select-none truncate max-w-full">
          WEEKEND
        </span>
      </div>

      {/* Main Content Title */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-20 max-w-4xl space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.25em]"
        >
          <span style={{ color: currentTheme.accent }}>ROUND {race.round}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="flex items-center gap-1.5 text-white/50">
            <CountryFlag country={race.country} fallback={race.flag} className="w-4.5 h-3 rounded-sm" type="circuit" />
            {race.country}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white"
        >
          {race.name.split(" ").slice(0, -2).join(" ")}
          <span className="block text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>
            {race.name.split(" ").slice(-2).join(" ")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-neutral-400 flex items-center gap-2"
        >
          <MapPin className="w-4.5 h-4.5" style={{ color: currentTheme.accent }} />
          <span>{race.circuit} • {race.location}</span>
        </motion.p>
      </div>
    </section>
  );
}
