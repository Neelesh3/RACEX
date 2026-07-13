# RACEX Review Guide

> "Working code is the minimum. Exceptional code is the goal."

---

# Purpose

This document defines the quality gate for every implementation in RACEX.

Every generated feature, bug fix, refactor or enhancement must satisfy this review before it is considered complete.

If any checklist item fails,

the implementation is not finished.

---

# Review Philosophy

Review code like a Senior Frontend Engineer.

Do not review based on whether the code works.

Review based on:

- correctness
- architecture
- maintainability
- performance
- readability
- user experience

The first solution is rarely the best solution.

---

# Review Order

Always review in this order.

1.

Correctness

↓

2.

Architecture

↓

3.

Performance

↓

4.

Maintainability

↓

5.

User Experience

↓

6.

Accessibility

↓

7.

Code Quality

Never skip steps.

---

# Stage 1 — Correctness

Verify:

✓ Feature satisfies the requested requirements.

✓ No missing functionality.

✓ No broken logic.

✓ No unnecessary behavior.

✓ Types are correct.

✓ Component renders correctly.

✓ No runtime errors.

---

# Stage 2 — Architecture

Verify:

✓ Existing folder structure is respected.

✓ Existing imports are preserved.

✓ Existing exports are preserved.

✓ Component responsibilities remain clear.

✓ No duplicated architecture.

✓ No unnecessary abstractions.

✓ Existing patterns are reused.

Reject implementations that introduce unnecessary complexity.

---

# Stage 3 — React

Verify:

✓ Proper component composition.

✓ Correct hook usage.

✓ No unnecessary state.

✓ No unnecessary effects.

✓ Memoization only where justified.

✓ Client Components only when required.

Avoid unnecessary re-renders.

---

# Stage 4 — Three.js

Verify:

✓ Three.js only handles rendering.

✓ React owns application state.

✓ Camera logic is isolated.

✓ Lighting is reusable.

✓ Models remain reusable.

✓ Materials are reused.

✓ Resources are properly disposed.

Avoid mixing application logic into Three.js.

---

# Stage 5 — TypeScript

Verify:

✓ Strict typing.

✓ No any.

✓ No ts-ignore.

✓ Shared interfaces reused.

✓ No duplicate types.

✓ Generic types when appropriate.

---

# Stage 6 — Performance

Verify:

✓ Lazy loading used where appropriate.

✓ No unnecessary renders.

✓ No duplicated calculations.

✓ Expensive work memoized.

✓ Assets optimized.

✓ Bundle size not increased unnecessarily.

✓ Animations remain performant.

Target smooth interactions.

---

# Stage 7 — Accessibility

Verify:

✓ Keyboard navigation.

✓ Focus states.

✓ ARIA where appropriate.

✓ Readable contrast.

✓ Reduced motion respected.

Accessibility is part of quality.

---

# Stage 8 — Design Consistency

Verify:

✓ Matches DESIGN.md.

✓ Matches PRINCIPLES.md.

✓ Motion has purpose.

✓ Typography remains consistent.

✓ Spacing remains consistent.

✓ Visual hierarchy preserved.

Reject implementations that feel inconsistent.

---

# Stage 9 — Code Quality

Verify:

✓ Readable.

✓ Simple.

✓ Predictable.

✓ Well named.

✓ Small functions.

✓ Small components.

✓ No dead code.

✓ No commented-out code.

✓ No placeholders.

✓ No TODO comments.

Production code only.

---

# Stage 10 — Reusability

Ask:

Can this be reused?

If yes,

is it reusable?

If not,

is it intentionally specific?

Avoid one-off implementations unless absolutely necessary.

---

# Stage 11 — Dependencies

Verify:

No unnecessary packages added.

Existing libraries preferred.

Every dependency has clear value.

Smaller dependency tree is better.

---

# Stage 12 — Error Handling

Verify:

Loading states.

Empty states.

Error boundaries where appropriate.

Graceful failure.

Never allow a feature to fail silently.

---

# Stage 13 — Testing

Confirm:

✓ npm run lint passes.

✓ npm run build passes.

✓ TypeScript passes.

✓ No console errors.

✓ No hydration issues.

✓ Responsive layout verified.

---

# Definition of Done

A feature is complete only when:

✓ Requirements satisfied.

✓ Architecture preserved.

✓ Design remains premium.

✓ Motion has purpose.

✓ Performance maintained.

✓ Accessibility respected.

✓ Responsive.

✓ Strictly typed.

✓ Production ready.

---

# Reasons to Reject Code

Reject immediately if:

❌ Uses any.

❌ Introduces duplicated components.

❌ Breaks architecture.

❌ Creates unnecessary abstractions.

❌ Adds unnecessary dependencies.

❌ Hurts performance.

❌ Doesn't follow DESIGN.md.

❌ Doesn't follow PRINCIPLES.md.

❌ Doesn't compile.

❌ Doesn't build.

❌ Contains placeholders.

❌ Contains TODO comments.

❌ Introduces dead code.

---

# Final Review Question

Before approving any implementation, ask:

> "Would this code make an experienced frontend engineer think the project became better?"

If the answer is not confidently yes,

continue improving it before returning the implementation.