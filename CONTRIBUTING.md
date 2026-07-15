# Contributing to RACEX

Thank you for your interest in RACEX! Although this is primarily a portfolio project to demonstrate senior frontend capabilities, contributions, issue reporting, and suggestions are welcome.

---

## 🚀 Local Development Workflow

1. **Fork the Repository**: Create a personal copy of the repository on GitHub.
2. **Setup Local Copy**:
   ```bash
   git clone https://github.com/your-username/racex.git
   cd racex
   npm install
   ```
3. **Branching Rules**: Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

---

## 🎨 Quality Standards & Verification

Before opening a pull request, ensure your code passes our quality metrics:

### 1. Zero Code Warnings
All TypeScript, ESLint, and Next.js guidelines must be met:
```bash
npm run lint
```

### 2. Successful Compilations
Verify that all routes compile and prerender successfully:
```bash
npm run build
```

---

## 📐 Architecture Conventions

* **Decoupled Logic**: Keep layout contexts decoupled from mouse coordinate listeners (use Framer Motion `useMotionValue` or local components for high-frequency position updates).
* **CSS Variable Styling**: Style elements through constructor theme variables. Avoid hardcoding team colors.
* **explicit Audio cues**: Do not bind global document-wide listeners for hover/click cues. Register them on target button/card components explicitly.
