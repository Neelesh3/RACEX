export type SearchCategory = "driver" | "constructor" | "race" | "circuit";

export interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  category: SearchCategory;
  meta?: string;
}
