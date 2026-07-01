---
name: split-large-unit
description: Refactor a file that has grown past one clear responsibility into smaller, independently tested units. Use when a units/*.ts, page.ts, or shared/*.ts file is hard to describe in one sentence or is creeping past ~150 lines.
---

# Split a large unit

CLAUDE.md §2 sets ~150 lines as the point to stop and check whether a file
is doing more than one job. Use this skill when you notice that, or when
asked to clean up a file that's become hard to follow.

## Diagnose before splitting

Read the file and try to describe what it does in one sentence. If you
need "and" to describe it ("renders the pictogram *and* formats the
caption *and* computes the trend"), that's the split. Common causes here:

- A unit's render function does data transformation, formatting, *and*
  markup assembly inline instead of delegating the reusable parts.
- A `page.ts` has inline render logic for a section instead of delegating
  to a `units/*.ts` file.
- A `shared/*.ts` file has accumulated multiple unrelated helpers because
  it was the easiest place to drop one more function.

## How to split

1. Extract each distinct responsibility into its own function, in its own
   file, with a name that states what it does.
   - Pure data/formatting logic (no markup) → a small module in
     `src/shared/` if more than one unit could use it, or a sibling file
     next to the unit if it's specific to that topic.
   - Markup assembly for a single infographic → stays in `units/<name>.ts`.
2. Give every extracted function its own `.test.ts` covering its actual
   behavior — don't just move code and assume the original unit's test
   still covers it; write new focused tests for the new module and trim
   the original test to what the original file still does.
3. Update the importer (`page.ts` or the unit that used the inline logic)
   to call the extracted function instead of inlining it.
4. Confirm nothing regressed: `npm run typecheck && npm test && npm run
   test:e2e`.

## What "done" looks like

Every resulting file should be describable in one sentence, have its own
test file, and be smaller than what you started with. If splitting made a
file *more* confusing (e.g. two files that are never used independently
and always change together), that's a sign the split was along the wrong
seam — recombine and look for a different boundary rather than keeping an
awkward split for its own sake.
