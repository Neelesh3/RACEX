"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { circuits, featuredCircuit } from "@/lib/circuits";

import { Footer } from "@/components/sections/footer";

import { CircuitHero } from "@/components/circuits/CircuitHero";
import { FeaturedCircuit } from "@/components/circuits/FeaturedCircuit";
import { CircuitGrid } from "@/components/circuits/CircuitGrid";
import { CircuitStats } from "@/components/circuits/CircuitStats";

import { Button } from "@/components/ui/button";

export default function CircuitsPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <CircuitHero />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <FeaturedCircuit circuit={featuredCircuit} />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <CircuitGrid circuits={circuits} />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <CircuitStats />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 md:p-12"
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                Every Corner Tells a Story
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-300">
               Discover the worlds greatest Formula One circuits... and the
                legendary moments that shaped motorsport history.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/races">
                  <Button size="lg">
                    View Races
                  </Button>
                </Link>

                <Link href="/garage">
                  <Button size="lg" variant="outline">
                    Explore Constructors
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}