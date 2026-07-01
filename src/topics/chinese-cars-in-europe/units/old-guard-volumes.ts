import { toPictogramRow } from "../../../shared/emoji-pictogram";
import { oldGuardVolumes } from "../data";

const UNIT_VALUE = 2_000_000;
const EMOJI = "🚗";

export function renderOldGuardVolumes(): string {
  const modelTRow = toPictogramRow(oldGuardVolumes.modelT.value, UNIT_VALUE, EMOJI);
  const beetleRow = toPictogramRow(oldGuardVolumes.beetle.value, UNIT_VALUE, EMOJI);

  return `
    <section class="infographic" data-unit="old-guard-volumes">
      <p class="pictogram-label">Ford Model T (1908-1927)</p>
      <p class="pictogram" aria-label="${oldGuardVolumes.modelT.value.toLocaleString("en-US")} built">${modelTRow}</p>
      <p class="pictogram-label">VW Beetle (1938-2003)</p>
      <p class="pictogram" aria-label="${oldGuardVolumes.beetle.value.toLocaleString("en-US")} built">${beetleRow}</p>
      <p class="caption">
        Each ${EMOJI} = 2 million cars built. Both won on the same idea:
        one design, made cheaply, for decades.
        <sup><a href="#source-ford-model-t-history">[2]</a></sup>
        <sup><a href="#source-vw-beetle-numbers">[3]</a></sup>
      </p>
    </section>
  `;
}
