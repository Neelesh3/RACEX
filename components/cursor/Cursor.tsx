"use client";

import React, { useEffect, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "./useCursor";
import { useTheme } from "@/lib/theme/theme-utils";
import { useAudio } from "@/lib/audio/useAudio";
import { CursorDot } from "./CursorDot";
import { CursorRing } from "./CursorRing";
import { CursorLabel } from "./CursorLabel";

export function Cursor() {
  const { cursorState, cursorLabel, setCursorState, resetCursor } = useCursor();
  const { currentTheme } = useTheme();
  const { isLoaderActive } = useAudio();

  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    return typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
  });

  // Position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Check prefers-reduced-motion on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    motionQuery.addEventListener("change", handleMotionChange);
    return () => motionQuery.removeEventListener("change", handleMotionChange);
  }, []);

  // Configure high-performance springs
  const dotSpringConfig = reducedMotion
    ? { stiffness: 10000, damping: 100 }
    : { stiffness: 1200, damping: 48, mass: 0.1 };

  const ringSpringConfig = reducedMotion
    ? { stiffness: 10000, damping: 100 }
    : { stiffness: 280, damping: 22, mass: 0.5 };

  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  // Pointer event listeners
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkDevice = () => {
      const isDesktop = window.innerWidth >= 1024;
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      return isDesktop && !isTouch;
    };

    if (!checkDevice()) return;

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseMove = (e: MouseEvent) => {
      // Ensure cursor is shown
      if (!isVisible) setIsVisible(true);

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Auto-detect text fields to hide custom cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const nodeName = target.nodeName.toLowerCase();
      const isTextInput =
        nodeName === "input" ||
        nodeName === "textarea" ||
        target.isContentEditable ||
        window.getComputedStyle(target).cursor === "text";

      if (isTextInput) {
        if (cursorState !== "text") {
          setCursorState("text");
        }
      } else {
        if (cursorState === "text") {
          resetCursor();
        }
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mousedown", handleMouseDown, { passive: true });
    document.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible, cursorState, setCursorState, resetCursor]);

  // Hide custom cursor under specific states
  const shouldHide =
    !isVisible ||
    isLoaderActive ||
    cursorState === "text" ||
    cursorState === "hidden";

  if (shouldHide) {
    return null;
  }

  // Fallback color if theme isn't fully loaded
  const cursorColor = currentTheme?.cursorAccent || currentTheme?.accent || "#E10600";

  return (
    <>
      <CursorRing
        x={ringX}
        y={ringY}
        color={cursorColor}
        state={cursorState}
        isClicked={isClicked}
      />
      <CursorDot
        x={dotX}
        y={dotY}
        color={cursorColor}
        isClicked={isClicked}
      />
      <CursorLabel
        x={ringX}
        y={ringY}
        label={cursorLabel}
        color={cursorColor}
      />
    </>
  );
}
