"use client";

import React, { createContext, useState, useCallback } from "react";

export type CursorState = "default" | "hover" | "card" | "garage" | "text" | "hidden";

interface CursorContextProps {
  cursorState: CursorState;
  cursorLabel: string;
  setCursorState: (state: CursorState) => void;
  setCursorLabel: (label: string) => void;
  resetCursor: () => void;
}

export const CursorContext = createContext<CursorContextProps | undefined>(undefined);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [cursorLabel, setCursorLabel] = useState<string>("");

  const resetCursor = useCallback(() => {
    setCursorState("default");
    setCursorLabel("");
  }, []);

  return (
    <CursorContext.Provider
      value={{
        cursorState,
        cursorLabel,
        setCursorState,
        setCursorLabel,
        resetCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}
