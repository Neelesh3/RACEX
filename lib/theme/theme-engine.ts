import { CONSTRUCTOR_THEMES, NEUTRAL_THEME, type ConstructorTheme } from "./theme-config";

export function getThemeForConstructor(id: string): ConstructorTheme {
  const normalizedId = id.trim().toLowerCase();
  
  if (normalizedId.includes("sauber") || normalizedId.includes("kick")) {
    return CONSTRUCTOR_THEMES["sauber"];
  }
  
  if (normalizedId.includes("racing-bulls") || normalizedId.includes("rb") || normalizedId.includes("vcarb")) {
    return CONSTRUCTOR_THEMES["racing-bulls"];
  }

  return CONSTRUCTOR_THEMES[normalizedId] || NEUTRAL_THEME;
}
