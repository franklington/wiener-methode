import { toShareRow } from "../../../shared/emoji-share-row";
import { recyclabilityPayoff } from "../data";

const TOTAL_ICONS = 50; // each icon = 2 percentage points

export function renderRecyclabilityPayoff(): string {
  const recyclableRow = toShareRow(recyclabilityPayoff.recyclablePercent, TOTAL_ICONS, "♻️", "🚮");
  const recycledContentRow = toShareRow(recyclabilityPayoff.recycledContentPercent, TOTAL_ICONS, "♻️", "🌱");

  return `
    <section class="infographic" data-unit="recyclability-payoff">
      <p class="pictogram-label">Share of collected material that's recyclable</p>
      <p class="pictogram" aria-label="${recyclabilityPayoff.recyclablePercent} percent recyclable">${recyclableRow}</p>
      <p class="pictogram-label">Recycled content in new PET bottles</p>
      <p class="pictogram" aria-label="${recyclabilityPayoff.recycledContentPercent} percent recycled content">${recycledContentRow}</p>
      <p class="caption">
        Each ♻️ = 2 percentage points. The collected material pays off:
        ${recyclabilityPayoff.recyclablePercent}% of what's gathered is recyclable, and new PET
        bottles already contain more than ${recyclabilityPayoff.recycledContentPercent}% recycled
        plastic - above what EU rules currently require.
        <sup><a href="#source-${recyclabilityPayoff.sourceId}">[7]</a></sup>
      </p>
    </section>
  `;
}
