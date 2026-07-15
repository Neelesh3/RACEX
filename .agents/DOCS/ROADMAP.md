# RACEX Development Roadmap

> "Build deliberately. Ship intentionally."

---

# Purpose

This document defines the long-term development strategy for RACEX.

It answers one question:

**What should we build next?**

It is intentionally opinionated.

Not every good idea belongs in RACEX.

Features are added only when they strengthen the overall experience.

---

# Current Vision

RACEX is a premium interactive Formula One experience.

It is NOT intended to become:

- a statistics website
- a dashboard
- a fantasy platform
- a news portal
- a social network

The roadmap exists to protect that vision.

---

# Development Strategy

Each milestone should:

- improve the experience
- demonstrate engineering skill
- remain performant
- preserve simplicity

Never begin the next milestone until the current one is complete.

---

# Milestone 1

## Foundation

Status

✅ Complete

Goals

- Project setup
- Next.js architecture
- Tailwind
- shadcn/ui
- Initial pages
- Shared types
- Shared data
- Responsive layout

Deliverables

✓ Stable architecture

✓ Reusable components

✓ Build passes

✓ Lint passes

---

# Milestone 2

## The Reveal ⭐

Status

🚧 Current Focus

Purpose

Create a cinematic first impression.

Tasks

- React Three Fiber integration
- SceneCanvas
- GLTF loading
- HDR environment
- Camera rig
- Intro choreography
- Hero overlay
- Scroll transition
- Loading experience

Success Criteria

- Smooth reveal
- 60 FPS
- Responsive
- Premium motion

---

# Milestone 3

## The Garage ⭐

Status

⏳ Planned

Purpose

Allow users to explore the Formula One car.

Tasks

- Camera presets
- Interactive hotspots
- Environment switching
- Part highlighting
- Component information
- Animated transitions

Future Enhancements

- Exploded view
- Wireframe mode
- Material viewer

---

# Milestone 4

## Drivers

Purpose

Celebrate the athletes.

Tasks

- Driver cards
- Driver profiles
- Statistics
- Career timeline
- Team history
- Smooth page transitions

---

# Milestone 5

## Teams

Purpose

Celebrate engineering.

Tasks

- Team overview
- Constructors history
- Car gallery
- Performance statistics
- Team identity

---

# Milestone 6

## Circuits

Purpose

Celebrate racing history.

Tasks

- Circuit pages
- Interactive maps
- Track facts
- Corner highlights
- Race history

Possible Future

- Interactive track visualization

---

# Milestone 7

## Polish

Purpose

Increase immersion.

Tasks

- Ambient audio
- Micro interactions
- Advanced lighting
- Loading improvements
- Better transitions
- Accessibility improvements
- Performance optimization

---

# Milestone 8

## Production

Purpose

Prepare public release.

Tasks

- SEO
- Metadata
- Performance audit
- Lighthouse optimization
- Cross-browser testing
- Final bug fixes
- Deployment

---

# Backlog

Ideas worth exploring later.

- Weather environments
- Dynamic HDR presets
- Camera replay mode
- Pit lane experience
- Historical car viewer
- Interactive engineering diagrams

Backlog items are optional.

---

# Explicitly Out of Scope

Do NOT build:

- Fantasy Formula One
- User authentication
- Admin dashboard
- CMS
- Live telemetry
- Betting features
- Chat system
- Forum
- Large news section
- CRUD panels
- Generic analytics dashboard
- Unnecessary APIs

These features dilute the project's purpose.

---

# Decision Framework

Before adding a feature, ask:

1. Does it improve the experience?

2. Does it demonstrate engineering excellence?

3. Does it preserve simplicity?

4. Does it fit the Design Bible?

5. Does it maintain performance?

If any answer is **No**, postpone the feature.

---

# Success Metrics

RACEX succeeds when it is remembered for:

- Engineering quality
- Motion design
- Premium UI
- Performance
- Interactive storytelling

Not for the number of features.

---

# Current Focus

Until Milestone 2 is complete:

Priority is exclusively:

