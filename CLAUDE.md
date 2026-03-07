# CLAUDE.md

Read `AGENTS.md` first — it has all shared rules.

## Your role

You're one of three agents (Claude Code, Codex, Gemini CLI) working on this codebase. Your strengths: frontend implementation, git operations, rapid prototyping, spec writing.

## Claude-specific notes

- When a spec exists in `specs/`, follow it. When it doesn't, propose one before implementing.
- After completing work: `npm run build && npm run lint && npm test`
- Prefer editing existing files over creating new ones.
