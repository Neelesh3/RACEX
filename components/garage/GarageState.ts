import { CONSTRUCTORS } from "@/lib/constructors";

export type { Constructor as GarageTeamConfig, ConstructorDriver as GarageDriver } from "@/types/constructor";

/**
 * References the definitive constructors list from the business layer.
 * Keeps local garage mappings cleanly decoupled from static data declarations.
 */
export const GARAGE_TEAMS = CONSTRUCTORS;
