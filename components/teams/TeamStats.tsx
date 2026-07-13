"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Flag,
  Gauge,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { TeamDetails } from "@/types/team-details";

interface TeamStatsProps {
  details?: TeamDetails;
}

const listingStats = [
  {
    label: "Teams",
    value: "10",
    icon: Users,
  },
  {
    label: "Drivers",
    value: "20",
    icon: Users,
  },
  {
    label: "Championships",
    value: "50+",
    icon: Trophy,
  },
  {
    label: "Races",
    value: "1,100+",
    icon: Calendar,
  },
];

function ListingStatCard({
  stat,
  index,
}: {
  stat: (typeof listingStats)[number];
  index: number;
}) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="overflow-hidden rounded-2xl border border-[#242424] bg-[#111111]">
          <CardContent className="flex flex-col items-center gap-3 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E10600]/10">
              <Icon className="h-6 w-6 text-[#E10600]" />
            </div>

            <p className="text-3xl font-extrabold text-white">
              {stat.value}
            </p>

            <p className="text-xs font-medium uppercase tracking-wider text-[#808080]">
              {stat.label}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

import type { ComponentType } from "react";

interface DetailStatCardProps {
  title: string;
  value: number;
  icon: ComponentType<{ className?: string }>;
  index: number;
}

function DetailStatCard({
  title,
  value,
  icon: Icon,
  index,
}: DetailStatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
    >
      <Card className="rounded-2xl border border-[#242424] bg-[#111111]">
        <CardContent className="flex flex-col items-center gap-4 p-6">
          <div className="rounded-xl bg-[#E10600]/10 p-3">
            <Icon className="h-6 w-6 text-[#E10600]" />
          </div>

          <p className="text-3xl font-black text-white">
            {value}
          </p>

          <p className="text-xs font-semibold uppercase tracking-widest text-[#8A8A8A]">
            {title}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function TeamStats({
  details,
}: TeamStatsProps) {
  // ---------------------------------
  // DETAIL PAGE
  // ---------------------------------

  if (details) {
    const stats = [
      {
        title: "Championships",
        value: details.statistics.championships,
        icon: Trophy,
      },
      {
        title: "Wins",
        value: details.statistics.wins,
        icon: Flag,
      },
      {
        title: "Podiums",
        value: details.statistics.podiums,
        icon: Users,
      },
      {
        title: "Pole Positions",
        value: details.statistics.poles,
        icon: Zap,
      },
      {
        title: "Fastest Laps",
        value: details.statistics.fastestLaps,
        icon: Gauge,
      },
      {
        title: "Seasons",
        value: details.statistics.seasons,
        icon: Calendar,
      },
    ];

    return (
      <section className="bg-[#050505] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#E10600]">
              Team Performance
            </span>

            <h2 className="mt-3 text-4xl font-black text-white">
              Career Statistics
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <DetailStatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ---------------------------------
  // LIST PAGE (Original)
  // ---------------------------------

  return (
    <section className="bg-[#050505] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#E10600]">
            By the Numbers
          </span>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Grid Statistics
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {listingStats.map((stat, index) => (
            <ListingStatCard
              key={stat.label}
              stat={stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}