"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Driver } from "@/types/driver";
import type { DriverDetails } from "@/types/driver-details";
import { Hash, Flag, Trophy } from "lucide-react";

interface DriverHeroProps {
  driver: Driver;
  details: DriverDetails;
}

export function DriverHero({ driver, details }: DriverHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#242424] bg-[#050505]">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #E10600 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(135deg, ${driver.teamColor}00 0%, ${driver.teamColor}15 50%, ${driver.teamColor}00 100%)`,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[20px] border border-[#242424] lg:mx-0"
          >
            <Image
              src={driver.image}
              alt={driver.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-4xl">{driver.flag}</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="mb-4 flex items-center gap-3">
              <span
                className="inline-block h-1 w-8 rounded-full"
                style={{ backgroundColor: driver.teamColor }}
              />
              <span className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                {driver.team}
              </span>
            </div>
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {driver.name}
            </h1>
            <p className="mb-8 text-lg text-neutral-400">
              {driver.number} · {driver.country}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-[14px] border border-[#242424] bg-[#111111]/80 p-4">
                <Hash className="mb-2 h-4 w-4 text-[#E10600]" />
                <p className="text-xs text-neutral-500">Number</p>
                <p className="text-lg font-bold text-white">{driver.number}</p>
              </div>
              <div className="rounded-[14px] border border-[#242424] bg-[#111111]/80 p-4">
                <Flag className="mb-2 h-4 w-4 text-[#E10600]" />
                <p className="text-xs text-neutral-500">Nationality</p>
                <p className="text-lg font-bold text-white">{driver.country}</p>
              </div>
              <div className="rounded-[14px] border border-[#242424] bg-[#111111]/80 p-4">
                <Trophy className="mb-2 h-4 w-4 text-[#E10600]" />
                <p className="text-xs text-neutral-500">Championships</p>
                <p className="text-lg font-bold text-white">{details.championships}</p>
              </div>
              <div className="rounded-[14px] border border-[#242424] bg-[#111111]/80 p-4">
                <Trophy className="mb-2 h-4 w-4 text-[#E10600]" />
                <p className="text-xs text-neutral-500">Team</p>
                <p className="text-lg font-bold text-white">{driver.team}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}