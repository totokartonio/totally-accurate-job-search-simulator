# Totally Accurate Job Search Simulator

A satirical web app that simulates the modern job application experience — complete with autofill that mangles your name, a progress bar that takes forever, and a rejection letter at the end.

Try it: [https://totally-accurate-job-search-simulator.netlify.app/](#)

---

## What it is

A tongue-in-cheek take on job application forms. You fill out your details, watch your application get "analyzed", and receive a thoroughly apologetic rejection. The autofill feature is particularly accurate.

## Tech stack

- **React 19** with the React Compiler (`babel-plugin-react-compiler`)
- **TypeScript** in strict mode
- **Vite 7** for bundling and dev server
- **CSS Modules** for component-scoped styles
- **vite-plugin-svgr** for SVG imports as React components
- **Bun** as the package manager

No UI library. No state management library. Just props and `useState`.

## Project structure

```
src/
├── components/
│   ├── ApplicationForm/     # The main form — inputs, autofill, CV upload
│   │   └── atoms/           # Input, InputRadio, InputCV, InputCheckbox, Autofill
│   ├── LoadingScreen/       # Progress bar + rotating quotes while "analyzing"
│   ├── Results/             # The rejection screen
│   ├── StartScreen/         # Landing screen
│   ├── Header/
│   ├── Footer/
│   └── ui/                  # Shared primitives: Button, ContentCard, Layout, ProgressBar
├── data/
│   ├── loadingQuotes.ts     # The quotes shown during loading
│   └── pronouns.ts          # Pronoun options for the radio group
└── styles/
    ├── reset.css
    └── index.css            # Design tokens (colors, spacing, typography, animations)
```

## Getting started

```bash
bun install
bun run dev
```

```bash
bun run build    # type-check + production build
bun run preview  # preview the production build locally
bun run lint     # ESLint with TypeScript and React Hooks rules
```

## App flow

```
StartScreen → ApplicationForm → LoadingScreen → Results → (back to StartScreen)
```

State is managed in `App.tsx` as a simple `"start" | "form" | "loading" | "results"` union. Each screen is a self-contained component that calls a callback to advance.

## Design decisions

**No router.** Four screens, one state variable. A router would be overkill.

**No global state.** Form data lives in `ApplicationForm`. The results screen doesn't need it — the outcome is always the same.

**CSS Modules over Tailwind.** Design tokens live in `index.css` as CSS custom properties and are referenced everywhere. Keeps styles co-located with components without the build overhead of a utility framework.

## License

MIT
