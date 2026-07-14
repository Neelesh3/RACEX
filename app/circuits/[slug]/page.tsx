import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { circuits } from "@/lib/circuits";
import { circuitDetails } from "@/lib/circuit-details";
import { CircuitProfilePage } from "@/components/circuits/CircuitProfilePage";

interface CircuitPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return circuits.map((circuit) => ({
    slug: circuit.slug,
  }));
}

export async function generateMetadata({
  params,
}: CircuitPageProps): Promise<Metadata> {
  const { slug } = await params;
  const circuit = circuits.find((item) => item.slug === slug);

  if (!circuit) {
    return {
      title: "Circuit Not Found | RACEX",
    };
  }

  return {
    title: `${circuit.name} | RACEX`,
    description: `Explore the track specifications, telemetry, layout, history, and records of the ${circuit.name}.`,
  };
}

export default async function CircuitPage({ params }: CircuitPageProps) {
  const { slug } = await params;

  const circuit = circuits.find((item) => item.slug === slug);
  if (!circuit) {
    notFound();
  }

  const details = circuitDetails[circuit.id];
  if (!details) {
    notFound();
  }

  return <CircuitProfilePage circuit={circuit} details={details} />;
}
