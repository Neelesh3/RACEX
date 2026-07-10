"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAVBAR_ENTRANCE, GRADIENT_LINE_ENTRANCE } from "@/constants/animation-variants";
import { useScrolledState } from "@/hooks/useScrolledState";
import { NavbarLogo } from "./navbar-logo";
import { NavbarLinks } from "./navbar-links";
import { NavbarActions } from "./navbar-actions";
import { MobileNav } from "./mobile-nav";

/**
 * Navbar Component
 * Premium responsive RaceX navigation bar with scroll-triggered glassmorphism
 *
 * Features:
 * - Responsive design (320px-1920px)
 * - Scroll-triggered glassmorphism effect
 * - Smooth animations
 * - Full accessibility
 * - Mobile drawer navigation
 * - Optimized performance with custom scroll hook
 * - Avoids hydration mismatches with suppressHydrationWarning
 */
function NavbarContent() {
  const isScrolled = useScrolledState();

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "border-b border-white/10 bg-background/40 backdrop-blur-md supports-backdrop-filter:bg-background/30"
          : "bg-transparent"
      )}      suppressHydrationWarning      {...NAVBAR_ENTRANCE}
      role="banner"
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Left: Logo */}
        <NavbarLogo />

        {/* Center: Navigation Links (Desktop Only) */}
        <NavbarLinks />

        {/* Right: Actions & Mobile Menu */}
        <div className="flex items-center gap-2" role="group" aria-label="Navbar controls">
          <NavbarActions />
          <MobileNav />
        </div>
      </nav>

      {/* Subtle gradient line at bottom when scrolled */}
      {isScrolled && (
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          aria-hidden="true"
          {...GRADIENT_LINE_ENTRANCE}
        />
      )}
    </motion.header>
  );
}

/**
 * Exported memoized Navbar
 * Prevents re-renders when parent updates
 */
export const Navbar = memo(NavbarContent);
