import { describe, expect, it } from "vitest";
import { renderScaleRealityCheck } from "./scale-reality-check";

function pictogramRows(html: string): string[] {
  return [...html.matchAll(/class="pictogram"[^>]*>(🚗*)</gu)].map((match) => match[1]);
}

describe("renderScaleRealityCheck", () => {
  it("renders VW Group's 3,570,000 registrations as 7 icons at 500k/icon", () => {
    const [vwRow] = pictogramRows(renderScaleRealityCheck());
    expect(vwRow).toBe("🚗".repeat(7));
  });

  it("renders Chinese brands' 1,300,000 combined registrations as 3 icons at 500k/icon", () => {
    const [, chineseRow] = pictogramRows(renderScaleRealityCheck());
    expect(chineseRow).toBe("🚗".repeat(3));
  });

  it("links both footnotes", () => {
    const html = renderScaleRealityCheck();
    expect(html).toContain('href="#source-acea-full-year-2025"');
    expect(html).toContain('href="#source-eurostat-road-eqr-carpda"');
  });
});
