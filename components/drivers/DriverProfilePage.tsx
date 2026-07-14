"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, Star } from "lucide-react";
import type { Driver } from "@/types/driver";
import type { DriverDetails } from "@/types/driver-details";
import { CountryFlag } from "@/components/ui/CountryFlag";

// Static particle templates array to keep the component pure and compile cleanly under React 19 / ESLint purity checks
const PARTICLE_TEMPLATES = [
  { id: 1, x: 15, y: 80, size: 2.2, duration: 14, delay: 0 },
  { id: 2, x: 42, y: 75, size: 3.0, duration: 16, delay: 1 },
  { id: 3, x: 73, y: 90, size: 1.8, duration: 18, delay: 2 },
  { id: 4, x: 28, y: 65, size: 2.5, duration: 12, delay: 0.5 },
  { id: 5, x: 59, y: 88, size: 1.5, duration: 15, delay: 1.5 },
  { id: 6, x: 85, y: 70, size: 2.8, duration: 17, delay: 2.5 },
  { id: 7, x: 31, y: 95, size: 1.2, duration: 20, delay: 3 },
  { id: 8, x: 64, y: 60, size: 2.6, duration: 13, delay: 0.8 },
  { id: 9, x: 19, y: 50, size: 2.0, duration: 19, delay: 1.2 },
  { id: 10, x: 80, y: 40, size: 1.7, duration: 14, delay: 2.2 },
];

interface DriverProfilePageProps {
  driver: Driver;
  details: DriverDetails;
}

