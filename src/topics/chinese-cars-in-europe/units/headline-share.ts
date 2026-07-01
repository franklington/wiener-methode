import { toShareRow } from "../../../shared/emoji-share-row";
import { headlineShare } from "../data";

export function renderHeadlineShare(): string {
  const row = toShareRow(headlineShare.latestPercent, 10, "🚗", "🚙");

  return `
    <section class="infographic" data-unit="headline-share">
      <p class="pictogram" aria-label="${headlineShare.latestPercent} percent">${row}</p>
      <p class="caption">
        In ${headlineShare.latestLabel}, roughly 1 in 10 new cars registered
        in the EU was a Chinese brand — roughly double the share from a
        year earlier.
        <sup><a href="#source-${headlineShare.latestSourceId}">[6]</a></sup>
        <sup><a href="#source-${headlineShare.growthSourceId}">[5]</a></sup>
      </p>
    </section>
  `;
}
