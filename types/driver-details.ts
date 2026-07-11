// types/driver-details.ts

export interface DriverSocial {
  platform: string;
  handle: string;
  url: string;
}

export interface DriverTimelineItem {
  year: number;
  achievement: string;
  description?: string;
}

export interface DriverAchievement {
  id: string;
  year: number;
  title: string;
  description: string;
  type: string;
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
  driverId: string;
  biography: string;
  careerSummary: string;
  birthDate: string;
  birthPlace: string;
  height: string;
  weight: string;
  debutSeason: number;
  championships: number;
  wins: number;
  podiums: number;
  poles: number;
  fastestLaps: number;
  helmetImage: string;
  gallery: string[];
  socials: DriverSocial[];
  timeline: DriverTimelineItem[];
  achievements: DriverAchievement[];
  statistics: DriverStatistics;
}