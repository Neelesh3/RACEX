import Link from "next/link";
import { notFound } from "next/navigation";

import { drivers } from "@/lib/drivers";
import { driverDetails } from "@/lib/driver-details";

import { DriverHero } from "@/components/drivers/DriverHero";
import { CareerStats } from "@/components/drivers/CareerStats";
import { DriverBiography } from "@/components/drivers/DriverBiography";
import { CareerTimeline } from "@/components/drivers/CareerTimeline";
import { DriverAchievements } from "@/components/drivers/DriverAchievements";
import { DriverGallery } from "@/components/drivers/DriverGallery";
import DriverSocialLinks from "@/components/drivers/DriverSocialLinks";

import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";

import type { Metadata } from "next";
import type { Driver } from "@/types/driver";
import type { DriverDetails } from "@/types/driver-details";

interface DriverPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return drivers.map((driver) => ({
    slug: driver.slug,
  }));
}

export async function generateMetadata({
  params,
}: DriverPageProps): Promise<Metadata> {
  const { slug } = await params;

  const driver = drivers.find((item) => item.slug === slug);

  if (!driver) {
    return {
      title: "Driver Not Found | RACEX",
    };
  }

  return {
    title: `${driver.name} | RACEX`,
    description: `Explore the Formula One career, achievements, statistics and biography of ${driver.name}.`,
  };
}

export default async function DriverPage({
  params,
}: DriverPageProps) {
  const { slug } = await params;

  const driver: Driver | undefined = drivers.find(
    (item) => item.slug === slug
  );

  if (!driver) {
    notFound();
  }

  const details: DriverDetails | undefined = driverDetails[driver.id];

  if (!details) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-background">
        <DriverHero driver={driver} details={details} />

        <CareerStats details={details} />

<DriverBiography details={details} />

        <CareerTimeline details={details} />

        <DriverAchievements details={details} />

<DriverGallery details={details} />

<DriverSocialLinks details={details} />

        <section className="border-y bg-muted/30">
          <div className="container mx-auto px-4 py-20">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <span className="mb-4 rounded-full border px-4 py-1 text-sm font-medium">
                Continue Exploring
              </span>

              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Discover More Formula One Legends
              </h2>

              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Explore every Formula One driver, compare careers,
                discover race statistics and follow the stories behind
                the greatest names in motorsport.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/drivers">
                  <Button size="lg">
                    Explore Drivers
                  </Button>
                </Link>

                <Link href="/races">
                  <Button variant="outline" size="lg">
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