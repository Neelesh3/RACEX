"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { NAVIGATION_ITEMS } from "@/constants/routes";
import {
  STAGGER_CONTAINER_VARIANTS,
  NAV_ITEM_VARIANT,
} from "@/constants/animation-variants";
import { NavItem } from "./nav-item";

/**
 * NavbarLinks Component
 * Center navigation links with staggered entrance animation
 * Hidden on mobile, displayed on large screens
 * Memoized to prevent unnecessary re-renders
 */
function NavbarLinksContent() {
  return (
    <motion.nav
      variants={STAGGER_CONTAINER_VARIANTS}
      initial="hidden"
      animate="visible"
      className="hidden items-center gap-1 lg:flex"
      role="navigation"
      aria-label="Main navigation"
    >
      {NAVIGATION_ITEMS.map((item) => (
        <motion.div key={item.href} variants={NAV_ITEM_VARIANT}>
          <NavItem
            href={item.href}
            label={item.label}
            description={item.description}
          />
        </motion.div>
      ))}
    </motion.nav>
  );
}

/**
 * Exported memoized NavbarLinks
 */
export const NavbarLinks = memo(NavbarLinksContent);
