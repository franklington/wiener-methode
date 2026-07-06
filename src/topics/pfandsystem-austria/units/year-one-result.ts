import { toShareRow } from "../../../shared/emoji-share-row";
import { yearOneResult } from "../data";

const TOTAL_ICONS = 100; // each icon = 1 percentage point

export function renderYearOneResult(): string {
  const row = toShareRow(yearOneResult.percent, TOTAL_ICONS, "♻️", "🗑️");

  return `
    <section class="infographic" data-unit="year-one-result">
      <p class="pictogram" aria-label="${yearOneResult.percent} percent collected">${row}</p>
      <p class="caption">
        Each icon = 1 percentage point. In its first year, Austria collected
        ${yearOneResult.percent}% of the roughly
        ${(yearOneResult.circulationMillion / 1000).toFixed(1)} billion deposit bottles and cans
        put into circulation - ${(yearOneResult.returnedMillion / 1000).toFixed(1)} billion
        containers - beating the ${yearOneResult.targetPercent}% target set in law.
        <sup><a href="#source-${yearOneResult.sourceId}">[3]</a></sup>
      </p>
    </section>
  `;
}
