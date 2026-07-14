/**
 * Centralized timeline timings (in seconds/milliseconds)
 * and spring configurations to ensure synchronized motion.
 */

export const GARAGE_TIMELINE = {
  // Time in ms before index switches and new car slides in
  SWAP_DELAY_MS: 500,
  
  // Time in ms for the total transition lock to be active
  TOTAL_LOCK_MS: 1300,

  // Exit animation properties
  exit: {
    duration: 0.5,
    ease: [0.3, 0.0, 0.2, 1], // Confident standard cubic bezier
  },

  // Entry spring properties for that heavy mechanical overshoot
  carSpring: {
    type: "spring",
    stiffness: 85,
    damping: 14,
    mass: 1.3,
  },

  // Base fade/slide properties for texts and backgrounds
  fade: {
    duration: 0.6,
    ease: "easeOut",
  },
} as const;
