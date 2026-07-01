# Wiener Methode 🖼️

Open-data topics, explained the way Otto and Marie Neurath's **Wiener Methode
der Bildstatistik** ("Isotype") explained them a century ago: one clear
picture-story per topic, built from repeated, countable icons instead of
axes and legends. This project keeps that idea and swaps the hand-drawn
pictograms for emoji 🧍🚗🌍📈.

## What a page is

Every topic gets **one page**. Reading it top to bottom should feel like
listening to someone explain the topic out loud:

1. **The topic name**, stated as a plain-language question or claim.
2. **A storyline of infographics** — as many as the topic needs, each one
   an emoji-pictogram or small chart, each one earning its place by moving
   the story forward. No infographic exists just to look nice; it exists
   because it supports the point being made.
3. **Sources, as footnotes**, one per cited figure. If a number is on the
   page, its source is in the footnotes — no exceptions. This project's
   whole premise is that fun and scientifically defensible aren't in
   tension.

See [`src/topics/_template`](src/topics/_template) for a working,
minimal example of this shape, and the [`new-topic-page`
skill](.claude/skills/new-topic-page/SKILL.md) for how to start a new one.

## How pages are built

A page is a composition of small, independently testable units — never one
large file:

```
src/
  shared/                 reusable building blocks (pictogram math, page shell)
  topics/
    <topic-slug>/
      meta.ts / page.ts    composes the page from its units, in story order
      sources.ts           every cited open dataset -> footnote
      data.ts              the figures, each traceable to a sourceId
      units/
        <name>.ts          one infographic: a small, pure render function
        <name>.test.ts      its unit test
tests/
  e2e/<topic-slug>.spec.ts  Playwright check that the page renders end to end
```

Each `units/*.ts` file is one infographic and stays small on purpose — see
[CLAUDE.md](CLAUDE.md) for the size and testing rules that keep it that
way, and the [`split-large-unit`
skill](.claude/skills/split-large-unit/SKILL.md) for breaking up a file
that's outgrown its job.

## Getting started

```sh
npm install
npm run dev        # http://localhost:5173
npm test           # unit tests (Vitest)
npm run test:e2e   # end-to-end tests (Playwright)
npm run typecheck
```

## This is an AI-only contribution project

Every change here is written by an AI agent (Claude Code) working from a
human's feedback, not the other way around. [`CLAUDE.md`](CLAUDE.md) is
the operating contract every agent follows: how pages must be structured,
what "tested" means before a change is considered done, and — the most
important rule — that the agent keeps presenting drafts and asking what to
change until the human says it's finished. No shortcuts, no declaring a
topic done unilaterally.

The [`.claude/skills`](.claude/skills) directory turns that contract into
concrete workflows:

| Skill | Use it to |
| --- | --- |
| [`new-topic-page`](.claude/skills/new-topic-page/SKILL.md) | Scaffold a new topic from the template |
| [`add-infographic-unit`](.claude/skills/add-infographic-unit/SKILL.md) | Add one more infographic to an existing topic's storyline |
| [`verify-and-iterate`](.claude/skills/verify-and-iterate/SKILL.md) | Run the full test suite and the sourcing checklist, then ask for feedback instead of declaring done |
| [`split-large-unit`](.claude/skills/split-large-unit/SKILL.md) | Break an overgrown file into small, tested units |

## License / data attribution

Code in this repository is original. Data displayed on any topic page
belongs to the open data source cited in that page's footnotes — this
project only visualizes it.
