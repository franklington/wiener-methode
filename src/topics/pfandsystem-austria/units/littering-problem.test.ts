import { describe, expect, it } from "vitest";
import { renderLitteringProblem } from "./littering-problem";

describe("renderLitteringProblem", () => {
  it("renders one bin per 500 tonnes of yearly litter", () => {
    const html = renderLitteringProblem();
    expect(html).toContain("🗑️".repeat(30)); // 15,000 / 500 = 30
  });

  it("links its caption back to the littering report", () => {
    const html = renderLitteringProblem();
    expect(html).toContain('href="#source-staedtebund-littering-report"');
  });

  it("carries an accessible label for screen readers", () => {
    const html = renderLitteringProblem();
    expect(html).toContain('aria-label="15000 tonnes per year"');
  });
});
