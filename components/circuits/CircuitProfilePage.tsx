"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, MapPin, Compass, GitCommit } from "lucide-react";
import type { Circuit } from "@/types/circuit";
import type { CircuitDetails } from "@/types/circuit-details";
import { CountryFlag } from "@/components/ui/CountryFlag";

// Static metadata dictionary to provide coordinates, elevations, and key corners for F1 circuits
const CIRCUIT_META: Record<string, { coords: string; elevation: string; keyCorner: string; accentColor: string }> = {
  bahrain: { coords: "26.0325° N, 50.5106° E", elevation: "17m", keyCorner: "Turn 10 Heavy Braking", accentColor: "#F92B34" },
  jeddah: { coords: "21.6319° N, 39.1044° E", elevation: "8m", keyCorner: "Turn 27 Sweeper", accentColor: "#00E17A" },
  melbourne: { coords: "37.8497° S, 144.9683° E", elevation: "10m", keyCorner: "Waite Corner (Turn 11/12)", accentColor: "#FFE600" },
  suzuka: { coords: "34.8431° N, 136.5410° E", elevation: "40m", keyCorner: "130R (Turn 15)", accentColor: "#E10600" },
  monaco: { coords: "43.7347° N, 7.4206° E", elevation: "42m", keyCorner: "Grand Hotel Hairpin", accentColor: "#FF0044" },
  spa: { coords: "50.4372° N, 5.9714° E", elevation: "102m", keyCorner: "Eau Rouge / Raidillon", accentColor: "#FFE600" },
  silverstone: { coords: "52.0786° N, 1.0169° W", elevation: "25m", keyCorner: "Maggotts & Becketts", accentColor: "#005AFF" },
  monza: { coords: "45.6189° N, 9.2812° E", elevation: "12m", keyCorner: "Variante Ascari", accentColor: "#00E17A" },
};

interface CircuitProfilePageProps {
  circuit: Circuit;
  details: CircuitDetails;
}

