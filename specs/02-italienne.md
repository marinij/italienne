# Brique 2 — Italienne (Rehearsal + Review)

> **Status**: planned — blocked by brique 1
> **Goal**: Run an italienne rehearsal with AI giving cues, then show a fidelity report.

## User Story

As an actor, I want to rehearse my lines by having the AI give me the other characters' cues, so I can practice delivering my lines from memory — and see where I made mistakes afterwards.

## Scope

### Rehearsal flow
- Select a parsed script (from brique 1)
- Choose which character to play
- Lines are presented in order
- Other characters' lines are displayed as cues (text for now, voice in brique 3)
- User types their own character's lines from memory
- Option to skip/reveal a line if stuck

### Fidelity review (end of session)
- Per-line comparison: expected vs actual (word-level diff)
- Highlighted differences: missing words, additions, substitutions, word order changes
- Per-line fidelity score
- Overall accuracy score
- Summary: total lines, skipped lines, perfect lines

### UX considerations
- The cue should feel natural — not like a test
- The user should be able to pause and resume a session
- Large scripts: option to rehearse a subset of scenes/pages

## Technical Notes

- All client-side — no API calls needed for the rehearsal itself
- Fidelity scoring: word-level diff algorithm (consider Levenshtein or similar)
- Normalize text before comparison (lowercase, strip punctuation, handle accents)

## Open Questions

- How to handle stage directions during rehearsal? (skip them? show them as context?)
- Should fidelity scoring account for synonyms or only exact words?

---

*This spec is a starting point. The agent assigned to this feature should refine it before implementing.*
