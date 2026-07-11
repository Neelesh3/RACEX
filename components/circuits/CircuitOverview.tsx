"use client";

import { motion } from "framer-motion";
import type { Circuit } from "@/types/circuit";
import type { CircuitDetails } from "@/types/circuit-details";
import { Info, History, MapPin, Flag, Calendar, Ruler, Wind, Trophy, RefreshCw, CornerUpRight, Compass } from "lucide-react";

interface CircuitOverviewProps {
  circuit: Circuit;
  details: CircuitDetails;
}

export function CircuitOverview({ circuit, details }: CircuitOverviewProps) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Left Column: Text-based info */}
      <div className="flex flex-col gap-6">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[20px] border border-[#242424] bg-[#111111] p-8 lg:p-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
              <Info className="h-5 w-5 text-[#E10600]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Circuit Overview</h2>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400">
            {details.overview || circuit.description}
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[20px] border border-[#242424] bg-[#111111] p-8 lg:p-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
              <History className="h-5 w-5 text-[#E10600]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Track History</h2>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400">
            {details.history}
          </p>
        </motion.section>
      </div>

      {/* Right Column: Spec pills */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col rounded-[20px] border border-[#242424] bg-[#111111] p-8 lg:p-10 h-full justify-between"
      >
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
              <Ruler className="h-5 w-5 text-[#E10600]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Track Specifications</h2>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4 sm:col-span-2">
              <span className="flex items-center gap-2 text-sm text-neutral-500">
                <MapPin className="h-4 w-4" />
                Location
              </span>
              <span className="text-sm font-semibold text-white text-right">
                {circuit.location}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4 sm:col-span-2">
              <span className="flex items-center gap-2 text-sm text-neutral-500">
                <Flag className="h-4 w-4" />
                Country
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold text-white">
                <span>{circuit.flag}</span>
                <span>{circuit.country}</span>
              </span>
            </div>

            <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4">
              <span className="flex items-center gap-2 text-sm text-neutral-500">
                <Calendar className="h-4 w-4" />
                First GP
              </span>
              <span className="text-sm font-semibold text-white">
                {circuit.firstGrandPrix}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4">
              <span className="flex items-center gap-2 text-sm text-neutral-500">
                <Ruler className="h-4 w-4" />
                Length
              </span>
              <span className="text-sm font-semibold text-white">
                {circuit.length}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4">
              <span className="flex items-center gap-2 text-sm text-neutral-500">
                <Compass className="h-4 w-4" />
                Distance
              </span>
              <span className="text-sm font-semibold text-white">
                {circuit.raceDistance}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4">
              <span className="flex items-center gap-2 text-sm text-neutral-500">
                <RefreshCw className="h-4 w-4" />
                Laps
              </span>
              <span className="text-sm font-semibold text-white">
                {circuit.laps} Laps
              </span>
            </div>

            <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4">
              <span className="flex items-center gap-2 text-sm text-neutral-500">
                <CornerUpRight className="h-4 w-4" />
                Corners
              </span>
              <span className="text-sm font-semibold text-white">
                {circuit.corners}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4">
              <span className="flex items-center gap-2 text-sm text-neutral-500">
                <Wind className="h-4 w-4" />
                DRS Zones
              </span>
              <span className="text-sm font-semibold text-white">
                {circuit.drsZones}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4 sm:col-span-2">
              <span className="flex items-center gap-2 text-sm text-neutral-500">
                <Trophy className="h-4 w-4" />
                Lap Record
              </span>
              <span className="text-sm font-semibold text-white text-right">
                {circuit.lapRecord}
              </span>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
