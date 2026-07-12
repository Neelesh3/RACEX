"use client";

import { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LOGO_ENTRANCE,
  LOGO_TEXT_ENTRANCE,
  BUTTON_HOVER_TAP,
} from "@/constants/animation-variants";
import { ROUTES } from "@/constants/routes";

/**
 * NavbarLogo Component
 * Premium animated RaceX logo with entrance animation
 * Memoized to prevent unnecessary re-renders
 */
function NavbarLogoContent() {
  return (
    <motion.div className="shrink-0" {...LOGO_ENTRANCE}>
      <Link
        href={ROUTES.HOME}
        className="group flex items-center gap-2 rounded px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50"
        aria-label="RaceX home"
      >
        {/* Logo Icon */}
        <motion.div
          className="flex items-center justify-center"
          {...BUTTON_HOVER_TAP}
          aria-hidden="true"
        >
          <div className="relative h-[38px] w-[38px]">
            {/* Premium geometric logo design */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#E10600] to-[#c4001e]" />
            <div className="absolute inset-1 rounded-md bg-[#050505]" />
            <div className="absolute inset-0 flex items-center justify-center text-[15px] font-bold text-[#E10600]">
              RX
            </div>
          </div>
        </motion.div>

        {/* Logo Text */}
        <motion.div
          className="hidden items-center gap-1 sm:flex"
          {...LOGO_TEXT_ENTRANCE}
        >
          <span className="text-xl font-black tracking-tight text-white">
            RACE
          </span>
          <span className="text-xl font-black tracking-tight text-[#E10600]">
            X
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}

/**
 * Exported memoized NavbarLogo
 */
export const NavbarLogo = memo(NavbarLogoContent);
