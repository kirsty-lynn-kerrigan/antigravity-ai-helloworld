# Hello World — Antigravity

> A "Hello World" web application used as a living lab to demonstrate incremental governance and code quality controls.

Each phase of this project adds exactly **one** new governance capability. The application remains functional at every phase, and each quality gate is independently verifiable.

---

## Phases

| # | Phase | Capability |
|---|---|---|
| ✅ 1 | **Foundation** | Project scaffold + dev server |
| 2 | Code Style | ESLint + Prettier |
| 3 | Design System | CSS tokens + Stylelint |
| 4 | Atomic Design | Component hierarchy |
| 5 | Modules | Feature module architecture |
| 6 | Unit Tests | Vitest + 80% coverage gate |
| 7 | Regression Suite | Integration · E2E · Visual |
| 8 | CI/CD | GitHub Actions pipeline |
| 9 | Dashboard | Governance visibility page |

---

## Getting Started

### Prerequisites
- Node.js v20+ (see `.nvmrc` once added in Phase 4)
- npm 10+

### Run the dev server

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

### Other scripts

```bash
npm run build     # Build for production
npm run preview   # Preview the production build locally
```

---

## Project Structure

```
hello-world/
├── index.html          ← App shell
├── src/
│   ├── main.js         ← Entry point
│   └── style.css       ← Global styles (replaced by design tokens in Phase 3)
├── public/             ← Static assets
├── package.json
└── README.md
```

> 📖 See the full governance plan for detailed phase descriptions and verification steps.

---

## Principles

- **Convention over configuration** — sensible defaults first
- **Fail fast** — quality gates run before merge
- **Automation over discipline** — CI enforces rules
- **Visibility** — governance state surfaces in the app
