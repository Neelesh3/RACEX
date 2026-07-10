"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function TeamSearch() {
  return (
    <section className="border-b border-[#242424] bg-[#050505] pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#808080]" />
          <input
            type="text"
            placeholder="Search teams, drivers, engines..."
            className={cn(
              "h-12 w-full rounded-xl border border-[#242424] bg-[#111111] pl-10 pr-4 text-sm text-white",
              "placeholder:text-[#5F5F5F]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            )}
          />
        </motion.div>
      </div>
    </section>
  );
}