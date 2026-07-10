"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { driverStandings, constructorStandings } from "@/lib/standings";

import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/sections/footer";

import {StandingsHero }from "@/components/standings/StandingsHero";
import { DriverStandingsTable } from "@/components/standings/DriverStandingsTable";
import { ConstructorStandingsTable } from "@/components/standings/ConstructorStandingsTable";
import { StandingsStats } from "@/components/standings/StandingsStats";

import { Button } from "@/components/ui/button";

export default function StandingsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <StandingsHero />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Driver Standings
            </h2>
            <p className="mt-2 text-zinc-400">
              Live championship standings for every Formula One driver.
            </p>
          </div>

          <DriverStandingsTable drivers={driverStandings} />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Constructor Standings
            </h2>
            <p className="mt-2 text-zinc-400">
              Follow the battle for the Constructors&apos; Championship.
            </p>
          </div>

        <ConstructorStandingsTable constructors={constructorStandings} />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <StandingsStats />
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
                Who Will Become World Champion?
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Follow every point, every victory and every battle throughout
                the Formula One season.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/drivers">
                  <Button size="lg">Explore Drivers</Button>
                </Link>

                <Link href="/races">
                  <Button size="lg" variant="outline">
                    View Races
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