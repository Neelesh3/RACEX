"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Trophy,
  Users,
  ArrowRight,
} from "lucide-react";
import { CountryFlag } from "@/components/ui/CountryFlag";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Movement = "up" | "down" | "same";

interface DriverStanding {
  position: number;
  name: string;
  team: string;
  points: number;
  movement: Movement;
  flag: string;
  teamColor: string;
}

interface ConstructorStanding {
  position: number;
  name: string;
  points: number;
  movement: Movement;
  color: string;
}

const DRIVER_STANDINGS: DriverStanding[] = [
  {
    position: 1,
    name: "M. Verstappen",
    team: "Red Bull Racing",
    points: 213,
    movement: "same",
    flag: "🇳🇱",
    teamColor: "#3671C6",
  },
  {
    position: 2,
    name: "L. Norris",
    team: "McLaren",
    points: 198,
    movement: "up",
    flag: "🇬🇧",
    teamColor: "#FF8000",
  },
  {
    position: 3,
    name: "C. Leclerc",
    team: "Ferrari",
    points: 174,
    movement: "down",
    flag: "🇲🇨",
    teamColor: "#E10600",
  },
  {
    position: 4,
    name: "G. Russell",
    team: "Mercedes",
    points: 161,
    movement: "up",
    flag: "🇬🇧",
    teamColor: "#27F4D2",
  },
  {
    position: 5,
    name: "O. Piastri",
    team: "McLaren",
    points: 149,
    movement: "same",
    flag: "🇦🇺",
    teamColor: "#FF8000",
  },
];

const CONSTRUCTOR_STANDINGS: ConstructorStanding[] = [
  {
    position: 1,
    name: "Red Bull Racing",
    points: 387,
    movement: "same",
    color: "#3671C6",
  },
  {
    position: 2,
    name: "McLaren",
    points: 347,
    movement: "up",
    color: "#FF8000",
  },
  {
    position: 3,
    name: "Ferrari",
    points: 298,
    movement: "same",
    color: "#E10600",
  },
  {
    position: 4,
    name: "Mercedes",
    points: 251,
    movement: "down",
    color: "#27F4D2",
  },
  {
    position: 5,
    name: "Aston Martin",
    points: 134,
    movement: "up",
    color: "#229971",
  },
];

function MovementIcon({ movement }: { movement: Movement }) {
  if (movement === "up") {
    return <TrendingUp className="h-4 w-4 text-emerald-400" />;
  }

  if (movement === "down") {
    return <TrendingDown className="h-4 w-4 text-red-500" />;
  }

  return <Minus className="h-4 w-4 text-white/30" />;
}

function PositionBadge({ position }: { position: number }) {
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold ${
        position === 1
          ? "bg-[#E10600]/20 text-[#E10600]"
          : "bg-white/5 text-white/70"
      }`}
    >
      {position}
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="mb-8 flex items-end justify-between">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E10600]">
          2026 Formula 1 Championship
        </p>

        <h2 className="text-3xl font-bold text-white">
          Championship Standings
        </h2>
      </div>

      <Link
        href="/standings"
        className="flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
      >
        Full Standings
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
function DriverStandingsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <Card className="rounded-2xl border border-white/10 bg-[#111111]/90 backdrop-blur-xl">
        <CardHeader className="border-b border-white/5">
          <CardTitle className="flex items-center gap-2 text-white">
            <Users className="h-5 w-5 text-[#E10600]" />
            Driver Standings
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid grid-cols-[40px_1fr_60px_30px] gap-3 border-b border-white/5 px-6 py-3 text-xs uppercase tracking-widest text-white/40">
            <span>Pos</span>
            <span>Driver</span>
            <span className="text-right">Pts</span>
            <span></span>
          </div>

          {DRIVER_STANDINGS.map((driver) => (
            <motion.div
              key={driver.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,.03)",
              }}
              className="grid grid-cols-[40px_1fr_60px_30px] items-center gap-3 border-b border-white/5 px-6 py-4 last:border-none"
            >
              <PositionBadge position={driver.position} />

              <div>
                <div className="flex items-center gap-2">
                  <CountryFlag country={driver.flag} fallback={driver.flag} />
                  <span className="font-semibold text-white">
                    {driver.name}
                  </span>
                </div>

                <div className="mt-1 flex items-center gap-2">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: driver.teamColor,
                    }}
                  />

                  <span className="text-xs text-white/45">
                    {driver.team}
                  </span>
                </div>
              </div>

              <div className="text-right font-bold text-white">
                {driver.points}
              </div>

              <MovementIcon movement={driver.movement} />
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}function ConstructorStandingsCard() {
  const maxPoints = CONSTRUCTOR_STANDINGS[0].points;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <Card className="rounded-2xl border border-white/10 bg-[#111111]/90 backdrop-blur-xl">
        <CardHeader className="border-b border-white/5">
          <CardTitle className="flex items-center gap-2 text-white">
            <Trophy className="h-5 w-5 text-[#E10600]" />
            Constructor Standings
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid grid-cols-[40px_1fr_60px_30px] gap-3 border-b border-white/5 px-6 py-3 text-xs uppercase tracking-widest text-white/40">
            <span>Pos</span>
            <span>Team</span>
            <span className="text-right">Pts</span>
            <span></span>
          </div>

          {CONSTRUCTOR_STANDINGS.map((team) => {
            const width = (team.points / maxPoints) * 100;

            return (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25 }}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,.03)",
                }}
                className="grid grid-cols-[40px_1fr_60px_30px] items-center gap-3 border-b border-white/5 px-6 py-4 last:border-none"
              >
                <PositionBadge position={team.position} />

                <div>
                  <div className="font-semibold text-white">
                    {team.name}
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: team.color,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${width}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                      }}
                    />
                  </div>
                </div>

                <div className="text-right font-bold text-white">
                  {team.points}
                </div>

                <MovementIcon movement={team.movement} />
              </motion.div>
            );
          })}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ChampionshipPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <DriverStandingsCard />
            <ConstructorStandingsCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ChampionshipPreview;