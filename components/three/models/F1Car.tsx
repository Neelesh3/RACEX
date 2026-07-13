"use client";

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface F1CarProps {
  scale?: [number, number, number] | number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  castShadow?: boolean;
  receiveShadow?: boolean;
}

export function F1Car({
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  castShadow = true,
  receiveShadow = true,
}: F1CarProps) {
  // Load model using Drei's useGLTF with Draco enabled (second parameter is true)
  const { scene } = useGLTF("/models/cars/f1-car.glb", true);

  useEffect(() => {
    // Traverse meshes to enable shadow mapping and apply realistic default PBR properties
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = castShadow;
        child.receiveShadow = receiveShadow;

        // Apply high-fidelity physical defaults to materials (brushed metalness & realistic roughness)
        if (child.material) {
          const mat = child.material as THREE.MeshStandardMaterial;
          const name = child.name.toLowerCase();

          // Coarse matte rubber tires setup
          if (name.includes("tire") || name.includes("wheel") || name.includes("rubber") || name.includes("tyre")) {
            mat.roughness = 0.85;
            mat.metalness = 0.05;
          } 
          // Low-roughness glossy/satin carbon fiber sections
          else if (name.includes("carbon") || name.includes("wing") || name.includes("splitter")) {
            mat.roughness = 0.28;
            mat.metalness = 0.85;
          } 
          // Default F1 studio premium paint panels
          else {
            mat.roughness = 0.42;
            mat.metalness = 0.76;
          }
        }
      }
    });
  }, [scene, castShadow, receiveShadow]);

  return (
    <group scale={scale} position={position} rotation={rotation}>
      <primitive object={scene} />
    </group>
  );
}

// Preload the model asset to optimize execution speed and pipeline loading
useGLTF.preload("/models/cars/f1-car.glb", true);
