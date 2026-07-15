"use client";

import { ReactNode } from "react";
import { Navbar } from "@/components/navigation";
import { SearchProvider } from "@/components/search/SearchContext";
import { GlobalSearch } from "@/components/search/GlobalSearch";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { AudioProvider } from "@/lib/audio/audio-context";
import { CursorProvider, Cursor } from "@/components/cursor";

interface RootLayoutClientProps {
  children: ReactNode;
}

/**
 * RootLayoutClient Component
 * Client-side layout wrapper that includes the navbar
 * Separates server and client concerns following Next.js best practices
 */
export function RootLayoutClient({ children }: RootLayoutClientProps) {
  return (
    <ThemeProvider>
      <AudioProvider>
        <CursorProvider>
          <SearchProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <GlobalSearch />
            <Cursor />
          </SearchProvider>
        </CursorProvider>
      </AudioProvider>
    </ThemeProvider>
  );
}