1. Three.js foundation
2. Camera system
3. Lighting system
4. The Reveal
5. Performance

No unrelated features should be developed during this phase.

---

# Final Principle

Finish before expanding.

A complete, polished experience is more valuable than ten unfinished ideas.

# Phase 2 — Experience Layer

The core experiences are complete.

From this point forward, RACEX shifts from feature development to experience engineering.

No additional feature pages should be introduced unless they significantly improve the overall product.

The remaining work focuses on immersion, polish, and production quality.

---

## Experience Roadmap

### Milestone 8 — About

Create a minimal, premium closing chapter introducing the creator, project philosophy, engineering approach, and technology stack.

---

### Milestone 9 — Loader Experience

Replace traditional loading with a cinematic startup sequence.

Timeline:

Black Screen

↓

Single LED

↓

Garage Power On

↓

Engine Ignition

↓

RACEX Logo Reveal

↓

Engine Idle

↓

3...2...1 Countdown

↓

Homepage Reveal

Use synchronized sound design including:

* LED activation
* Mechanical clicks
* Ignition
* Logo whoosh
* Engine idle
* Countdown beeps

The loader should transition seamlessly into the Homepage Reveal.

---

### Milestone 10 — Navigation System

Replace the traditional website navigation with a premium mission-control interface.

Structure:

RACEX

━━━━━━━━━━━━━━

REVEAL

GARAGE

DRIVERS

CIRCUITS

RACES

STANDINGS

ABOUT

━━━━━━━━━━━━━━

SOUND

THEME

GITHUB

━━━━━━━━━━━━━━

VERSION

Navigation should feel mechanical rather than web-like.

---

### Milestone 11 — Cursor Engine

Develop a unified cursor interaction system.

Features:

* Magnetic hover
* Button compression
* Ambient glow
* Motion trails
* Three.js interaction
* Subtle vehicle response
* Lighting interaction

Cursor behavior should reinforce the premium engineering aesthetic.

---

### Milestone 12 — Audio Engine

Create a centralized audio system.

Supported events:

* Loader
* Navigation
* Buttons
* Hover
* Garage ambience
* Countdown
* Page transitions

Audio must remain subtle and optional.

No continuous background music.

---

### Milestone 13 — Dynamic Theme Engine

Selecting a constructor changes the entire visual identity of RACEX.

Theme changes include:

* Background colors
* Ambient lighting
* UI accents
* Cursor glow
* Garage reflections
* Navigation highlights
* Loading visuals
* Scrollbar styling

Each constructor should feel like entering its own world.

---

### Milestone 14 — Choreography Engine

Pages should transition as one continuous cinematic experience.

Examples:

Garage

↓

Driver

↓

Circuit

↓

Race

Each transition should include coordinated motion, lighting, typography, and atmosphere rather than simple route changes.

---

### Milestone 15 — Pit Wall Mode

An alternative operating mode inspired by Formula One engineering stations.

Transforms:

* Typography
* Interface
* Widgets
* Telemetry
* Track visualization
* Engineering panels
* Data presentation

The website becomes a race engineering workspace rather than a portfolio.

---

### Milestone 16 — Asset Integration

Replace all placeholder content with production-quality assets.

Includes:

* Driver portraits
* Constructor PNG renders
* Team logos
* Circuit hero imagery
* Circuit SVG layouts
* Garage backgrounds
* HDR environments
* Audio assets
* Custom icons

---

### Milestone 17 — Production Polish

Focus exclusively on refinement.

Includes:

* Micro-interactions
* Motion consistency
* Hover states
* Page transitions
* Typography
* Spacing
* Visual hierarchy
* Accessibility
* Performance optimization

---

### Milestone 18 — Launch

Prepare RACEX for public release.

Includes:

* README
* Documentation
* Case study
* GitHub cleanup
* Demo video
* Deployment
* SEO
* Open Graph assets

---

## Guiding Principle

The project is feature complete.

Every future improvement must answer one question:

> **Does this make RACEX feel more immersive, memorable, and premium?**

If the answer is no, it should not be built.
