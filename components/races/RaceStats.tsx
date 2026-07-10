// components/races/RaceStats.tsx

"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Flag,
  Trophy,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "24 Races",
    subtitle: "Championship Events",
    icon: Flag,
  },
  {
    title: "5 Continents",
    subtitle: "Worldwide Calendar",
    icon: Globe2,
  },
  {
    title: "300000+ Fans",
    subtitle: "Global Community",
    icon: Users,
  },
  {
    title: "75 Seasons",
    subtitle: "Motorsport Heritage",
    icon: Trophy,
  },
];

export default function RaceStats() {
  return (
    <section className="py-16">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-8 transition-colors hover:border-red-500/40"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/15 text-red-500 transition group-hover:bg-red-600 group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="text-3xl font-black text-white">
                {stat.title}
              </h3>

              <p className="mt-2 text-zinc-400">
                {stat.subtitle}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}