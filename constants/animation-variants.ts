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

/**
 * ============================================================================
 * Centralized Premium Motion System Transitions & Variants
 * ============================================================================
 */

/**
 * Standard transition curves
 */
export const DEFAULT_TRANSITION = {
  duration: TRANSITIONS.normal / 1000,
  ease: [0.22, 1, 0.36, 1],
} as const;

export const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
} as const;

export const SLOW_TRANSITION = {
  duration: TRANSITIONS.slow / 1000,
  ease: [0.22, 1, 0.36, 1],
} as const;

/**
 * Centralized Fade & Directional entry variants
 */
export const FADE_IN_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: DEFAULT_TRANSITION,
  },
} as const;

export const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: DEFAULT_TRANSITION,
  },
} as const;

export const FADE_DOWN_VARIANTS = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: DEFAULT_TRANSITION,
  },
} as const;

export const FADE_LEFT_VARIANTS = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: DEFAULT_TRANSITION,
  },
} as const;

export const FADE_RIGHT_VARIANTS = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: DEFAULT_TRANSITION,
  },
} as const;

/**
 * Centralized Scale & Zoom entry variants
 */
export const SCALE_IN_VARIANTS = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: DEFAULT_TRANSITION,
  },
} as const;

export const ZOOM_IN_VARIANTS = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: DEFAULT_TRANSITION,
  },
} as const;

/**
 * Unified Layout & Page Transitions
 */
export const PAGE_TRANSITION_VARIANTS = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: DEFAULT_TRANSITION,
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: DEFAULT_TRANSITION,
  },
} as const;

export const SECTION_TRANSITION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: SLOW_TRANSITION,
  },
} as const;

/**
 * Text progressive segment animation variants
 */
export const TEXT_CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
} as const;

export const TEXT_CHILD_VARIANTS = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: DEFAULT_TRANSITION,
  },
} as const;

