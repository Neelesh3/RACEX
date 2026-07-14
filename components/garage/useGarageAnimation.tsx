"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import { GARAGE_TEAMS } from "./GarageState";
import { GARAGE_TIMELINE } from "./GarageTimeline";

export type TransitionPhase = "idle" | "exiting" | "entering";

interface GarageContextProps {
  currentTeamIndex: number;      // Target team index
  displayTeamIndex: number;      // Currently visible team (swaps mid-transition)
  transitionPhase: TransitionPhase;
  isLocked: boolean;
  nextTeam: () => void;
  prevTeam: () => void;
}

const GarageContext = createContext<GarageContextProps | undefined>(undefined);

export function GarageProvider({ children }: { children: React.ReactNode }) {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [displayTeamIndex, setDisplayTeamIndex] = useState(0);
  const [transitionPhase, setTransitionPhase] = useState<TransitionPhase>("idle");
  const [isLocked, setIsLocked] = useState(false);
  
  // Keep refs for timers to cleanup on unmount
  const swapTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lockTimerRef = useRef<NodeJS.Timeout | null>(null);

  const triggerTransition = useCallback((nextIndex: number) => {
    if (isLocked) return;

    setIsLocked(true);
    setTransitionPhase("exiting");
    setCurrentTeamIndex(nextIndex);

    // Clear any existing timers
    if (swapTimerRef.current) clearTimeout(swapTimerRef.current);
    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);

    // Swap assets mid-transition
    swapTimerRef.current = setTimeout(() => {
      setDisplayTeamIndex(nextIndex);
      setTransitionPhase("entering");
    }, GARAGE_TIMELINE.SWAP_DELAY_MS);

    // Unlock navigation and settle phase
    lockTimerRef.current = setTimeout(() => {
      setTransitionPhase("idle");
      setIsLocked(false);
    }, GARAGE_TIMELINE.TOTAL_LOCK_MS);
  }, [isLocked]);

  const nextTeam = useCallback(() => {
    const nextIndex = (currentTeamIndex + 1) % GARAGE_TEAMS.length;
    triggerTransition(nextIndex);
  }, [currentTeamIndex, triggerTransition]);

  const prevTeam = useCallback(() => {
    const nextIndex = (currentTeamIndex - 1 + GARAGE_TEAMS.length) % GARAGE_TEAMS.length;
    triggerTransition(nextIndex);
  }, [currentTeamIndex, triggerTransition]);

  // Clean up timers on unmount
  React.useEffect(() => {
    return () => {
      if (swapTimerRef.current) clearTimeout(swapTimerRef.current);
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    };
  }, []);

  return (
    <GarageContext.Provider
      value={{
        currentTeamIndex,
        displayTeamIndex,
        transitionPhase,
        isLocked,
        nextTeam,
        prevTeam,
      }}
    >
      {children}
    </GarageContext.Provider>
  );
}

export function useGarage() {
  const context = useContext(GarageContext);
  if (!context) {
    throw new Error("useGarage must be used within a GarageProvider");
  }
  return context;
}
