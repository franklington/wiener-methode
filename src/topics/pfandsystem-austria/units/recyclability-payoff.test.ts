import { describe, expect, it } from "vitest";
import { renderRecyclabilityPayoff } from "./recyclability-payoff";

describe("renderRecyclabilityPayoff", () => {
  it("renders 99.5% recyclable as 50 of 50 icons", () => {
    const html = renderRecyclabilityPayoff();
    expect(html).toContain("♻️".repeat(50) + "🚮".repeat(0));
  });

  it("renders 60% recycled content as 30 of 50 icons", () => {
    const html = renderRecyclabilityPayoff();
    expect(html).toContain("♻️".repeat(30) + "🌱".repeat(20));
  });

  it("links its caption back to the cited source", () => {
    const html = renderRecyclabilityPayoff();
    expect(html).toContain('href="#source-recycling-pfand-recyclability"');
  });
});