export function DriverProfilePage({ driver, details }: DriverProfilePageProps) {
  const resolvedPortrait = driver.image && driver.image !== "/icons/helmet.svg" ? driver.image : "/icons/helmet.svg";

  // Procedural cursive path for driver initials signature animation
  const signaturePath = useMemo(() => {
    return "M 10,40 C 30,10 40,70 60,30 C 70,10 80,60 100,40 C 110,30 120,20 140,50 C 160,80 180,20 200,40";
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative">
      {/* ── Background Atmospheric Layers ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Ambient Team Glow */}
        <div
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[85vw] h-[85vw] rounded-full blur-[160px] opacity-25 mix-blend-screen transition-all duration-1000"
          style={{ backgroundColor: driver.teamColor }}
        />
        
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.012] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Soft Fog Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_95%)] opacity-95" />

        {/* Floating Particles */}
        {PARTICLE_TEMPLATES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              boxShadow: `0 0 8px ${driver.teamColor}`,
            }}
            animate={{
              y: ["0vh", "-20vh"],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}

        {/* Helmet Silhouette Watermark */}
        <div className="absolute top-[25%] right-[-5%] w-[45vw] h-[45vw] opacity-[0.02] select-none text-white">
          <Image
            src="/icons/helmet.svg"
            alt="Helmet Watermark"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Back to roster link */}
      <div className="absolute top-28 left-6 sm:left-12 z-30 pointer-events-auto">
        <Link
          href="/drivers"
          className="flex items-center gap-2 text-xs font-black tracking-[0.25em] text-white/40 hover:text-white uppercase transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Drivers roster</span>
        </Link>
      </div>

      {/* ── Section 1: Hero Portrait (Documentary Style) ── */}
      <section className="relative min-h-screen flex flex-col justify-end items-center px-6 pb-20 z-10">
        {/* Giant Translucent Racing Number */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 mt-8">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[38vw] font-black font-mono leading-none tracking-tighter"
            style={{
              WebkitTextStroke: `2px ${driver.teamColor}`,
              color: "transparent",
            }}
          >
            {driver.number.toString().padStart(2, "0")}
          </motion.span>
        </div>

        {/* Main large portrait */}
        <div className="relative w-full max-w-[90vw] sm:max-w-[65vw] lg:max-w-[42vw] aspect-[3/4] flex items-end justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 120, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[90%] flex justify-center items-end"
          >
            {resolvedPortrait === "/icons/helmet.svg" ? (
              <div className="flex flex-col items-center justify-center p-8 bg-white/[0.02] border border-white/5 rounded-3xl h-full w-full backdrop-blur-md">
                <Image
                  src="/icons/helmet.svg"
                  alt={driver.name}
                  width={160}
                  height={160}
                  className="opacity-40 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  style={{ filter: `drop-shadow(0 0 16px ${driver.teamColor}25)` }}
                />
              </div>
            ) : (
              <Image
                src={resolvedPortrait}
                alt={driver.name}
                fill
                className="object-contain filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.95)] z-10"
                priority
              />
            )}
            {/* Ground shadow */}
            <div className="absolute bottom-0 w-[90%] h-12 bg-black/95 blur-2xl rounded-full pointer-events-none -z-10" />
          </motion.div>
        </div>

        {/* Title reveal & Cursive initials */}
        <div className="text-center z-20 mt-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.25em]"
          >
            <span style={{ color: driver.teamColor }}>{driver.team}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="flex items-center gap-2 text-white/50">
              <CountryFlag country={driver.country} fallback={driver.flag} className="w-4.5 h-3 rounded-sm" />
              {driver.country}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white"
          >
            {driver.name.split(" ")[0]}
            <span className="block text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}>
              {driver.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          {/* Underline line animation */}
          <div className="flex justify-center mt-6">
            <svg width="220" height="60" viewBox="0 0 220 60" className="opacity-40">
              <motion.path
                d={signaturePath}
                fill="none"
                stroke={driver.teamColor}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, delay: 1.0, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Section 2: Career Snapshot ── */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center sm:text-left">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 block mb-6">
          {"// THE LEGACY"}
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight text-white max-w-3xl"
        >
          {driver.name.split(" ")[0]} made his F1 debut in <span style={{ color: driver.teamColor }}>{details.debutSeason}</span>. Since then, he has established himself as a dominant presence on the grid.
        </motion.h2>
      </section>

      {/* ── Section 3: Achievements (Championship Stars) ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 border-t border-white/[0.05]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Achievements Stats */}
          <div className="md:col-span-8 grid grid-cols-2 gap-8 text-center sm:text-left">
            <div>
              <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest block">GP Victories</span>
              <span className="text-5xl sm:text-6xl font-black text-white block mt-2 font-mono">{details.wins}</span>
            </div>
            <div>
              <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest block">Podium Finishes</span>
              <span className="text-5xl sm:text-6xl font-black text-white block mt-2 font-mono">{details.podiums}</span>
            </div>
            <div>
              <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest block">Pole Positions</span>
              <span className="text-5xl sm:text-6xl font-black text-white block mt-2 font-mono">{details.poles}</span>
            </div>
            <div>
              <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest block">Fastest Laps</span>
              <span className="text-5xl sm:text-6xl font-black text-white block mt-2 font-mono">{details.fastestLaps}</span>
            </div>
          </div>

          {/* Championship Stars Card */}
          <div className="md:col-span-4 rounded-3xl border border-white/[0.06] bg-white/[0.01] p-8 text-center backdrop-blur-md relative">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500 block mb-6">Titles Won</span>
            
            {details.championships > 0 ? (
              <div className="flex flex-col items-center">
                <div className="flex justify-center gap-2 mb-4">
                  {Array.from({ length: details.championships }).map((_, idx) => (
                    <motion.div
                      key={idx}
                      animate={{ rotate: 360, scale: [1, 1.15, 1] }}
                      transition={{ duration: 6, repeat: Infinity, delay: idx * 0.5 }}
                    >
                      <Star className="w-6 h-6 text-[#FFD700] fill-[#FFD700]" />
                    </motion.div>
                  ))}
                </div>
                <h3 className="text-xl font-black uppercase text-white">{details.championships}x World Champion</h3>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mt-1">Formula One Drivers Champion</span>
              </div>
            ) : (
              <div className="flex flex-col items-center py-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-neutral-600" />
                </div>
                <h3 className="text-sm font-bold uppercase text-white">Grid Contender</h3>
                <span className="text-[9px] text-neutral-500 uppercase tracking-wider block mt-1">Pursuing Maiden Title Campaign</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Section 4: Career Timeline (Scroll Reveal) ── */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 border-t border-white/[0.05]">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 block mb-12">
          {"// CHRONOLOGY"}
        </span>

        <div className="relative border-l border-white/[0.08] ml-4 pl-8 space-y-12">
          {details.timeline.map((item, idx) => (
            <motion.div
              key={`${item.year}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Timeline circle node */}
              <div 
                className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full border border-white/20 bg-[#050505] flex items-center justify-center"
                style={{ borderColor: idx === 0 ? driver.teamColor : "" }}
              >
                <div 
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: idx === 0 ? driver.teamColor : "rgba(255,255,255,0.3)" }}
                />
              </div>

              <span className="text-xs font-mono font-bold text-[#808080] bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 rounded">
                {item.year}
              </span>
              <h3 className="text-lg font-black text-white uppercase tracking-wider mt-2">{item.achievement}</h3>
              {item.description && (
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed max-w-2xl">{item.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Section 5: Driver Story (Editorial Narratives) ── */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 py-24 border-t border-white/[0.05] space-y-12">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 block">
          {"// IN DEPTH"}
        </span>

        <div className="space-y-8">
          <p className="text-lg sm:text-xl font-light leading-relaxed text-zinc-300 italic border-l-2 border-white/10 pl-6">
            &ldquo;{details.biography}&rdquo;
          </p>
          <p className="text-sm leading-relaxed text-neutral-400">
            {details.careerSummary}
          </p>
        </div>
      </section>

      {/* ── Section 6: Career Statistics (Telemetry style) ── */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 border-t border-white/[0.05]">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 block mb-12">
          {"// DRIVER TELEMETRY"}
        </span>

        {/* Terminals specs block */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 rounded-3xl border border-white/[0.06] bg-white/[0.01] p-8 font-mono">
          <div>
            <span className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest block">Born</span>
            <span className="text-sm font-black text-white block mt-1">{details.birthDate}</span>
          </div>
          <div>
            <span className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest block">Origin</span>
            <span className="text-sm font-black text-white block mt-1 truncate">{details.birthPlace.split(",")[0]}</span>
          </div>
          <div>
            <span className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest block">Height</span>
            <span className="text-sm font-black text-white block mt-1">{details.height}</span>
          </div>
          <div>
            <span className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest block">Weight</span>
            <span className="text-sm font-black text-white block mt-1">{details.weight}</span>
          </div>
        </div>
      </section>

      {/* Explore Grid Navigation Footer */}
      <section className="relative z-10 border-t border-white/[0.05] bg-white/[0.01]">
        <div className="container mx-auto px-6 py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="mb-4 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white/55">
              Continue Exploring
            </span>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">
              Discover More Grid Competitors
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#B5B5B5]">
              Explore the rest of the F1 competitor list, construct histories,
              and follow their path inside the RACEX premium experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link 
                href="/drivers"
                className="inline-flex h-11 items-center justify-center bg-white px-6 text-xs font-bold uppercase tracking-wider text-black rounded-lg transition-transform duration-200 active:scale-98 hover:scale-[1.02]"
              >
                Back to drivers
              </Link>
              <Link 
                href="/garage"
                className="inline-flex h-11 items-center justify-center border border-white/15 hover:border-white/20 bg-transparent px-6 text-xs font-bold uppercase tracking-wider text-white rounded-lg transition-transform duration-200 active:scale-98 hover:scale-[1.02]"
              >
                View Constructors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
