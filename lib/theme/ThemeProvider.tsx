"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { ThemeContext } from "./ThemeContext";
import { getThemeForConstructor } from "./theme-engine";
import { NEUTRAL_THEME, type ConstructorTheme } from "./theme-config";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentThemeState] = useState<ConstructorTheme>(NEUTRAL_THEME);

  // Load selection from localStorage safely on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("racex-constructor-theme");
      if (savedTheme) {
        const nextTheme = getThemeForConstructor(savedTheme);
        requestAnimationFrame(() => {
          setCurrentThemeState(nextTheme);
        });
      }
    } catch (e) {
      console.warn("localStorage is not available:", e);
    }
  }, []);

  const setTheme = useCallback((id: string) => {
    const nextTheme = getThemeForConstructor(id);
    setCurrentThemeState(nextTheme);

    try {
      localStorage.setItem("racex-constructor-theme", id);
    } catch (e) {
      console.warn("Could not save theme to localStorage:", e);
    }

    // Set CSS Custom Properties on document root for smooth transitions
    const root = document.documentElement;
    root.style.setProperty("--theme-primary", nextTheme.primary);
    root.style.setProperty("--theme-secondary", nextTheme.secondary);
    root.style.setProperty("--theme-accent", nextTheme.accent);
    root.style.setProperty("--theme-background", nextTheme.background);
    root.style.setProperty("--theme-glow", nextTheme.glow);
    root.style.setProperty("--theme-halo", nextTheme.halo);
    root.style.setProperty("--theme-border", nextTheme.border);
    root.style.setProperty("--theme-shadow", nextTheme.shadow);
    root.style.setProperty("--theme-text", nextTheme.text);
    root.style.setProperty("--theme-loader-accent", nextTheme.loaderAccent);
    root.style.setProperty("--theme-cursor-accent", nextTheme.cursorAccent);
  }, []);

  // Sync initial CSS custom properties on load
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--theme-primary", currentTheme.primary);
    root.style.setProperty("--theme-secondary", currentTheme.secondary);
    root.style.setProperty("--theme-accent", currentTheme.accent);
    root.style.setProperty("--theme-background", currentTheme.background);
    root.style.setProperty("--theme-glow", currentTheme.glow);
    root.style.setProperty("--theme-halo", currentTheme.halo);
    root.style.setProperty("--theme-border", currentTheme.border);
    root.style.setProperty("--theme-shadow", currentTheme.shadow);
    root.style.setProperty("--theme-text", currentTheme.text);
    root.style.setProperty("--theme-loader-accent", currentTheme.loaderAccent);
    root.style.setProperty("--theme-cursor-accent", currentTheme.cursorAccent);
  }, [currentTheme]);

  const value = useMemo(() => ({
    currentTheme,
    setTheme,
  }), [currentTheme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
