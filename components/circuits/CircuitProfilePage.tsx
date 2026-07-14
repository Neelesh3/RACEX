"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, MapPin, Compass, Trophy, GitCommit } from "lucide-react";
import type { Circuit } from "@/types/circuit";
import type { CircuitDetails } from "@/types/circuit-details";
import { CountryFlag } from "@/components/ui/CountryFlag";

interface CircuitProfilePageProps {
  circuit: Circuit;
  details: CircuitDetails;
}

export function CircuitProfilePage({ circuit, details }: CircuitProfilePageProps) {
  const [imageError, setImageError] = useState(false);
  const mapUrl = `/circuits/layouts/${circuit.id}.svg`;
  const heroImageSrc = circuit.image || (details.gallery && details.gallery[0]) || "";

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative">
      {/* ── 1. Hero Image Banner & Header (Fold 1) ── */}
      <section className="relative h-[65vh] w-full flex items-end justify-center pb-12 z-10 border-b border-white/[0.05]">
        {/* Full-width Circuit Hero Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          {heroImageSrc && (
            <Image
              src={heroImageSrc}
              alt={circuit.name}
              fill
              className="object-cover opacity-45 filter brightness-[0.75] contrast-[1.05]"
              priority
              sizes="100vw"
            />
          )}
          {/* Gradients blending image into the deep dark theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
        </div>

        {/* Back navigation */}
        <div className="absolute top-28 left-6 sm:left-12 z-30 pointer-events-auto">
          <Link
            href="/circuits"
            className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/50 hover:text-white uppercase transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Circuits roster</span>
          </Link>
        </div>

        {/* Floating Header Info */}
        <div className="relative text-center z-10 px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2.5 mb-4 text-xs font-black uppercase tracking-[0.25em]"
          >
            <span className="text-[#E10600]">FORMULA ONE VENUE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5 text-white/60">
              <CountryFlag country={circuit.country} fallback={circuit.flag} className="w-4 h-3 rounded-sm" />
              {circuit.country}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight"
          >
            {circuit.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-neutral-400 flex justify-center items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#E10600]" />
            <span>{circuit.location}</span>
          </motion.p>
        </div>
      </section>

      {/* ── 2. Technical Specifications Ribbon (Fold 2) ── */}
      <section className="relative z-10 border-b border-white/[0.05] bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div>
              <span className="block text-2xl font-black text-white">{circuit.length}</span>
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest block mt-1">Track Length</span>
            </div>
            <div className="border-l border-white/[0.05]">
              <span className="block text-2xl font-black text-white">{circuit.laps}</span>
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest block mt-1">Total Laps</span>
            </div>
            <div className="border-l border-white/[0.05]">
              <span className="block text-2xl font-black text-white">{circuit.raceDistance}</span>
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest block mt-1">Race Distance</span>
            </div>
            <div className="border-l border-white/[0.05]">
              <span className="block text-2xl font-black text-white">{circuit.corners}</span>
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest block mt-1">Turns/Corners</span>
            </div>
            <div className="border-l border-white/[0.05]">
              <span className="block text-2xl font-black text-white">{circuit.drsZones}</span>
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest block mt-1">DRS Zones</span>
            </div>
            <div className="border-l border-white/[0.05]">
              <span className="block text-2xl font-black text-white">{circuit.firstGrandPrix}</span>
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest block mt-1">First GP Year</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Layout Map & Sectors telemetry ── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Track Layout Drawing (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-sm font-bold tracking-wider uppercase text-[#808080] border-l border-[#E10600] pl-3">
              Track layout geometry
            </h2>

            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-sm flex items-center justify-center p-6">
              {imageError || !mapUrl ? (
                <div className="text-center p-8">
                  <Compass className="mx-auto mb-4 h-12 w-12 text-neutral-600 animate-pulse" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">Layout map loading</h3>
                  <p className="mt-2 text-xs text-neutral-500 max-w-xs leading-relaxed">
                    High-fidelity telemetry layouts are loading for this F1 venue.
                  </p>
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={mapUrl}
                    alt={`${circuit.name} Track Geometry`}
                    fill
                    className="object-contain p-6 filter invert brightness-100"
                    onError={() => setImageError(true)}
                    sizes="40vw"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Lap Record Highlight */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-5">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest block mb-2">Lap Record telemetry</span>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#808080]">Current Record</span>
                  <span className="block text-lg font-black text-[#E10600] tabular-nums mt-0.5">{circuit.lapRecord}</span>
                </div>
                {details.trackRecords && details.trackRecords[0] ? (
                  <div className="text-right text-xs">
                    <span className="block font-bold text-white">{details.trackRecords[0].driver}</span>
                    <span className="block text-[#808080] mt-0.5">{details.trackRecords[0].team} ({details.trackRecords[0].year})</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Right Column: Track Sectors (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-sm font-bold tracking-wider uppercase text-[#808080] border-l border-[#E10600] pl-3">
              Sector characteristics
            </h2>

            <div className="flex flex-col gap-4">
              {details.sectors.map((sector) => (
                <div
                  key={sector.sector}
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
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. Place & History Stories ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-20 border-t border-white/[0.05]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* History */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-sm font-bold tracking-wider uppercase text-[#808080] border-l border-[#E10600] pl-3">
              Heritage & Place
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#B5B5B5]">
              {details.overview}
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-400">
              {details.history}
            </p>
          </div>

          {/* Previous Winners Table Card */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 space-y-4">
            <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Trophy className="w-3.5 h-3.5 text-[#E10600]" />
              <span>Recent Winners</span>
            </h3>

            <div className="space-y-3">
              {details.previousWinners && details.previousWinners.slice(0, 3).map((w) => (
                <div key={w.year} className="flex justify-between items-center text-xs border-b border-white/[0.04] pb-2 last:border-0 last:pb-0">
                  <div>
                    <span className="font-bold text-white block">{w.driver}</span>
                    <span className="text-[10px] text-neutral-500 mt-0.5 block">{w.team}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[10px] text-white/60 block">{w.time}</span>
                    <span className="text-[9px] font-bold text-neutral-500 mt-0.5 block">{w.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Exploration */}
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
