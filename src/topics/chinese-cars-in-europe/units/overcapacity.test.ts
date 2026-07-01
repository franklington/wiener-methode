import { describe, expect, it } from "vitest";
import { renderOvercapacity } from "./overcapacity";

function pictogramRows(html: string): string[] {
  return [...html.matchAll(/class="pictogram"[^>]*>(🏭*)</gu)].map((match) => match[1]);
}

describe("renderOvercapacity", () => {
  it("renders 15 factories for 738 brands in 2023 at 50/icon", () => {
    const [row2023] = pictogramRows(renderOvercapacity());
    expect(row2023).toBe("🏭".repeat(15));
  });

  it("renders 12 factories for 591 brands in 2024 at 50/icon", () => {
    const [, row2024] = pictogramRows(renderOvercapacity());
    expect(row2024).toBe("🏭".repeat(12));
  });

  it("links both footnotes", () => {
    const html = renderOvercapacity();
    expect(html).toContain('href="#source-ainvest-overcapacity"');
    expect(html).toContain('href="#source-cnn-price-war"');
  });
});
