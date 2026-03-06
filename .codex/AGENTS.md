Read the root `AGENTS.md` first. It contains all shared project context, conventions, and rules.

This file contains Codex-specific instructions.

## Your strengths on this project

- **Backend logic** — Parsing engines, data processing, complex algorithms
- **Multi-file refactors** — You handle cross-cutting changes well
- **Edge cases** — You're thorough at catching logic errors and missing validations
- **Code review** — When reviewing PRs from other agents, focus on correctness and edge cases

## Working style

- Read relevant files before editing — understand existing code first
- Be thorough: consider edge cases, error paths, and type safety
- When a spec exists in `specs/`, follow it precisely
- After completing work, verify: `npm run build && npm run lint`
- Write tests for any business logic you implement

## Multi-agent context

You are one of several agents working on this codebase. Others include Claude Code and Gemini CLI.
- Always pull before starting work: `git pull origin main`
- Always work on a feature branch, never on `main`
- If you see another agent's branch or PR, don't modify it — open your own
- Check open PRs before starting: `gh pr list`
