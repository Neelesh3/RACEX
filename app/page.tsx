import Hero from "@/components/sections/hero";
import { StatsStrip } from "@/components/sections/stats-strip";
import LiveRaceBanner from "@/components/sections/live-race-banner";
import { FeaturedDrivers } from "@/components/sections/featured-drivers";
import { TopTeams } from "@/components/sections/top-teams";
import { ChampionshipPreview } from "@/components/sections/championship-preview";
import { UpcomingRaces } from "@/components/sections/upcoming-races";
import { LatestNews } from "@/components/sections/latest-news";
import { Newsletter } from "@/components/sections/newsletter";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <LiveRaceBanner />
      <FeaturedDrivers />
      <TopTeams />
      <ChampionshipPreview />
      <UpcomingRaces />
      <LatestNews />
      <Newsletter />
      <Footer />
    </>
  );
}