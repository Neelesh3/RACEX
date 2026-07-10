"use client";

import { motion } from "framer-motion";
import { Users, Trophy,  Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
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

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
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
            <p className="text-3xl font-extrabold text-white tabular-nums">
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

export function TeamStats() {
  return (
    <section className="py-16 md:py-24 bg-[#050505]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}