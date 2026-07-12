"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Circuit } from "@/types/circuit";
import type { CircuitDetails } from "@/types/circuit-details";
import { Map, Wind, Trophy, Ruler, GitCommit } from "lucide-react";

interface CircuitLayoutProps {
  circuit: Circuit;
  details: CircuitDetails;
}

export function CircuitLayout({ circuit, details }: CircuitLayoutProps) {
  const [imageError, setImageError] = useState(false);
  
  // Dynamic layout map path matching public assets naming pattern
  const mapUrl = `/circuits/layouts/${circuit.id}.svg`;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* Left Side: Map and Quick Specs (5 cols) */}
      <div className="flex flex-col gap-6 lg:col-span-5">
        {/* Section 1: Circuit Layout Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full min-h-[360px] w-full overflow-hidden rounded-[20px] border border-[#242424] bg-[#111111]"
        >
          {imageError || !mapUrl ? (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center p-8 text-center">
              <Map className="mb-4 h-12 w-12 text-neutral-600" />
              <h3 className="text-lg font-bold text-white">Track layout coming soon</h3>
              <p className="mt-2 max-w-xs text-xs text-neutral-500 leading-relaxed">
                We are currently uploading our high-resolution vector layout telemetry maps for this circuit.
              </p>
            </div>
          ) : (
            <div className="relative flex h-full min-h-[360px] items-center justify-center p-6">
              <Image
                src={mapUrl}
                alt={`${circuit.name} Track Layout Map`}
                fill
                className="object-contain p-6"
                onError={() => setImageError(true)}
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          )}
        </motion.div>

        {/* Section 3: Compact Technical Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[20px] border border-[#242424] bg-[#111111] p-6"
        >
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Quick Reference
          </h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl border border-[#242424] bg-[#050505] p-3 text-center">
              <Wind className="mx-auto mb-1.5 h-4 w-4 text-[#E10600]" />
              <p className="text-[10px] text-neutral-500 uppercase">DRS Zones</p>
              <p className="mt-1 text-sm font-bold text-white">{circuit.drsZones}</p>
            </div>

            <div className="rounded-xl border border-[#242424] bg-[#050505] p-3 text-center">
              <Ruler className="mx-auto mb-1.5 h-4 w-4 text-[#E10600]" />
              <p className="text-[10px] text-neutral-500 uppercase">Length</p>
              <p className="mt-1 text-sm font-bold text-white truncate">{circuit.length}</p>
            </div>

            <div className="rounded-xl border border-[#242424] bg-[#050505] p-3 text-center">
              <Trophy className="mx-auto mb-1.5 h-4 w-4 text-[#E10600]" />
              <p className="text-[10px] text-neutral-500 uppercase">Record</p>
              <p className="mt-1 text-sm font-bold text-white truncate">{circuit.lapRecord}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Sector Cards (7 cols) */}
      <div className="flex flex-col gap-4 lg:col-span-7">
        <h3 className="text-xl font-bold text-white mb-2">Track Sectors</h3>
        {details.sectors.map((sector, index) => (
          <motion.div
            key={sector.sector}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 rounded-[20px] border border-[#242424] bg-[#111111] p-6 hover:border-[#E10600]/20 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-xs font-bold text-red-400">
                  S{sector.sector}
                </div>
                <h4 className="text-base font-bold text-white">{sector.name}</h4>
              </div>
              <GitCommit className="h-4 w-4 text-neutral-600" />
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              {sector.description}
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {sector.characteristics.map((char) => (
                <span
                  key={char}
                  className="rounded-full border border-red-500/10 bg-red-500/5 px-2.5 py-1 text-[10px] font-semibold text-red-400/90"
                >
                  {char}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
