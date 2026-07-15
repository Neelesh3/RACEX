# Changelog — RACEX Development Log

This changelog records all milestones and engineering updates of the RACEX application.

---

## [1.0.0-rc.1] — 2026-07-15
### Added
- **Premium Cursor Engine**: Renders a custom cursor ring with state adaptation (`hover`, `card`, `garage`, `text`, `hidden`) and dynamic labels. Snap coordinates on keyboard focus.
- **Audio Engine**: Web Audio context cache with 10 channels. Preloads 26 sound effects and handles autoplay unlock.
- **Cinematic Loader**: 6.2s starting reveal sequence syncing Three.js lighting, camera orbits, countdown clicks, and engine start sounds.

### Fixed
- **ESLint & TS Hydration**: Avoided cascading render warnings by lazily initializing mount-time states and wrapping updates inside `requestAnimationFrame`.

---

## [0.8.0] — 2026-07-13
### Added
- **Dynamic Theme Engine**: Mapped constructor IDs to global CSS variables (`accentColor`, `cursorAccent`), allowing layout overlays to inherit team identities in real-time.
- **Volumetric Garage backgrounds**: Added 7-layer WebP constructor garage background composition, with Vignettes, volumetric halos, and tech grids.

---

## [0.5.0] — 2026-07-11
### Added
- **Core Experiences Page Layouts**: Built Driver profiles, Circuit layouts, Grand Prix weekend briefing boards, and World standings dashboards.
- **Three.js Reveal Scene**: Integrated responsive StudioCanvas with orbital camera coordinates, physical floor reflections, and shadow controls.
