---
name: new-topic-page
description: Scaffold a new Wiener Methode topic page from the template — one topic, one page, storyline of small tested infographic units, sources as footnotes. Use when starting a brand new topic.
---

# New topic page

Use this when the human asks for a new topic to be added — a new question
or claim to explain with open data, emoji, and footnoted sources.

## Before writing any code

1. State the topic as one plain-language sentence (this becomes the page
   title) and one line framing why it matters (the subtitle).
2. Find the open data source(s) the figures will come from. You need at
   least one real, linkable, dated source before scaffolding — this
   project does not render uncited pages (`renderTopicPage` enforces this
   at runtime, but don't rely on the guard; get sourcing right up front).
3. Sketch the storyline as a short ordered list of infographic beats
   (e.g. "1. how big is it overall, 2. how has it changed, 3. how does it
   compare to X"). Each beat becomes one unit. If you can't state the
   list, the topic isn't scoped enough to start.
4. Pick a slug: lowercase, hyphenated, e.g. `bicycle-commuting-vienna`.

## Scaffold

Copy the shape of `src/topics/_template/`, not its content:

```
src/topics/<slug>/
  sources.ts   # Source[] — id, label, url, retrieved date, per §3 of CLAUDE.md
  data.ts      # figures, each tagged with the sourceId it came from
  units/
    <beat-1>.ts       # small, pure render function for one infographic
    <beat-1>.test.ts  # its unit test
    <beat-2>.ts
    <beat-2>.test.ts
  page.ts      # composes sections in storyline order + sources
tests/e2e/<slug>.spec.ts
```

- Keep each `units/*.ts` file scoped to one infographic. If a unit needs
  more than ~150 lines to render one thing, that's a signal to extract a
  helper into `src/shared/`, not to let the unit grow — see
  `split-large-unit`.
- Write the unit test for each unit as you write the unit, not after —
  assert on the actual rendered content (counts, labels, footnote links),
  following `src/topics/_template/units/headline-pictogram.test.ts`.
- Write the Playwright spec for the page following
  `tests/e2e/_template.spec.ts`: title visible, expected infographic
  count, every footnote link resolves.
- Do **not** wire the new topic into `src/main.ts` as the default mount
  unless there's only one topic in the project; if a second topic is
  being added, first introduce a minimal slug-based picker rather than
  fighting over which topic `main.ts` hardcodes.

## Before showing the human a draft

Run `npm run typecheck && npm test && npm run test:e2e`. Then hand off to
the `verify-and-iterate` skill rather than declaring the page finished —
per CLAUDE.md §4, a new topic page is never "done" until the human says
so, and it usually takes more than one round.
