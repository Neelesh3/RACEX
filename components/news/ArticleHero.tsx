"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, User, Clock } from "lucide-react";
import type { News } from "@/types/news";
import type { NewsDetails } from "@/types/news-details";

interface ArticleHeroProps {
  news: News;
  details: NewsDetails;
}

export function ArticleHero({ news, details }: ArticleHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#242424] bg-[#050505] py-16 lg:py-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E10600]/5 via-zinc-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(225,6,0,0.08),transparent_50%)]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #E10600 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* Left Column: Metadata & Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start text-left"
          >
            {/* Category Tag */}
            <div className="mb-6">
              <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-400 backdrop-blur">
                {news.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              {news.title}
            </h1>

            {/* Subtitle */}
            {details.subtitle && (
              <p className="mt-4 text-base leading-relaxed text-zinc-300">
                {details.subtitle}
              </p>
            )}

            {/* Metadata Info Row */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 border-y border-[#242424] py-4 w-full text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-[#E10600]" />
                <span>By {news.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-[#E10600]" />
                <span>{news.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#E10600]" />
                <span>{news.readTime} Read</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/news">
                <Button size="lg" className="bg-[#E10600] hover:bg-[#E10600]/90 text-white font-semibold gap-2">
                  <ArrowLeft className="h-4.5 w-4.5" />
                  Back to News
                </Button>
              </Link>
              <Link href="/drivers">
                <Button size="lg" variant="outline" className="border-[#242424] text-white hover:bg-[#111111] font-semibold gap-2">
                  Explore Drivers
                  <ArrowRight className="h-4.5 w-4.5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.015 }}
            className="relative aspect-video overflow-hidden rounded-[20px] border border-[#242424] bg-[#111111] w-full"
          >
            {news.image && (
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
