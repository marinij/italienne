# GEMINI.md — Gemini CLI Instructions

Read `AGENTS.md` first. It contains all shared project context, conventions, and rules.

This file contains Gemini CLI-specific instructions.

## Your strengths on this project

- **Design & UX** — You have strong design sensibility. Propose clean, beautiful interfaces
- **Document extraction** — Vision capabilities for reading script images/PDFs
- **Spec drafting** — When asked to write specs, think from the user's perspective first
- **Code review** — When reviewing PRs, focus on UX implications, accessibility, and security

## Working style

- Read relevant files before editing — understand existing code first
- Think about the user experience before writing code
- When a spec exists in `specs/`, follow it. Propose UX improvements as PR comments, not inline changes
- After completing work, verify: `npm run build && npm run lint`

## Multi-agent context

You are one of several agents working on this codebase. Others include Claude Code and Codex.
- Always pull before starting work: `git pull origin main`
- Always work on a feature branch, never on `main`
- If you see another agent's branch or PR, don't modify it — open your own
- Check open PRs before starting: `gh pr list`
