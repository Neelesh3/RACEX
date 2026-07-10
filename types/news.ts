export interface News {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category:
    | "Race"
    | "Driver"
    | "Team"
    | "Technical"
    | "Transfer"
    | "History";
  author: string;
  publishedAt: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}