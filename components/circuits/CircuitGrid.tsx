"use client";

import { Circuit } from "@/types/circuit";
import { CircuitCard } from "./CircuitCard";

interface CircuitGridProps {
  circuits: Circuit[];
}

export function CircuitGrid({ circuits }: CircuitGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {circuits.map((circuit, index) => (
        <CircuitCard key={circuit.id} circuit={circuit} index={index} />
      ))}
    </div>
  );
}