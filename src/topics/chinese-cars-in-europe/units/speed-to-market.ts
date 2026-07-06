import { toPictogramRow } from "../../../shared/emoji-pictogram";
import { speedToMarket } from "../data";

const UNIT_VALUE = 1;
const EMOJI = "🕐";

export function renderSpeedToMarket(): string {
  const chineseRow = toPictogramRow(speedToMarket.chineseModelAgeYears, UNIT_VALUE, EMOJI);
  const foreignRow = toPictogramRow(speedToMarket.foreignModelAgeYears, UNIT_VALUE, EMOJI);

  return `
    <section class="infographic" data-unit="speed-to-market">
      <p class="pictogram-label">Avg. age of a Chinese-brand EV/PHEV model on sale</p>
      <p class="pictogram" aria-label="${speedToMarket.chineseModelAgeYears} years">${chineseRow}</p>
      <p class="pictogram-label">Avg. age of a foreign-brand EV/PHEV model on sale</p>
      <p class="pictogram" aria-label="${speedToMarket.foreignModelAgeYears} years">${foreignRow}</p>
      <p class="caption">
        Each ${EMOJI} = 1 year. Chinese brands redesign models roughly every
        ${speedToMarket.chineseModelAgeYears} years versus
        ${speedToMarket.foreignModelAgeYears} for foreign brands — a
        development-speed gap on top of the price gap.
        <sup><a href="#source-${speedToMarket.sourceId}">[28]</a></sup>
      </p>
    </section>
  `;
}
