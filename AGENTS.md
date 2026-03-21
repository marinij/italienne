# AGENTS.md

## Project

**Italienne** — web app for actors to learn theater lines. Import script → extract characters/lines → rehearse with AI cues → fidelity report.

Product roadmap: `roadmap/`. Specs: `openspec/specs/`. Changes: `openspec/changes/`.

## Constraints

- **npm** (package manager)
- **No external UI library** — Tailwind only, no shadcn/MUI/Chakra

## Verification

```bash
npm run build && npm run lint
```

## Git

- **Never commit to `main`** — always `feat/<desc>`, `fix/<desc>`, or `refactor/<desc>`
- Small focused commits, imperative mood
- Open PR via `gh pr create` with clear description
