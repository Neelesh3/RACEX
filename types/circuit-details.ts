import type { Circuit } from "./circuit";

export interface CircuitSector {
  sector: 1 | 2 | 3;
  name: string;
  description: string;
  characteristics: string[];
}

export interface CircuitWinnerHistory {
  year: number;
  driver: string;
  team: string;
  time: string;
}

export interface TrackRecord {
  category: string;
  driver: string;
  team: string;
  lapTime: string;
  year: number;
}

export interface CircuitCornerDetail {
  number: number;
  name: string;
  type: string;
  speed: number;
}

export interface CircuitDetails {
  circuitId: Circuit["id"];
  overview: string;
  history: string;
  sectors: CircuitSector[];
  previousWinners: CircuitWinnerHistory[];
  trackRecords: TrackRecord[];
  cornerDetails: CircuitCornerDetail[];
  gallery: string[];
}
