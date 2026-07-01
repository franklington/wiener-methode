import { describe, expect, it } from "vitest";
import { renderLocalProduction } from "./local-production";

describe("renderLocalProduction", () => {
  it("orders plants from earliest to latest", () => {
    const html = renderLocalProduction();
    expect(html.indexOf("Nov 2024")).toBeLessThan(html.indexOf("March 2026"));
    expect(html).toContain("Barcelona");
    expect(html).toContain("Hungary");
    expect(html).toContain("Turkey");
  });

  it("links all three footnotes", () => {
    const html = renderLocalProduction();
    expect(html).toContain('href="#source-xinhua-chery-ebro-spain"');
    expect(html).toContain('href="#source-electrive-byd-hungary"');
    expect(html).toContain('href="#source-electrive-byd-turkey"');
  });
});
