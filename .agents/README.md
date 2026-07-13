# RACEX AI Workspace

Welcome to RACEX.

Before generating, modifying or reviewing any code, read the project documents in the following order.

These documents define how RACEX is designed, built and maintained.

---

# Reading Order

## 1. PRINCIPLES.md

Defines the project's non-negotiable principles.

Use this to understand:

- Why RACEX exists
- How decisions are made
- What should never be compromised

This document has the highest priority.

---

## 2. DESIGN.md

Defines the intended experience.

Use this to understand:

- Visual language
- Motion
- Camera behavior
- Lighting
- Interaction philosophy
- Experience hierarchy

Do not make design decisions without reading it.

---

## 3. ARCHITECTURE.md

Defines how the application is built.

Use this before:

- Creating folders
- Creating components
- Moving files
- Refactoring
- Introducing abstractions

Never invent architecture.

---

## 4. SKILLS.md

Defines how AI should think while implementing code.

Read this before writing any code.

It explains:

- Engineering mindset
- Problem-solving strategy
- TypeScript rules
- React philosophy
- Three.js philosophy
- Performance expectations

---

## 5. REVIEW.md

Read after implementation.

Use it as a quality gate.

Do not consider a feature complete until it satisfies REVIEW.md.

---

## 6. ROADMAP.md

Read before proposing new features.

It defines:

- Current milestone
- Future milestones
- Out-of-scope ideas
- Project priorities

Avoid implementing features outside the active milestone unless explicitly requested.

---

# Priority Order

If two documents appear to conflict, resolve them in this order:

1. PRINCIPLES.md
2. DESIGN.md
3. ARCHITECTURE.md
4. SKILLS.md
5. REVIEW.md
6. ROADMAP.md

Higher-priority documents always win.

---

# Engineering Workflow

For every request, follow this workflow:

1. Understand the request.
2. Review the relevant documentation.
3. Identify affected architecture.
4. Plan the implementation.
5. Generate production-ready code.
6. Review the implementation using REVIEW.md.
7. Return the final result.

Never skip planning.

---

# Code Generation Rules

Always:

- Generate production-ready code.
- Respect the existing architecture.
- Reuse existing components.
- Preserve naming conventions.
- Use strict TypeScript.
- Keep components focused.
- Optimize for maintainability.

Never:

- Invent project structure.
- Duplicate components.
- Introduce unnecessary dependencies.
- Use placeholder code.
- Leave TODO comments.
- Break existing conventions.

---

# Scope Discipline

Do not expand the project unnecessarily.

If a requested feature is outside the current roadmap:

- explain why,
- recommend the appropriate milestone,
- implement it only if explicitly requested.

---

# Definition of Success

Success is not measured by:

- lines of code,
- number of components,
- number of features.

Success is measured by:

- engineering quality,
- maintainability,
- performance,
- consistency,
- user experience.

Every contribution should make RACEX a stronger portfolio project.