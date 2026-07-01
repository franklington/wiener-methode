import { toPictogramRow } from "../../../shared/emoji-pictogram";
import { overcapacity } from "../data";

const UNIT_VALUE = 50; // each icon = 50 EV brands
const EMOJI = "🏭";

export function renderOvercapacity(): string {
  const row2023 = toPictogramRow(overcapacity.brands2023.value, UNIT_VALUE, EMOJI);
  const row2024 = toPictogramRow(overcapacity.brands2024.value, UNIT_VALUE, EMOJI);

  return `
    <section class="infographic" data-unit="overcapacity">
      <p class="pictogram-label">Active Chinese EV brands, 2023</p>
      <p class="pictogram" aria-label="${overcapacity.brands2023.value} brands">${row2023}</p>
      <p class="pictogram-label">Active Chinese EV brands, 2024</p>
      <p class="pictogram" aria-label="${overcapacity.brands2024.value} brands">${row2024}</p>
      <p class="caption">
        Each ${EMOJI} = 50 brands. China's factories can build about
        ${overcapacity.capacityMillion}M EVs a year against roughly
        ${overcapacity.demandMillion}M in forecast domestic sales — the
        surplus is why so many brands are pushing into Europe, and analysts
        expect only a handful to survive the shakeout long-term.
        <sup><a href="#source-${overcapacity.brands2023.sourceId}">[14]</a></sup>
        <sup><a href="#source-${overcapacity.survivorsSourceId}">[13]</a></sup>
      </p>
    </section>
  `;
}
