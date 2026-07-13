"use client";

import { Html, useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

export function CanvasLoader() {
  const { active, progress } = useProgress();

  return (
    <AnimatePresence>
      {(active || progress < 100) && (
        <Html center style={{ zIndex: 50 }}>
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center space-y-4 rounded-2xl border border-white/5 bg-zinc-950/90 p-8 text-center shadow-2xl backdrop-blur-md min-w-[200px]"
          >
            <div className="relative flex h-16 w-16 items-center justify-center">
              {/* Spinning Loader Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-white/5" />
              <div className="absolute inset-0 rounded-full border-2 border-t-[#E10600] animate-spin" />
            </div>

            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E10600]">
                Loading Assets
              </p>
              <p className="font-mono text-lg font-bold text-white">
                {Math.round(progress)}%
              </p>
            </div>
          </motion.div>
        </Html>
      )}
    </AnimatePresence>
  );
}
