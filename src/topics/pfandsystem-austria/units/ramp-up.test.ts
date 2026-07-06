import { describe, expect, it } from "vitest";
import { renderRampUp } from "./ramp-up";

describe("renderRampUp", () => {
  it("orders checkpoints from Q1 to year-end", () => {
    const html = renderRampUp();
    expect(html.indexOf("Q1")).toBeLessThan(html.indexOf("mid-year"));
    expect(html.indexOf("mid-year")).toBeLessThan(html.indexOf("10 months"));
    expect(html.indexOf("10 months")).toBeLessThan(html.indexOf("year-end"));
  });

  it("shows the cumulative return counts growing", () => {
    const html = renderRampUp();
    expect(html).toContain("36 million");
    expect(html).toContain("357 million");
    expect(html).toContain("1 billion");
    expect(html).toContain("1.4 billion");
  });

  it("links all four footnotes", () => {
    const html = renderRampUp();
    expect(html).toContain('href="#source-recycling-pfand-q1"');
    expect(html).toContain('href="#source-recycling-pfand-midyear"');
    expect(html).toContain('href="#source-recycling-pfand-tenmonths"');
    expect(html).toContain('href="#source-recycling-pfand-year-one"');
  });
});
