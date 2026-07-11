"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SPRING_TRANSITION } from "@/constants/animation-variants";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export function HoverCard({ children, className }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.015,
        borderColor: "rgba(225, 6, 0, 0.3)",
        boxShadow: "0 12px 30px -10px rgba(0, 0, 0, 0.7), 0 0 20px 0 rgba(225, 6, 0, 0.08)",
      }}
      transition={SPRING_TRANSITION}
      className={cn(
        "overflow-hidden rounded-[20px] border border-[#242424] bg-[#111111] transition-colors duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
