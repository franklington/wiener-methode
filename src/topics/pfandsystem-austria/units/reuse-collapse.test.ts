import { describe, expect, it } from "vitest";
import { renderReuseCollapse } from "./reuse-collapse";

function pictogramRows(html: string): string[] {
  return [...html.matchAll(/class="pictogram"[^>]*>([🔁🥤]*)</gu)].map((match) => match[1]);
}

describe("renderReuseCollapse", () => {
  it("renders 1995's 80% refillable share as 40 of 50 icons", () => {
    const [historicalRow] = pictogramRows(renderReuseCollapse());
    expect(historicalRow).toBe("🔁".repeat(40) + "🥤".repeat(10));
  });

  it("renders 2023's 19% refillable share as 10 of 50 icons", () => {
    const [, currentRow] = pictogramRows(renderReuseCollapse());
    expect(currentRow).toBe("🔁".repeat(10) + "🥤".repeat(40));
  });

  it("names the legal reuse quota as the contrast to the deposit's recycling focus", () => {
    const html = renderReuseCollapse();
    expect(html).toContain("30% by 2030");
  });

  it("links both footnotes", () => {
    const html = renderReuseCollapse();
    expect(html).toContain('href="#source-and-less-mehrweg-history"');
    expect(html).toContain('href="#source-bmluk-mehrwegquote"');
  });
});
