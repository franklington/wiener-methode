import { describe, expect, it } from "vitest";
import { renderOldGuardTimeline } from "./old-guard-timeline";

describe("renderOldGuardTimeline", () => {
  it("lists Benz, Ford and Volkswagen in founding order", () => {
    const html = renderOldGuardTimeline();
    expect(html.indexOf("1886")).toBeLessThan(html.indexOf("1903"));
    expect(html.indexOf("1903")).toBeLessThan(html.indexOf("1937"));
    expect(html).toContain("Benz");
    expect(html).toContain("Ford");
    expect(html).toContain("Volkswagen");
  });

  it("links all three footnotes", () => {
    const html = renderOldGuardTimeline();
    expect(html).toContain('href="#source-mercedes-history"');
    expect(html).toContain('href="#source-ford-model-t-history"');
    expect(html).toContain('href="#source-vw-beetle-numbers"');
  });
});
