"use client";

import { Environment } from "@react-three/drei";

interface StudioEnvironmentProps {
  preset?: "studio" | "city" | "night" | "sunset" | "warehouse";
  blur?: number;
}

export function StudioEnvironment({
  preset = "studio",
  blur = 0.8,
}: StudioEnvironmentProps) {
  return (
    <group name="studio-environment">
      {/* 
        Loads high-fidelity environment light maps.
        Default to Drei's optimized CDN-loaded "studio" preset.
        Can later be re-routed to a local .hdr file (e.g. "/hdr/garage-studio.hdr").
      */}
      <Environment preset={preset} blur={blur} />
      
      {/* Dynamic atmospheric fog matching the F1 design language base color (#050505) */}
      <fog attach="fog" args={["#050505", 8, 30]} />
    </group>
  );
}
