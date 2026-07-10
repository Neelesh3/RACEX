"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import Link from "next/link";


export function StandingsHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#242424] bg-[#050505]">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #E10600 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#E10600]/30 bg-[#E10600]/10"
          >
            <Trophy className="h-8 w-8 text-[#E10600]" />
          </motion.div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Formula One Championship Standings
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-neutral-400">
            Follow the latest Driver and Constructor Championship battle throughout the season.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
<Link href="/drivers">
  <Button
    className="h-12 rounded-[14px] bg-[#E10600] px-8 text-sm font-semibold text-white hover:bg-[#E10600]/90"
  >
    Drivers
  </Button>
</Link>
<Link href="/teams">
  <Button
    variant="outline"
    className="h-12 rounded-[14px] border-[#242424] bg-transparent px-8 text-sm font-semibold text-white hover:bg-[#111111] hover:text-white"
  >
    Teams
  </Button>
</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}