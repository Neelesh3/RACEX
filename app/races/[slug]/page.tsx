import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { races } from "@/lib/races";
import { raceDetails } from "@/lib/race-details";

import RaceHero from "@/components/races/RaceHero";
import { RaceOverview } from "@/components/races/RaceOverview";
import { RaceSessions } from "@/components/races/RaceSessions";
import { RaceResults } from "@/components/races/RaceResults";
import { RaceGallery } from "@/components/races/RaceGallery";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

interface RacePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return races.map((race) => ({
    slug: race.slug,
  }));
}

export async function generateMetadata({
  params,
}: RacePageProps): Promise<Metadata> {
  const { slug } = await params;

  const race = races.find((item) => item.slug === slug);

  if (!race) {
    return {
      title: "Race Not Found | RACEX",
    };
  }

  return {
    title: `${race.name} | RACEX`,
    description: `Explore the Formula One schedule, results, overview, sessions and gallery of the ${race.name}.`,
  };
}

export default async function RacePage({
  params,
}: RacePageProps) {
  const { slug } = await params;

  const race = races.find((item) => item.slug === slug);

  if (!race) {
    notFound();
  }

  const details = raceDetails[race.id];

  if (!details) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-background space-y-8 pb-12">
        {/* Full-width Race Hero */}
        <RaceHero race={race} details={details} />

        {/* Content sections wrapped together inside a container */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-16">
          <RaceOverview race={race} details={details} />

          <div>
            <h2 className="text-3xl font-black text-white mb-6">Weekend Schedule</h2>
            <RaceSessions race={race} />
          </div>

          <div>
            <h2 className="text-3xl font-black text-white mb-6">Race Results</h2>
            <RaceResults race={race} details={details} />
          </div>

          <RaceGallery race={race} details={details} />
        </div>

        {/* Continue Exploring CTA section */}
        <section className="border-y border-[#242424] bg-[#050505] py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <span className="mb-4 rounded-full border border-[#242424] bg-[#111111] px-4 py-1 text-sm font-medium text-neutral-400">
                Continue Exploring
              </span>

              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Discover More Formula One Action
              </h2>

              <p className="mt-6 max-w-2xl text-lg text-neutral-400">
                Explore the complete 2026 Grand Prix schedule, review historic circuit layouts, and follow the timeline of F1 races worldwide.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/races">
                  <Button size="lg" className="bg-[#E10600] hover:bg-[#E10600]/90 text-white font-semibold">
                    View All Races
                  </Button>
                </Link>

                <Link href="/circuits">
                  <Button variant="outline" size="lg" className="border-[#242424] text-white hover:bg-[#111111] font-semibold">
                    Explore Circuits
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
