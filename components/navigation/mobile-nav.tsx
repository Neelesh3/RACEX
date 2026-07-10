"use client";

import { memo, useState, useCallback } from "react";
import { motion } from "framer-motion";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import { NAVIGATION_ITEMS } from "@/constants/routes";
import {
  STAGGER_CONTAINER_VARIANTS,
  MOBILE_NAV_ITEM_VARIANT,
} from "@/constants/animation-variants";

import { NavItem } from "./nav-item";

function MobileNavContent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
<SheetTrigger
  aria-label="Toggle navigation menu"
  className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-muted lg:hidden"
>
  <Menu className="size-6" />
  <span className="sr-only">
    Open navigation menu
  </span>
</SheetTrigger>
 

      <SheetContent
        side="left"
        className="w-full max-w-sm border-r border-white/10 p-0"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div className="text-lg font-bold tracking-tight">
              <span className="text-white">RACE</span>
              <span className="text-red-500">X</span>
            </div>
          </div>

          <motion.nav
            variants={STAGGER_CONTAINER_VARIANTS}
            initial="hidden"
            animate="visible"
            className="flex flex-1 flex-col overflow-y-auto px-2 py-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {NAVIGATION_ITEMS.map((item) => (
              <motion.div
                key={item.href}
                variants={MOBILE_NAV_ITEM_VARIANT}
              >
                <NavItem
                  href={item.href}
                  label={item.label}
                  description={item.description}
                  onClick={handleItemClick}
                  isMobile
                />
              </motion.div>
            ))}
          </motion.nav>

          <div className="border-t border-white/10 px-4 py-4">
            <p className="text-xs text-muted-foreground">
              © 2025 RaceX. All rights reserved.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export const MobileNav = memo(MobileNavContent);