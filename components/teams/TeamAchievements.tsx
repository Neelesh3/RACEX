"use client";

import { motion } from "framer-motion";
import type { TeamDetails } from "@/types/team-details";
import { Award, Trophy, Star, Medal, Target } from "lucide-react";

interface TeamAchievementsProps {
  details: TeamDetails;
}

const iconMap: Record<string, React.ReactNode> = {
  championship: <Trophy className="h-5 w-5 text-yellow-400" />,
  win: <Star className="h-5 w-5 text-[#E10600]" />,
  pole: <Medal className="h-5 w-5 text-neutral-300" />,
  podium: <Target className="h-5 w-5 text-amber-500" />,
  milestone: <Award className="h-5 w-5 text-[#E10600]" />,
  default: <Award className="h-5 w-5 text-[#E10600]" />,
};

export function TeamAchievements({ details }: TeamAchievementsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[20px] border border-[#242424] bg-[#111111] p-8 lg:p-10"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
          <Award className="h-5 w-5 text-[#E10600]" />
        </div>
        <h2 className="text-2xl font-bold text-white">Achievements</h2>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {details.achievements.map((achievement, index) => (
          <motion.div
            key={`${achievement.year}-${achievement.title}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.06,
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-3 rounded-[14px] border border-[#242424] bg-[#050505] p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242424] bg-[#111111]">
              {iconMap.default}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{achievement.title}</p>
              <p className="mt-1 text-xs text-neutral-500">{achievement.description}</p>
            </div>
            <span className="mt-auto text-xs font-medium text-[#E10600]">{achievement.year}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
