"use client";

import React, { useEffect, useRef } from "react";
import { useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { SLOW_TRANSITION } from "@/constants/animation-variants";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const countRef = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const inView = useInView(countRef, { once: true, margin: "-40px" });

  useEffect(() => {
    if (inView) {
      // Consume duration and ease from centralized SLOW_TRANSITION token
      const animDuration = duration ?? SLOW_TRANSITION.duration;
      const ease = SLOW_TRANSITION.ease;

      const controls = animate(count, value, {
        duration: animDuration,
        ease: ease,
      });

      return () => controls.stop();
    }
  }, [inView, count, value, duration]);

  // Update node textContent directly to avoid triggering cascading React render updates
  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (countRef.current) {
        countRef.current.textContent = `${prefix}${latest}${suffix}`;
      }
    });
  }, [rounded, prefix, suffix]);

  return (
    <span ref={countRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
