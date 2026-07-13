"use client";

import { useRef } from "react";
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
  basePosition?: [number, number, number];
  baseTarget?: [number, number, number];
  parallaxStrength?: number;
  breathingStrength?: number;
  dampingSpeed?: number;
}

export function CameraRig({
  preset = "reveal",
  basePosition,
  baseTarget,
  parallaxStrength = 0.8,
  breathingStrength = 0.05,
  dampingSpeed = 4,
}: CameraRigProps) {
  // Resolve base values from preset, with manual overrides supported
  const resolvedPosition = basePosition || CAMERA_PRESETS[preset].position;
  const resolvedTarget = baseTarget || CAMERA_PRESETS[preset].target;

  // Store target and current states using refs to avoid React re-renders on useFrame loops
  const targetPos = useRef(new THREE.Vector3(...resolvedPosition));
  const currentPos = useRef(new THREE.Vector3(0, 0, 10));
  const targetLookAt = useRef(new THREE.Vector3(...resolvedTarget));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // 1. Idle Breathing Effect (Sinusoidal cinematography simulation)
    const breathY = Math.sin(time * 0.8) * breathingStrength;
    const breathX = Math.cos(time * 0.5) * (breathingStrength * 0.6);

    // 2. Mouse Parallax Easing (Reads pointer coordinate grid [-1, 1])
    const mx = state.pointer.x * parallaxStrength;
    const my = state.pointer.y * (parallaxStrength * 0.5);

    // Calculate next target positions combining base, parallax, and breathing offsets
    targetPos.current.set(
      resolvedPosition[0] + breathX + mx,
      resolvedPosition[1] + breathY + my,
      resolvedPosition[2] - Math.abs(mx) * 0.3
    );

    targetLookAt.current.set(
      resolvedTarget[0] + mx * 0.4,
      resolvedTarget[1] + my * 0.2,
      resolvedTarget[2]
    );

    // 3. Frame-Rate Independent Easing (Exponential damping)
    const t = 1 - Math.exp(-dampingSpeed * delta);
    currentPos.current.lerp(targetPos.current, t);
    currentLookAt.current.lerp(targetLookAt.current, t);

    // Apply values to camera matrices
    state.camera.position.copy(currentPos.current);
    state.camera.lookAt(currentLookAt.current);
  });

  return null;
}
