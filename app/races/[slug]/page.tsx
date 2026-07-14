import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { races } from "@/lib/races";
import { raceDetails } from "@/lib/race-details";
import { RaceProfilePage } from "@/components/races/RaceProfilePage";

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
    description: `Explore the Formula One schedule, results, overview, sessions and stats of the ${race.name}.`,
  };
}

export default async function RacePage({ params }: RacePageProps) {
  const { slug } = await params;

  const race = races.find((item) => item.slug === slug);
  if (!race) {
    notFound();
  }

  const details = raceDetails[race.id];
  if (!details) {
    notFound();
  }

  return <RaceProfilePage race={race} details={details} />;
}
