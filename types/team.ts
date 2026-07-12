export interface TeamDriverInfo {
  id: string;
  name: string;
  number: number;
  flag: string;
}

export interface Team {
  id: string;
  slug: string;
  name: string;
  fullName: string;
  country: string;
  flag: string;
  base: string;
  teamPrincipal: string;
  engine: string;
  championships: number;
  wins: number;
  podiums: number;
  races: number;
  drivers: TeamDriverInfo[];
  description: string;
  brandColor: string;
  founded: number;
  logo: string;
  carImage: string;
}