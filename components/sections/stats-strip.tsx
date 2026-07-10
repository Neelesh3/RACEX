"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Flag, Users, Shield, Zap } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Stat {
  id: string;
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
  color: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS: Stat[] = [
  {
    id: "grand-prix",
    icon: <Flag className="w-5 h-5" aria-hidden="true" />,
    number: "24",
    label: "Grand Prix",
    description: "Races across 5 continents",
    color: "var(--primary)",
  },
  {
    id: "drivers",
    icon: <Users className="w-5 h-5" aria-hidden="true" />,
    number: "20",
    label: "Drivers",
    description: "Competing for the title",
    color: "#3671C6",
  },
  {
    id: "teams",
    icon: <Shield className="w-5 h-5" aria-hidden="true" />,
    number: "10",
    label: "Teams",
    description: "Constructor championship",
    color: "#FF8000",
  },
  {
    id: "sprint",
    icon: <Zap className="w-5 h-5" aria-hidden="true" />,
    number: "6",
    label: "Sprint Weekends",
    description: "High-intensity sprint races",
    color: "#27F4D2",
  },
];

// ─── Stat card ────────────────────────────────────────────────────────────────

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="h-full"
    >
      <Card
        className="
          relative h-full overflow-hidden
          rounded-2xl
          bg-card border-border
          backdrop-blur-xl
          transition-shadow duration-300
          hover:shadow-lg
        "
      >
        {/* color accent bar */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: stat.color }}
        />

        <CardContent className="px-5 py-6 flex flex-col gap-4">
          {/* icon */}
          <div
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
            style={{
              backgroundColor: `${stat.color}18`,
              border: `1px solid ${stat.color}30`,
              color: stat.color,
            }}
          >
            {stat.icon}
          </div>

          {/* number + label */}
          <div className="flex flex-col gap-0.5">
            <span className="text-4xl font-extrabold tabular-nums leading-none tracking-tight text-white">
              {stat.number}
            </span>
            <span className="text-sm font-semibold text-foreground mt-1">
              {stat.label}
            </span>
          </div>

          {/* description */}
          <p className="text-xs text-muted-foreground leading-relaxed">
            {stat.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function StatsStrip() {
  return (
    <motion.section
      aria-label="2026 Formula 1 season statistics"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {STATS.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}