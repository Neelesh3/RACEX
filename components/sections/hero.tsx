"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Flag, ChevronRight, Calendar, Trophy, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Grand Prix", value: "24", icon: Flag },
  { label: "Drivers", value: "20", icon: Users },
  { label: "Teams", value: "10", icon: Trophy },
  { label: "Years", value: "75+", icon: Clock },
];

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
  index: number;
}) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 2.1 + index * 0.1,
        ease: "easeOut",
      }}
      className={cn(
        "group relative flex flex-col items-center justify-center rounded-xl",
        "border border-white/[0.06] bg-white/[0.03] backdrop-blur-md",
        "px-5 py-4 transition-all duration-300",
        "hover:-translate-y-1 hover:border-white/[0.1] hover:bg-white/[0.05]"
      )}
    >
      <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#E10600]/10 transition-colors duration-300 group-hover:bg-[#E10600]/15">
        <Icon className="h-4 w-4 text-[#E10600]" />
      </div>
      <span className="text-xl font-bold text-white tabular-nums tracking-tight">
        {stat.value}
      </span>
      <span className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-[#808080]">
        {stat.label}
      </span>
    </motion.div>
  );
}

import React from "react";
import { SceneCanvas } from "../three/canvas/SceneCanvas";
import { RevealScene } from "../three/scenes/RevealScene";
import { CanvasLoader } from "../three/loaders/CanvasLoader";

function FormulaOneVisual() {
  return (
    <div
      className="absolute inset-0 h-full w-full bg-[#050505]"
      aria-hidden="true"
    >
      <SceneCanvas className="h-full w-full">
        <React.Suspense fallback={null}>
          <RevealScene />
          <CanvasLoader />
        </React.Suspense>
      </SceneCanvas>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] flex items-center"
      aria-label="Hero"
    >
      {/* Full bleed Three.js scene */}
      <FormulaOneVisual />

      {/* Decorative gradient overlay to improve text readability */}
      <div className="absolute inset-0 z-5 pointer-events-none bg-gradient-to-r from-[#050505]/90 via-[#050505]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left py-20 lg:py-0 max-w-2xl pointer-events-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E10600]/20 bg-[#E10600]/5 px-4 py-1.5 text-sm font-medium text-[#E10600]">
              <Flag className="h-3.5 w-3.5" />
              Formula 1
              <span className="mx-1 h-3.5 w-px bg-[#E10600]/20" />
              2026 Season
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Experience{" "}
            <span className="text-[#E10600]">Formula 1</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Like Never Before
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.75, ease: "easeOut" }}
            className="mt-5 max-w-lg text-base leading-relaxed text-[#B5B5B5] sm:text-lg"
          >
            Follow every Grand Prix, driver, constructor, standings, live race
            updates and breaking Formula 1 news in one premium experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.85, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start"
          >
            <Link
              href="/drivers"
              className={cn(
                "inline-flex h-12 items-center justify-center gap-2 rounded-xl",
                "bg-[#E10600] px-7 text-sm font-semibold text-white",
                "transition-all duration-200",
                "hover:bg-[#FF1A1A] hover:shadow-[0_0_30px_rgba(225,6,0,0.25)]",
                "active:scale-[0.98]"
              )}
            >
              Explore Drivers
              <ChevronRight className="h-4 w-4" />
            </Link>

            <Link
              href="/races"
              className={cn(
                "inline-flex h-12 items-center justify-center gap-2 rounded-xl",
                "border border-[#242424] bg-transparent px-7 text-sm font-semibold text-white",
                "transition-all duration-200",
                "hover:border-[#343434] hover:bg-[#111111]",
                "active:scale-[0.98]"
              )}
            >
              <Calendar className="h-4 w-4" />
              Race Calendar
            </Link>
          </motion.div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 w-full">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
