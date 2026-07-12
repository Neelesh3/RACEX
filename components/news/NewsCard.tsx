"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { News } from "@/types/news";
import { Clock, User } from "lucide-react";

interface NewsCardProps {
  news: News;
  index: number;
}

export function NewsCard({ news, index }: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col overflow-hidden rounded-[20px] border border-[#242424] bg-[#111111] transition-all duration-300 hover:border-neutral-700/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
    >
      <Link href={`/news/${news.slug}`} className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-[#E10600]/30 bg-[#E10600]/10 px-3 py-1 text-xs font-semibold text-[#E10600]">
          {news.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/news/${news.slug}`}>
          <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-[#E10600]">
            {news.title}
          </h3>
        </Link>
        <p className="mb-4 text-sm leading-relaxed text-neutral-400 line-clamp-2">
          {news.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-4 border-t border-[#242424] pt-4">
          <div className="flex items-center gap-1.5 text-xs text-neutral-500">
            <User className="h-3.5 w-3.5" />
            <span>{news.author}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-neutral-500">
            <Clock className="h-3.5 w-3.5" />
            <span>{news.publishedAt}</span>
          </div>
          <span className="ml-auto text-xs text-neutral-500">{news.readTime}</span>
        </div>
      </div>
    </motion.article>
  );
}