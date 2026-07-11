export type SearchCategory = "driver" | "team" | "race" | "circuit" | "news";

export interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  category: SearchCategory;
  meta?: string;
}
