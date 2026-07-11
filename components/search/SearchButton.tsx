"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearch } from "@/components/search/SearchContext";

export function SearchButton() {
  const { toggle } = useSearch();

  return (
    <>
      {/* Mobile: Square Icon Button */}
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={toggle}
        aria-label="Open search"
        className="md:hidden text-neutral-400 hover:text-white"
      >
        <Search className="h-5 w-5" />
      </Button>

      {/* Desktop: Rounded Premium Shortcut Button */}
      <button
        type="button"
        onClick={toggle}
        aria-label="Open search"
        className="hidden md:flex items-center gap-2 w-full md:max-w-[180px] lg:max-w-[220px] h-9 px-3 rounded-full bg-[#111111] hover:bg-[#181818] border border-[#242424] hover:border-neutral-700 text-left text-xs text-neutral-400 transition-all focus:outline-none focus:ring-1 focus:ring-[#E10600]/50"
      >
        <Search className="h-4 w-4 shrink-0 text-neutral-500" />
        <span className="flex-1 text-neutral-500 font-medium">Search...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-[#242424] bg-[#050505] px-1.5 font-mono text-[9px] font-bold text-neutral-500">
          Ctrl K
        </kbd>
      </button>
    </>
  );
}
