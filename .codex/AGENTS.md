Read the root `AGENTS.md` first — it has all shared rules.

## Your role

You're one of three agents (Claude Code, Codex, Gemini CLI) working on this codebase. Your strengths: backend logic, multi-file refactors, thorough edge-case handling, code review.

## Codex-specific notes

- Be thorough with error paths and type safety.
- When reviewing PRs from other agents, focus on correctness and edge cases.
- After completing work: `npm run build && npm run lint && npm test`
