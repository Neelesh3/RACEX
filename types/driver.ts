// types/driver.ts

export interface Driver {
  id: string;
  slug: string;
  name: string;
  number: number;
  team: string;
  country: string;
  flag: string;
  image: string;
  teamColor: string;
  points: number;
  wins: number;
  podiums: number;
}