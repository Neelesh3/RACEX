"use client";

import { createContext } from "react";
import type { ConstructorTheme } from "./theme-config";

export interface ThemeContextProps {
  currentTheme: ConstructorTheme;
  setTheme: (id: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
