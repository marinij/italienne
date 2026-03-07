# Brique 1 — Script Import

> **Status**: current
> **Goal**: Upload a PDF or image of a theater script and extract structured dialogue.

## User Story

As an actor, I want to upload a photo or PDF of my script so the app parses it into characters and their lines — ready for rehearsal.

## Scope

### Input formats
- PDF upload (single or multi-page)
- Image upload (photo of a printed script page — JPG, PNG, HEIC)
- Multiple files for multi-scene scripts

### Extraction pipeline
- Use a vision-capable AI model (Claude or Gemini) to read the document
- Extract: characters, their dialogue lines in order, stage directions (separated from dialogue)
- Output a structured `Script` object (see `src/lib/types.ts`)

### Editing & validation
- After extraction, show the parsed result to the user
- User can correct character names, fix line assignments, edit text
- User can merge/split lines if the parser got boundaries wrong
- Save the corrected script for rehearsal

### Edge cases to handle
- Handwritten annotations on printed scripts
- Poor photo quality / skewed images
- Mixed languages (French scripts with occasional English stage directions)
- Character names in various formats (CAPS, Title Case, abbreviated)
- Stage directions mixed with dialogue (need to be separated)

## Technical Notes

- This requires a server-side API route for the AI vision call
- Consider chunking multi-page PDFs (one page at a time, then merge)
- Store extracted scripts in localStorage for now (no database yet)
- The extraction prompt is critical — it should be carefully engineered

## Open Questions

- Which vision API? (Claude vision vs Gemini vision — test both?)
- Max file size / page count?
- Should we support drag & drop + camera capture on mobile?

---

*This spec is a starting point. The agent assigned to this feature should refine it before implementing.*
