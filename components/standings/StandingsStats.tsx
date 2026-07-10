"use client";

import { motion } from "framer-motion";
import { Users, Building2, Flag, Trophy } from "lucide-react";

interface StatCard {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: StatCard[] = [
  {
    icon: <Users className="h-6 w-6 text-[#E10600]" />,
    value: "20",
    label: "Drivers",
  },
  {
    icon: <Building2 className="h-6 w-6 text-[#E10600]" />,
    value: "10",
    label: "Teams",
  },
  {
    icon: <Flag className="h-6 w-6 text-[#E10600]" />,
    value: "24",
    label: "Races",
  },
  {
    icon: <Trophy className="h-6 w-6 text-[#E10600]" />,
    value: "1",
    label: "World Championship",
  },
];

export function StandingsStats() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center rounded-[20px] border border-[#242424] bg-[#111111] p-6 text-center transition-colors hover:border-[#E10600]/30"
        >
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
            {stat.icon}
          </div>
          <span className="text-2xl font-bold text-white">{stat.value}</span>
          <span className="mt-1 text-sm text-neutral-400">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}