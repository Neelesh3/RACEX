# RACEX AI Engineering Guide

> "Think first. Architect second. Code last."

---

# Purpose

This document defines how AI assistants should think, reason, design, implement and review code for RACEX.

This is not a coding style guide.

It is an engineering mindset.

Whenever this document conflicts with convenience, this document wins.

---

# Project Context

RACEX is a flagship frontend engineering portfolio project.

It is designed to demonstrate:

- Software architecture
- React expertise
- Three.js engineering
- UI engineering
- Motion design
- Performance optimization
- Code quality

Every implementation should reinforce those goals.

---

# Core Mindset

Never think like a code generator.

Think like a Senior Frontend Engineer.

Every response should follow this order:

1. Understand
2. Analyze
3. Plan
4. Validate
5. Implement
6. Self Review

Never skip steps.

---

# Before Writing Code

Before generating anything, determine:

What problem is being solved?

Which existing architecture already supports it?

Can existing components be reused?

Will this increase unnecessary complexity?

Does this align with PRINCIPLES.md?

Does this respect DESIGN.md?

Does this preserve ARCHITECTURE.md?

If uncertain,

ask before implementing.

---

# Engineering Philosophy

Code should be:

Simple.

Predictable.

Maintainable.

Composable.

Readable.

Avoid clever implementations.

Future contributors should understand the code immediately.

---

# React Philosophy

React owns the application.

Use React for:

- UI composition
- State
- Routing
- Data flow
- Rendering

Do not move application logic into Three.js.

---

# Three.js Philosophy

Three.js is the experience layer.

Never the application layer.

Three.js should:

- render
- animate
- visualize
- enhance

React should:

- manage state
- own layout
- own routing
- own business logic

---

# Problem Solving Strategy

Whenever asked to build something:

First ask:

Can an existing component solve this?

If yes,

extend it.

Do not duplicate functionality.

If not,

create the smallest reusable abstraction.

---

# Architecture Discipline

Never invent architecture.

Respect existing folders.

Respect naming conventions.

Respect imports.

Respect exports.

Never reorganize the project without being asked.

---

# Component Design

Every component should have one responsibility.

Large experiences should emerge through composition.

Avoid massive files.

Extract reusable logic only after repetition appears.

---

# TypeScript

Always use strict typing.

Never use:

- any
- ts-ignore
- unnecessary assertions

Create reusable interfaces.

Reuse existing types whenever possible.

---

# Data

Mock data belongs inside:

lib/

Types belong inside:

types/

Never duplicate either.

---

# State

Prefer:

Local State

↓

Lifted State

↓

Context

↓

Global State

Only introduce global state if truly necessary.

---

# Animation

Animation should communicate.

Never animate for decoration.

Ask:

What information does this motion communicate?

If the answer is nothing,

remove it.

---

# Performance

Treat performance as a feature.

Always consider:

Render count

Bundle size

Memory

GPU load

Model size

Texture size

Animation cost

Every optimization matters.

---

# Code Generation Rules

Always generate:

Complete files.

Never placeholders.

Never TODOs.

Never incomplete snippets unless explicitly requested.

Code should be immediately usable.

---

# Existing Code

Never rewrite working code unless requested.

Prefer extending existing architecture.

Avoid unnecessary refactoring.

Preserve naming conventions.

---

# Dependencies

Never introduce a dependency if:

React already solves it.

Next.js already solves it.

Tailwind already solves it.

Existing utilities already solve it.

Every dependency must justify its existence.

---

# Error Handling

Assume failure.

Handle:

Loading

Empty states

Errors

Missing assets

Network failures

Gracefully.

---

# Accessibility

Always consider:

Keyboard navigation

Reduced motion

ARIA when appropriate

Readable contrast

Focus visibility

Accessibility is not optional.

---

# Communication Style

Do not over-explain.

Explain only:

Architecture decisions

Trade-offs

Breaking changes

Otherwise,

prioritize implementation.

---

# Self Review

Before returning code, verify:

✓ TypeScript is correct.

✓ Imports exist.

✓ Paths are correct.

✓ Existing architecture is preserved.

✓ No duplicated code.

✓ No unnecessary abstractions.

✓ Components have one responsibility.

✓ Performance remains acceptable.

✓ Responsive behavior is maintained.

✓ Code is production ready.

---

# When Debugging

Do not speculate.

Read the error.

Identify the root cause.

Fix the root cause.

Avoid temporary workarounds.

Explain only if necessary.

---

# When Reviewing Code

Review in this order:

1. Correctness

2. Architecture

3. Performance

4. Readability

5. Reusability

6. Accessibility

7. Design consistency

Never approve code that violates architecture for short-term convenience.

---

# Decision Framework

When multiple implementations exist, prefer the one that:

Improves maintainability.

Reduces complexity.

Preserves architecture.

Improves performance.

Produces the better user experience.

---

# Never Do

Never generate placeholder code.

Never invent APIs.

Never invent project structure.

Never duplicate components.

Never ignore existing conventions.

Never optimize prematurely.

Never sacrifice readability for cleverness.

Never add features outside the current scope.

---

# Final Principle

Every implementation should make RACEX a stronger demonstration of engineering excellence.

The goal is not simply to make the application work.

The goal is to make the implementation something another engineer would enjoy reading.