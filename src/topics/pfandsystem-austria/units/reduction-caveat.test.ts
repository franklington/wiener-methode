import { describe, expect, it } from "vitest";
import { renderReductionCaveat } from "./reduction-caveat";

describe("renderReductionCaveat", () => {
  it("renders one drop per 25 million litres", () => {
    const html = renderReductionCaveat();
    expect(html).toContain("💧".repeat(28)); // 700 / 25 = 28
  });

  it("attributes the critical framing to the industry source quoted", () => {
    const html = renderReductionCaveat();
    expect(html).toContain("Rücklauf ja - Reduktion nein");
    expect(html).toContain("industry group selling reusable water dispensers");
  });

  it("links its caption back to the cited source", () => {
    const html = renderReductionCaveat();
    expect(html).toContain('href="#source-culligan-pressrelease"');
  });
});
