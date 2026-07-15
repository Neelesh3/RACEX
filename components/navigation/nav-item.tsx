"use client";

import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ACTIVE_INDICATOR_TRANSITION } from "@/constants/animation-variants";
import { cn } from "@/lib/utils";
import { useAudio } from "@/lib/audio/useAudio";

interface NavItemProps {
  href: string;
  label: string;
  description?: string;
  onClick?: () => void;
  className?: string;
  isMobile?: boolean;
}

/**
 * NavItem Component
 * Individual reusable navigation link with hover/active states
 * Memoized to prevent unnecessary re-renders
 *
 * Features:
 * - Active state indicator with smooth animation
 * - Screen reader support
 * - Keyboard accessible
 */
function NavItemContent({
  href,
  label,
  description,
  onClick,
  className,
  isMobile = false,
}: NavItemProps) {
  const pathname = usePathname();
  const { play } = useAudio();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  if (isMobile) {
    return (
      <Link
        href={href}
        onClick={() => {
          play("click");
          if (onClick) onClick();
        }}
        onMouseEnter={() => play("hover")}
        className={cn(
          "group relative block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200",
          "hover:bg-white/5",
          isActive && "text-red-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50",
          className
        )}
        aria-current={isActive ? "page" : undefined}
      >
        <div className="flex flex-col gap-0.5">
          <span className="text-foreground">{label}</span>
          {description && (
            <span className="text-xs text-muted-foreground">{description}</span>
          )}
        </div>
        {isActive && (
          <motion.div
            layoutId="mobileActiveIndicator"
            className="absolute left-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-red-500"
            aria-hidden="true"
            {...ACTIVE_INDICATOR_TRANSITION}
          />
        )}
      </Link>
    );
  }

  return (
    <motion.div className="relative">
      <Link
        href={href}
        onMouseEnter={() => play("hover")}
        onClick={() => {
          play("click");
          if (onClick) onClick();
        }}
        className={cn(
          "relative inline-flex items-center text-[15px] font-semibold tracking-wide transition-colors duration-200",
          "text-neutral-400 hover:text-white",
          isActive && "text-white",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600]/50 focus-visible:rounded px-2 py-1"
        )}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
        {isActive && (
          <motion.div
            layoutId="desktopActiveIndicator"
            className="absolute -bottom-2 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-red-500"
            aria-hidden="true"
            {...ACTIVE_INDICATOR_TRANSITION}
          />
        )}
      </Link>
    </motion.div>
  );
}

/**
 * Exported memoized NavItem
 */
export const NavItem = memo(NavItemContent);
