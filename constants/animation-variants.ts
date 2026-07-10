/**
 * Animation Variants for Navigation Components
 * Centralized animation definitions for better performance and consistency
 */

import { TRANSITIONS } from "@/constants/colors";

/**
 * Navbar entrance animation
 */
export const NAVBAR_ENTRANCE = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
} as const;

/**
 * Staggered container animations for nav items
 */
export const STAGGER_CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
} as const;

/**
 * Actions stagger variants with longer delay
 */
export const ACTIONS_CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
} as const;

/**
 * Individual nav item slide-in animation
 */
export const NAV_ITEM_VARIANT = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: TRANSITIONS.normal / 1000 },
  },
} as const;

/**
 * Action button slide-in from right
 */
export const ACTION_ITEM_VARIANT = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: TRANSITIONS.normal / 1000 },
  },
} as const;

/**
 * Mobile nav drawer slide-in animation
 */
export const MOBILE_NAV_ITEM_VARIANT = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: TRANSITIONS.normal / 1000 },
  },
} as const;

/**
 * Dropdown menu entrance animation
 */
export const DROPDOWN_ENTRANCE = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: TRANSITIONS.fast / 1000 },
} as const;

/**
 * Button micro-interaction
 */
export const BUTTON_HOVER_TAP = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
} as const;

/**
 * Logo entrance animation
 */
export const LOGO_ENTRANCE = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: TRANSITIONS.normal / 1000 },
} as const;

/**
 * Logo text fade-in
 */
export const LOGO_TEXT_ENTRANCE = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: TRANSITIONS.normal / 1000,
    delay: 0.1,
  },
} as const;

/**
 * Notification badge pop animation
 */
export const BADGE_POP = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
} as const;

/**
 * Gradient line fade-in
 */
export const GRADIENT_LINE_ENTRANCE = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
} as const;

/**
 * Active indicator transition (layoutId added per-component for uniqueness)
 */
export const ACTIVE_INDICATOR_TRANSITION = {
  transition: { duration: TRANSITIONS.fast / 1000 },
} as const;
