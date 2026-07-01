import { toPictogramRow } from "../../../shared/emoji-pictogram";
import { exampleFigure } from "../data";

// REPLACE: one infographic unit = one small, pure, testable function.
// Keep the render logic here and the caption text scoped to what this
// single unit is showing; the page composes many of these top to bottom.
export function renderHeadlinePictogram(): string {
  const unitValue = 10;
  const emoji = "🧍";
  const row = toPictogramRow(exampleFigure.value, unitValue, emoji);

  return `
    <section class="infographic" data-unit="headline-pictogram">
      <p class="pictogram" aria-label="${exampleFigure.value} units">${row}</p>
      <p class="caption">
        Each ${emoji} = ${unitValue} units. REPLACE this caption with the
        real story beat this number tells.
        <sup><a href="#source-${exampleFigure.sourceId}">[1]</a></sup>
      </p>
    </section>
  `;
}
