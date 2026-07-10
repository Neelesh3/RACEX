"use client";

import { News } from "@/types/news";
import { NewsCard } from "./NewsCard";

interface NewsGridProps {
  news: News[];
}

export function NewsGrid({ news }: NewsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {news.map((item, index) => (
        <NewsCard key={item.id} news={item} index={index} />
      ))}
    </div>
  );
}