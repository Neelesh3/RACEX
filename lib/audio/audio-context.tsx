"use client";

import React, { createContext, useState, useEffect, useCallback, useRef } from "react";
import { SoundId, LoaderPhase } from "./audio-types";
import audioEngine from "./AudioEngine";

interface AudioContextType {
  muted: boolean;
  setMuted: (muted: boolean) => void;
  play: (id: SoundId, options?: { loop?: boolean; volume?: number }) => void;
  stop: (id: SoundId, fadeDuration?: number) => void;
  fadeIn: (id: SoundId, duration?: number, targetVolume?: number) => void;
  fadeOut: (id: SoundId, duration?: number) => void;
  crossFade: (fromId: SoundId, toId: SoundId, duration?: number) => void;
  
  // Centralized Loader Timeline
  loaderTime: number;
  loaderPhase: LoaderPhase;
  isLoaderActive: boolean;
  startLoader: () => void;
  completeLoader: () => void;
}

export const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  // Use a lazy state initializer to avoid calling setState inside useEffect on mount
  const [muted, setMutedState] = useState<boolean>(() => {
    return typeof window !== "undefined" ? audioEngine.isMuted() : false;
  });
  const [loaderTime, setLoaderTime] = useState(0);
  const [isLoaderActive, setIsLoaderActive] = useState(false);
  const [loaderPhase, setLoaderPhase] = useState<LoaderPhase>("darkness");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Preload audio assets on mount
  useEffect(() => {
    audioEngine.preloadAll();
  }, []);

  const setMuted = useCallback((isMuted: boolean) => {
    setMutedState(isMuted);
    audioEngine.setMute(isMuted);
  }, []);

  const play = useCallback((id: SoundId, options?: { loop?: boolean; volume?: number }) => {
    audioEngine.play(id, options);
  }, []);

  const stop = useCallback((id: SoundId, fadeDuration = 0) => {
    audioEngine.stop(id, fadeDuration);
  }, []);

  const fadeIn = useCallback((id: SoundId, duration = 1.0, targetVolume?: number) => {
    audioEngine.fadeIn(id, duration, targetVolume);
  }, []);

  const fadeOut = useCallback((id: SoundId, duration = 1.0) => {
    audioEngine.fadeOut(id, duration);
  }, []);

  const crossFade = useCallback((fromId: SoundId, toId: SoundId, duration = 1.5) => {
    audioEngine.crossFade(fromId, toId, duration);
  }, []);

  const completeLoader = useCallback(() => {
    // Wrap state updates in requestAnimationFrame to defer them and satisfy React 19 rendering purity lints
    requestAnimationFrame(() => {
      setIsLoaderActive(false);
      setLoaderPhase("lights-out");
    });
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startLoader = useCallback(() => {
    setIsLoaderActive(true);
    setLoaderTime(0);
    setLoaderPhase("darkness");

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setLoaderTime((prev) => {
        const next = Math.round((prev + 0.1) * 10) / 10;
        
        // Map current time to phase
        if (next < 0.8) {
          setLoaderPhase("darkness");
        } else if (next < 1.5) {
          setLoaderPhase("led-boot");
        } else if (next < 2.5) {
          setLoaderPhase("ignition");
        } else if (next < 3.8) {
          setLoaderPhase("logo-reveal");
        } else if (next < 5.2) {
          setLoaderPhase("countdown");
        } else if (next < 6.2) {
          setLoaderPhase("engine-start");
        } else {
          setLoaderPhase("lights-out");
          clearInterval(timerRef.current!);
          timerRef.current = null;
        }

        return next;
      });
    }, 100);
  }, []);

  // Cleanup timeline timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Centralized Audio Cue Triggering based on Timeline
  useEffect(() => {
    if (!isLoaderActive) return;

    const t = Math.round(loaderTime * 10) / 10;

    if (t === 0.0) {
      audioEngine.fadeIn("electric-hum", 0.5);
    } else if (t === 0.8) {
      audioEngine.play("led-click");
    } else if (t === 1.5) {
      audioEngine.play("sting");
    } else if (t === 2.5) {
      audioEngine.play("page-transition"); // Logo whoosh
    } else if (t === 3.8) {
      audioEngine.play("click"); // Countdown 3
    } else if (t === 4.3) {
      audioEngine.play("click"); // Countdown 2
    } else if (t === 4.8) {
      audioEngine.play("click"); // Countdown 1
    } else if (t === 5.2) {
      audioEngine.play("engine-start");
    } else if (t === 6.2) {
      audioEngine.fadeOut("electric-hum", 1.0);
      audioEngine.fadeIn("ambient", 1.5);
      completeLoader();
    }
  }, [loaderTime, isLoaderActive, completeLoader]);

  return (
    <AudioContext.Provider
      value={{
        muted,
        setMuted,
        play,
        stop,
        fadeIn,
        fadeOut,
        crossFade,
        loaderTime,
        loaderPhase,
        isLoaderActive,
        startLoader,
        completeLoader,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}
