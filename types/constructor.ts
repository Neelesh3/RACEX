export interface ConstructorDriver {
  name: string;
  number: number;
  flag: string;
}

export interface Constructor {
  id: string;
  teamName: string;
  carName: string;
  season: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundAsset: string;
  carAsset: string;
  logoAsset: string;
  typography: string;
  championships: number;
  wins: number;
  podiums: number;
  drivers: ConstructorDriver[];
  engine: string;
  shortStory: string;
  gradient: string;
}
