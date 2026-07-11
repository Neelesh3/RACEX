"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  TEXT_CONTAINER_VARIANTS,
  TEXT_CHILD_VARIANTS,
  DEFAULT_TRANSITION,
} from "@/constants/animation-variants";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitBy?: "line" | "word";
}

export function AnimatedText({
  children,
  className,
  delay,
  duration,
  splitBy = "word",
}: AnimatedTextProps) {
  // Split segments by space or newline
  const segments = useMemo(() => {
    if (splitBy === "line") {
      return children.split("\n");
    }
    return children.split(" ");
  }, [children, splitBy]);

  // Derive staggered container settings without hardcoding values
  const containerVariants = useMemo(() => {
    return {
      hidden: TEXT_CONTAINER_VARIANTS.hidden,
      visible: {
        ...TEXT_CONTAINER_VARIANTS.visible,
        transition: {
          ...TEXT_CONTAINER_VARIANTS.visible.transition,
          ...(delay !== undefined && { delayChildren: delay }),
        },
      },
    };
  }, [delay]);

  // Derive child slide animation settings without hardcoding transition speeds
  const childTransition = useMemo(() => {
    return {
      ...DEFAULT_TRANSITION,
      ...(duration !== undefined && { duration }),
    };
  }, [duration]);

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className={className}
    >
      {segments.map((segment, idx) => {
        if (splitBy === "line") {
          return (
            <span key={idx} className="block overflow-hidden py-0.5">
              <motion.span
                variants={TEXT_CHILD_VARIANTS}
                transition={childTransition}
                className="block"
              >
                {segment}
              </motion.span>
            </span>
          );
        }

        return (
          <span key={idx} className="inline-block overflow-hidden mr-[0.25em] last:mr-0 py-0.5">
            <motion.span
              variants={TEXT_CHILD_VARIANTS}
              transition={childTransition}
              className="inline-block"
            >
              {segment}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
