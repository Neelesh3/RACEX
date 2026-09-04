"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme/theme-utils";
import { Activity, Gauge, Compass } from "lucide-react";

interface CornerMarker {
  number: number;
  x: number;
  y: number;
  name: string;
}

interface CircuitTrackData {
  fullPath: string;
  sectors: {
    s1: string;
    s2: string;
    s3: string;
  };
  drsZones: {
    start: number;
    end: number;
    path: string;
  }[];
  corners: CornerMarker[];
}

const CIRCUIT_TRACKS: Record<string, CircuitTrackData> = {
  monaco: {
    fullPath: "M 200,430 C 180,440 130,420 100,360 C 80,310 100,280 150,260 L 250,230 C 320,200 400,120 480,120 C 560,120 620,180 570,220 C 500,260 450,280 430,320 C 410,360 420,380 460,390 C 530,410 630,370 700,310 C 780,240 850,180 900,230 C 940,270 930,350 860,400 C 780,450 680,450 620,460 C 530,470 410,500 350,520 C 280,540 230,500 200,430 Z",
    sectors: {
      s1: "M 200,430 C 180,440 130,420 100,360 C 80,310 100,280 150,260 L 250,230",
      s2: "M 250,230 C 320,200 400,120 480,120 C 560,120 620,180 570,220 C 500,260 450,280 430,320 C 410,360 420,380 460,390",
      s3: "M 460,390 C 530,410 630,370 700,310 C 780,240 850,180 900,230 C 940,270 930,350 860,400 C 780,450 680,450 620,460 C 530,470 410,500 350,520 C 280,540 230,500 200,430 Z",
    },
    drsZones: [
      { start: 10, end: 30, path: "M 620,460 C 530,470 410,500 350,520" }
    ],
    corners: [
      { number: 1, x: 250, y: 230, name: "Sainte Devote" },
      { number: 3, x: 480, y: 120, name: "Massenet" },
      { number: 6, x: 570, y: 220, name: "Grand Hotel Hairpin" },
      { number: 10, x: 700, y: 310, name: "Nouvelle Chicane" },
      { number: 15, x: 860, y: 400, name: "Piscine" },
      { number: 18, x: 350, y: 520, name: "Rascasse" }
    ]
  },
  monza: {
    fullPath: "M 150,450 L 150,150 C 150,120 180,105 210,120 L 400,200 L 520,250 C 560,265 600,240 620,200 C 640,165 675,165 695,200 L 800,320 L 860,380 C 900,420 880,480 800,480 L 350,480 C 300,480 250,470 200,425 Z",
    sectors: {
      s1: "M 150,450 L 150,150 C 150,120 180,105 210,120 L 400,200",
      s2: "M 400,200 L 520,250 C 560,265 600,240 620,200 C 640,165 675,165 695,200 L 800,320",
      s3: "M 800,320 L 860,380 C 900,420 880,480 800,480 L 350,480 C 300,480 250,470 200,425 Z",
    },
    drsZones: [
      { start: 5, end: 20, path: "M 150,450 L 150,150" },
      { start: 60, end: 80, path: "M 800,480 L 350,480" }
    ],
    corners: [
      { number: 1, x: 210, y: 120, name: "Variante del Rettifilo" },
      { number: 4, x: 400, y: 200, name: "Variante della Roggia" },
      { number: 6, x: 620, y: 200, name: "Curva di Lesmo" },
      { number: 8, x: 800, y: 320, name: "Variante Ascari" },
      { number: 11, x: 200, y: 425, name: "Curva Parabolica" }
    ]
  },
  silverstone: {
    fullPath: "M 180,450 C 130,485 75,430 90,370 C 105,310 180,260 250,210 L 330,160 C 390,125 470,125 530,160 C 590,195 640,250 690,260 C 740,270 795,225 835,245 C 875,265 895,330 855,385 C 815,440 730,440 670,450 C 600,460 500,500 420,510 C 340,520 230,500 180,450 Z",
    sectors: {
      s1: "M 180,450 C 130,485 75,430 90,370 C 105,310 180,260 250,210 L 330,160",
      s2: "M 330,160 C 390,125 470,125 530,160 C 590,195 640,250 690,260 C 740,270 795,225 835,245",
      s3: "M 835,245 C 875,265 895,330 855,385 C 815,440 730,440 670,450 C 600,460 500,500 420,510 C 340,520 230,500 180,450 Z",
    },
    drsZones: [
      { start: 20, end: 40, path: "M 530,160 C 590,195 640,250 690,260" },
      { start: 70, end: 90, path: "M 670,450 C 600,460 500,500 420,510" }
    ],
    corners: [
      { number: 1, x: 250, y: 210, name: "Copse" },
      { number: 3, x: 470, y: 125, name: "Maggotts" },
      { number: 5, x: 530, y: 160, name: "Becketts" },
      { number: 9, x: 835, y: 245, name: "Stowe" },
      { number: 15, x: 670, y: 450, name: "Club" }
    ]
  },
  spa: {
    fullPath: "M 250,500 C 190,520 130,490 110,430 C 90,370 120,290 170,250 L 260,210 C 350,170 450,105 540,105 C 610,105 670,160 620,210 C 560,270 460,290 420,335 C 380,380 395,430 445,445 C 505,460 600,410 680,360 C 760,310 840,310 875,370 C 910,430 875,500 795,500 C 715,500 600,465 510,465 C 420,465 320,480 250,500 Z",
    sectors: {
      s1: "M 250,500 C 190,520 130,490 110,430 C 90,370 120,290 170,250 L 260,210",
      s2: "M 260,210 C 350,170 450,105 540,105 C 610,105 670,160 620,210 C 560,270 460,290 420,335 C 380,380 395,430 445,445",
      s3: "M 445,445 C 505,460 600,410 680,360 C 760,310 840,310 875,370 C 910,430 875,500 795,500 C 715,500 600,465 510,465 C 420,465 320,480 250,500 Z",
    },
    drsZones: [
      { start: 15, end: 35, path: "M 260,210 C 350,170 450,105 540,105" }
    ],
    corners: [
      { number: 1, x: 170, y: 250, name: "La Source" },
      { number: 3, x: 260, y: 210, name: "Eau Rouge" },
      { number: 4, x: 540, y: 105, name: "Raidillon" },
      { number: 10, x: 420, y: 335, name: "Pouhon" },
      { number: 18, x: 795, y: 500, name: "Bus Stop Chicane" }
    ]
  }
};

