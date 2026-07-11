"use client";

import { motion } from "framer-motion";
import type { DriverDetails } from "@/types/driver-details";
import { Briefcase } from "lucide-react";

interface CareerTimelineProps {
  details: DriverDetails;
}

export function CareerTimeline({ details }: CareerTimelineProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[20px] border border-[#242424] bg-[#111111] p-8 lg:p-10"
    >
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
          <Briefcase className="h-5 w-5 text-[#E10600]" />
        </div>
        <h2 className="text-2xl font-bold text-white">Career Timeline</h2>
      </div>
      <div className="relative">
        <div className="absolute left-[19px] top-0 h-full w-px bg-[#242424]" />
        <div className="space-y-6">
          {details.timeline.map((entry, index) => (
            <motion.div
              key={entry.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex items-start gap-6 pl-12"
            >
              <div className="absolute left-0 top-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E10600]/30 bg-[#E10600]/10">
                <span className="text-xs font-bold text-[#E10600]">{entry.year}</span>
              </div>
              <div className="flex-1 rounded-[14px] border border-[#242424] bg-[#050505] p-4">
                <p className="text-sm font-semibold text-white">{entry.achievement}</p>
                {entry.description && (
                  <p className="mt-1 text-xs text-neutral-500">{entry.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}