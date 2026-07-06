import { renderTimeline } from "../../../shared/timeline";
import { systemBasics } from "../data";

export function renderSystemBasics(): string {
  const timeline = renderTimeline(systemBasics.map(({ year, label }) => ({ year, label })));

  return `
    <section class="infographic" data-unit="system-basics">
      ${timeline}
      <p class="caption">
        A 25-cent deposit, one national target that keeps rising, and an EU
        deadline Austria is chasing ahead of schedule.
        <sup><a href="#source-bottlebill-austria">[2]</a></sup>
        <sup><a href="#source-recycling-pfand-year-one">[3]</a></sup>
      </p>
    </section>
  `;
}
