/**
 * RaceX Design System - Color Tokens
 * Premium Formula 1 platform color palette
 */

export const COLORS = {
  // Primary Brand
  primary: "#E10600", // Ferrari Red - RaceX accent
  background: "#050505", // Deep black
  foreground: "#FFFFFF", // White text

  // Neutrals
  slate: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
    950: "#020617",
  },

  // Semantic
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",

  // Glass effect
  glass: "rgba(255, 255, 255, 0.05)",
  glassBorder: "rgba(255, 255, 255, 0.1)",
} as const;

export const TRANSITIONS = {
  fast: 150,
  normal: 200,
  slow: 300,
} as const;
