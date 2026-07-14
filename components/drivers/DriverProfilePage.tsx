"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, Calendar, MapPin, Ruler, Weight } from "lucide-react";
import type { Driver } from "@/types/driver";
import type { DriverDetails } from "@/types/driver-details";
import { CountryFlag } from "@/components/ui/CountryFlag";

interface DriverProfilePageProps {
  driver: Driver;
  details: DriverDetails;
}

export function DriverProfilePage({ driver, details }: DriverProfilePageProps) {
  // Fallback mechanisms
  const resolvedPortrait = driver.image && driver.image !== "/icons/helmet.svg" ? driver.image : "/icons/helmet.svg";

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative">
      {/* ── Background Atmospheric Layers ── */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic color glow matching driver's constructor/team color */}
        <div
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full blur-[140px] opacity-15 pointer-events-none mix-blend-screen"
          style={{ backgroundColor: driver.teamColor }}
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        {/* Cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#050505_95%)] opacity-90 pointer-events-none" />
      </div>

      {/* Back Link Button */}
      <div className="absolute top-28 left-6 sm:left-12 z-30 pointer-events-auto">
        <Link
          href="/drivers"
          className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/50 hover:text-white uppercase transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Drivers roster</span>
        </Link>
      </div>

      {/* ── 1. Hero Reveal Section ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end items-center px-6 pb-12 z-10">
        {/* Giant Background Driver Number */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 mt-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.07, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="text-[32vw] font-black font-mono leading-none tracking-tighter"
            style={{
              WebkitTextStroke: `2px ${driver.teamColor}`,
              color: "transparent",
            }}
          >
            {driver.number.toString().padStart(2, "0")}
          </motion.span>
        </div>

        {/* Large Driver Portrait */}
        <div className="relative w-full max-w-[80vw] sm:max-w-[50vw] lg:max-w-[32vw] aspect-[3/4] flex items-end justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[85%] flex justify-center items-end"
          >
            {resolvedPortrait === "/icons/helmet.svg" ? (
              <div className="flex flex-col items-center justify-center p-8 bg-white/[0.02] border border-white/5 rounded-3xl h-full w-full backdrop-blur-md">
                <Image
                  src="/icons/helmet.svg"
                  alt={driver.name}
                  width={140}
                  height={140}
                  className="opacity-60 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  style={{ filter: `drop-shadow(0 0 16px ${driver.teamColor}35)` }}
                />
                <span className="mt-4 text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Helmet graphic</span>
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={resolvedPortrait}
                alt={driver.name}
                className="max-h-full w-auto object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)] z-10"
              />
            )}
            {/* Portrait grounding shadow */}
            <div className="absolute bottom-0 w-[80%] h-8 bg-black/80 blur-xl rounded-full pointer-events-none -z-10" />
          </motion.div>
        </div>

        {/* Driver Core Details */}
        <div className="text-center z-20 mt-8 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.2em]"
          >
            <span style={{ color: driver.teamColor }}>{driver.team}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5 text-white/60">
              <CountryFlag country={driver.country} fallback={driver.flag} className="w-4 h-3 rounded-sm" />
              {driver.country}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none"
          >
            {driver.name}
          </motion.h1>

          {/* Signature placeholder / cursive initials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 flex justify-center h-8"
          >
            <span className="font-serif italic text-lg tracking-[0.2em] text-white">
              {driver.name.split(" ").map(n => n[0]).join(".")}
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Cinematic Info Grid & Statistics ── */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-20 border-t border-white/[0.05]">
        
        {/* Statistics highlights bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20 text-center">
          <div className="border-r border-white/[0.05] py-4">
            <span className="block text-3xl font-black text-white">{details.championships}</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mt-1">Championships</span>
          </div>
          <div className="border-r border-white/[0.05] py-4">
            <span className="block text-3xl font-black text-white">{details.wins}</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mt-1">GP Wins</span>
          </div>
          <div className="border-r border-white/[0.05] py-4">
            <span className="block text-3xl font-black text-white">{details.podiums}</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mt-1">Podiums</span>
          </div>
          <div className="border-r border-white/[0.05] py-4">
            <span className="block text-3xl font-black text-white">{details.poles}</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mt-1">Poles</span>
          </div>
          <div className="py-4">
            <span className="block text-3xl font-black text-white">{details.fastestLaps}</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mt-1">Fastest Laps</span>
          </div>
        </div>

        {/* Narrative & Vital Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-20">
          {/* Bio Story */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-sm font-bold tracking-wider uppercase text-[#808080] border-l border-[#E10600] pl-3">
              Career narrative
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#B5B5B5]">
              {details.biography}
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-400">
              {details.careerSummary}
            </p>
          </div>

          {/* Physical Stats Vitals Card */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 space-y-4">
            <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">Driver Vitals</h3>
            
            <div className="flex items-center gap-3 border-b border-white/[0.04] pb-2 text-xs">
              <Calendar className="w-4 h-4 text-[#E10600]" />
              <div className="flex-1 flex justify-between">
                <span className="text-[#808080]">Born</span>
                <span className="font-semibold text-white/80">{details.birthDate}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 border-b border-white/[0.04] pb-2 text-xs">
              <MapPin className="w-4 h-4 text-[#E10600]" />
              <div className="flex-1 flex justify-between">
                <span className="text-[#808080]">Home</span>
                <span className="font-semibold text-white/80">{details.birthPlace}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 border-b border-white/[0.04] pb-2 text-xs">
              <Ruler className="w-4 h-4 text-[#E10600]" />
              <div className="flex-1 flex-between flex justify-between">
                <span className="text-[#808080]">Height</span>
                <span className="font-semibold text-white/80">{details.height}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <Weight className="w-4 h-4 text-[#E10600]" />
              <div className="flex-1 flex justify-between">
                <span className="text-[#808080]">Weight</span>
                <span className="font-semibold text-white/80">{details.weight}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Career Highlights Timeline ── */}
        <div className="space-y-12">
          <h2 className="text-sm font-bold tracking-wider uppercase text-[#808080] border-l border-[#E10600] pl-3">
            Career highlights
          </h2>
          
          <div className="relative border-l border-white/[0.08] ml-4 pl-8 space-y-10">
            {details.timeline.map((item, idx) => (
              <div key={`${item.year}-${idx}`} className="relative">
                {/* Timeline node */}
                <div 
                  className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full border border-white/20 bg-[#050505] flex items-center justify-center transition-colors hover:border-[#E10600]"
                  style={{ borderColor: idx === 0 ? driver.teamColor : "" }}
                >
                  <div 
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: idx === 0 ? driver.teamColor : "rgba(255,255,255,0.3)" }}
                  />
                </div>
                
                <span className="text-xs font-mono font-bold tracking-widest text-[#808080] bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 rounded">
                  {item.year}
                </span>
                <h3 className="text-base font-bold text-white mt-2">{item.achievement}</h3>
                {item.description && (
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed max-w-2xl">{item.description}</p>
                )}
              </div>
            ))}
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
