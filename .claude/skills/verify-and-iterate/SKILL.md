---
name: verify-and-iterate
description: Run the full check (typecheck, unit tests, Playwright, sourcing completeness) on a topic page, then ask the human for feedback instead of declaring the work done. Use before handing off any topic-page change, and every round after.
---

# Verify and iterate

This is the workflow behind CLAUDE.md §4 ("no shortcuts, no unilateral
done"). Run it before every hand-off of a topic-page change — the first
time and every time after a round of feedback, not just once at the end.

## 1. Run the checks — all of them, every time

```sh
npm run typecheck
npm test
npm run test:e2e
```

Do not skip `test:e2e` because it's slower, and do not narrow it to only
the topic you just touched if a shared file (`src/shared/**`) changed —
a shared change can silently break another topic's page. If anything
fails, fix the root cause. Do not comment out an assertion, loosen it, or
mark a test skipped to get to green — that's the exact shortcut this
skill exists to prevent.

## 2. Check sourcing completeness by hand, not just by the runtime guard

`renderTopicPage` throws if `sources` is empty, but that only catches the
*total absence* of citations — it can't tell you a figure is uncited,
mis-cited, or stale. Go through the page and confirm:

- Every number shown has a footnote link, and that link's `id` exists in
  `sources.ts`.
- Every source has a real, working URL and a retrieval date.
- Nothing was rounded, estimated, or "reasonably assumed" in place of a
  cited figure. If it was, flag it explicitly in the next step rather
  than letting it pass silently.

## 3. Present the draft and ask — don't declare done

Describe (or show) the current state of the page: what it now says top to
bottom, which infographics were added or changed this round, and any open
questions or judgment calls you made (e.g. "I used a grouped pictogram
here instead of one long row because the count was over 40 — happy to try
the long row if you'd rather compare it"). Then explicitly ask what the
human wants changed.

Concretely end your turn with a question, not a status report — e.g. "What
would you change about this version?" rather than "This is ready." The
human's silence or a generic "looks fine" prompt from you is not consent;
an explicit answer from them is. Repeat this whole skill after every round
of changes, for as many rounds as the human wants, until they say the page
is finished.
