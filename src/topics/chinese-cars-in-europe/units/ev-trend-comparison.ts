import { toPictogramRow } from "../../../shared/emoji-pictogram";
import { evTrendComparison } from "../data";

const UNIT_VALUE = 2; // each icon = 2 percentage points
const EMOJI = "🔋";

export function renderEvTrendComparison(): string {
  const earlyRow = toPictogramRow(evTrendComparison.early.percent, UNIT_VALUE, EMOJI);
  const laterRow = toPictogramRow(evTrendComparison.later.percent, UNIT_VALUE, EMOJI);

  return `
    <section class="infographic" data-unit="ev-trend-comparison">
      <p class="pictogram-label">${evTrendComparison.early.year}</p>
      <p class="pictogram" aria-label="${evTrendComparison.early.percent} percent">${earlyRow}</p>
      <p class="pictogram-label">${evTrendComparison.later.year}</p>
      <p class="pictogram" aria-label="${evTrendComparison.later.percent} percent">${laterRow}</p>
      <p class="caption">
        Each ${EMOJI} = 2 percentage points of the EU's electric-car market
        specifically (a narrower, faster-moving slice than the overall
        market share above). It roughly doubled in two years.
        <sup><a href="#source-${evTrendComparison.early.sourceId}">[27]</a></sup>
      </p>
    </section>
  `;
}
