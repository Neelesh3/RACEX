"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  ACTIONS_CONTAINER_VARIANTS,
  ACTION_ITEM_VARIANT,
} from "@/constants/animation-variants";
import { SearchButton } from "@/components/search/SearchButton";

/**
 * NavbarActions Component
 * Right-side navbar actions: search, notifications, profile
 * Memoized to prevent unnecessary re-renders
 *
 * Features:
 * - Notification badge with animation
 * - Search trigger
 * - Profile menu integration
 * - Full keyboard accessibility
 *
 * Note: Theme toggle moved to global context (not navbar responsibility)
 */
function NavbarActionsContent() {
  return (
    <motion.div
      variants={ACTIONS_CONTAINER_VARIANTS}
      initial="hidden"
      animate="visible"
      className="flex items-center gap-1"
      role="group"
      aria-label="Navbar actions"
    >
      {/* Search Button */}
      <motion.div variants={ACTION_ITEM_VARIANT}>
        <SearchButton />
      </motion.div>
    </motion.div>
  );
}

/**
 * Exported memoized NavbarActions
 */
export const NavbarActions = memo(NavbarActionsContent);
