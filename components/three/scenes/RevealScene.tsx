"use client";

import React from "react";

import { StudioEnvironment } from "../environment/StudioEnvironment";
import { StudioLighting } from "../lighting/StudioLighting";
import { F1Car } from "../models/F1Car";
import { RevealEffects } from "../effects/RevealEffects";
import { CameraRig } from "../camera/CameraRig";

import { ContactShadows } from "@react-three/drei";
import { useAudio } from "@/lib/audio/useAudio";

export function RevealScene() {
  const { loaderTime, isLoaderActive } = useAudio();
  const introTime = isLoaderActive ? loaderTime : 6.2;

  // Compute timeline phase
  let timelinePhase: "darkness" | "ignition" | "discovery" | "reveal" = "darkness";
  if (introTime < 1.0) {
    timelinePhase = "darkness";
  } else if (introTime < 2.5) {
    timelinePhase = "ignition";
  } else if (introTime < 6.0) {
    timelinePhase = "discovery";
  } else {
    timelinePhase = "reveal";
  }

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

  // Ground the F1 car statically on the matte floor, keeping rotation locked parallel
  const carPosition: [number, number, number] = [0, -0.8, 0];
  const carRotation: [number, number, number] = [0, 0, 0];

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

      {/* Premium dark reflective epoxy floor with physical clearcoat properties */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.805, 0]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <meshPhysicalMaterial 
          color="#040404" 
          roughness={0.22} 
          metalness={0.8}
          clearcoat={1.0}
          clearcoatRoughness={0.12}
          reflectivity={0.9}
        />
      </mesh>

      {/* Industrial Garage Architecture (Beams & Columns) pushed deeper into atmospheric fog */}
      <group position={[0, 0, -12]}>
        {/* Support Pillars */}
        <mesh position={[-8, 2, 0]}>
          <boxGeometry args={[0.5, 6, 0.5]} />
          <meshStandardMaterial color="#0c0c0c" roughness={0.8} metalness={0.9} />
        </mesh>
        <mesh position={[8, 2, 0]}>
          <boxGeometry args={[0.5, 6, 0.5]} />
          <meshStandardMaterial color="#0c0c0c" roughness={0.8} metalness={0.9} />
        </mesh>
        
        {/* Vertical LED light bars on pillars to cast elegant vertical reflection lines */}
        <mesh position={[-7.72, 2, 0.28]}>
          <boxGeometry args={[0.06, 3.5, 0.02]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={6} />
        </mesh>
        <mesh position={[7.72, 2, 0.28]}>
          <boxGeometry args={[0.06, 3.5, 0.02]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={6} />
        </mesh>

        {/* Ceiling beams */}
        <mesh position={[0, 5, 0]}>
          <boxGeometry args={[20, 0.3, 0.5]} />
          <meshStandardMaterial color="#101010" roughness={0.7} metalness={0.8} />
        </mesh>
      </group>

      {/* Overhead LED strip lights to cast reflections onto epoxy floor & F1 car */}
      <group position={[0, 4.2, -2]}>
        <mesh position={[-4, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.08, 0.02, 12]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={6} />
        </mesh>
        <mesh position={[4, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.08, 0.02, 12]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={6} />
        </mesh>
        <mesh position={[0, 0, -4]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.08, 0.02, 14]} />
          <meshStandardMaterial color="#ff1a1a" emissive="#ff1a1a" emissiveIntensity={4} />
        </mesh>
      </group>

      <RevealEffects />
      <CameraRig
        preset="reveal"
        introTime={introTime}
        parallaxStrength={timelinePhase === "reveal" ? 0.25 : 0.02}
        breathingStrength={timelinePhase === "reveal" ? 0.02 : 0.003}
        dampingSpeed={1.6}
      />
    </group>
  );
}
