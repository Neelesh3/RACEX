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

  // Animate the reveal timeline phase durations in react space (4.5s total transition pacing)
  useEffect(() => {
    const timer = setInterval(() => {
      setIntroTime((prev) => {
        const next = prev + 0.1;
        if (next < 1.2) {
          setTimelinePhase("darkness");
        } else if (next < 2.4) {
          setTimelinePhase("ignition");
        } else if (next < 4.5) {
          setTimelinePhase("discovery");
        } else {
          setTimelinePhase("reveal");
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
    resolvedKeyIntensity = 0.2;
    resolvedAmbientIntensity = 0.05;
  } else if (timelinePhase === "discovery") {
    // Smooth ramp-up interpolation over the 2.1-second sweep
    const factor = (introTime - 2.4) / 2.1; // 0 to 1
    resolvedKeyIntensity = 0.2 + factor * 1.0; // 0.2 -> 1.2
    resolvedAmbientIntensity = 0.05 + factor * 0.10; // 0.05 -> 0.15
  } else if (timelinePhase === "reveal") {
    resolvedKeyIntensity = 1.2;
    resolvedAmbientIntensity = 0.15;
  }

  // Calculate scroll transitions (Model rotation / camera offset triggers)
  const maxScroll = 600;
  const scrollRatio = Math.min(scrollY / maxScroll, 1);

  // Rotate F1 car model slowly on scroll and lower position
  const carPosition: [number, number, number] = [0, -0.8 - scrollRatio * 0.6, -scrollRatio * 1.5];
  const carRotation: [number, number, number] = [0, -Math.PI / 6 + scrollRatio * (Math.PI / 4), 0];

  // Adjust camera rig base positions depending on dynamic timeline phase and scroll compression
  let basePosition: [number, number, number] = [0, 1.2, 7];
  let baseTarget: [number, number, number] = [0, 0.4, 0];

  if (timelinePhase === "darkness") {
    basePosition = [0, 0.6, 12];
    baseTarget = [0, 0.2, 0];
  } else if (timelinePhase === "ignition") {
    basePosition = [-1.5, 0.8, 9];
    baseTarget = [0, 0.3, 0];
  } else if (timelinePhase === "discovery") {
    const factor = (introTime - 2.4) / 2.1;
    basePosition = [
      -1.5 + factor * 1.5,
      0.8 + factor * 0.4,
      9 - factor * 2
    ];
    baseTarget = [0, 0.3 + factor * 0.1, 0];
  } else if (timelinePhase === "reveal") {
    // Settle target coordinates and apply scroll compression vertical offsets
    basePosition = [0, 1.2 + scrollRatio * 0.8, 7];
    baseTarget = [0, 0.4 - scrollRatio * 0.4, 0];
  }

  return (
    <group>
      <StudioEnvironment preset="studio" blur={0.8} />
      <StudioLighting
        keyIntensity={resolvedKeyIntensity}
        ambientIntensity={resolvedAmbientIntensity}
        castShadow={timelinePhase === "reveal"}
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
        parallaxStrength={timelinePhase === "reveal" ? 0.55 : 0.05}
        breathingStrength={timelinePhase === "reveal" ? 0.03 : 0.005}
        dampingSpeed={2.8}
      />
    </group>
  );
}
