import { drivers } from "./drivers";
import { teams } from "./teams";
import { races } from "./races";
import { circuits } from "./circuits";
import { news } from "./news";
import type { SearchItem } from "@/types/search";

export const searchIndex: SearchItem[] = [
  // Drivers
  ...drivers.map(
    (driver): SearchItem => ({
      id: `driver-${driver.id}`,
      title: driver.name,
      subtitle: driver.team,
      href: `/drivers/${driver.slug}`,
      category: "driver",
      meta: driver.number.toString(),
    })
  ),

  // Teams
  ...teams.map(
    (team): SearchItem => ({
      id: `team-${team.id}`,
      title: team.name,
      subtitle: team.teamPrincipal,
      href: `/teams/${team.slug}`,
      category: "team",
      meta: team.engine,
    })
  ),

  // Races
  ...races.map(
    (race): SearchItem => ({
      id: `race-${race.id}`,
      title: race.name,
      subtitle: `${race.circuit} • ${race.country}`,
      href: `/races/${race.slug}`,
      category: "race",
      meta: `Round ${race.round}`,
    })
  ),

  // Circuits
  ...circuits.map(
    (circuit): SearchItem => ({
      id: `circuit-${circuit.id}`,
      title: circuit.name,
      subtitle: `${circuit.location}, ${circuit.country}`,
      href: `/circuits/${circuit.slug}`,
      category: "circuit",
      meta: circuit.length,
    })
  ),

  // News articles
  ...news.map(
    (article): SearchItem => ({
      id: `news-${article.id}`,
      title: article.title,
      subtitle: article.category,
      href: `/news/${article.slug}`,
      category: "news",
      meta: article.publishedAt,
    })
  ),
];
