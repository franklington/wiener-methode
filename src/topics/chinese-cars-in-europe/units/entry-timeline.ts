import { renderTimeline } from "../../../shared/timeline";
import { entryTimeline } from "../data";

export function renderEntryTimeline(): string {
  const timeline = renderTimeline(entryTimeline.map(({ year, label }) => ({ year, label })));

  return `
    <section class="infographic" data-unit="entry-timeline">
      ${timeline}
      <p class="caption">
        The current wave is recent: every brand below entered Europe within
        the last few years.
        <sup><a href="#source-mg-europe-relaunch">[4]</a></sup>
        <sup><a href="#source-autonews-china-europe-sales">[8]</a></sup>
        <sup><a href="#source-automotiveworld-gwm-offensive">[9]</a></sup>
      </p>
    </section>
  `;
}
