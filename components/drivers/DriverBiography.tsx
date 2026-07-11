"use client";

import { motion } from "framer-motion";
import type { DriverDetails } from "@/types/driver-details";
import { BookOpen, FileText } from "lucide-react";

interface DriverBiographyProps {
  details: DriverDetails;
}

export function DriverBiography({ details }: DriverBiographyProps) {
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
            <BookOpen className="h-5 w-5 text-[#E10600]" />
          </div>
          <h2 className="text-2xl font-bold text-white">Biography</h2>
        </div>
        <p className="text-sm leading-relaxed text-neutral-400">
          {details.biography}
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
            <FileText className="h-5 w-5 text-[#E10600]" />
          </div>
          <h2 className="text-2xl font-bold text-white">Career Summary</h2>
        </div>
        <p className="text-sm leading-relaxed text-neutral-400">
          {details.careerSummary}
        </p>
      </motion.section>
    </div>
  );
}