# Landing Page Copy Pivot — Amateur/Rehearsal Focus

## Context

The current landing targets professional live musicians. The pivot moves messaging toward amateur bands rehearsing together and solo practice. Key insight: pros already have a click track in their in-ear monitors (IEMs). The target user is a regular musician who uses their phone screen as a visual tempo reference during band rehearsal — no audio in the room, no extra hardware, just the phone.

## Decisions Made

- **Visual style**: unchanged — keep the dark aesthetic
- **Tone**: simplified, no musician jargon. "Tempo" not "BPM" in hero. "Songs" not "setlists" where possible
- **Core proposition**: visual tempo reference that requires nothing but a phone
- **Use cases**: rehearsal with bandmates + solo practice (equal weight)
- **Pain points**: tempo drift during practice + keeping songs organized with their tempo

## Copy Changes

### Page title (meta)
- Before: `Clicklist — The Live Musician's Metronome`
- After: `Clicklist — The Rehearsal Metronome`

### Hero label
- Before: `▶ NOW PLAYING`
- After: `▶ REHEARSING`

### Hero tagline
- Before: `YOUR TEMPO. YOUR SETLIST. YOUR STAGE.`
- After: `YOUR TEMPO. YOUR SONGS. YOUR REHEARSAL.`

### Hero sub
- Before: `The precision metronome built for musicians who play live. Reliable timing, setlist management, and a stage-ready performance mode.`
- After: `A visual tempo reference for bands that rehearse. Save your songs with their tempo, hit play, and stay together — no extra gear needed.`

### Features grid (5 cards)

| # | Before | After |
|---|--------|-------|
| 1 | **Drift-Free Timing** — "Absolute-time scheduling with per-tick drift correction. The beat never wanders, even under load." | **Steady Tempo** — "Visual beat reference that stays rock-solid. Glance at it while you play." |
| 2 | **Time Signatures** — unchanged | **Time Signatures** — unchanged |
| 3 | **Setlist Manager** — "Build your show before you play. Drag to reorder, set individual BPMs per song, hit START." | **Song Manager** — "Save every song with its tempo. No more arguing about what speed you were playing at." |
| 4 | **Performance Mode** — "Auto-plays on advance. Bold readability from across the stage in any lighting condition." | **Rehearsal Mode** — "Auto-loads the next song. Readable from across the room in any light." |
| 5 | **Stage-First Design** — "Pure dark mode with high-contrast visuals. No distractions between you and the next beat." | **Distraction-Free** — "Dark, clean display. Nothing between you and the beat." |

### Screenshots section heading
- Before: `EVERY TOOL YOU NEED ON STAGE`
- After: `EVERY TOOL YOU NEED TO REHEARSE`

### Screenshots — phone labels and captions

| Phone | Label before | Label after | Caption before | Caption after |
|-------|-------------|-------------|----------------|---------------|
| Left | SONG LIBRARY | SONG LIBRARY | "Every song with its BPM and time signature. Tap to load instantly." | "Every song with its tempo and time signature. Tap to load instantly." |
| Centre | PERFORMANCE MODE | REHEARSAL MODE | "The beat. The song. Nothing else. Designed for darkness and pressure." | "The beat. The song. Nothing else. Designed to be glanced at while you play." |
| Right | SETLISTS | SONG LISTS | "Plan your show, drag to reorder, then hit START." | "Organise your songs, drag to reorder, then hit START." |

### Performance Spotlight section

**Label**: `Performance Mode` → `Rehearsal Mode`

**Title**: `BUILT FOR THE STAGE` → `BUILT FOR THE REHEARSAL ROOM`

**Body copy**:
- Before: "When the lights go down and the crowd is waiting, your tools need to be invisible. Performance Mode puts the only two things that matter front and center: the beat and what's next."
- After: "When you're mid-song and can't stop to check, your tools need to be invisible. Rehearsal Mode puts the only two things that matter front and centre: the beat and what's next."

**Checklist items**:
1. "Auto-plays when you advance to the next song" → unchanged
2. "Shows the next song so you're always one step ahead" → unchanged
3. "Screen stays on during the full performance" → "Screen stays on throughout the rehearsal"
4. "Bold typography readable across any stage" → "Bold typography you can glance at while playing"
5. "Drift-corrected timing that never wavers" → "Just your phone. No extra gear needed."

### CTA final section

**Label**: `Ready to perform?` → `Ready to rehearse?`

**Title**: `KEEP THE BEAT` → unchanged

**Sub**: `Clicklist is coming to iOS and Android. Be the first to know when it drops.` → unchanged

## Scope

Single file: `index.html`. No structural or styling changes. Text-only replacements.

The JavaScript `SONGS` array (demo songs cycling in the hero) remains unchanged — classic rock tracks work fine for the amateur cover band audience.
