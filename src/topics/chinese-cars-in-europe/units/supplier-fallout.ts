import { toPictogramRow } from "../../../shared/emoji-pictogram";
import { supplierFallout } from "../data";

const UNIT_VALUE = 25_000;
const EMOJI = "👷";

export function renderSupplierFallout(): string {
  const row = toPictogramRow(supplierFallout.jobsAtRisk.value, UNIT_VALUE, EMOJI);
  const cutsText = supplierFallout.cuts
    .map((cut) => `${cut.company} (${cut.value.toLocaleString("en-US")})`)
    .join(", ");

  return `
    <section class="infographic" data-unit="supplier-fallout">
      <p class="pictogram" aria-label="${supplierFallout.jobsAtRisk.value.toLocaleString("en-US")} jobs at risk">${row}</p>
      <p class="caption">
        Each ${EMOJI} = 25,000 jobs. A supplier-industry study puts
        ${supplierFallout.jobsAtRisk.value.toLocaleString("en-US")} European
        auto-parts jobs at risk by 2030 from the EV transition and Chinese
        competition combined. Announced cuts already under way include
        ${cutsText}.
        <sup><a href="#source-${supplierFallout.jobsAtRisk.sourceId}">[16]</a></sup>
        <sup><a href="#source-${supplierFallout.cuts[0].sourceId}">[17]</a></sup>
      </p>
    </section>
  `;
}
