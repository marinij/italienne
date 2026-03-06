# AGENTS.md — Shared Instructions for All Agents

This file is the single source of truth for any AI agent working on this project. Read it fully before starting any task.

## Project Overview

**Italienne** is a web app that helps actors learn their theater lines. Named after the "italienne" — a theater rehearsal technique where actors run through their lines together at speed.

### Core flow

1. **Import a script** — Paste text, upload a PDF, or upload an image of a theater scene
2. **Extract structure** — Parse the script into characters and their lines (dialogue turns)
3. **Rehearse** — The AI gives the cue lines (other characters), the user delivers their own lines
4. **Review** — At the end of a session, show a fidelity report: missed words, swapped phrases, accuracy score

### Versioned roadmap

| Version | Scope | Status |
|---------|-------|--------|
| v0.1 | Text-only italienne (paste script, text-based rehearsal) | **current** |
| v0.2 | Document extraction (PDF/image upload via vision API) | planned |
| v0.3 | Voice mode (TTS for AI lines, STT for user lines) | planned |
| v0.4 | Coaching & history (real-time corrections, session tracking) | planned |

Specs for each version live in `specs/`. If a spec file is a stub, it means the spec hasn't been written yet — writing it may be your task.

## Tech Stack

- **Framework**: Next.js 16 (App Router, `src/` directory)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel
- **Package manager**: npm

## Architecture Decisions

- **App Router only** — no Pages Router, no API routes under `pages/`
- **Server Components by default** — use `"use client"` only when needed (interactivity, browser APIs)
- **Route Handlers** for backend logic (`src/app/api/`)
- **No ORM for now** — start with local state / localStorage. Database comes later if needed
- **No external UI library** — Tailwind only. Keep it simple

## Conventions

### Code style
- Functional components, named exports
- Use `async/await`, never raw `.then()` chains
- Descriptive variable names — no abbreviations
- Files: `kebab-case.ts` for utils, `PascalCase.tsx` for components
- One component per file

### File structure
```
src/
├── app/                    # Next.js routes
│   ├── api/                # Route handlers
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Reusable UI components
├── lib/                    # Business logic, utilities, types
│   ├── parser/             # Script parsing logic
│   ├── rehearsal/          # Rehearsal engine logic
│   └── types.ts            # Shared types
└── ...
```

### Types
Key domain types (defined in `src/lib/types.ts`):
```typescript
interface Character {
  name: string;
}

interface DialogueLine {
  character: Character;
  text: string;
  order: number;
}

interface Script {
  title?: string;
  characters: Character[];
  lines: DialogueLine[];
}

interface RehearsalSession {
  script: Script;
  playingAs: Character;
  responses: UserResponse[];
}

interface UserResponse {
  expected: string;
  actual: string;
  fidelity: number; // 0-1
}
```

## Git Workflow

**This is critical. All agents must follow this.**

1. **Never commit directly to `main`**
2. Create a feature branch: `feat/<short-description>` or `fix/<short-description>`
3. Make small, focused commits with clear messages
4. Push and open a PR via `gh pr create`
5. PR description must explain what changed and why
6. Wait for review before merging

### Branch naming
- `feat/parse-text-input` — new feature
- `fix/dialogue-line-ordering` — bug fix
- `refactor/extract-parser` — refactoring
- `docs/update-spec` — documentation

### Commit messages
Imperative mood, concise: `Add text script parser`, `Fix character name extraction`, `Extract rehearsal engine to lib/`

## Testing

- Write tests for business logic (parser, rehearsal engine)
- Use the built-in test runner (vitest when added)
- Don't test UI components unless they contain complex logic
- Tests live next to the code: `parser.test.ts` alongside `parser.ts`

## Definition of Done (for PRs)

- [ ] Code compiles (`npm run build`)
- [ ] Linter passes (`npm run lint`)
- [ ] Tests pass (when test suite exists)
- [ ] PR has a clear description
- [ ] No unrelated changes in the diff
