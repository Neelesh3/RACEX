"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "@/lib/audio/useAudio";

export function LoadingScreen() {
  const { loaderTime, loaderPhase, isLoaderActive, startLoader } = useAudio();
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleStart = () => {
    setHasInteracted(true);
    startLoader();
  };

  // Get countdown number based on time
  let countdownNum = "";
  if (loaderTime >= 3.8 && loaderTime < 4.3) countdownNum = "3";
  else if (loaderTime >= 4.3 && loaderTime < 4.8) countdownNum = "2";
  else if (loaderTime >= 4.8 && loaderTime < 5.2) countdownNum = "1";

  return (
    <AnimatePresence>
      {(isLoaderActive || !hasInteracted) && (
        <motion.div
          key="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white"
        >
          {/* Subtle background industrial grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Cinematic vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_90%)] pointer-events-none" />

          {/* 1. Pre-interaction: Engine Ignition Trigger */}
          {!hasInteracted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex flex-col items-center gap-6"
            >
              {/* RACEX Brand watermark */}
              <div className="flex items-center gap-1.5 opacity-40 mb-4 select-none">
                <span className="text-xs font-black tracking-[0.3em] uppercase">RACEX</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">LAUNCH ENGINE</span>
              </div>

              {/* Start Ignition button */}
              <button
                onClick={handleStart}
                className="group relative flex h-20 w-20 items-center justify-center rounded-full border border-red-500/20 bg-red-950/20 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {/* Pulsing red ring */}
                <div className="absolute -inset-2 rounded-full border border-red-500/10 animate-ping opacity-45 pointer-events-none" />
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-[#E10600] to-[#990000] shadow-[0_0_30px_rgba(225,6,0,0.4)] transition-all duration-300 group-hover:shadow-[0_0_45px_rgba(225,6,0,0.6)]" />
                
                {/* Engine button label inside */}
                <span className="relative text-[10px] font-black tracking-widest text-white uppercase select-none">
                  START
                </span>
              </button>

              <span className="text-[10px] font-bold tracking-[0.25em] text-[#808080] uppercase mt-2 select-none animate-pulse">
                Click to initiate telemetry startup
              </span>
            </motion.div>
          )}

          {/* 2. Active Loader Sequence */}
          {hasInteracted && isLoaderActive && (
            <div className="relative flex flex-col items-center justify-center">
              {/* LED Boot Status Indicator (Phase 2 & Phase 3) */}
              {loaderTime >= 0.8 && loaderTime < 2.5 && (
                <div className="flex items-center gap-2 mb-8 h-4">
                  {/* Master center LED */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="h-2 w-2 rounded-full bg-[#E10600] shadow-[0_0_12px_#E10600]"
                    style={{
                      animation: "pulse 1.2s infinite ease-in-out",
                    }}
                  />
                  {/* System expansion LEDs */}
                  {loaderTime >= 1.5 && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 0.8 }}
                      className="flex items-center gap-2 overflow-hidden"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]/60" />
                      <span className="text-[8px] font-mono text-white/40 tracking-[0.2em] uppercase">SYSTEMS ONLINE</span>
                    </motion.div>
                  )}
                </div>
              )}

              {/* RACEX Brand Reveal (Phase 4, 5, 6) */}
              {loaderTime >= 2.5 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={
                    loaderPhase === "engine-start"
                      ? {
                          opacity: 1,
                          scale: 1,
                          x: [0, -1.5, 1.5, -1, 1, 0],
                          y: [0, 1, -1.5, 1, -1, 0],
                          transition: {
                            x: { repeat: Infinity, duration: 0.08 },
                            y: { repeat: Infinity, duration: 0.08 },
                          },
                        }
                      : { opacity: 1, scale: 1 }
                  }
                  className="flex flex-col items-center"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[0.25em] text-white select-none">
                      RACE
                    </span>
                    <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[0.25em] text-[#E10600] select-none">
                      X
                    </span>
                  </div>

                  {/* Telemetry frame lines around wordmark */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-px bg-gradient-to-r from-transparent via-[#E10600]/40 to-transparent mt-3 w-40"
                  />
                </motion.div>
              )}

              {/* Countdown Numbers (Phase 5) */}
              {loaderTime >= 3.8 && loaderTime < 5.2 && (
                <div className="absolute top-24 flex items-center justify-center">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={`countdown-${countdownNum}`}
                      initial={{ opacity: 0, y: 15, scale: 0.8 }}
                      animate={{ opacity: 0.8, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="font-mono text-3xl md:text-4xl font-extrabold tracking-widest text-white/50"
                    >
                      {countdownNum}
                    </motion.span>
                  </AnimatePresence>
                </div>
              )}

              {/* Engine Ignited status label (Phase 6) */}
              {loaderPhase === "engine-start" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 1, 0.3], transition: { repeat: Infinity, duration: 0.8 } }}
                  className="absolute top-24 flex items-center gap-2 text-[9px] font-bold tracking-[0.3em] text-[#E10600] uppercase"
                >
                  <span>COMBUSTION SYSTEM ENGAGED</span>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
