"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export type CameraPreset = "reveal" | "garage" | "driver" | "team";

export const CAMERA_PRESETS: Record<CameraPreset, { position: [number, number, number]; target: [number, number, number] }> = {
  reveal: { position: [0, 1.2, 7], target: [0, 0.4, 0] },
  garage: { position: [3, 1.8, 5], target: [0, 0.5, 0] },
  driver: { position: [0, 1.5, 3.5], target: [0, 1.1, 0] },
  team: { position: [4.5, 1.4, 6.5], target: [0, 0.2, 0] },
};

interface CameraRigProps {
  preset?: CameraPreset;
  introTime?: number;
  parallaxStrength?: number;
  breathingStrength?: number;
  dampingSpeed?: number;
}

export function CameraRig({
  introTime = 6.2,
  parallaxStrength = 0.8,
  breathingStrength = 0.05,
  dampingSpeed = 4,
}: CameraRigProps) {
  // Store target and current states using refs to avoid React re-renders or vector re-allocations on useFrame loops
  const targetPos = useRef(new THREE.Vector3(0, 0, 10));
  const currentPos = useRef(new THREE.Vector3(0, 0, 10));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  // Static reusable vectors to avoid per-frame GC allocations
  const basePosVec = useRef(new THREE.Vector3(0, 5, 0.1));
  const baseTargVec = useRef(new THREE.Vector3(0, 0, 0));

  // Touch interaction tracking for mobile devices
  const touchOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const deltaX = (e.touches[0].clientX - startX) / (window.innerWidth || 1);
        const deltaY = (e.touches[0].clientY - startY) / (window.innerHeight || 1);
        touchOffset.current.x = Math.max(-1, Math.min(1, deltaX * 2));
        touchOffset.current.y = Math.max(-1, Math.min(1, -deltaY * 2));
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // 1. Resolve base values from timeline and scroll (directly from window)
    // Read scroll offset directly from window to avoid React re-renders on scroll
    let scrollY = 0;
    if (typeof window !== "undefined") {
      scrollY = window.scrollY || window.pageYOffset;
    }
    const maxScroll = 600;
    const rawRatio = Math.min(scrollY / maxScroll, 1);
    const easedScroll = Math.pow(rawRatio, 1.8);

    const t = introTime;
    if (t <= 1.0) {
      // Darkness: camera directly above
      basePosVec.current.set(0, 8.5, 0.1);
      baseTargVec.current.set(0, 0, 0);
    } else if (t <= 2.5) {
      // Overhead Reveal: camera pulls up and backward
      const f = (t - 1.0) / 1.5;
      basePosVec.current.set(0, 8.5 + f * 2.5, 0.1 + f * 2.7);
      baseTargVec.current.set(0, 0, 0);
    } else if (t <= 4.2) {
      // Side Hero: camera orbits down to a full side profile
      const f = (t - 2.5) / 1.7;
      basePosVec.current.set(f * 9.5, 11.0 - f * 9.8, 2.8 - f * 1.6);
      baseTargVec.current.set(-1.0 * f, f * 0.2, 0);
    } else if (t <= 6.0) {
      // Front Three-Quarter Hero: camera orbits to a 45° angle
      const f = (t - 4.2) / 1.8;
      basePosVec.current.set(9.5 - f * 2.7, 1.2 + f * 0.1, 1.2 + f * 5.6);
      baseTargVec.current.set(-1.0 - 0.2 * f, 0.2 + f * 0.1, 0);
    } else {
      // Hero Lock & Scroll: locked 45° angle, pulls back on exit scroll
      basePosVec.current.set(
        6.8 + easedScroll * 2.0,
        1.3 + easedScroll * 1.0,
        6.8 + easedScroll * 2.0
      );
      baseTargVec.current.set(-1.2, 0.3, 0);
    }

    // 2. Idle Breathing Effect (Sinusoidal cinematography simulation)
    const activeBreathing = t >= 6.0 ? breathingStrength : breathingStrength * 0.1;
    const breathY = Math.sin(time * 0.8) * activeBreathing;
    const breathX = Math.cos(time * 0.5) * (activeBreathing * 0.6);

    // 3. Mouse & Touch Parallax Easing (Reads pointer coordinate grid [-1, 1] directly)
    const activeParallax = t >= 6.0 ? parallaxStrength : parallaxStrength * 0.1;
    const inputX = Math.abs(state.pointer.x) > 0.001 ? state.pointer.x : touchOffset.current.x;
    const inputY = Math.abs(state.pointer.y) > 0.001 ? state.pointer.y : touchOffset.current.y;
    const mx = inputX * activeParallax;
    const my = inputY * (activeParallax * 0.18);

    // Mobile framing adjustment (<768px)
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const mobileZOffset = isMobile ? 2.4 : 0;
    const mobileYOffset = isMobile ? 0.5 : 0;

    // Calculate next target positions combining base, parallax, and breathing offsets
    targetPos.current.set(
      basePosVec.current.x + breathX + mx + (isMobile ? -0.6 : 0),
      basePosVec.current.y + breathY + my + mobileYOffset,
      basePosVec.current.z - Math.abs(mx) * 0.3 + mobileZOffset
    );

    targetLookAt.current.set(
      baseTargVec.current.x + mx * 0.4,
      baseTargVec.current.y + my * 0.2,
      baseTargVec.current.z
    );

    // 4. Frame-Rate Independent Easing (Exponential damping)
    const damp = t >= 6.0 ? dampingSpeed : dampingSpeed * 0.5; // smoother movement during reveal
    const easeFactor = 1 - Math.exp(-damp * delta);
    currentPos.current.lerp(targetPos.current, easeFactor);
    currentLookAt.current.lerp(targetLookAt.current, easeFactor);

    // Apply values to camera matrices
    state.camera.position.copy(currentPos.current);
    state.camera.lookAt(currentLookAt.current);
  });

  return null;
}
