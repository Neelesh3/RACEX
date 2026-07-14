"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, Shield, Calendar, Compass, Newspaper, Clock } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { useSearch } from "@/components/search/SearchContext";
import { searchIndex } from "@/lib/search";
import type { SearchItem } from "@/types/search";

// Category configuration mapping icons and specific badges color styles
const CATEGORY_CONFIG = {
  driver: {
    icon: User,
    badgeClass: "border-red-500/20 bg-red-500/10 text-red-400",
  },
  constructor: {
    icon: Shield,
    badgeClass: "border-blue-500/20 bg-blue-500/10 text-blue-400",
  },
  race: {
    icon: Calendar,
    badgeClass: "border-amber-500/20 bg-amber-500/10 text-amber-400",
  },
  circuit: {
    icon: Compass,
    badgeClass: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  },
} as const;

export function GlobalSearch() {
  const router = useRouter();
  const { isOpen, setIsOpen, toggle } = useSearch();
  const [searchQuery, setSearchQuery] = useState("");

  // Initialize recent searches directly from localStorage to prevent useEffect setState warnings
  const [recentSearches, setRecentSearches] = useState<SearchItem[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("racex-recent-searches");
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (e) {
          console.error("Failed to parse recent searches from localStorage", e);
        }
      }
    }
    return [];
  });

  // Keyboard shortcut listener (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle]);

  // Synchronize search query reset when dialog state changes
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setSearchQuery("");
    }
  };

  const handleSelect = (item: SearchItem) => {
    // Update recent searches in state & localStorage (limit to 5)
    const updated = [item, ...recentSearches.filter((x) => x.id !== item.id)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("racex-recent-searches", JSON.stringify(updated));

    // Close command menu and route
    setIsOpen(false);
    setSearchQuery("");
    router.push(item.href);
  };

  // Group search index items by category
  const groupedIndex = {
    driver: searchIndex.filter((item) => item.category === "driver"),
    constructor: searchIndex.filter((item) => item.category === "constructor"),
    race: searchIndex.filter((item) => item.category === "race"),
    circuit: searchIndex.filter((item) => item.category === "circuit"),
  };

  return (
    <CommandDialog
      open={isOpen}
      onOpenChange={handleOpenChange}
      title="Global Navigation Search"
      description="Quickly jump to drivers, teams, races, circuits, and news."
      className="border border-[#242424] bg-[#0A0A0A]/95 backdrop-blur-md rounded-xl overflow-hidden"
    >
      <Command className="bg-transparent border-none">
        <CommandInput
          placeholder="Search drivers, constructors, races, circuits..."
          value={searchQuery}
          onValueChange={setSearchQuery}
          className="border-[#242424] focus:border-[#E10600]/30"
        />

        <CommandList className="p-2">
          {/* Empty State Banner */}
          <CommandEmpty className="py-12 text-center">
            <div className="flex flex-col items-center justify-center">
              <Newspaper className="h-8 w-8 text-neutral-600 mb-3 animate-pulse" />
              <p className="text-sm font-semibold text-neutral-400">No results found</p>
              <p className="text-xs text-neutral-500 mt-1 max-w-[240px]">
                We could not find any matches. Try adjusting your keywords.
              </p>
            </div>
          </CommandEmpty>

          {/* Recent Searches (Only show if query is empty) */}
          {searchQuery.trim() === "" && recentSearches.length > 0 && (
            <CommandGroup heading="Recent Searches" className="mb-4">
              {recentSearches.map((item) => {
                const config = CATEGORY_CONFIG[item.category];
                return (
                  <CommandItem
                    key={`recent-${item.id}`}
                    value={`${item.title} ${item.subtitle} ${item.meta || ""} ${item.category}`}
                    onSelect={() => handleSelect(item)}
                    className="flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-colors border-b border-[#141414]/30 data-selected:bg-[#151515] data-selected:text-white"
                  >
                    <Clock className="h-4 w-4 text-neutral-500 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm truncate">{item.title}</span>
                        {item.meta && (
                          <span className="text-[10px] font-semibold text-neutral-500 bg-[#161616] px-1.5 py-0.5 rounded border border-[#242424]/40">
                            {item.meta}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-400 truncate mt-0.5">{item.subtitle}</p>
                    </div>
                    <span
                      className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${
                        config ? config.badgeClass : ""
                      }`}
                    >
                      {item.category}
                    </span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}

          {/* Dynamic Groups (Drivers, Teams, Races, Circuits, News) */}
          {Object.entries(groupedIndex).map(([category, items]) => {
            if (items.length === 0) return null;
            const config = CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG];
            const Icon = config ? config.icon : Newspaper;

            return (
              <CommandGroup
                key={category}
                heading={category.charAt(0).toUpperCase() + category.slice(1) + "s"}
                className="mb-2"
              >
                {items.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={`${item.title} ${item.subtitle} ${item.meta || ""} ${item.category}`}
                    onSelect={() => handleSelect(item)}
                    className="flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-colors border-b border-[#141414]/30 data-selected:bg-[#151515] data-selected:text-white"
                  >
                    <Icon className="h-4 w-4 text-neutral-400 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm truncate">{item.title}</span>
                        {item.meta && (
                          <span className="text-[10px] font-semibold text-neutral-500 bg-[#161616] px-1.5 py-0.5 rounded border border-[#242424]/40">
                            {item.meta}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-400 truncate mt-0.5">{item.subtitle}</p>
                    </div>
                    <span
                      className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${
                        config ? config.badgeClass : ""
                      }`}
                    >
                      {item.category}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            );
          })}
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
