"use client";

import { memo, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_ITEMS } from "@/constants/routes";
import { useAudio } from "@/lib/audio/useAudio";
import { Volume2, VolumeX, ChevronRight } from "lucide-react";

function MobileNavContent() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { muted, setMuted, play } = useAudio();

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      play("click");
      return next;
    });
  }, [play]);

  const toggleMute = useCallback(() => {
    setMuted(!muted);
    play("click");
  }, [muted, setMuted, play]);

  const handleItemClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Lock body scroll when mobile nav overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Close nav on route change
  useEffect(() => {
    requestAnimationFrame(() => {
      setIsOpen(false);
    });
  }, [pathname]);

  return (
    <div className="lg:hidden">
      {/* Animated Hamburger Button */}
      <button
        type="button"
        onClick={handleToggle}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        className="relative z-[100] inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#111111]/80 text-white backdrop-blur-md transition-colors hover:border-white/20 active:scale-95"
      >
        <div className="relative flex h-4 w-5 flex-col justify-between">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="h-0.5 w-full rounded-full bg-white origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="h-0.5 w-full rounded-full bg-white"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="h-0.5 w-full rounded-full bg-white origin-center"
          />
        </div>
      </button>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] flex flex-col bg-[#050505]/95 backdrop-blur-2xl pt-24 px-6 pb-8 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            {/* Ambient Red Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-md rounded-full bg-[#E10600]/10 blur-[120px] pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between flex-1 max-w-lg mx-auto w-full">
              {/* Navigation Routes */}
              <nav className="flex flex-col gap-3 py-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#808080] mb-2">
                  Navigation Menu
                </span>

                {NAVIGATION_ITEMS.map((item, i) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                          play("click");
                          handleItemClick();
                        }}
                        className={`group relative flex items-center justify-between min-h-[52px] px-5 py-3.5 rounded-2xl border transition-all duration-300 ${
                          isActive
                            ? "border-[#E10600]/40 bg-[#E10600]/10 text-white"
                            : "border-white/[0.06] bg-white/[0.02] text-neutral-300 hover:border-white/20 hover:bg-white/[0.05] active:scale-[0.99]"
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="text-base font-bold uppercase tracking-wider flex items-center gap-2">
                            {isActive && (
                              <span className="h-2 w-2 rounded-full bg-[#E10600] animate-pulse" />
                            )}
                            {item.label}
                          </span>
                          {item.description && (
                            <span className="text-xs text-neutral-500 mt-0.5">
                              {item.description}
                            </span>
                          )}
                        </div>
                        <ChevronRight
                          className={`h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 ${
                            isActive ? "text-[#E10600]" : "text-neutral-600"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom Actions Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:bg-white/10 active:scale-95"
                  >
                    {muted ? (
                      <>
                        <VolumeX className="h-4 w-4 text-red-500" />
                        <span>Sound Off</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="h-4 w-4 text-emerald-400" />
                        <span>Sound On</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] font-medium text-neutral-500">
                  © 2026 RACEX
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const MobileNav = memo(MobileNavContent);