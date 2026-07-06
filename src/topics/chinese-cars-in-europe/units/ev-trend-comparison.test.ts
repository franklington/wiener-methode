import { describe, expect, it } from "vitest";
import { renderEvTrendComparison } from "./ev-trend-comparison";

function pictogramRows(html: string): string[] {
  return [...html.matchAll(/class="pictogram"[^>]*>(🔋*)</gu)].map((match) => match[1]);
}

describe("renderEvTrendComparison", () => {
  it("renders June 2022's 5.5% as 3 of 2-point icons", () => {
    const [early] = pictogramRows(renderEvTrendComparison());
    expect(early).toBe("🔋".repeat(3));
  });

  it("renders June 2024's 11.1% as 6 of 2-point icons", () => {
    const [, later] = pictogramRows(renderEvTrendComparison());
    expect(later).toBe("🔋".repeat(6));
  });

  it("links the trend footnote", () => {
    const html = renderEvTrendComparison();
    expect(html).toContain('href="#source-rhg-chinese-cars-europe-trend"');
  });
});
