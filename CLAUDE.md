# Operating rules for AI agents working in this repository

This repository is contributed to exclusively by AI agents. There is no
human co-author quietly cleaning up after you — these rules are the whole
quality bar. Read them before writing code, not after.

## 1. What this project is

Each topic is told as a single page, built the way Otto and Marie
Neurath's Wiener Methode told statistics: repeated, countable icons
instead of a chart's axes and legend — except here the icon is an emoji.
A page's job is to make one topic understandable, visually pleasant, and
scientifically defensible, in that order of what the reader notices and
reverse order of what you should compromise on first.

Concretely, a page:

- Starts with the topic name, stated as a plain-language question or
  claim.
- Is a **storyline**: every infographic on the page exists to move that
  one story forward, in the order the reader should encounter it,
  top to bottom. A page can (and often should) have many infographics —
  but each one earns its place. If an infographic doesn't support the
  point being made, cut it or the page doesn't have a clear point yet.
- Ends with every cited source, as numbered footnotes. If a number
  appears on the page, its source is in the footnotes. This is not
  optional and not a formality — it's what keeps "fun" from drifting into
  "made up."

## 2. Architecture: small, testable units — never large files

- One infographic = one unit = one small file under a topic's `units/`
  directory. A unit is a small, close-to-pure function that takes data in
  and returns a render output (see `src/shared/topic-page.ts`'s `Section`
  type). Keep DOM mounting and other untestable glue to the thin `main.ts`
  layer — don't bury it inside a unit.
- Treat roughly **150 lines** as the point where a file should make you
  stop and ask whether it's doing more than one job. There's no hard
  linter gate, so this is a judgment call, but the default answer when a
  file crosses that line is to split it, not to keep scrolling. Use the
  [`split-large-unit` skill](.claude/skills/split-large-unit/SKILL.md).
- Shared logic (pictogram math, page composition, formatting) lives in
  `src/shared/` so units stay focused on *what* to show, not *how* to
  render an emoji row.
- Don't introduce a framework, state management library, or build-system
  change to solve a problem the current plain TypeScript + Vite setup
  already solves. If you genuinely need one, say so and why before adding
  it, rather than quietly expanding the stack.

## 3. Testing is not optional, for either kind of test

- **Unit tests (Vitest):** every unit you add or change gets a
  `<name>.test.ts` next to it. Test the actual behavior (pictogram counts,
  rounding/clamping edge cases, escaping, footnote linking) — not just
  that the function doesn't throw. `renderTopicPage` and `toPictogramRow`
  in `src/shared/` are the reference examples for what "tested" looks
  like here.
- **End-to-end tests (Playwright):** every topic page gets a spec under
  `tests/e2e/<slug>.spec.ts` that checks the page actually renders: title
  visible, expected number of infographics present, every footnote link
  resolves to a listed source. `tests/e2e/_template.spec.ts` is the
  reference example.
- Before you consider any change finished, run all of:

  ```sh
  npm run typecheck
  npm test
  npm run test:e2e
  ```

  A change with a failing or skipped test is not done — fix it or don't
  ship it. Do not comment out or loosen an assertion to make a test pass;
  fix the code or the data.
- Sourcing is partly enforced in code on purpose:
  `renderTopicPage` throws if a topic has zero sources. Don't work around
  that guard — if you're tempted to, it means a citation is missing.

## 4. No shortcuts, and no unilateral "done"

This is the rule that matters most, because it's the one a shortcut-prone
agent is most tempted to skip:

- **Never declare a topic page finished on your own judgment.** Present
  the current draft (or a description of it, plus how to view it), then
  explicitly ask the human what they'd change. Keep iterating — as many
  rounds as it takes — until the human says it's done. "This looks good
  to me" from the agent is not a stopping condition.
- Try more than one way of showing a given figure when it's not obvious
  which is clearest (a pictogram grid vs. a row, grouping vs. one long
  line, etc.) rather than locking in the first idea that renders without
  errors. Cheap to explore now, expensive to redo after the human has
  already reacted to a worse version.
- If a data source is thin, ambiguous, or a figure can't be verified,
  say so instead of filling the gap with a plausible-looking number.
  A missing footnote is a visible, fixable problem; a fabricated one
  is not.
- If you're cutting a corner to save time — skipping a test, reusing a
  suspiciously-convenient number, shipping a page with only one
  infographic because more would take longer — say so out loud and ask,
  rather than deciding silently that it's good enough.
- Use the [`verify-and-iterate`
  skill](.claude/skills/verify-and-iterate/SKILL.md) to run the full
  check (tests + sourcing) and to structure the feedback ask itself, so
  the habit is a repeatable workflow and not something to remember to do
  ad hoc.

## 5. Definition of done for a topic page

Before asking the human to review a topic page (not before considering it
finished — see §4), it should already be true that:

- [ ] The page opens with the topic's name / question and reads as one
      throughline top to bottom.
- [ ] Every infographic supports that throughline; nothing is decorative.
- [ ] Every figure shown traces to a source in `sources.ts`, rendered as a
      numbered footnote, with a real URL and a retrieval date.
- [ ] Every unit has a unit test; the page has a Playwright spec.
- [ ] `npm run typecheck`, `npm test`, and `npm run test:e2e` all pass.
- [ ] No file was left larger than it needs to be for one job (§2).

## 6. Skills

Use these instead of improvising the same workflow slightly differently
each time:

- [`new-topic-page`](.claude/skills/new-topic-page/SKILL.md) — scaffold a
  new topic from `src/topics/_template`.
- [`add-infographic-unit`](.claude/skills/add-infographic-unit/SKILL.md) —
  add one more infographic to an existing topic's storyline.
- [`verify-and-iterate`](.claude/skills/verify-and-iterate/SKILL.md) — run
  the full test + sourcing check, then ask for feedback instead of
  declaring done.
- [`split-large-unit`](.claude/skills/split-large-unit/SKILL.md) — break
  up a file that's outgrown one responsibility.
