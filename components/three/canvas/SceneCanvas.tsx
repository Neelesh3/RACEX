"use client";

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { cn } from "@/lib/utils";

interface SceneCanvasProps {
  children: React.ReactNode;
  className?: string;
}

export function SceneCanvas({ children, className }: SceneCanvasProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={cn("relative h-full w-full bg-[#050505]", className)}>
      <Canvas
        shadows={!isMobile}
        dpr={isMobile ? 1 : [1, 2]}
        gl={{
          antialias: !isMobile,
          alpha: false,
          powerPreference: "high-performance",
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 0, 10],
        }}
      >
        <color attach="background" args={["#050505"]} />
        {children}
      </Canvas>
    </div>
  );
}
