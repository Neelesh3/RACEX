"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Medal } from "lucide-react";


import type { ConstructorStanding } from "@/types/standings";
interface ConstructorStandingsTableProps {
  constructors: ConstructorStanding[];
}

const positionStyles: Record<number, string> = {
  1: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  2: "bg-neutral-400/10 text-neutral-300 border-neutral-400/20",
  3: "bg-amber-700/10 text-amber-500 border-amber-700/20",
};

export function ConstructorStandingsTable({ constructors }: ConstructorStandingsTableProps) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#242424] bg-[#111111]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[540px]">
          <thead>
            <tr className="border-b border-[#242424]">
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Position
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Team
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Wins
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Podiums
              </th>
              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {constructors.map((constructor, index) => {
              const isTop3 = constructor.position <= 3;
              return (
                <motion.tr
                  key={constructor.position}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cn(
                    "border-b border-[#242424] transition-colors last:border-b-0 hover:bg-[#1a1a1a]",
                    isTop3 && "bg-[#1a1a1a]/50"
                  )}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold",
                          positionStyles[constructor.position] ??
                            "border-[#242424] bg-[#050505] text-neutral-400"
                        )}
                      >
                        {constructor.position <= 3 ? (
                          <Medal className="h-4 w-4" />
                        ) : (
                          constructor.position
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-block h-3 w-1 rounded-full"
                        style={{ backgroundColor: constructor.color }}
                      />
                      <span className="text-sm font-semibold text-white">
                        {constructor.teamName}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-medium text-white">
                      {constructor.wins}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-medium text-white">
                      {constructor.podiums}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span
                      className={cn(
                        "text-sm font-bold",
                        isTop3 ? "text-[#E10600]" : "text-white"
                      )}
                    >
                      {constructor.points}
                    </span>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}