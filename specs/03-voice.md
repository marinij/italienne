# Brique 3 — Voice Mode

> **Status**: planned — blocked by brique 2
> **Goal**: Hands-free italienne — AI speaks cue lines aloud, user responds by voice.

## User Story

As an actor, I want to rehearse hands-free — the AI speaks the other characters' lines out loud, I respond with my voice, and the app captures what I said for fidelity scoring.

## Scope

### Text-to-Speech (AI cues)
- AI delivers other characters' lines using TTS
- Natural-sounding voice (not robotic)
- Configurable speed

### Speech-to-Text (user lines)
- Capture user's spoken lines via microphone
- Transcribe to text for fidelity comparison
- Handle French language primarily

### Flow
- Same rehearsal flow as brique 2, but voice replaces typing
- Visual indicator of who's speaking / listening
- Hands-free: auto-advance after user finishes speaking

## Technical Notes

- TTS: Web Speech API (free, browser-native) or external API for better quality
- STT: Web Speech API or Whisper API for better accuracy
- French language support is critical — test accuracy on theater dialogue

## Open Questions

- Web Speech API vs paid APIs? (quality vs cost tradeoff)
- How to detect when the user has finished speaking? (silence detection)
- Mobile browser support for STT?

---

*This spec is a starting point. The agent assigned to this feature should refine it before implementing.*
