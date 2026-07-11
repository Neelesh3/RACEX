"use client";

import { motion } from "framer-motion";
import { news as allNews } from "@/lib/news";
import { NewsCard } from "@/components/news/NewsCard";
import type { News } from "@/types/news";
import type { NewsDetails } from "@/types/news-details";
import { Newspaper } from "lucide-react";

interface RelatedNewsProps {
  news: News;
  details: NewsDetails;
}

export function RelatedNews({ news, details }: RelatedNewsProps) {
  // Resolve slugs to news items, filtering out the current article if it references itself
  const relatedArticles = details.relatedNews
    .filter((slug) => slug !== news.slug)
    .map((slug) => allNews.find((item) => item.slug === slug))
    .filter((item): item is News => !!item);

  // If no related articles exist, render a premium empty state
  if (relatedArticles.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center rounded-[20px] border border-[#242424] bg-[#111111] p-12 text-center max-w-xl mx-auto"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#242424] bg-[#050505]">
          <Newspaper className="h-5 w-5 text-neutral-500" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">No Related Articles</h3>
        <p className="text-xs text-neutral-400">
          Continue exploring other Formula One categories from the main menu.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-white">Related Articles</h2>
        <p className="text-xs text-neutral-500 mt-1">
          Continue reading the latest Formula One stories.
        </p>
      </div>

      {/* Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedArticles.map((article, index) => (
          <NewsCard key={article.id} news={article} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
