import { toPictogramRow } from "../../../shared/emoji-pictogram";
import { scaleRealityCheck } from "../data";

const UNIT_VALUE = 500_000;
const EMOJI = "🚗";

export function renderScaleRealityCheck(): string {
  const vwRow = toPictogramRow(scaleRealityCheck.vwGroup.registrations, UNIT_VALUE, EMOJI);
  const chineseRow = toPictogramRow(scaleRealityCheck.chineseBrands.registrations, UNIT_VALUE, EMOJI);

  return `
    <section class="infographic" data-unit="scale-reality-check">
      <p class="pictogram-label">Volkswagen Group, EU registrations 2025</p>
      <p class="pictogram" aria-label="${scaleRealityCheck.vwGroup.registrations.toLocaleString("en-US")} cars">${vwRow}</p>
      <p class="pictogram-label">All Chinese brands combined, EU registrations 2025</p>
      <p class="pictogram" aria-label="${scaleRealityCheck.chineseBrands.registrations.toLocaleString("en-US")} cars">${chineseRow}</p>
      <p class="caption">
        Each ${EMOJI} = 500,000 cars, out of ${scaleRealityCheck.totalMarket.registrations.toLocaleString("en-US")}
        total new EU registrations in 2025. Chinese brands are growing fast,
        but Volkswagen Group alone still outsells all of them combined.
        <sup><a href="#source-${scaleRealityCheck.vwGroup.sourceId}">[24]</a></sup>
        <sup><a href="#source-${scaleRealityCheck.totalMarket.sourceId}">[25]</a></sup>
      </p>
    </section>
  `;
}