const DEFAULT_TRACK: CircuitTrackData = {
  fullPath: "M 200,450 C 150,450 100,380 100,300 C 100,220 180,150 280,150 L 450,150 C 550,150 650,180 720,250 C 790,320 850,380 850,450 C 850,520 750,520 650,520 C 550,520 400,480 300,480 C 250,480 220,470 200,450 Z",
  sectors: {
    s1: "M 200,450 C 150,450 100,380 100,300 C 100,220 180,150 280,150 L 450,150",
    s2: "M 450,150 C 550,150 650,180 720,250 C 790,320 850,380 850,450",
    s3: "M 850,450 C 850,520 750,520 650,520 C 550,520 400,480 300,480 C 250,480 220,470 200,450 Z",
  },
  drsZones: [
    { start: 20, end: 50, path: "M 280,150 L 450,150" }
  ],
  corners: [
    { number: 1, x: 280, y: 150, name: "Apex Turn" },
    { number: 4, x: 720, y: 250, name: "Hairpin" },
    { number: 8, x: 650, y: 520, name: "Chicane Exit" }
  ]
};

interface CircuitVisualizerProps {
  circuitId: string;
}

export default function CircuitVisualizer({ circuitId }: CircuitVisualizerProps) {
  const { currentTheme } = useTheme();
  const [activeSector, setActiveSector] = useState<number | null>(null);
  const [selectedCorner, setSelectedCorner] = useState<CornerMarker | null>(null);
  const [telemetry, setTelemetry] = useState({ speed: 285, gear: 6, throttle: 100 });

  // Map to circuit shape or fallback
  const trackKey = circuitId.toLowerCase().includes("monaco")
    ? "monaco"
    : circuitId.toLowerCase().includes("monza")
    ? "monza"
    : circuitId.toLowerCase().includes("silverstone")
    ? "silverstone"
    : circuitId.toLowerCase().includes("spa")
    ? "spa"
    : null;

  const track = trackKey ? CIRCUIT_TRACKS[trackKey] : DEFAULT_TRACK;

  // Simulate telemetric readout updates at F1 pacing
  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry((prev) => {
        const deltaSpeed = Math.floor(Math.random() * 15) - 7;
        const speed = Math.max(120, Math.min(345, prev.speed + deltaSpeed));
        const gear = speed > 300 ? 8 : speed > 260 ? 7 : speed > 210 ? 6 : speed > 160 ? 5 : 4;
        const throttle = speed > prev.speed ? 100 : Math.floor(Math.random() * 40) + 40;
        return { speed, gear, throttle };
      });
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col gap-6 select-none">
      {/* ── Visualizer Box ── */}
      <div className="relative aspect-[5/3] w-full overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.01] to-transparent backdrop-blur-md flex items-center justify-center p-8">
        
        {/* Track Grid HUD Overlay */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
             style={{
               backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
               backgroundSize: "30px 30px"
             }} 
        />

        {/* Dynamic DRS and active labels */}
        <div className="absolute top-6 left-6 font-mono text-[10px] tracking-widest text-[#808080] flex flex-col gap-1.5 uppercase">
          <span className="text-white font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E17A] animate-pulse" />
            DRS Detection Active
          </span>
          <span>Telemetry Stream Feed</span>
        </div>

        {/* Vector SVG Graph rendering path layers */}
        <svg 
          viewBox="0 0 1000 600" 
          className="w-full h-full object-contain overflow-visible"
        >
          {/* Layer 1: Base Track Silhouette Background */}
          <path
            d={track.fullPath}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={18}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Layer 2: Interactive Sectors */}
          {/* Sector 1 */}
          <motion.path
            d={track.sectors.s1}
            fill="none"
            stroke={activeSector === 1 ? currentTheme.accent : "rgba(255,255,255,0.22)"}
            strokeWidth={activeSector === 1 ? 8 : 4}
            strokeLinecap="round"
            strokeLinejoin="round"
            onHoverStart={() => setActiveSector(1)}
            onHoverEnd={() => setActiveSector(null)}
            className="cursor-pointer transition-all duration-300"
            style={{
              filter: activeSector === 1 ? `drop-shadow(0 0 8px ${currentTheme.accent})` : "none"
            }}
          />

          {/* Sector 2 */}
          <motion.path
            d={track.sectors.s2}
            fill="none"
            stroke={activeSector === 2 ? currentTheme.accent : "rgba(255,255,255,0.22)"}
            strokeWidth={activeSector === 2 ? 8 : 4}
            strokeLinecap="round"
            strokeLinejoin="round"
            onHoverStart={() => setActiveSector(2)}
            onHoverEnd={() => setActiveSector(null)}
            className="cursor-pointer transition-all duration-300"
            style={{
              filter: activeSector === 2 ? `drop-shadow(0 0 8px ${currentTheme.accent})` : "none"
            }}
          />

          {/* Sector 3 */}
          <motion.path
            d={track.sectors.s3}
            fill="none"
            stroke={activeSector === 3 ? currentTheme.accent : "rgba(255,255,255,0.22)"}
            strokeWidth={activeSector === 3 ? 8 : 4}
            strokeLinecap="round"
            strokeLinejoin="round"
            onHoverStart={() => setActiveSector(3)}
            onHoverEnd={() => setActiveSector(null)}
            className="cursor-pointer transition-all duration-300"
            style={{
              filter: activeSector === 3 ? `drop-shadow(0 0 8px ${currentTheme.accent})` : "none"
            }}
          />

          {/* Layer 3: DRS Highlight Zones */}
          {track.drsZones.map((drs, idx) => (
            <path
              key={`drs-${idx}`}
              d={drs.path}
              fill="none"
              stroke="#00E17A"
              strokeWidth={5}
              strokeDasharray="4,6"
              strokeLinecap="round"
              className="pointer-events-none"
            />
          ))}

          {/* Layer 4: Neon Telemetry Pulse traveling at F1 speeds */}
          <circle r="6" fill="#E10600">
            <animateMotion 
              dur="6.5s" 
              repeatCount="indefinite" 
              path={track.fullPath}
              rotate="auto"
            />
          </circle>

          {/* Layer 5: Corner Markers */}
          {track.corners.map((corner) => {
            const isSel = selectedCorner?.number === corner.number;
            return (
              <g 
                key={`corner-${corner.number}`} 
                onClick={() => setSelectedCorner(corner)}
                className="cursor-pointer select-none"
              >
                <circle
                  cx={corner.x}
                  cy={corner.y}
                  r={isSel ? 14 : 9}
                  fill={isSel ? "#E10600" : "#1A1A1A"}
                  stroke={isSel ? "#ffffff" : "rgba(255,255,255,0.45)"}
                  strokeWidth={1.5}
                  className="transition-all duration-300"
                />
                <text
                  x={corner.x}
                  y={corner.y + 3}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize={isSel ? "11px" : "8px"}
                  fontWeight="black"
                  className="font-mono pointer-events-none"
                >
                  {corner.number}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Selected Corner HUD Box */}
        {selectedCorner && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute bottom-6 left-6 right-6 font-mono border border-[#E10600]/30 bg-black/90 p-4 rounded-xl flex items-center justify-between pointer-events-auto shadow-xl"
          >
            <div>
              <span className="text-[9px] uppercase tracking-widest text-[#808080]">CORNER MARKER DETECTED</span>
              <h4 className="text-sm font-bold text-white uppercase mt-0.5">{selectedCorner.name} (T{selectedCorner.number})</h4>
            </div>
            <button 
              onClick={() => setSelectedCorner(null)}
              className="text-xs text-white/50 hover:text-white uppercase font-bold tracking-wider px-3 py-1 bg-white/[0.05] hover:bg-white/[0.1] rounded-lg transition-colors"
            >
              CLOSE
            </button>
          </motion.div>
        )}
      </div>

      {/* ── Bottom Telemetry Readout Grid ── */}
      <div className="grid grid-cols-3 gap-4 font-mono">
        <div className="flex items-center gap-3 border border-white/[0.05] bg-white/[0.01] rounded-2xl p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E10600]/10">
            <Gauge className="h-5 w-5 text-[#E10600]" />
          </div>
          <div>
            <span className="block text-[9px] uppercase tracking-wider text-neutral-500">Telemetry Speed</span>
            <span className="text-lg font-black text-white tabular-nums">{telemetry.speed} <span className="text-xs font-normal text-neutral-500">KM/H</span></span>
          </div>
        </div>

        <div className="flex items-center gap-3 border border-white/[0.05] bg-white/[0.01] rounded-2xl p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E10600]/10">
            <Activity className="h-5 w-5 text-[#E10600]" />
          </div>
          <div>
            <span className="block text-[9px] uppercase tracking-wider text-neutral-500">Direct Gear</span>
            <span className="text-lg font-black text-white tabular-nums">G{telemetry.gear}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 border border-white/[0.05] bg-white/[0.01] rounded-2xl p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E10600]/10">
            <Compass className="h-5 w-5 text-[#E10600]" />
          </div>
          <div>
            <span className="block text-[9px] uppercase tracking-wider text-neutral-500">Throttle Input</span>
            <span className="text-lg font-black text-white tabular-nums">{telemetry.throttle}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
