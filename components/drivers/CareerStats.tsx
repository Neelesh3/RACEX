"use client";

import { motion } from "framer-motion";
import type { DriverDetails } from "@/types/driver-details";
import { Trophy, Medal, Zap, Timer, Crown, Calendar } from "lucide-react";

interface CareerStatsProps {
  details: DriverDetails;
}

interface StatItem {
  icon: React.ReactNode;
  value: number | string;
  label: string;
}

export function CareerStats({ details }: CareerStatsProps) {
  const stats: StatItem[] = [
    {
      icon: <Trophy className="h-5 w-5 text-[#E10600]" />,
      value: details.wins,
      label: "Wins",
    },
    {
      icon: <Medal className="h-5 w-5 text-[#E10600]" />,
      value: details.podiums,
      label: "Podiums",
    },
    {
      icon: <Zap className="h-5 w-5 text-[#E10600]" />,
      value: details.poles,
      label: "Poles",
    },
    {
      icon: <Timer className="h-5 w-5 text-[#E10600]" />,
      value: details.fastestLaps,
      label: "Fastest Laps",
    },
    {
      icon: <Crown className="h-5 w-5 text-[#E10600]" />,
      value: details.championships,
      label: "Championships",
    },
    {
      icon: <Calendar className="h-5 w-5 text-[#E10600]" />,
      value: details.debutSeason,
      label: "Debut Season",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            delay: index * 0.08,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center rounded-[20px] border border-[#242424] bg-[#111111] p-5 text-center transition-colors hover:border-[#E10600]/30"
        >
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
            {stat.icon}
          </div>
          <span className="text-xl font-bold text-white">{stat.value}</span>
          <span className="mt-1 text-xs text-neutral-400">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}