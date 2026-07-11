import type { News } from "./news";

export interface NewsDetailsSection {
  heading?: string;
  content: string;
}

export interface NewsDetailsGalleryItem {
  image: string;
  caption: string;
}

export interface NewsDetails {
  newsId: News["id"];
  subtitle?: string;
  sections: NewsDetailsSection[];
  blockquote?: string;
  relatedNews: News["slug"][];
  gallery: NewsDetailsGalleryItem[];
}
