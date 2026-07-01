import { toPictogramRow } from "../../../shared/emoji-pictogram";
import { priceGap } from "../data";

const UNIT_VALUE = 5_000;
const EMOJI = "💶";

export function renderPriceGap(): string {
  const chineseRow = toPictogramRow(priceGap.chineseAvgEuro, UNIT_VALUE, EMOJI);
  const overallRow = toPictogramRow(priceGap.overallAvgEuro, UNIT_VALUE, EMOJI);

  return `
    <section class="infographic" data-unit="price-gap">
      <p class="pictogram-label">Avg. imported Chinese-made BEV, 2023</p>
      <p class="pictogram" aria-label="€${priceGap.chineseAvgEuro.toLocaleString("en-US")}">${chineseRow}</p>
      <p class="pictogram-label">Avg. imported BEV overall, 2023</p>
      <p class="pictogram" aria-label="€${priceGap.overallAvgEuro.toLocaleString("en-US")}">${overallRow}</p>
      <p class="caption">
        Each ${EMOJI} = €5,000. Chinese-made electric imports sold for about
        16% less than the average imported EV that year, one reason they
        undercut European rivals on price.
        <sup><a href="#source-${priceGap.sourceId}">[26]</a></sup>
      </p>
    </section>
  `;
}
