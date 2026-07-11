import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { circuits } from "@/lib/circuits";
import { circuitDetails } from "@/lib/circuit-details";

import { CircuitHero } from "@/components/circuits/CircuitHero";
import { CircuitOverview } from "@/components/circuits/CircuitOverview";
import { CircuitLayout } from "@/components/circuits/CircuitLayout";
import { CircuitWinners } from "@/components/circuits/CircuitWinners";
import { CircuitTechnical } from "@/components/circuits/CircuitTechnical";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

interface CircuitPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return circuits.map((circuit) => ({
    slug: circuit.slug,
  }));
}

export async function generateMetadata({
  params,
}: CircuitPageProps): Promise<Metadata> {
  const { slug } = await params;

  const circuit = circuits.find((item) => item.slug === slug);

  if (!circuit) {
    return {
      title: "Circuit Not Found | RACEX",
    };
  }

  return {
    title: `${circuit.name} | RACEX`,
    description: `Explore the track specifications, telemetry, layout, history, and records of the ${circuit.name}.`,
  };
}

export default async function CircuitPage({
  params,
}: CircuitPageProps) {
  const { slug } = await params;

  const circuit = circuits.find((item) => item.slug === slug);

  if (!circuit) {
    notFound();
  }

  const details = circuitDetails[circuit.id];

  if (!details) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-background space-y-8 pb-12">
        {/* Reusable Dual-Mode Circuit Hero */}
        <CircuitHero circuit={circuit} details={details} />

        {/* Content sections wrapped inside a single max-width container */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-16">
          <CircuitOverview circuit={circuit} details={details} />

          <div>
            <h2 className="text-3xl font-black text-white mb-6">Track Layout</h2>
            <CircuitLayout circuit={circuit} details={details} />
          </div>

          <CircuitWinners circuit={circuit} details={details} />

          <CircuitTechnical circuit={circuit} details={details} />
        </div>

        {/* Continue Exploring CTA Section */}
        <section className="border-y border-[#242424] bg-[#050505] py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <span className="mb-4 rounded-full border border-[#242424] bg-[#111111] px-4 py-1 text-sm font-medium text-neutral-400">
                Continue Exploring
              </span>

              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Experience F1 Speed Around the World
              </h2>

              <p className="mt-6 max-w-2xl text-lg text-neutral-400">
                Explore the complete 2026 race calendar, follow Grand Prix weekends, and discover the drivers competing on the grid.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/races">
                  <Button size="lg" className="bg-[#E10600] hover:bg-[#E10600]/90 text-white font-semibold">
                    Explore Races
                  </Button>
                </Link>

                <Link href="/drivers">
                  <Button variant="outline" size="lg" className="border-[#242424] text-white hover:bg-[#111111] font-semibold">
                    View Drivers
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
