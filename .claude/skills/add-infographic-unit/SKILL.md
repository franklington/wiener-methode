---
name: add-infographic-unit
description: Add one more infographic (unit) to an existing topic page's storyline, with its own data/sources and unit test. Use when a topic page exists but needs another beat to support its story.
---

# Add an infographic unit

Use this when a topic page already exists and the storyline needs another
beat — another angle on the same topic, not a new topic.

## First, check it earns its place

A page is a storyline, not a dashboard. Before adding a unit, be able to
answer: what does this infographic let the reader understand that the
existing ones don't? If the answer is "it's a nice-to-have" or "more data
is always good," don't add it — CLAUDE.md §1 is explicit that every
infographic on a page must move the story forward. If you can't articulate
where it slots into the top-to-bottom narrative, ask the human where it
should go (or whether it should exist) before building it.

## Adding the unit

1. Add or extend the figures it needs in `data.ts`, each tagged with a
   `sourceId`.
2. Add the citation to `sources.ts` if it's a new source — reuse an
   existing `Source` entry if the figure comes from a dataset already
   cited on the page rather than duplicating it.
3. Create `units/<beat-name>.ts`: one small, pure render function, plus
   `units/<beat-name>.test.ts` covering its actual rendered output (not
   just "doesn't throw"). Reuse `src/shared/emoji-pictogram.ts` or add a
   new shared primitive there if the visualization technique is generic
   enough to be reused by other units later — don't duplicate pictogram
   math inline in the unit.
4. Insert it into `page.ts`'s `sections` array at the position that
   matches where it belongs in the storyline — this is rarely "at the
   end."
5. Update `tests/e2e/<slug>.spec.ts`'s infographic-count assertion and add
   any assertion specific to the new unit's content.

## Before showing the human the update

Run `npm run typecheck && npm test && npm run test:e2e`. Then use
`verify-and-iterate` to check sourcing completeness and to ask the human
whether the new beat actually strengthens the story, rather than assuming
it does.
