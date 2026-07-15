"use client";

import { useContext } from "react";
import { CursorContext } from "./CursorProvider";

export function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}
