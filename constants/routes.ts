/**
 * RaceX Routes and Navigation Configuration
 */

export const ROUTES = {
  HOME: "/",
  DRIVERS: "/drivers",
  CONSTRUCTORS: "/garage", // Pointing to Constructor Garage
  CIRCUITS: "/circuits",
  RACES: "/races",
  STANDINGS: "/standings",
  ABOUT: "/about",
} as const;

export const NAVIGATION_ITEMS = [
  {
    label: "Home",
    href: ROUTES.HOME,
    description: "RaceX Dashboard",
  },
  {
    label: "Constructors",
    href: ROUTES.CONSTRUCTORS,
    description: "Constructor Garage Experience",
  },
  {
    label: "Drivers",
    href: ROUTES.DRIVERS,
    description: "Driver Standings and Profiles",
  },
  {
    label: "Circuits",
    href: ROUTES.CIRCUITS,
    description: "Track Information",
  },
  {
    label: "Races",
    href: ROUTES.RACES,
    description: "Race Schedule and Results",
  },
  {
    label: "Standings",
    href: ROUTES.STANDINGS,
    description: "Championship Standings",
  },
  {
    label: "About",
    href: ROUTES.ABOUT,
    description: "About the RACEX Project",
  },
] as const;
