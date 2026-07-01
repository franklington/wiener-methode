import { escapeHtml } from "../../../shared/topic-page";
import { toPictogramRow } from "../../../shared/emoji-pictogram";
import { euTariffs } from "../data";

const UNIT_VALUE = 5; // each icon = 5 percentage points
const EMOJI = "🧱";

export function renderEuTariffs(): string {
  const rows = euTariffs
    .map(
      (tariff) => `
        <p class="pictogram-label">${escapeHtml(tariff.name)}</p>
        <p class="pictogram" aria-label="${tariff.percent} percent">${toPictogramRow(tariff.percent, UNIT_VALUE, EMOJI)}</p>
      `,
    )
    .join("\n");

  return `
    <section class="infographic" data-unit="eu-tariffs">
      ${rows}
      <p class="caption">
        Each ${EMOJI} = 5 percentage points of anti-subsidy duty, on top of
        the EU's standard 10% import tariff every carmaker already pays.
        <sup><a href="#source-eu-access2markets-tariffs">[15]</a></sup>
      </p>
    </section>
  `;
}
