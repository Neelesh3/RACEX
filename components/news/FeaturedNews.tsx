"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { News } from "@/types/news";
import { ArrowRight } from "lucide-react";

interface FeaturedNewsProps {
  news: News;
}

export function FeaturedNews({ news }: FeaturedNewsProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-[20px] border border-[#242424] bg-[#111111]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="relative aspect-[16/10] overflow-hidden lg:col-span-3 lg:aspect-auto">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent lg:bg-gradient-to-r" />
        </div>
        <div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-12">
          <span className="mb-3 w-fit rounded-full border border-[#E10600]/30 bg-[#E10600]/10 px-3 py-1 text-xs font-semibold text-[#E10600]">
            {news.category}
          </span>
          <h2 className="mb-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
            {news.title}
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-neutral-400 line-clamp-3">
            {news.excerpt}
          </p>
          <Link href={`/news/${news.slug}`}>
            <Button className="h-12 w-fit rounded-[14px] bg-[#E10600] px-8 text-sm font-semibold text-white hover:bg-[#E10600]/90">
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}