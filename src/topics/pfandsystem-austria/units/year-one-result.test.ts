import { describe, expect, it } from "vitest";
import { renderYearOneResult } from "./year-one-result";

describe("renderYearOneResult", () => {
  it("renders 81.5% as 82 of 100 icons", () => {
    const html = renderYearOneResult();
    expect(html).toContain("♻️".repeat(82) + "🗑️".repeat(18));
  });

  it("states the target it beat and the absolute totals", () => {
    const html = renderYearOneResult();
    expect(html).toContain("80% target");
    expect(html).toContain("2.0 billion");
    expect(html).toContain("1.4 billion");
  });

  it("links its caption back to the cited source", () => {
    const html = renderYearOneResult();
    expect(html).toContain('href="#source-recycling-pfand-year-one"');
  });
});
