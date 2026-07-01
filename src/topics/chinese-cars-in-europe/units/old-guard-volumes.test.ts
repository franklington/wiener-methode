import { describe, expect, it } from "vitest";
import { renderOldGuardVolumes } from "./old-guard-volumes";

function pictogramRows(html: string): string[] {
  return [...html.matchAll(/class="pictogram"[^>]*>(🚗*)</gu)].map((match) => match[1]);
}

describe("renderOldGuardVolumes", () => {
  it("renders exactly 8 cars for the Model T's 15,000,000 units at 2M/icon", () => {
    const [modelTRow] = pictogramRows(renderOldGuardVolumes());
    expect(modelTRow).toBe("🚗".repeat(8));
  });

  it("renders exactly 11 cars for the Beetle's 21,529,464 units at 2M/icon", () => {
    const [, beetleRow] = pictogramRows(renderOldGuardVolumes());
    expect(beetleRow).toBe("🚗".repeat(11));
  });

  it("links both footnotes", () => {
    const html = renderOldGuardVolumes();
    expect(html).toContain('href="#source-ford-model-t-history"');
    expect(html).toContain('href="#source-vw-beetle-numbers"');
  });
});
