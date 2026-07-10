"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export function TeamHero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -right-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#E10600]/[0.03] blur-[120px]" />
        <div className="absolute -left-[5%] bottom-[5%] h-[300px] w-[300px] rounded-full bg-[#1E41FF]/[0.02] blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#E10600]">
            <Users className="h-4 w-4" />
            2026 Season
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Formula One
            <br />
            <span className="text-[#E10600]">Constructors</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#B5B5B5] sm:text-lg">
            Discover the elite teams engineering the fastest machines on Earth.
            From legendary marques to ambitious newcomers, explore every
            constructor competing for glory.
          </p>

          <a
            href="#teams-grid"
            className={cn(
              "mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl",
              "bg-[#E10600] px-7 text-sm font-semibold text-white",
              "transition-all duration-200",
              "hover:bg-[#FF1A1A] hover:shadow-[0_0_30px_rgba(225,6,0,0.25)]",
              "active:scale-[0.98]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            )}
          >
            Explore Teams
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}