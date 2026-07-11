// types/race-details.ts

import type { Circuit } from "@/types/circuit";
import type { Race } from "@/types/race";

export interface RacePodiumResult {
  position: 1 | 2 | 3;
  driverName: string;
  team: string;
}

export interface RaceFastestLap {
  driverName: string;
  team: string;
  time: string;
}

export interface RaceWinnerHistory {
  year: number;
  driver: string;
  team: string;
}

export interface RaceStatistics {
  totalLaps: number;
  raceDistance: string;
  lapRecord: string;
  drsZones: number;
  corners: number;
}

export interface RaceDetails {
  raceId: Race["id"];

  overview: string;
  history: string;

  circuitSlug: Circuit["slug"];

  podium: RacePodiumResult[];
  fastestLap: RaceFastestLap | null;

  gallery: string[];

  winnerHistory: RaceWinnerHistory[];
  statistics: RaceStatistics;
}
