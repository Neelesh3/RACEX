# RACEX — Performance & Accessibility Manual

This document details the performance optimization strategies, WebGL resource sanitations, accessibility fallbacks, and rendering metrics of the RACEX application.

---

## 1. WebGL & GPU Memory Sanitization

Dynamic Three.js mounts can lead to GPU and VRAM memory leaks. RACEX resolves this explicitly:
- **WebGL Context Release on Unmount**: In [SceneCanvas.tsx](file:///d:/WEB-Projects/RACEX/components/three/canvas/SceneCanvas.tsx), we query active canvas elements upon component disposal and invoke the `WEBGL_lose_context` extension.
- **VRAM Recovery**: This forces the browser to discard active textures, frame buffers, and shaders immediately, reclaiming allocated memory.

---

## 2. Cursor Rendering Optimization

Custom cursors often cause layout thrashing and render lag. We achieve 60 FPS performance:
- **No React Re-renders**: Mouse position coordinates are stored in Framer Motion `useMotionValue` hooks, updating CSS transform attributes directly on the DOM, bypassing the React virtual DOM reconciler.
- **GPU Accelerated**: Only `transform` (`scale`, `scaleX`, `scaleY`, `translate`) and `opacity` are animated, avoiding CPU-heavy repaint loops.

---

## 3. Image & Audio Optimization

- **Modern File Formats**: High-resolution graphics use AVIF and WebP file formats.
- **Layout Shift Prevention**: Geometry wrapper frames have fixed aspect ratios, preventing layout shifts during asset loads.
- **Audio Preloading**: All 26 audio files are loaded on app mount, preventing latency during interactive click/hover events.

---

## 4. Accessibility & Responsive Fallbacks

- **Device Boundary Hiding**: Custom cursors are disabled on touch screens and viewports below `1024px`, utilizing native system cursors instead.
- **`prefers-reduced-motion` Support**: Detects system motion preferences on mount, fallback-configuring cursor springs to zero lag (`stiffness: 10000`, `damping: 100`) and disabling scaling/inertia.
- **Keyboard Tab Snapping**: Snaps the custom cursor ring smoothly onto tab-focused buttons and links.
- **Mute Preferences**: Volume controls and mute states are persisted inside `localStorage`.
