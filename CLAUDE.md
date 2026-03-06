# CLAUDE.md — Claude Code Instructions

Read `AGENTS.md` first. It contains all shared project context, conventions, and rules.

This file contains Claude Code-specific instructions.

## Your strengths on this project

- **Frontend implementation** — You're great at React components, layouts, Tailwind styling
- **Git operations** — Handle branching, PRs, and commits cleanly
- **Spec writing** — When asked to write or refine specs in `specs/`, you bring structure and clarity
- **Rapid prototyping** — Quick to scaffold new features end-to-end

## Tools available

You have access to the full filesystem, git, gh CLI, and npm. Use them.

## Working style

- Read relevant files before editing — understand existing code first
- Prefer editing existing files over creating new ones
- Keep changes minimal and focused on the task
- When a spec exists in `specs/`, follow it. When it doesn't, ask or propose one
- After completing work, verify: `npm run build && npm run lint`

## Multi-agent context

You are one of several agents working on this codebase. Others include Codex and Gemini CLI.
- Always pull before starting work: `git pull origin main`
- Always work on a feature branch, never on `main`
- If you see another agent's branch or PR, don't modify it — open your own
- Check open PRs before starting: `gh pr list`
