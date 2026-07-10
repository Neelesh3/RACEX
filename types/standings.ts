export interface DriverStanding {
  position: number;
  driverId: string;
  driverName: string;
  team: string;
  points: number;
  wins: number;
  podiums: number;
  country: string;
  flag: string;
}

export interface ConstructorStanding {
  position: number;
  teamId: string;
  teamName: string;
  points: number;
  wins: number;
  podiums: number;
  country: string;
  color: string;
}

export interface SeasonStats {
  season: number;
  completedRounds: number;
  totalRounds: number;
  totalDrivers: number;
  totalConstructors: number;
  leader: string;
  leadingTeam: string;
}