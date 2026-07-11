import type { Driver } from "@/types/driver";

export interface DriverSocialLinks {
  website?: string;
  instagram?: string;
  x?: string;
  facebook?: string;
}

export interface DriverTimelineEvent {
  year: number;
  title: string;
  description: string;
}

export interface DriverStatistics {
  races: number;
  points: number;
  podiumRate: string;
  winRate: string;
  poleRate: string;
  averageFinish: number;
}

export interface DriverDetails {
  driverId: Driver["id"];
  bio: string;
  careerSummary: string;
  birthDate: string;
  birthPlace: string;
  height: string;
  weight: string;
  debutSeason: number;
  worldChampionships: number;
  careerWins: number;
  careerPodiums: number;
  careerPoles: number;
  fastestLaps: number;
  helmetImage: string;
  gallery: string[];
  socialLinks: DriverSocialLinks;
  careerTimeline: DriverTimelineEvent[];
  statistics: DriverStatistics;
}