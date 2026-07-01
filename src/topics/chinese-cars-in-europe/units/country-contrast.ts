import { toShareRow } from "../../../shared/emoji-share-row";
import { countryContrast } from "../data";

const TOTAL_ICONS = 50; // each icon = 2 percentage points

export function renderCountryContrast(): string {
  const norwayRow = toShareRow(countryContrast.norway.percent, TOTAL_ICONS, "🚗", "🚙");
  const euRow = toShareRow(countryContrast.euWide.percent, TOTAL_ICONS, "🚗", "🚙");

  return `
    <section class="infographic" data-unit="country-contrast">
      <p class="pictogram-label">Norway, ${countryContrast.norway.label}</p>
      <p class="pictogram" aria-label="${countryContrast.norway.percent} percent">${norwayRow}</p>
      <p class="pictogram-label">EU-wide, ${countryContrast.euWide.label}</p>
      <p class="pictogram" aria-label="${countryContrast.euWide.percent} percent">${euRow}</p>
      <p class="caption">
        Each ${"🚗"} = 2 percentage points. Norway (up from
        ${countryContrast.norway.priorPercent}% a year earlier) is running
        well ahead of the EU-wide average.
        <sup><a href="#source-${countryContrast.norway.sourceId}">[10]</a></sup>
        <sup><a href="#source-${countryContrast.euWide.sourceId}">[6]</a></sup>
      </p>
    </section>
  `;
}
