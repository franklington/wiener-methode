import { describe, expect, it } from "vitest";
import { renderSpeedToMarket } from "./speed-to-market";

function pictogramRows(html: string): string[] {
  return [...html.matchAll(/class="pictogram"[^>]*>(🕐*)</gu)].map((match) => match[1]);
}

describe("renderSpeedToMarket", () => {
  it("renders 1.6 years as 2 icons at 1 year/icon", () => {
    const [chineseRow] = pictogramRows(renderSpeedToMarket());
    expect(chineseRow).toBe("🕐".repeat(2));
  });

  it("renders 5.4 years as 5 icons at 1 year/icon", () => {
    const [, foreignRow] = pictogramRows(renderSpeedToMarket());
    expect(foreignRow).toBe("🕐".repeat(5));
  });

  it("links the speed-to-market footnote", () => {
    const html = renderSpeedToMarket();
    expect(html).toContain('href="#source-alixpartners-speed-outlook"');
  });
});
