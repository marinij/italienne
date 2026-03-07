# AGENTS.md

Read this fully before starting any task.

## What is this project?

**Italienne** — a web app that helps actors learn their theater lines. Named after the "italienne", a theater rehearsal where actors run through lines at speed with a partner giving cues.

Core flow: upload a script (PDF/image) → AI extracts characters & dialogue → rehearse with AI giving cues → get a fidelity report.

## Product bricks

Each brick is built in its final form. We build the real thing, one brick at a time.

| Brick | Scope | Status |
|-------|-------|--------|
| 01 — Script Import | PDF/image upload → AI vision extraction → structured script | **current** |
| 02 — Italienne | Rehearsal engine + fidelity report | planned |
| 03 — Voice | TTS for AI cues, STT for user lines, hands-free mode | planned |

Specs live in `specs/`. Stubs mean the spec hasn't been written yet — writing it may be your task.

## Before you start

1. `git pull origin main`
2. `npm install`
3. `npm test` — run existing tests to understand the project state
4. Read the relevant spec in `specs/` for your task

## Gotchas

- **No Pages Router** — this project uses App Router exclusively. Don't create files under `pages/`.
- **No UI library** — Tailwind only. Don't install component libraries.
- **No database** — localStorage for now. Don't introduce an ORM or DB.
- **Domain types live in `src/lib/types.ts`** — read them before creating new types. Extend, don't duplicate.
- Theater scripts have **no standard format** — the parser must handle varied conventions (character names in CAPS, Title Case, abbreviated, etc.)

## How to work

### Git rules

- **Never commit to `main`**. Always branch: `feat/`, `fix/`, `refactor/`, `docs/`.
- Small, focused PRs. One concern per PR.
- PR description must explain what changed and why. Include manual testing evidence (screenshots for UI, curl output for API, test results for logic).
- If you see another agent's branch or PR, don't touch it — open your own.

### Testing

- **First run the tests.** Before any change, run `npm test` to understand what exists.
- **Use red/green TDD.** Write tests first. Confirm they fail. Then implement. This applies to all business logic (parsers, rehearsal engine, scoring).
- Tests live next to the code: `parser.test.ts` alongside `parser.ts`.
- Don't test UI components unless they contain complex logic.

### Verification

Before opening a PR, verify your work:
```bash
npm run build && npm run lint && npm test
```

If the project has a dev server, start it and manually test your changes. Don't just generate code — run it.

## Definition of Done

- [ ] Code compiles (`npm run build`)
- [ ] Linter passes (`npm run lint`)
- [ ] Tests pass (`npm test`)
- [ ] New business logic has tests (red/green TDD)
- [ ] PR has a clear description with testing evidence
- [ ] No unrelated changes in the diff
