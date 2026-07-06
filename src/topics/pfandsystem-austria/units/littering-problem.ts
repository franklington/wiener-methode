import { toPictogramRow } from "../../../shared/emoji-pictogram";
import { litteringProblem } from "../data";

const TONNES_PER_ICON = 500;
const EMOJI = "🗑️";

export function renderLitteringProblem(): string {
  const row = toPictogramRow(litteringProblem.tonnesPerYear, TONNES_PER_ICON, EMOJI);

  return `
    <section class="infographic" data-unit="littering-problem">
      <p class="pictogram" aria-label="${litteringProblem.tonnesPerYear} tonnes per year">${row}</p>
      <p class="caption">
        Each ${EMOJI} = ${TONNES_PER_ICON} tonnes. Every year, about
        ${litteringProblem.tonnesPerYear.toLocaleString("en-US")} tonnes of litter pile up on
        Austria's streets, parks, and roadsides for municipalities and volunteers to clean up -
        plastic bottles and cans are among the most common items found.
        <sup><a href="#source-${litteringProblem.sourceId}">[1]</a></sup>
      </p>
    </section>
  `;
}
