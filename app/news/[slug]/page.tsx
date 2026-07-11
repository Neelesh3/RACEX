import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { news } from "@/lib/news";
import { newsDetails } from "@/lib/news-details";

import { ArticleHero } from "@/components/news/ArticleHero";
import { NewsContent } from "@/components/news/NewsContent";
import { RelatedNews } from "@/components/news/RelatedNews";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

interface NewsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return news.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | RACEX",
    };
  }

  return {
    title: `${article.title} | RACEX`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({
  params,
}: NewsPageProps) {
  const { slug } = await params;

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const details = newsDetails[article.id];

  if (!details) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-background space-y-8 pb-12">
        {/* Article Hero */}
        <ArticleHero news={article} details={details} />

        {/* Content sections wrapped inside a single max-width container */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-16">
          <NewsContent news={article} details={details} />

          <RelatedNews news={article} details={details} />
        </div>

        {/* Continue Exploring CTA Section */}
        <section className="border-y border-[#242424] bg-[#050505] py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <span className="mb-4 rounded-full border border-[#242424] bg-[#111111] px-4 py-1 text-sm font-medium text-neutral-400">
                Continue Exploring
              </span>

              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Stay Up to Date with Formula One
              </h2>

              <p className="mt-6 max-w-2xl text-lg text-neutral-400">
                Explore the profiles of current grid drivers, track championship standings, and follow the next Grand Prix weekend schedule.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/drivers">
                  <Button size="lg" className="bg-[#E10600] hover:bg-[#E10600]/90 text-white font-semibold">
                    Explore Drivers
                  </Button>
                </Link>

                <Link href="/races">
                  <Button variant="outline" size="lg" className="border-[#242424] text-white hover:bg-[#111111] font-semibold">
                    View Races
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
