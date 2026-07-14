import { drivers } from "./drivers";
import { CONSTRUCTORS } from "./constructors";
import { races } from "./races";
import { circuits } from "./circuits";
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

  // Constructors
  ...CONSTRUCTORS.map(
    (c): SearchItem => ({
      id: `constructor-${c.id}`,
      title: c.teamName,
      subtitle: c.carName,
      href: `/garage`,
      category: "constructor",
      meta: c.engine,
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
];
