"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Ruler, ArrowLeft, ArrowRight } from "lucide-react";
import type { Circuit } from "@/types/circuit";
import type { CircuitDetails } from "@/types/circuit-details";
import { CountryFlag } from "@/components/ui/CountryFlag";

interface CircuitHeroProps {
  circuit?: Circuit;
  details?: CircuitDetails;
}

export function CircuitHero({ circuit, details }: CircuitHeroProps) {
  // --------------------------------
  // Mode 2: Circuit Detail Page
  // --------------------------------
  if (circuit && details) {
    const heroImageSrc = circuit.image || (details.gallery && details.gallery[0]) || "";

    return (
      <section className="relative overflow-hidden border-b border-[#242424] bg-[#050505] py-16 lg:py-20">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E10600]/10 via-zinc-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(225,6,0,0.12),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            {/* Left Column: Metadata & Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6 flex flex-wrap gap-2.5">
                <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-400 backdrop-blur">
                  Formula One Circuit
                </span>
                <span className="inline-flex rounded-full border border-neutral-800 bg-[#111111]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 backdrop-blur gap-1.5">
                  {circuit && <CountryFlag country={circuit.country} fallback={circuit.flag} />}
                  <span>{circuit?.country}</span>
                </span>
              </div>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {circuit.name}
              </h1>

              {/* Short introductory summary only */}
              <p className="mt-6 text-base leading-relaxed text-zinc-300">
                {circuit.description}
              </p>

              {/* Dynamic Metadata Cards (Location, Track Length, First GP) */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="flex gap-3 rounded-xl border border-[#242424] bg-[#111111] p-4 transition-colors hover:border-[#E10600]/20">
                  <MapPin className="mt-0.5 h-4.5 w-4.5 text-[#E10600] shrink-0" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                      Location
                    </p>
                    <p className="mt-1 text-xs font-bold text-white leading-tight">
                      {circuit.location}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-xl border border-[#242424] bg-[#111111] p-4 transition-colors hover:border-[#E10600]/20">
                  <Ruler className="mt-0.5 h-4.5 w-4.5 text-[#E10600] shrink-0" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                      Track Length
                    </p>
                    <p className="mt-1 text-xs font-bold text-white leading-tight">
                      {circuit.length}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-xl border border-[#242424] bg-[#111111] p-4 transition-colors hover:border-[#E10600]/20">
                  <Calendar className="mt-0.5 h-4.5 w-4.5 text-[#E10600] shrink-0" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                      First GP
                    </p>
                    <p className="mt-1 text-xs font-bold text-white leading-tight">
                      {circuit.firstGrandPrix}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/races">
                  <Button size="lg" className="bg-red-600 hover:bg-red-500 font-semibold gap-2">
                    View Race Calendar
                    <ArrowRight className="h-4.5 w-4.5" />
                  </Button>
                </Link>
                <Link href="/circuits">
                  <Button size="lg" variant="outline" className="font-semibold gap-2">
                    <ArrowLeft className="h-4.5 w-4.5" />
                    Back to Circuits
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Hero Image Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.015 }}
              className="relative aspect-video overflow-hidden rounded-[20px] border border-[#242424] bg-[#111111]"
            >
              {heroImageSrc && (
                <Image
                  src={heroImageSrc}
                  alt={circuit.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // --------------------------------
  // Mode 1: Listing Page (Default fallback)
  // --------------------------------
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
            <MapPin className="h-8 w-8 text-[#E10600]" />
          </motion.div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Formula One Circuits
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-neutral-400">
            Explore every iconic Formula One circuit around the world.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/races">
              <Button className="h-12 rounded-[14px] bg-[#E10600] px-8 text-sm font-semibold text-white hover:bg-[#E10600]/90">
                View Calendar
              </Button>
            </Link>
            <Link href="/races">
              <Button
                variant="outline"
                className="h-12 rounded-[14px] border-[#242424] bg-transparent px-8 text-sm font-semibold text-white hover:bg-[#111111] hover:text-white"
              >
                Explore Races
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}