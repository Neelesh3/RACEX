"use client";

import React, { useEffect, useState } from "react";

import { StudioEnvironment } from "../environment/StudioEnvironment";
import { StudioLighting } from "../lighting/StudioLighting";
import { F1Car } from "../models/F1Car";
import { RevealEffects } from "../effects/RevealEffects";
import { CameraRig } from "../camera/CameraRig";

import { ContactShadows } from "@react-three/drei";

export function RevealScene() {
  const [scrollY, setScrollY] = useState(0);
  const [introTime, setIntroTime] = useState(0);
  const [timelinePhase, setTimelinePhase] = useState<"darkness" | "ignition" | "discovery" | "reveal">("darkness");

  // Track window scroll offset
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate the reveal timeline phase durations in react space (6.0s total cinematic orbit choreography)
  useEffect(() => {
    const timer = setInterval(() => {
      setIntroTime((prev) => {
        const next = prev + 0.1;
        if (next < 1.0) {
          setTimelinePhase("darkness");
        } else if (next < 2.5) {
          setTimelinePhase("ignition"); // Overhead reveal light sweep
        } else if (next < 6.0) {
          setTimelinePhase("discovery"); // Side orbit -> Front Three-Quarter transition
        } else {
          setTimelinePhase("reveal"); // Hero Lock state
          clearInterval(timer);
        }
        return next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Compute animated lighting intensities based on current timeline phase
  let resolvedKeyIntensity = 0.05;
  let resolvedAmbientIntensity = 0.02;

  if (timelinePhase === "ignition") {
    resolvedKeyIntensity = 0.35; // Light sweep ignition start
    resolvedAmbientIntensity = 0.05;
  } else if (timelinePhase === "discovery") {
    // Smooth lighting ramp-up across discovery orbits
    const factor = Math.min((introTime - 2.5) / 1.7, 1);
    resolvedKeyIntensity = 0.35 + factor * 0.85; // 0.35 -> 1.2
    resolvedAmbientIntensity = 0.05 + factor * 0.10; // 0.05 -> 0.15
  } else if (timelinePhase === "reveal") {
    resolvedKeyIntensity = 1.2;
    resolvedAmbientIntensity = 0.15;
  }

  // Calculate scroll transitions with a power-curve dead-zone to prevent early scroll jitter
  const maxScroll = 600;
  const rawRatio = Math.min(scrollY / maxScroll, 1);
  const easedScroll = Math.pow(rawRatio, 1.8); // Eased transition curve

  // Ground the F1 car statically on the matte floor, keeping rotation locked parallel
  const carPosition: [number, number, number] = [0, -0.8, 0];
  const carRotation: [number, number, number] = [0, 0, 0];

  // Adjust camera rig base positions using smooth piecewise interpolation
  let basePosition: [number, number, number] = [0, 5, 0.1];
  let baseTarget: [number, number, number] = [0, 0, 0];

  const t = introTime;
  if (t <= 1.0) {
    // 1. Darkness: camera directly above (higher Y=8.5 for full overhead framing)
    basePosition = [0, 8.5, 0.1];
    baseTarget = [0, 0, 0];
  } else if (t <= 2.5) {
    // 2. Overhead Reveal: camera pulls up and backward
    const f = (t - 1.0) / 1.5;
    basePosition = [0, 8.5 + f * 2.5, 0.1 + f * 2.7]; // Sweeps up to [0, 11.0, 2.8]
    baseTarget = [0, 0, 0];
  } else if (t <= 4.2) {
    // 3. Side Hero: camera orbits down to a full side profile (ends at [9.5, 1.2, 1.2] to fit complete wheelbase)
    const f = (t - 2.5) / 1.7;
    basePosition = [
      f * 9.5,
      11.0 - f * 9.8,
      2.8 - f * 1.6
    ];
    baseTarget = [0, f * 0.2, 0];
  } else if (t <= 6.0) {
    // 4. Front Three-Quarter Hero: camera orbits to a 45° angle (ends at [6.8, 1.3, 6.8])
    const f = (t - 4.2) / 1.8;
    basePosition = [
      9.5 - f * 2.7,
      1.2 + f * 0.1,
      1.2 + f * 5.6
    ];
    baseTarget = [0, 0.2 + f * 0.1, 0];
  } else {
    // 5. Hero Lock & Scroll: locked 45° angle (Z=6.8/X=6.8 wide lens framing), pulls back on exit scroll
    basePosition = [
      6.8 + easedScroll * 2.0,
      1.3 + easedScroll * 1.0,
      6.8 + easedScroll * 2.0
    ];
    baseTarget = [0, 0.3, 0];
  }

  return (
    <group>
      <StudioEnvironment preset="studio" blur={0.8} />
      <StudioLighting
        keyIntensity={resolvedKeyIntensity}
        ambientIntensity={resolvedAmbientIntensity}
        castShadow={timelinePhase === "reveal" || introTime >= 2.5}
      />
      <F1Car
        position={carPosition}
        rotation={carRotation}
        scale={1.2}
      />
      
      {/* Reusable contact shadow grid mapping (soft chassis shadows mapping realistically onto floor) */}
      <ContactShadows
        position={[0, -0.8, 0]}
        opacity={0.65}
        scale={12}
        blur={2.4}
        far={2}
      />

      {/* Dark matte reflective floor ground plane mesh receiver */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.805, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#080808" roughness={0.7} metalness={0.15} />
      </mesh>

      <RevealEffects />
      <CameraRig
        preset="reveal"
        basePosition={basePosition}
        baseTarget={baseTarget}
        parallaxStrength={timelinePhase === "reveal" ? 0.25 : 0.02}
        breathingStrength={timelinePhase === "reveal" ? 0.02 : 0.003}
        dampingSpeed={1.6}
      />
    </group>
  );
}
