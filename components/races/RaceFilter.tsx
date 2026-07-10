"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface RaceFilterProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export function RaceFilter({
  searchTerm,
  setSearchTerm,
}: RaceFilterProps) {
  return (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

      <Input
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by race, country or circuit..."
        className="h-12 rounded-xl border-white/10 bg-zinc-950 pl-12 text-white placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-white/20"
      />
    </div>
  );
}