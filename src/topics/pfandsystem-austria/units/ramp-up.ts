import { renderTimeline } from "../../../shared/timeline";
import { rampUp } from "../data";

export function renderRampUp(): string {
  const timeline = renderTimeline(rampUp.map(({ year, label }) => ({ year, label })));

  return `
    <section class="infographic" data-unit="ramp-up">
      ${timeline}
      <p class="caption">
        Getting to 81.5% took the whole year: returns start slow because a
        container sold late in the year hasn't had a chance to come back yet.
        <sup><a href="#source-recycling-pfand-q1">[4]</a></sup>
        <sup><a href="#source-recycling-pfand-midyear">[5]</a></sup>
        <sup><a href="#source-recycling-pfand-tenmonths">[6]</a></sup>
        <sup><a href="#source-recycling-pfand-year-one">[3]</a></sup>
      </p>
    </section>
  `;
}