export function CircuitProfilePage({ circuit, details }: CircuitProfilePageProps) {
  const [imageError, setImageError] = useState(false);
  const mapUrl = `/circuits/layouts/${circuit.id}.svg`;
  const heroImageSrc = circuit.image || (details.gallery && details.gallery[0]) || "";

  // Resolve custom metadata parameters
  const meta = useMemo(() => {
    return CIRCUIT_META[circuit.id] || {
      coords: "50.0000° N, 8.0000° E",
      elevation: "15m",
      keyCorner: "Turn 1 Apex",
      accentColor: "#E10600",
    };
  }, [circuit.id]);

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative">
      {/* ── Background Atmospheric Layers ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Country-colored Ambient Glow */}
        <div
          className="absolute top-[20%] left-[10%] w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-15 pointer-events-none mix-blend-screen"
          style={{ backgroundColor: meta.accentColor }}
        />
        {/* Soft Animated Fog overlay */}
        <motion.div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05),transparent_40%)]"
          animate={{
            x: ["-5%", "5%"],
            y: ["-5%", "5%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        {/* Tech Grid */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Back button */}
      <div className="absolute top-28 left-6 sm:left-12 z-30 pointer-events-auto">
        <Link
          href="/circuits"
          className="flex items-center gap-2 text-xs font-black tracking-[0.25em] text-white/50 hover:text-white uppercase transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Circuits roster</span>
        </Link>
      </div>

      {/* ── Section 1: Hero Arrival (Full Viewport) ── */}
      <section className="relative h-screen w-full flex flex-col justify-end pb-20 z-10 px-6 sm:px-12 lg:px-20">
        {/* Full-bleed Circuit Image */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          {heroImageSrc && (
            <motion.div
              initial={{ scale: 1.01 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 12, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={heroImageSrc}
                alt={circuit.name}
                fill
                className="object-cover opacity-35 filter brightness-[0.7] contrast-[1.05]"
                priority
                sizes="100vw"
              />
            </motion.div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
        </div>

        {/* Giant Watermarked Title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 mt-20">
          <span className="text-[16vw] font-black uppercase text-white/[0.02] leading-none text-center select-none truncate max-w-full">
            {circuit.name.split(" ")[0]}
          </span>
        </div>

        {/* Arrival Header Details */}
        <div className="relative z-10 max-w-4xl space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em]"
          >
            <span style={{ color: meta.accentColor }}>EST. {circuit.firstGrandPrix}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5 text-white/50">
              <CountryFlag country={circuit.country} fallback={circuit.flag} className="w-4.5 h-3 rounded-sm" />
              {circuit.country}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white"
          >
            {circuit.name.split(" ").slice(0, 2).join(" ")}
            <span className="block text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>
              {circuit.name.split(" ").slice(2).join(" ")}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono tracking-widest text-[#808080]"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E10600]" />
              <span>{circuit.location}</span>
            </div>
            <span>{meta.coords}</span>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Track Blueprint (Telemetry Draw) ── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-32 border-t border-white/[0.05]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-start">
          
          {/* Left Column: Drawing SVG (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 block">
              {"// BLUEPRINT"}
            </span>

            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-sm flex items-center justify-center p-6">
              {imageError || !mapUrl ? (
                <div className="text-center p-8">
                  <Compass className="mx-auto mb-4 h-12 w-12 text-neutral-600 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Telemetry geometry loading</span>
                </div>
              ) : (
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={mapUrl}
                    alt={`${circuit.name} Blueprint`}
                    fill
                    className="object-contain p-6 filter invert brightness-100"
                    onError={() => setImageError(true)}
                    sizes="40vw"
                    priority
                  />
                </motion.div>
              )}
            </div>

            {/* Premium Details: Elevation and key corner */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-5 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest block">Elevation change</span>
                <span className="text-sm font-black text-white mt-1 block">{meta.elevation}</span>
              </div>
              <div className="border-l border-white/[0.05] pl-4">
                <span className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest block">Key Apex Corner</span>
                <span className="text-sm font-black text-white mt-1 block truncate" style={{ color: meta.accentColor }}>{meta.keyCorner}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technical DRS Zones & Sectors (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 block">
              {"// SECTOR telemetry"}
            </span>

            <div className="flex flex-col gap-4">
              {details.sectors.map((sector) => (
                <motion.div
                  key={sector.sector}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-[10px] font-black text-red-400">
                        S{sector.sector}
                      </div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">{sector.name}</h4>
                    </div>
                    <GitCommit className="h-4 w-4 text-neutral-600" />
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-neutral-400">
                    {sector.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {sector.characteristics.map((char) => (
                      <span
                        key={char}
                        className="rounded-full border border-red-500/10 bg-red-500/5 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-red-400/90"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 3: Technical Characteristics (Ribbon) ── */}
      <section className="relative z-10 border-t border-b border-white/[0.05] bg-white/[0.01] py-24 text-center sm:text-left">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 block mb-12">
            {"// GRID SPECS"}
          </span>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 font-mono">
            <div>
              <span className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest block">Track Length</span>
              <span className="text-3xl font-black text-white block mt-2">{circuit.length}</span>
            </div>
            <div>
              <span className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest block">Total Laps</span>
              <span className="text-3xl font-black text-white block mt-2">{circuit.laps}</span>
            </div>
            <div>
              <span className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest block">Race Distance</span>
              <span className="text-3xl font-black text-white block mt-2">{circuit.raceDistance}</span>
            </div>
            <div>
              <span className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest block">Corners Count</span>
              <span className="text-3xl font-black text-white block mt-2">{circuit.corners}</span>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <span className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest block">DRS Zones</span>
              <span className="text-3xl font-black text-white block mt-2">{circuit.drsZones}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Fastest Lap Record ── */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-32 border-b border-white/[0.05]">
        <div className="text-center space-y-6">
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#E10600]">LAP RECORD TELEMETRY</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl font-black text-white tracking-tighter font-mono"
          >
            {circuit.lapRecord}
          </motion.h2>
          
          {details.trackRecords && details.trackRecords[0] ? (
            <div className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mt-2">
              <span>{details.trackRecords[0].driver}</span>
              <span className="text-[#808080] mx-2.5">/</span>
              <span>{details.trackRecords[0].team}</span>
              <span className="text-[#808080] mx-2.5">/</span>
              <span>{details.trackRecords[0].year}</span>
            </div>
          ) : null}
        </div>
      </section>

      {/* ── Section 5: Legendary Moments (History narrative) ── */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 border-b border-white/[0.05] space-y-8">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 block">
          {"// LEGENDARY MOMENTS"}
        </span>
        <p className="text-lg sm:text-xl font-light leading-relaxed text-zinc-300 italic border-l-2 border-white/10 pl-6">
          &ldquo;{circuit.description}&rdquo;
        </p>
        <p className="text-sm leading-relaxed text-neutral-400">
          {details.overview}
        </p>
      </section>

      {/* ── Section 6: Recent Winners ── */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 border-b border-white/[0.05]">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 block mb-12">
          {"// RECENT WINNERS"}
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {details.previousWinners && details.previousWinners.slice(0, 3).map((w) => (
            <div
              key={w.year}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 hover:border-white/[0.1] transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[140px]"
            >
              <div>
                <span className="text-[9px] font-black text-[#808080] uppercase tracking-widest">{w.year} Winner</span>
                <h4 className="text-base font-bold text-white mt-1.5">{w.driver}</h4>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider block mt-0.5">{w.team}</span>
              </div>
              <span className="text-xs font-mono text-white/50 mt-4 block">{w.time}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 7: Circuit Information (Heritage & Overview) ── */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 space-y-8">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 block">
          {"// ARCHIVAL RECORD"}
        </span>
        <p className="text-sm sm:text-base leading-relaxed text-neutral-400">
          {details.history}
        </p>
      </section>

      {/* Explore Grid Navigation Footer */}
      <section className="relative z-10 border-t border-white/[0.05] bg-white/[0.01]">
        <div className="container mx-auto px-6 py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="mb-4 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white/55">
              Continue Exploring
            </span>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">
              Experience the 2026 Calendar
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#B5B5B5]">
              Explore the rest of the F1 circuits, constructors,
              and follow their details inside the RACEX premium experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link 
                href="/circuits"
                className="inline-flex h-11 items-center justify-center bg-white px-6 text-xs font-bold uppercase tracking-wider text-black rounded-lg transition-transform duration-200 active:scale-98 hover:scale-[1.02]"
              >
                Back to circuits
              </Link>
              <Link 
                href="/races"
                className="inline-flex h-11 items-center justify-center border border-white/15 hover:border-white/20 bg-transparent px-6 text-xs font-bold uppercase tracking-wider text-white rounded-lg transition-transform duration-200 active:scale-98 hover:scale-[1.02]"
              >
                View Races
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
