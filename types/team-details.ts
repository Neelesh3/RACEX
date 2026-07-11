

import type { Team } from "@/types/team";

export interface TeamSocial {
  platform: string;
  handle: string;
  url: string;
}

export interface TeamDriver {
  id: string;
  name: string;
  number: number;
}

export interface TeamAchievement {
  year: string;
  title: string;
  description: string;
}

export interface TeamStatistics {
  seasons: number;
  championships: number;
  wins: number;
  podiums: number;
  poles: number;
  fastestLaps: number;
}

export interface TeamDetails {
  teamId: Team["id"];

  overview: string;
  history: string;

  founded: number;
  base: string;

  teamPrincipal: string;
  technicalDirector: string;

  engineSupplier: string;
  chassis: string;

  worldChampionships: number;
  raceWins: number;
  polePositions: number;
  fastestLaps: number;
  podiums: number;
  firstEntry: number;

  gallery: string[];

  socials: TeamSocial[];

  drivers: TeamDriver[];

  achievements: TeamAchievement[];

  statistics: TeamStatistics;
}


