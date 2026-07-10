export interface Team {
  id: string;
  slug: string;
  name: string;
  country: string;
  base: string;
  teamPrincipal: string;
  engine: string;
  championships: number;
  wins: number;
  podiums: number;
  drivers: string[];
  description: string;
  brandColor: string;
  founded: number;
  logo: string;
  carImage: string;
}