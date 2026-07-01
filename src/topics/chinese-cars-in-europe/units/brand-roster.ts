import { escapeHtml } from "../../../shared/topic-page";
import { toPictogramRow } from "../../../shared/emoji-pictogram";
import { brandRoster } from "../data";

export function renderBrandRoster(): string {
  const row = toPictogramRow(brandRoster.brands.length, 1, "🚗");
  const items = brandRoster.brands.map((brand) => `<li>${escapeHtml(brand)}</li>`).join("\n");

  return `
    <section class="infographic" data-unit="brand-roster">
      <p class="pictogram" aria-label="${brandRoster.brands.length} brand families">${row}</p>
      <ul class="brand-list">${items}</ul>
      <p class="caption">
        ${brandRoster.brands.length} Chinese-owned brand families now sell in
        Europe, from single marques to Geely's multi-brand portfolio.
        <sup><a href="#source-${brandRoster.sourceId}">[7]</a></sup>
        <sup><a href="#source-${brandRoster.geelySourceId}">[23]</a></sup>
      </p>
    </section>
  `;
}
