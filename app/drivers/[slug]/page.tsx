import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { drivers } from "@/lib/drivers";
import { driverDetails } from "@/lib/driver-details";
import { DriverProfilePage } from "@/components/drivers/DriverProfilePage";

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

export default async function DriverPage({ params }: DriverPageProps) {
  const { slug } = await params;

  const driver = drivers.find((item) => item.slug === slug);
  if (!driver) {
    notFound();
  }

  const details = driverDetails[driver.id];
  if (!details) {
    notFound();
  }

  return <DriverProfilePage driver={driver} details={details} />;
}