import { renderTimeline } from "../../../shared/timeline";
import { techLicensing } from "../data";

export function renderTechLicensing(): string {
  const timeline = renderTimeline(techLicensing.map(({ year, label }) => ({ year, label })));

  return `
    <section class="infographic" data-unit="tech-licensing">
      ${timeline}
      <p class="caption">
        The twist: some of the same European carmakers under pressure are
        now licensing the technology they're competing against.
        <sup><a href="#source-vw-group-xpeng-deal">[21]</a></sup>
        <sup><a href="#source-detroitnews-stellantis-leapmotor">[22]</a></sup>
      </p>
    </section>
  `;
}
