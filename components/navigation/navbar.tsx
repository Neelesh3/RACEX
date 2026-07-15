"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GRADIENT_LINE_ENTRANCE } from "@/constants/animation-variants";
import { useScrolledState } from "@/hooks/useScrolledState";
import { NavbarLogo } from "./navbar-logo";
import { NavbarLinks } from "./navbar-links";
import { NavbarActions } from "./navbar-actions";
import { MobileNav } from "./mobile-nav";
import { useAudio } from "@/lib/audio/useAudio";

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
  const { isLoaderActive } = useAudio();
  const showNavbar = !isLoaderActive;

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "border-b border-[#242424]/60 bg-[#050505]/80 backdrop-blur-md"
          : "bg-transparent"
      )}
      suppressHydrationWarning
      initial={{ opacity: 0, y: -20 }}
      animate={showNavbar ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: showNavbar ? 0.2 : 0, ease: "easeOut" }}
      role="banner"
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
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
