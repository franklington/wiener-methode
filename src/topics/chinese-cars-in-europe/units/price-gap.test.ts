import { describe, expect, it } from "vitest";
import { renderPriceGap } from "./price-gap";

function pictogramRows(html: string): string[] {
  return [...html.matchAll(/class="pictogram"[^>]*>(💶*)</gu)].map((match) => match[1]);
}

describe("renderPriceGap", () => {
  it("renders €25,200 as 5 icons at €5,000/icon", () => {
    const [chineseRow] = pictogramRows(renderPriceGap());
    expect(chineseRow).toBe("💶".repeat(5));
  });

  it("renders €30,200 as 6 icons at €5,000/icon", () => {
    const [, overallRow] = pictogramRows(renderPriceGap());
    expect(overallRow).toBe("💶".repeat(6));
  });

  it("links the price-gap footnote", () => {
    const html = renderPriceGap();
    expect(html).toContain('href="#source-eprs-chinese-ev-price-gap"');
  });
});
