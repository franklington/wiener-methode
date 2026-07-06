import { toPictogramRow } from "../../../shared/emoji-pictogram";
import { reductionCaveat } from "../data";

const MILLION_LITRES_PER_ICON = 25;
const EMOJI = "💧";

export function renderReductionCaveat(): string {
  const row = toPictogramRow(reductionCaveat.bottledWaterMillionLitres, MILLION_LITRES_PER_ICON, EMOJI);

  return `
    <section class="infographic" data-unit="reduction-caveat">
      <p class="pictogram" aria-label="${reductionCaveat.bottledWaterMillionLitres} million litres">${row}</p>
      <p class="caption">
        Each ${EMOJI} = ${MILLION_LITRES_PER_ICON} million litres. Collection success hasn't
        shrunk single-use volume: Austria still bottled about
        ${reductionCaveat.bottledWaterMillionLitres} million litres of mineral water in 2024,
        mostly in 1.5-litre PET bottles. An industry group selling reusable water dispensers sums
        up the first year bluntly: "${reductionCaveat.quote}" - return yes, reduction no.
        <sup><a href="#source-${reductionCaveat.sourceId}">[10]</a></sup>
      </p>
    </section>
  `;
}
