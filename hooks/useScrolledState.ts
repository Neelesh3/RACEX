"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 32; // pixels

/**
 * useScrolledState Hook
 * Manages scroll-triggered navbar state with optimized performance
 * 
 * Features:
 * - Encapsulates scroll detection logic
 * - Uses RequestAnimationFrame for smooth 60fps performance
 * - Memoizes scroll state to prevent unnecessary updates
 * - Easy to test and reuse across components
 * 
 * Returns:
 * - isScrolled: boolean indicating if viewport has scrolled past threshold
 */
export function useScrolledState(threshold: number = SCROLL_THRESHOLD) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Use RequestAnimationFrame for better performance
    let frameId: number | null = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        const scrolled = lastScrollY > threshold;
        setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
        frameId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [threshold]);

  return isScrolled;
}
