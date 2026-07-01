import { renderTimeline } from "../../../shared/timeline";
import { bydHistory } from "../data";

export function renderBydHistory(): string {
  const timeline = renderTimeline(bydHistory.map(({ year, label }) => ({ year, label })));

  return `
    <section class="infographic" data-unit="byd-history">
      ${timeline}
      <p class="caption">
        BYD's own history rhymes with Ford's and VW's: a manufacturing
        advantage — batteries instead of assembly lines — turned into cars.
        <sup><a href="#source-cnn-byd-explainer">[11]</a></sup>
        <sup><a href="#source-wikipedia-byd-auto">[12]</a></sup>
      </p>
    </section>
  `;
}
