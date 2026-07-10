"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Circuit } from "../../types/circuit"; // changeed now after you tell me 
import { ArrowRight } from "lucide-react";

interface CircuitCardProps {
  circuit: Circuit;
  index: number;
}

export function CircuitCard({ circuit, index }: CircuitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col overflow-hidden rounded-[20px] border border-[#242424] bg-[#111111] transition-colors hover:border-[#E10600]/30"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={circuit.image}
          alt={circuit.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <span className="text-lg">{circuit.flag}</span>
          <span className="text-sm font-medium text-white">{circuit.country}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1 text-lg font-bold text-white">{circuit.name}</h3>
        <p className="mb-4 text-sm text-neutral-400">{circuit.location}</p>
        <div className="mb-5 grid grid-cols-3 gap-2">
          <div className="rounded-[14px] border border-[#242424] bg-[#050505] p-3 text-center">
            <p className="text-xs text-neutral-500">Length</p>
            <p className="text-sm font-semibold text-white">{circuit.length}</p>
          </div>
          <div className="rounded-[14px] border border-[#242424] bg-[#050505] p-3 text-center">
            <p className="text-xs text-neutral-500">Corners</p>
            <p className="text-sm font-semibold text-white">{circuit.corners}</p>
          </div>
          <div className="rounded-[14px] border border-[#242424] bg-[#050505] p-3 text-center">
            <p className="text-xs text-neutral-500">DRS</p>
            <p className="text-sm font-semibold text-white">{circuit.drsZones}</p>
          </div>
        </div>
        <div className="mt-auto">
          <Link href={`/circuits/${circuit.slug}`}>
            <Button
              variant="outline"
              className="w-full rounded-[14px] border-[#242424] bg-transparent text-sm font-semibold text-white hover:bg-[#1a1a1a] hover:text-white"
            >
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}