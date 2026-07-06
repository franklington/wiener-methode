import { toShareRow } from "../../../shared/emoji-share-row";
import { reuseCollapse } from "../data";

const TOTAL_ICONS = 50; // each icon = 2 percentage points

export function renderReuseCollapse(): string {
  const historicalRow = toShareRow(reuseCollapse.historicalPercent, TOTAL_ICONS, "🔁", "🥤");
  const currentRow = toShareRow(reuseCollapse.currentPercent, TOTAL_ICONS, "🔁", "🥤");

  return `
    <section class="infographic" data-unit="reuse-collapse">
      <p class="pictogram-label">Refillable share of drinks sold, ${reuseCollapse.historicalLabel}</p>
      <p class="pictogram" aria-label="${reuseCollapse.historicalPercent} percent refillable">${historicalRow}</p>
      <p class="pictogram-label">Refillable share of drinks sold, ${reuseCollapse.currentLabel}</p>
      <p class="pictogram" aria-label="${reuseCollapse.currentPercent} percent refillable">${currentRow}</p>
      <p class="caption">
        Each 🔁 = 2 percentage points. Austria used to run largely on
        refillable bottles - about ${reuseCollapse.historicalPercent}% of drinks sold in
        ${reuseCollapse.historicalLabel} came in reusable packaging. By
        ${reuseCollapse.currentLabel} that share had collapsed to roughly
        ${reuseCollapse.currentPercent}% as single-use PET and cans took over. The 2025 deposit
        targets recycling that single-use stream, not reviving reuse; a separate law aims to
        rebuild reuse to just ${reuseCollapse.legalQuotaPercent}% by ${reuseCollapse.legalQuotaYear}.
        <sup><a href="#source-${reuseCollapse.historySourceId}">[8]</a></sup>
        <sup><a href="#source-${reuseCollapse.legalQuotaSourceId}">[9]</a></sup>
      </p>
    </section>
  `;
}
