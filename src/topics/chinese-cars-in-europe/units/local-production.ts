import { renderTimeline } from "../../../shared/timeline";
import { localProduction } from "../data";

export function renderLocalProduction(): string {
  const timeline = renderTimeline(localProduction.map(({ year, label }) => ({ year, label })));

  return `
    <section class="infographic" data-unit="local-production">
      ${timeline}
      <p class="caption">
        Tariffs are reshaping the strategy, not stopping it: Chinese brands
        are shifting from exporting cars to building them inside Europe
        (and in tariff-free Turkey).
        <sup><a href="#source-xinhua-chery-ebro-spain">[20]</a></sup>
        <sup><a href="#source-electrive-byd-hungary">[18]</a></sup>
        <sup><a href="#source-electrive-byd-turkey">[19]</a></sup>
      </p>
    </section>
  `;
}
