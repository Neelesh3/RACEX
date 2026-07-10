import { TeamHero } from "@/components/teams/TeamHero";
import { TeamSearch } from "@/components/teams/TeamSearch";
import { TeamGrid } from "@/components/teams/TeamGrid";
import { FeaturedTeam } from "@/components/teams/FeaturedTeam";
import { TeamStats } from "@/components/teams/TeamStats";

export const metadata = {
  title: "Teams | RaceX",
  description:
    "Explore all Formula 1 constructors. Discover team history, championships, drivers, and statistics for every team on the grid.",
};

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <TeamHero />
      <TeamSearch />
      <TeamGrid />
      <FeaturedTeam />
      <TeamStats />
    </main>
  );
}