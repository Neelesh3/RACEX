/**
 * RaceX Routes and Navigation Configuration
 */

export const ROUTES = {
  HOME: "/",
  DRIVERS: "/drivers",
  TEAMS: "/teams",
  GARAGE: "/garage",
  RACES: "/races",
  CIRCUITS: "/circuits",
  STANDINGS: "/standings",
  NEWS: "/news",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  SETTINGS: "/settings",
} as const;

export const NAVIGATION_ITEMS = [
  {
    label: "Home",
    href: ROUTES.HOME,
    description: "RaceX Dashboard",
  },
  {
    label: "Garage",
    href: ROUTES.GARAGE,
    description: "Constructor Garage Experience",
  },
  {
    label: "Drivers",
    href: ROUTES.DRIVERS,
    description: "Driver Standings and Profiles",
  },
  {
    label: "Teams",
    href: ROUTES.TEAMS,
    description: "Constructor Standings",
  },
  {
    label: "Races",
    href: ROUTES.RACES,
    description: "Race Schedule and Results",
  },
  {
    label: "Circuits",
    href: ROUTES.CIRCUITS,
    description: "Track Information",
  },
  {
    label: "Standings",
    href: ROUTES.STANDINGS,
    description: "Championship Standings",
  },
  {
    label: "News",
    href: ROUTES.NEWS,
    description: "Latest F1 News",
  },
] as const;

export const PROFILE_MENU_ITEMS = [
  {
    label: "Profile",
    href: ROUTES.PROFILE,
    icon: "User",
  },
  {
    label: "Settings",
    href: ROUTES.SETTINGS,
    icon: "Settings",
  },
  {
    label: "Logout",
    href: "#",
    icon: "LogOut",
  },
] as const;
