"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { races, upcomingRace } from "@/lib/races";

import { Navbar } from "@/components/navigation/navbar";
import {Footer} from "@/components/sections/footer";

import { Button } from "@/components/ui/button";

import  RaceHero  from "@/components/races/RaceHero";
import  UpcomingRace  from "@/components/races/UpcomingRace";
import  RaceStats  from "@/components/races/RaceStats";

import { RaceFilter } from "@/components/races/RaceFilter";
import { RaceGrid } from "@/components/races/RaceGrid";


export default function RacesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRaces = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return races;
    }

    return races.filter((race) => {
      return (
        race.name.toLowerCase().includes(query) ||
        race.country.toLowerCase().includes(query) ||
        race.circuit.toLowerCase().includes(query)
      );
    });
  }, [searchTerm]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <RaceHero />
        </section>

        <section className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
          <RaceFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <UpcomingRace race={upcomingRace} />

          <RaceGrid races={filteredRaces} />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <RaceStats />
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
                Ready for the Next Grand Prix?
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Stay updated with every Formula One race weekend, schedule,
                qualifying session, and results.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/drivers">
                  <Button size="lg">Explore Drivers</Button>
                </Link>

                <Link href="/teams">
                  <Button size="lg" variant="outline">
                    View Teams
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