"use client";

import { motion } from "framer-motion";
import type { Circuit } from "@/types/circuit";
import type { CircuitDetails } from "@/types/circuit-details";
import { Compass, Award, Calendar, User, Shield, Gauge, Activity } from "lucide-react";

interface CircuitTechnicalProps {
  circuit: Circuit;
  details: CircuitDetails;
}

export function CircuitTechnical({ circuit, details }: CircuitTechnicalProps) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* Section 1: Corners Telemetry (7 Columns) */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[20px] border border-[#242424] bg-[#111111] p-8 lg:p-10 lg:col-span-7"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
            <Compass className="h-5 w-5 text-[#E10600]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Corner Analysis</h2>
            <p className="text-xs text-neutral-500 mt-1">
              Telemetry and entry speed profiles at {circuit.name}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Table Header (hidden on mobile) */}
          <div className="hidden sm:grid grid-cols-12 px-6 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <span className="col-span-2">Corner</span>
            <span className="col-span-4">Name</span>
            <span className="col-span-4">Type</span>
            <span className="col-span-2 text-right">Entry Speed</span>
          </div>

          {/* Corners Rows */}
          <div className="space-y-2">
            {details.cornerDetails.map((corner, index) => (
              <motion.div
                key={corner.number}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center rounded-[14px] border border-[#242424] bg-[#050505] p-4 transition-all duration-300 hover:border-[#E10600]/30 hover:bg-[#0a0a0a] group"
              >
                {/* Number Column */}
                <div className="col-span-2 flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-xs font-black text-red-400 group-hover:scale-105 transition-transform">
                    {corner.number}
                  </div>
                  <span className="text-xs font-semibold uppercase text-neutral-500 sm:hidden">Corner Number</span>
                </div>

                {/* Name Column */}
                <div className="col-span-4 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-neutral-600 sm:hidden shrink-0" />
                  <span className="text-sm font-bold text-white group-hover:text-[#E10600] transition-colors">
                    {corner.name}
                  </span>
                </div>

                {/* Type Column */}
                <div className="col-span-4 flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase text-neutral-500 sm:hidden shrink-0">Type</span>
                  <span className="text-xs font-medium text-neutral-400">
                    {corner.type}
                  </span>
                </div>

                {/* Speed Column */}
                <div className="col-span-2 flex items-center justify-between sm:justify-end gap-2 text-right">
                  <span className="text-xs font-semibold uppercase text-neutral-500 sm:hidden">Speed</span>
                  <div className="flex items-center gap-1.5 justify-end">
                    <Gauge className="h-3.5 w-3.5 text-neutral-500 shrink-0" />
                    <span className="text-sm font-semibold text-white tracking-wider">
                      {corner.speed} <span className="text-[10px] text-neutral-500">km/h</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 2: Track Records (5 Columns) */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[20px] border border-[#242424] bg-[#111111] p-8 lg:p-10 lg:col-span-5 h-fit"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
            <Award className="h-5 w-5 text-[#E10600]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Track Records</h2>
            <p className="text-xs text-neutral-500 mt-1">
              Historical lap time records at {circuit.name}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {details.trackRecords.map((record, index) => (
            <motion.div
              key={record.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 rounded-xl border border-[#242424] bg-[#050505] p-5 hover:border-[#E10600]/25 transition-all group"
            >
              <div className="flex items-center justify-between border-b border-[#242424] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 group-hover:text-red-400 transition-colors">
                  {record.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-neutral-500">
                  <Calendar className="h-3.5 w-3.5 text-neutral-600" />
                  {record.year}
                </span>
              </div>

              <div>
                <span className="text-3xl font-black text-white tracking-widest font-mono group-hover:text-[#E10600] transition-colors block">
                  {record.lapTime}
                </span>
              </div>

              <div className="space-y-2 mt-1">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-neutral-500 shrink-0" />
                  <span className="text-xs font-bold text-white">{record.driver}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-neutral-500 shrink-0" />
                  <span className="text-xs text-neutral-400">{record.team}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
