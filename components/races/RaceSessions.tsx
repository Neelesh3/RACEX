"use client";

import { motion } from "framer-motion";
import type { Race } from "@/types/race";
import { CalendarDays, Clock, Flag, Timer } from "lucide-react";

interface RaceSessionsProps {
  race: Race;
}

type SessionKey = keyof Race["sessions"];

const SESSION_NAME_MAP: Record<SessionKey, string> = {
  fp1: "Practice 1",
  fp2: "Practice 2",
  fp3: "Practice 3",
  qualifying: "Qualifying",
  race: "Race",
};

export function RaceSessions({ race }: RaceSessionsProps) {
  // Format date helper: "Fri, Mar 13"
  const formatSessionDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  // Format time helper: "10:30 AM"
  const formatSessionTime = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "";
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "";
    }
  };

  // Chronologically sort existing sessions
  const sessionsList = (Object.keys(race.sessions) as SessionKey[])
    .filter((key) => !!race.sessions[key])
    .map((key) => {
      const dateStr = race.sessions[key];
      return {
        key,
        name: SESSION_NAME_MAP[key],
        dateStr,
        parsedDate: new Date(dateStr),
      };
    })
    .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());

  return (
    <div className="relative border-l border-[#242424] ml-4 pl-8 space-y-6 py-2">
      {sessionsList.map((session, index) => {
        const isRace = session.key === "race";
        const dateFormatted = formatSessionDate(session.dateStr);
        const timeFormatted = formatSessionTime(session.dateStr);

        return (
          <motion.div
            key={session.key}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Timeline node dot */}
            <span
              className={`absolute -left-[41px] top-6 flex h-4.5 w-4.5 items-center justify-center rounded-full border-2 bg-[#050505] transition-all duration-300 ${
                isRace
                  ? "border-[#E10600] ring-4 ring-[#E10600]/20"
                  : "border-[#242424] group-hover:border-[#E10600]/50"
              }`}
            >
              {isRace && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#E10600] animate-ping" />
              )}
            </span>

            {/* Session Card */}
            <div
              className={`rounded-[20px] border p-5 lg:p-6 transition-all duration-300 ${
                isRace
                  ? "border-[#E10600]/40 bg-gradient-to-r from-[#E10600]/10 via-[#E10600]/5 to-transparent"
                  : "border-[#242424] bg-[#111111] hover:border-[#242424]/80"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                      isRace
                        ? "border-[#E10600]/30 bg-[#E10600]/10"
                        : "border-[#242424] bg-[#050505]"
                    }`}
                  >
                    {isRace ? (
                      <Flag className="h-4 w-4 text-[#E10600]" />
                    ) : (
                      <Timer className="h-4 w-4 text-neutral-400" />
                    )}
                  </div>
                  <h3
                    className={`text-lg font-bold ${
                      isRace ? "text-white" : "text-neutral-200"
                    }`}
                  >
                    {session.name}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-neutral-500" />
                    <span>{dateFormatted}</span>
                  </div>
                  {timeFormatted && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-neutral-500" />
                      <span>{timeFormatted}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
