"use client";

import React, { useRef } from "react";
import * as THREE from "three";

interface StudioLightingProps {
  keyIntensity?: number;
  fillIntensity?: number;
  rimIntensity?: number;
  ambientIntensity?: number;
  castShadow?: boolean;
  shadowResolution?: number;
}

export function StudioLighting({
  keyIntensity = 1.2,
  fillIntensity = 0.4,
  rimIntensity = 1.5,
  ambientIntensity = 0.15,
  castShadow = true,
  shadowResolution = 2048,
}: StudioLightingProps) {
  const keyLightRef = useRef<THREE.DirectionalLight>(null);

  return (
    <group name="studio-lighting">
      {/* Baseline Ambient Light */}
      <ambientLight intensity={ambientIntensity} />

      {/* Key Light (Primary illumination with soft shadows) */}
      <directionalLight
        ref={keyLightRef}
        position={[5, 8, 5]}
        intensity={keyIntensity}
        castShadow={castShadow}
        shadow-mapSize-width={shadowResolution}
        shadow-mapSize-height={shadowResolution}
        shadow-camera-near={0.5}
        shadow-camera-far={25}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-bias={-0.0005}
      />

      {/* Fill Light (Soft side light to fill deep shadows) */}
      <directionalLight
        position={[-5, 4, 3]}
        intensity={fillIntensity}
      />

      {/* Back Light / Rim Light (Highlights car edges and carbon silhouette) */}
      <directionalLight
        position={[0, 5, -6]}
        intensity={rimIntensity * 1.5}
        color="#ffffff"
      />

      {/* Volumetric Studio SpotLight sculpting the top-down nosecone/cockpit details */}
      <spotLight
        position={[0, 8, 0]}
        intensity={2.0}
        angle={0.55}
        penumbra={0.95}
        castShadow={castShadow}
        shadow-bias={-0.0001}
        color="#ffffff"
      />

      {/* Subtle floor-bounce point light */}
      <pointLight
        position={[0, -2, 0]}
        intensity={0.15}
        color="#E10600"
      />
    </group>
  );
}
