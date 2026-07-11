"use client";

import { motion } from "framer-motion";
import type { Race } from "@/types/race";
import type { RaceDetails } from "@/types/race-details";
import { Info, History, Calendar, MapPin, Flag, Timer } from "lucide-react";

interface RaceOverviewProps {
  race: Race;
  details: RaceDetails;
}

export function RaceOverview({ race, details }: RaceOverviewProps) {
  // Format date helper
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const getStatusColor = (status: Race["status"]) => {
    switch (status) {
      case "live":
        return "text-[#E10600] border-[#E10600]/30 bg-[#E10600]/10";
      case "completed":
        return "text-emerald-500 border-emerald-500/30 bg-emerald-500/10";
      case "upcoming":
      default:
        return "text-blue-400 border-blue-400/30 bg-blue-400/10";
    }
  };

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
            <h2 className="text-2xl font-bold text-white">Race Overview</h2>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400">
            {details.overview || race.description}
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
            <h2 className="text-2xl font-bold text-white">Circuit History</h2>
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
              <Flag className="h-5 w-5 text-[#E10600]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Event Details</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4">
              <span className="flex items-center gap-2 text-sm text-neutral-500">
                <Timer className="h-4 w-4" />
                Circuit
              </span>
              <span className="text-sm font-semibold text-white text-right">{race.circuit}</span>
            </div>

            <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4">
              <span className="flex items-center gap-2 text-sm text-neutral-500">
                <MapPin className="h-4 w-4" />
                Location
              </span>
              <span className="text-sm font-semibold text-white text-right">
                {race.location}, {race.country}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4">
              <span className="flex items-center gap-2 text-sm text-neutral-500">
                <Flag className="h-4 w-4" />
                Round
              </span>
              <span className="text-sm font-semibold text-white">Round {race.round}</span>
            </div>

            <div className="flex items-center justify-between rounded-[14px] border border-[#242424] bg-[#050505] p-4">
              <span className="flex items-center gap-2 text-sm text-neutral-500">
                <Calendar className="h-4 w-4" />
                Date
              </span>
              <span className="text-sm font-semibold text-white text-right">{formatDate(race.date)}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-[#242424] pt-6">
          <span className="text-sm text-neutral-500 font-medium">Status</span>
          <span
            className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border ${getStatusColor(
              race.status
            )}`}
          >
            {race.status}
          </span>
        </div>
      </motion.section>
    </div>
  );
}
