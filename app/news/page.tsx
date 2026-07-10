"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Footer } from "@/components/sections/footer";

import { NewsHero } from "@/components/news/NewsHero";
import { FeaturedNews } from "@/components/news/FeaturedNews";
import { NewsGrid } from "@/components/news/NewsGrid";
import { NewsStats } from "@/components/news/NewsStats";

import { Button } from "@/components/ui/button";

import { featuredNews, latestNews } from "@/lib/news";


export default function NewsPage() {

const filteredNews = latestNews;
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <NewsHero />
        </section>



<section className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
  <FeaturedNews news={featuredNews} />

  <NewsGrid news={filteredNews} />
</section>

<section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
  <NewsStats />
</section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 md:p-12"
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                Never Miss a Formula One Story
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Stay updated with race weekends, driver transfers, technical
                innovations and Formula One analysis.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/drivers">
                  <Button size="lg">Explore Drivers</Button>
                </Link>

                <Link href="/races">
                  <Button size="lg" variant="outline">
                    View Races
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}