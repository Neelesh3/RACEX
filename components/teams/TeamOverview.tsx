"use client";

import { motion } from "framer-motion";
import type { TeamDetails } from "@/types/team-details";
import { Info, Factory } from "lucide-react";

interface TeamOverviewProps {
  details: TeamDetails;
}

export function TeamOverview({ details }: TeamOverviewProps) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
          <h2 className="text-2xl font-bold text-white">Overview</h2>
        </div>
        <p className="text-sm leading-relaxed text-neutral-400">
          {details.overview}
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
            <Factory className="h-5 w-5 text-[#E10600]" />
          </div>
          <h2 className="text-2xl font-bold text-white">Technical</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4">
            <span className="text-sm text-neutral-500">Power Unit</span>
            <span className="text-sm font-semibold text-white">{details.engineSupplier}</span>
          </div>
          <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4">
            <span className="text-sm text-neutral-500">Chassis</span>
            <span className="text-sm font-semibold text-white">{details.chassis}</span>
          </div>
          <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4">
            <span className="text-sm text-neutral-500">First Entry</span>
            <span className="text-sm font-semibold text-white">{details.firstEntry}</span>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
