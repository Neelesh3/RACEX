# RACEX — Design System & Visual Philosophy

This document outlines the design principles, visual composition, typography, and motion guidelines of the RACEX application.

---

## 1. Visual Philosophy

RACEX is modeled after high-end automotive configurators (Porsche, Mercedes-AMG) and premium luxury interfaces. The application rejects flat corporate SaaS grids, leaning instead into **tactile environmental depth**.

### Design Decisions:
- **Atmosphere over Information**: The landing hero should feel like entering a dimly lit garage space. Subdued lighting and high-contrast glow lines draw focus to the F1 car model.
- **Cinematic Framing**: Pages utilize 7-layer volumetric gradients, noise textures, and radial vignettes to guide the eye toward content panels.
- **Zero Placeholders**: Clean structural metadata displays real Grand Prix specifications, statistics tables, and technical readouts.

---

## 2. Motion Language

Motion in RACEX represents physical, mechanical systems. Animations are heavy, deliberate, and smooth:

- **Eased Curves**: Standard animations use a custom cubic-bezier ease curve `[0.22, 1, 0.36, 1]` (defined in `constants/animation-variants.ts`) for natural deceleration.
- **Volumetric Springs**: Interactive elements like cursor springs are configured with heavy damping (`stiffness: 280`, `damping: 22`) to replicate weight and drag.
- **Lights-Out Timeline**: The 6.2s homepage reveal is sequenced into 7 synchronized timing windows, guiding the user from pitch darkness to engine ignition.

---

## 3. Typography & Rhythm

The typography is built around strict mathematical spacing and alignment:

- **Header Text**: Monospace and sans-serif heading layouts (`font-black tracking-[0.25em] uppercase`) evoke instrumentation and telemetry displays.
- **Readability Rules**: Spacing parameters (margins, line heights) restrict line lengths to optimal reading widths (e.g. `max-w-lg` for descriptions).
- **Tabular Numerics**: Statistics tables utilize tabular numeric figures to prevent page jumps during updates.

---

## 4. Color & Lighting System

- **Team Accent Glowing**: In place of hardcoded static colors, elements utilize theme variables linked to the active constructor.
- **Desaturated Backdrops**: Garage backgrounds are desaturated by 30% and darkened to preserve text contrast, allowing the vibrant accent glows to stand out.
- **Physical Shadows**: Matte floor meshes and R3F ContactShadows cast realistic chassis shadow profiles onto the ground.
