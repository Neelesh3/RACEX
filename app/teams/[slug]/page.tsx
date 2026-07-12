import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/footer";

import { TeamHero } from "@/components/teams/TeamHero";
import { TeamOverview } from "@/components/teams/TeamOverview";
import { TeamStats } from "@/components/teams/TeamStats";
import { TeamAchievements } from "@/components/teams/TeamAchievements";
import { TeamGallery } from "@/components/teams/TeamGallery";
import { TeamDrivers } from "@/components/teams/TeamDrivers";
import { TeamSocialLinks } from "@/components/teams/TeamSocialLinks";

import { teams } from "@/lib/teams";
import { teamDetails } from "@/lib/team-details";


import type { TeamDetails } from "@/types/team-details";

interface TeamPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return teams.map((team) => ({
    slug: team.slug,
  }));
}

export async function generateMetadata({
  params,
}: TeamPageProps): Promise<Metadata> {
  const { slug } = await params;

  const team = teams.find((item) => item.slug === slug);

  if (!team) {
    return {
      title: "Team Not Found | RACEX",
    };
  }

  return {
    title: `${team.name} | RACEX`,
    description: `Explore the history, achievements, drivers and Formula One legacy of ${team.name}.`,
  };
}

export default async function TeamPage({
  params,
}: TeamPageProps) {
  const { slug } = await params;

  const team = teams.find(
    (item) => item.slug === slug
  );

  if (!team) {
    notFound();
  }

  const details: TeamDetails | undefined = teamDetails[team.id];

  if (!details) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-background">
        <TeamHero team={team} details={details} />

        <TeamOverview details={details} />

        <TeamStats details={details} />

        <TeamAchievements details={details} />

        <TeamGallery details={details} />

        <TeamDrivers details={details} />

        <TeamSocialLinks details={details} />

        <section className="border-y bg-muted/30">
          <div className="container mx-auto px-4 py-20">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <span className="mb-4 rounded-full border px-4 py-1 text-sm font-medium">
                Formula One Constructors
              </span>

              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Explore More Formula One Teams
              </h2>

              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Continue discovering every Formula One constructor,
                legendary cars, championship history and team
                achievements.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/drivers">
                  <Button size="lg">
                    Drivers
                  </Button>
                </Link>

                <Link href="/races">
                  <Button
                    variant="outline"
                    size="lg"
                  >
                    Races
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