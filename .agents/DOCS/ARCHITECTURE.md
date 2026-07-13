# RACEX Architecture

> "Simple architecture scales further than clever architecture."

---

# Purpose

This document defines the engineering architecture of RACEX.

It answers one question:

**How is RACEX built?**

This document is the source of truth for:

- Folder organization
- Component responsibilities
- Data flow
- Rendering strategy
- Naming conventions
- Imports
- Three.js integration

It does NOT define design philosophy.

Refer to DESIGN.md for experience decisions.

---

# Technology Stack

Framework

- Next.js 16 (App Router)

Language

- TypeScript (Strict Mode)

UI

- React 19
- Tailwind CSS
- shadcn/ui

Animation

- Framer Motion

3D

- Three.js
- React Three Fiber
- Drei

Icons

- Lucide React

Deployment

- Vercel

---

# Architecture Principles

The architecture should remain:

- Predictable
- Scalable
- Readable
- Composable
- React-first

Avoid abstraction until repetition exists.

Prefer explicit code over clever code.

---

# Project Structure

```
app/
components/
lib/
types/
public/
```

No new top-level folders should be created unless absolutely necessary.

---

# Application Layer

The App Router owns:

- routing
- layouts
- metadata
- page composition

Pages should remain lightweight.

Pages compose sections.

Pages do not contain business logic.

---

# Components Layer

```
components/
```

Contains reusable UI and feature components.

Every component should have one responsibility.

Components should not own application data.

---

# Recommended Structure

```
components/

navigation/
sections/

home/
drivers/
teams/
races/
circuits/
garage/

shared/

ui/

three/
```

Each feature folder contains only components related to that feature.

---

# Three.js Architecture

Three.js exists as an experience layer.

```
components/
    three/

        canvas/

        camera/

        controls/

        environment/

        lighting/

        effects/

        loaders/

        materials/

        models/

        scenes/

        viewers/
```

Every folder has a single responsibility.

---

## canvas/

Owns Canvas setup.

Examples

- SceneCanvas
- CanvasWrapper

No scene logic.

---

## camera/

Owns camera movement.

Examples

- CameraRig
- CameraController
- ScrollCamera

Camera logic belongs nowhere else.

---

## controls/

Contains interaction systems.

Examples

- OrbitControls
- PresentationControls

---

## environment/

HDRIs.

Skyboxes.

Fog.

Backgrounds.

---

## lighting/

Lighting presets.

Studio.

Garage.

Night.

Sunset.

---

## loaders/

GLTF loading.

Texture loading.

Asset management.

Caching.

---

## materials/

Reusable materials.

Carbon fiber.

Metal.

Glass.

Rubber.

---

## models/

Only model wrappers.

No business logic.

Examples

```
F1Car.tsx

Wheel.tsx

Wing.tsx
```

---

## scenes/

Compose complete scenes.

Examples

RevealScene

GarageScene

HeroScene

---

## viewers/

Reusable viewers.

Examples

ModelViewer

CarViewer

SceneViewer

---

# Data Layer

All static data belongs in

```
lib/
```

Examples

```
drivers.ts

teams.ts

circuits.ts

races.ts

news.ts
```

Never place mock data inside components.

---

# Types

Shared interfaces belong inside

```
types/
```

Never redefine interfaces.

Never duplicate types.

Examples

```
driver.ts

team.ts

race.ts

circuit.ts
```

---

# State Management

Prefer local state.

Lift state only when necessary.

Use Context sparingly.

Avoid global state unless multiple distant components require it.

Do not introduce Redux, Zustand or similar unless there is a clear architectural need.

---

# Component Design

Each component should do one thing.

Preferred

```
Page

↓

Section

↓

Feature

↓

Reusable Component

↓

Primitive UI
```

Avoid deeply nested component trees.

---

# Rendering Strategy

Prefer:

Server Components

Use Client Components only when necessary.

Client Components are appropriate for:

- animation
- browser APIs
- interactivity
- Three.js
- event handlers

Everything else should remain server-rendered.

---

# Imports

Always use path aliases.

Example

```
@/components/...

@/lib/...

@/types/...
```

Never use deeply nested relative imports.

---

# Naming Conventions

Components

PascalCase

```
RaceCard.tsx
```

Hooks

camelCase

```
useCameraRig.ts
```

Utilities

camelCase

```
formatDate.ts
```

Constants

UPPER_SNAKE_CASE only when appropriate.

---

# File Responsibilities

One file.

One responsibility.

Do not combine:

- utilities
- types
- components
- mock data

inside the same file.

---

# Styling

Tailwind only.

Avoid inline styles.

Avoid duplicated utility combinations.

Extract reusable UI patterns when repetition appears.

---

# Animation

Framer Motion owns UI animation.

React Three Fiber owns 3D animation.

Never mix responsibilities unnecessarily.

---

# Performance

Lazy load:

- heavy components
- Three.js
- GLTF models
- HDRIs

Reuse:

- geometries
- materials
- textures

Memoize expensive calculations.

Avoid unnecessary renders.

Target 60 FPS.

---

# Assets

```
public/

models/

textures/

images/

logos/

drivers/

teams/

audio/
```

Compress everything before committing.

Never ship unnecessary assets.

---

# Error Handling

Components should fail gracefully.

Loading states should exist for:

- models
- images
- async data

Errors should never crash the page.

---

# Testing Checklist

Every new feature should verify:

✓ TypeScript passes

✓ ESLint passes

✓ Build succeeds

✓ Responsive layout

✓ Performance maintained

✓ No duplicated code

✓ Existing architecture preserved

---

# Future Growth

Architecture should grow by composition.

Never by increasing component size.

If a component exceeds a reasonable level of complexity,

split it into smaller responsibilities.

---

# Final Rule

When unsure where code belongs,

choose the location that minimizes coupling,

maximizes readability,

and preserves the existing architecture.