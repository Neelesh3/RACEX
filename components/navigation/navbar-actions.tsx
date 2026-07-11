"use client";

import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import {
  ACTIONS_CONTAINER_VARIANTS,
  ACTION_ITEM_VARIANT,
  BADGE_POP,
} from "@/constants/animation-variants";
import { ProfileMenu } from "./profile-menu";
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
  // Notification state is hardcoded to true since it's UI-only
  // Connect to real notification system when backend API is ready
  const hasNotification = true;

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

      {/* Notifications */}
      <motion.div variants={ACTION_ITEM_VARIANT}>
        <Button
          variant="ghost"
          size="icon"
          aria-label={hasNotification ? "You have 1 notification" : "No notifications"}
          className="relative hidden sm:inline-flex"
        >
          <Bell className="size-5" />
          <AnimatePresence>
            {hasNotification && (
              <motion.div
                className="absolute top-1.5 right-1 h-2 w-2 rounded-full bg-red-500"
                aria-hidden="true"
                {...BADGE_POP}
              />
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Profile Menu */}
      <motion.div variants={ACTION_ITEM_VARIANT}>
        <ProfileMenu />
      </motion.div>
    </motion.div>
  );
}

/**
 * Exported memoized NavbarActions
 */
export const NavbarActions = memo(NavbarActionsContent);
