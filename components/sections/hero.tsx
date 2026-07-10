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
        delay: 0.6 + index * 0.1,
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

function FormulaOneVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      className="relative flex h-full w-full items-center justify-center"
      aria-hidden="true"
    >
      {/* Outer glow ring */}
      <div className="absolute h-[420px] w-[420px] rounded-full border border-[#E10600]/[0.08]" />
      <div className="absolute h-[380px] w-[380px] rounded-full border border-[#E10600]/[0.12]" />
      <div className="absolute h-[340px] w-[340px] rounded-full border border-[#E10600]/[0.16]" />

      {/* Central orb */}
      <div className="absolute h-[280px] w-[280px] rounded-full bg-[#E10600]/[0.06] blur-[80px]" />
      <div className="absolute h-[180px] w-[180px] rounded-full bg-[#E10600]/[0.1] blur-[50px]" />

      {/* Racing lines - top */}
      <div className="absolute top-[15%] h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[#E10600]/30 to-transparent" />
      <div className="absolute top-[18%] h-[1px] w-[160px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Racing lines - bottom */}
      <div className="absolute bottom-[15%] h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[#E10600]/30 to-transparent" />
      <div className="absolute bottom-[18%] h-[1px] w-[160px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Racing lines - diagonal */}
      <div className="absolute h-[1px] w-[140px] rotate-[25deg] bg-gradient-to-r from-transparent via-[#E10600]/20 to-transparent" />
      <div className="absolute h-[1px] w-[120px] -rotate-[25deg] bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Floating accent dots */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[22%] right-[28%] h-2 w-2 rounded-full bg-[#E10600]/40"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[24%] left-[26%] h-1.5 w-1.5 rounded-full bg-white/20"
      />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[40%] left-[20%] h-1 w-1 rounded-full bg-[#E10600]/30"
      />

      {/* Center mark */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E10600]/20 bg-[#E10600]/5">
        <Flag className="h-7 w-7 text-[#E10600]" />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#050505]"
      aria-label="Hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(225, 6, 0, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(225, 6, 0, 0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Large red gradient orb */}
        <div className="absolute -right-[20%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#E10600]/[0.04] blur-[120px]" />
        <div className="absolute right-[5%] top-[25%] h-[400px] w-[400px] rounded-full bg-[#E10600]/[0.03] blur-[100px]" />

        {/* Soft radial gradients */}
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-col items-center justify-center gap-12 pt-24 pb-16 lg:flex-row lg:gap-16 lg:pt-0">
          {/* Left column */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
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
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
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
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="mt-5 max-w-lg text-base leading-relaxed text-[#B5B5B5] sm:text-lg"
            >
              Follow every Grand Prix, driver, constructor, standings, live race
              updates and breaking Formula 1 news in one premium experience.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
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
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </div>

          {/* Right column — visual */}
          <div className="relative hidden h-[400px] w-full flex-1 lg:block lg:h-[520px]">
            <FormulaOneVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
