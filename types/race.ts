// types/race.ts
export interface Race {
  id: string;
  slug: string;
  round: number;
  name: string;
  country: string;
  flag: string;
  circuit: string;
  location: string;
  date: string;
  status: "completed" | "upcoming" | "live";
  winner: string | null;
  pole: string | null;
  laps: number | null;
  distance: string | null;
  heroImage: string;
  description: string;
  sessions: {
    fp1: string;
    fp2: string;
    fp3: string;
    qualifying: string;
    race: string;
  };
}