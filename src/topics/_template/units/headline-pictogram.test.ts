import { describe, expect, it } from "vitest";
import { renderHeadlinePictogram } from "./headline-pictogram";

describe("renderHeadlinePictogram", () => {
  it("renders one 🧍 per 10 units of the example figure", () => {
    const html = renderHeadlinePictogram();
    expect(html).toContain("🧍".repeat(4)); // exampleFigure.value = 42 -> round(42/10) = 4
  });

  it("links its caption back to the cited source", () => {
    const html = renderHeadlinePictogram();
    expect(html).toContain('href="#source-replace-me"');
  });

  it("carries an accessible label for screen readers", () => {
    const html = renderHeadlinePictogram();
    expect(html).toContain('aria-label="42 units"');
  });
});
