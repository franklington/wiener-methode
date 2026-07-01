import { renderTimeline } from "../../../shared/timeline";
import { oldGuardFounders } from "../data";

export function renderOldGuardTimeline(): string {
  const timeline = renderTimeline(
    oldGuardFounders.map((founder) => ({ year: founder.year, label: `${founder.name}: ${founder.note}` })),
  );

  return `
    <section class="infographic" data-unit="old-guard-timeline">
      ${timeline}
      <p class="caption">
        Europe's car market was built by companies that are, by Chinese-brand
        standards, ancient.
        <sup><a href="#source-mercedes-history">[1]</a></sup>
        <sup><a href="#source-ford-model-t-history">[2]</a></sup>
        <sup><a href="#source-vw-beetle-numbers">[3]</a></sup>
      </p>
    </section>
  `;
}
