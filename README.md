# RACEX — Premium Cinematic Formula 1 Platform

RACEX is an immersive, high-performance, and cinematic motorsport platform designed to make users feel like they are entering a physical Formula One garage. Built with Next.js 16, Three.js, Tailwind CSS, Web Audio API, and Framer Motion, it translates the raw speed, engineering precision, and rich visual identity of Grand Prix racing into a premium, interactive digital dashboard.

---

## 🏎️ Project Vision & Design Philosophy

Formula One is a sport defined by cutting-edge telemetry, raw mechanics, carbon fiber, and micro-second details. RACEX rejects standard flat administration dashboards in favor of an **experience-driven visual playground**. 

### Core Design Rules:
* **The Environment is the Stage**: Visual assets (transparent AVIF cars, WebP constructor garages) serve as environmental backdrops rather than floating boxes.
* **Cinematic Color Grading**: Heavy radial vignettes, vertical atmospheric gradients, and subtle noise textures draw user attention to high-value focal points.
* **Mechanical Choreography**: Transitions avoid quick jumps or arcade-like swooshes. We utilize heavy eases (`[0.22, 1, 0.36, 1]`) and volumetric spring damping to mimic hydraulic and mechanical forces.
* **Ambient Sound Integration**: Audio feeds back into user movements to create an immersive audio-visual dialogue.

---

## 🛠️ Key Systems Architecture

### 1. Three.js Engine & WebGL Pipeline
- **R3F Canvas**: Features a responsive Studio Canvas wrapping realistic lighting arrays (key light, overhead LEDs, ambient fills).
- **Physical Reflections**: The F1 car rests on a custom physical epoxy floor mesh using `meshPhysicalMaterial` for real-time body, wheel, and lighting clearcoat reflections.
- **VRAM Memory Protection**: On route unmount, a custom cleanup effect triggers the `WEBGL_lose_context` extension directly, forcing the browser to instantly drop allocated textures and free graphics memory.

### 2. Centralized Audio Engine
- **Decoupled Playback**: No document-wide listeners. Components explicitly request cursor click/hover feedback (`play("hover")` / `play("click")`).
- **Autoplay Unlock Safeguard**: Listens to the first user interaction (click, swipe) to safely unlock the browser's audio context, avoiding autoplay warnings.
- **Ambient Fades**: Loader hums fade out dynamically while quiet garage loops fade in on homepage arrival.

### 3. Dynamic Theme Engine
- **Constructor Specific Branding**: Consumes constructor states globally.
- **Dynamic CSS Variables**: Team accent colors (`accentColor`, `cursorAccent`) are mapped to CSS variables dynamically, allowing cards, cursor rings, and interactive buttons to automatically inherit constructor visual identity in real-time.

### 4. Cinematic Loader Experience
- **Startup Sequence**: A unified 6.2s timeline timer syncing Three.js orbits, LEDs, countdowns, and sound triggers:
  1. *0.0s (Darkness)*: Electric hum loop begins; car sits in silhouette.
  2. *0.8s (LED Boot)*: Single center LED click sound and pulse.
  3. *1.5s (Ignition)*: Additional system lights activate; camera starts motion.
  4. *2.5s (Logo Reveal)*: RACEX logo shine sweep; side camera orbit.
  5. *3.8s (Countdown)*: Monospace `3` → `2` → `1` countdown with audio clicks.
  6. *5.2s (Engine Start)*: Engine start sound cue; logo wordmark shakes and vibrates.
  7. *6.2s (Lights Out)*: Black overlay dissolves, and the homepage staggers in.

### 5. High-Performance Cursor Engine
- **Zero React Re-renders**: Cursor coordinates track mouse movements using Framer Motion `useMotionValue` to directly animate DOM transforms, bypassing React's reconciler loop.
- **Dynamic Stretching**: Cursor ring expands over buttons (`hover`), scales up over cards (`card`), and stretches horizontally over garage sliders (`garage`).
- **Text Area Auto-Hide**: Detects input elements and textarea cursor focus, hiding custom cursors and revealing system I-beams.
- **Focus Snapping**: Listens to `focusin` events globally. If a user keyboard-tabs through the site, the cursor ring snaps directly onto active links for complete accessibility.

---

## 📂 Folder Structure

```text
├── app/                      # Next.js App Router (Layouts & Pages)
│   ├── about/                # About briefing page
│   ├── circuits/             # Circuits catalog & Dynamic slug profiles
│   ├── drivers/              # Drivers profiles & biography routes
│   ├── garage/               # Interactive Constructor Garage
│   ├── races/                # Grand Prix briefing timelines
│   └── standings/            # Constructor/Driver world standings
├── components/               # Component Architecture
│   ├── cursor/               # Centralized Custom Cursor module
│   ├── garage/               # Garage sliders & card elements
│   ├── navigation/           # Navbar items & logo
│   ├── ui/                   # Reusable atomic controls (Flags, Buttons)
│   └── three/                # WebGL Scene, Canvas, Lights & Car Model
├── constants/                # Global Animation Variants & Visual Tokens
├── lib/                      # Centralized Engines & State Mappings
│   ├── audio/                # AudioEngine, context, config & hooks
│   ├── theme/                # ThemeProvider, config & CSS engine
│   └── *.ts                  # F1 dynamic database utilities
├── public/                   # Production Locked Asset Library
│   ├── audio/                # Locked sound files (26 files)
│   └── constructors/         # Grouped constructor backgrounds & cars
└── types/                    # TypeScript interfaces & types
```

---

## 🚀 Installation & Local Development

### Prerequisites
- Node.js >= 18.x
- npm or pnpm

### Setup
1. Clone the repository and navigate to the project directory:
   ```bash
   git clone https://github.com/your-username/racex.git
   cd racex
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Run Production server locally:
   ```bash
   npm start
   ```

---

## 🏆 Portfolio Context & Launch Checklist

This project was built to demonstrate advanced frontend systems architecture:
- **WebGL Integration**: Real-time physical render loops on Next.js.
- **GPU Performance**: Bypassing React render tree loops using Framer Motion variables for 60 FPS cursors.
- **Purity & Validation**: Zero lint errors, zero TS errors, and zero hydration warnings.

### Credits
- 3D Assets: F1 Car model.
- Audio Assets: Web Audio F1 library soundscapes.
- Design: Product review team, Mercedes AMG & Porsche Digital visual designs.
