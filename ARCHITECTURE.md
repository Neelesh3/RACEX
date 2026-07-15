# RACEX — System Architecture Overview

This document describes the technical architecture, component boundaries, data flow, and pipeline integrations of the RACEX application.

---

## 1. Overall System Architecture

RACEX is built on top of **Next.js 16 (App Router)** and compiles statically into a zero-latency web application using Turbopack. The application architecture is decoupled into core concern areas:

```text
┌────────────────────────────────────────────────────────┐
│                      Next.js Page                      │
└──────────────────────────┬─────────────────────────────┘
                           │
 ┌─────────────────────────┼─────────────────────────┐
 │                         ▼                         │
┌┴──────────────────┐    ┌──┴────────────────┐    ┌──┴────────────────┐
│   Theme Engine    │    │   Audio Engine    │    │   Cursor Engine   │
│   (CSS Variables) │    │   (Web Audio API) │    │ (Motion Coordinates)
└───────────────────┘    └───────────────────┘    └───────────────────┘
```

---

## 2. Rendering Flow & Page Compilation

1. **Static Site Generation (SSG)**: All 81 routes (including static routes, dynamic drivers, circuits, and race briefs) are pre-rendered into static HTML during compilation.
2. **Layout Wrappers**: The [root-layout-client.tsx](file:///d:/WEB-Projects/RACEX/app/root-layout-client.tsx) mounts the global context providers:
   - `ThemeProvider`: Sets active team color schemes.
   - `AudioProvider`: Holds preloaded sounds and the loader timeline.
   - `CursorProvider`: Stores active hover states and dynamic labels.

---

## 3. Data Layer

The database is built on top of typed, structured, static local files in `lib/`:
- **`drivers.ts`**: Biography, career milestones, stats.
- **`circuits.ts`**: Spacing details, corners, DRS layouts, lap record info.
- **`races.ts`**: Grand Prix weekend schedules, session timings.
- **`constructors.ts`**: Visual metadata, team color configurations, and AVIF car model asset paths.

This allows Next.js static parameters generator (`generateStaticParams`) to build all dynamic profiles at compile-time, ensuring instant navigation load speeds.

---

## 4. Subsystem Pipelines

### Three.js Pipeline
- Uses **React Three Fiber (R3F)** to render WebGL layouts.
- Traverses loaded GLTF objects to adjust metalness/roughness parameters dynamically, reducing model loading overhead.
- Epoxy floor physical reflections using `meshPhysicalMaterial` for realistic shadow mappings.
- Disposes of context on component unmount via the `WEBGL_lose_context` browser extension, avoiding graphics memory leaks.

### Audio Engine
- Preloads and stores all 26 sound elements in `AudioEngine.ts` cache.
- Manages channels (`Master`, `UI`, `Loader`, `Garage`, etc.) to control gain and muting profiles.
- Drives the 6.2s synchronized loader timeline timer in the audio provider context, allowing components like `RevealScene` and `LoadingScreen` to lock in visual sequences with sound cues.

### Dynamic Theme Engine
- Injects CSS color variables dynamically based on the active constructor selection.
- Avoids inline style updates by leveraging Tailwind styling variables, preserving browser layout paint operations.
