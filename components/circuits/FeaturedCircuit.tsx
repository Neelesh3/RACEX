"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Circuit } from "@/types/circuit";
import { ArrowRight, MapPin, Timer, Calendar } from "lucide-react";
import { CountryFlag } from "@/components/ui/CountryFlag";

interface FeaturedCircuitProps {
  circuit: Circuit;
}

export function FeaturedCircuit({ circuit }: FeaturedCircuitProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-[20px] border border-[#242424] bg-[#111111]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
          <Image
            src={circuit.image}
            alt={circuit.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]/80 lg:bg-gradient-to-l" />
        </div>
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <div className="mb-3 flex items-center gap-2">
            <CountryFlag country={circuit.country} fallback={circuit.flag} />
            <span className="text-sm font-medium text-[#E10600]">Featured Circuit</span>
          </div>
          <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">{circuit.name}</h2>
          <p className="mb-2 text-lg text-neutral-400">{circuit.location}</p>
          <p className="mb-6 text-sm leading-relaxed text-neutral-500">{circuit.description}</p>
          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-[14px] border border-[#242424] bg-[#050505] p-4">
              <MapPin className="mb-2 h-4 w-4 text-[#E10600]" />
              <p className="text-xs text-neutral-500">Location</p>
              <p className="text-sm font-semibold text-white">{circuit.location}</p>
            </div>
            <div className="rounded-[14px] border border-[#242424] bg-[#050505] p-4">
              <Timer className="mb-2 h-4 w-4 text-[#E10600]" />
              <p className="text-xs text-neutral-500">Length</p>
              <p className="text-sm font-semibold text-white">{circuit.length}</p>
            </div>
            <div className="rounded-[14px] border border-[#242424] bg-[#050505] p-4">
              <Calendar className="mb-2 h-4 w-4 text-[#E10600]" />
              <p className="text-xs text-neutral-500">First GP</p>
              <p className="text-sm font-semibold text-white">{circuit.firstGrandPrix}</p>
            </div>
            <div className="rounded-[14px] border border-[#242424] bg-[#050505] p-4">
              <Timer className="mb-2 h-4 w-4 text-[#E10600]" />
              <p className="text-xs text-neutral-500">Lap Record</p>
              <p className="text-sm font-semibold text-white">{circuit.lapRecord}</p>
            </div>
          </div>
          <Link href={`/circuits/${circuit.slug}`}>
            <Button className="h-12 w-fit rounded-[14px] bg-[#E10600] px-8 text-sm font-semibold text-white hover:bg-[#E10600]/90">
              Explore Circuit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
