import { describe, expect, it } from "vitest";
import { renderBrandRoster } from "./brand-roster";
import { brandRoster } from "../data";

describe("renderBrandRoster", () => {
  it("lists every brand family from the data module", () => {
    const html = renderBrandRoster();
    for (const brand of brandRoster.brands) {
      expect(html).toContain(brand.replace("&", "&amp;"));
    }
  });

  it("renders one car icon per brand family", () => {
    const html = renderBrandRoster();
    expect(html).toContain(`aria-label="${brandRoster.brands.length} brand families"`);
    expect(html).toContain("🚗".repeat(brandRoster.brands.length));
  });

  it("links both footnotes", () => {
    const html = renderBrandRoster();
    expect(html).toContain('href="#source-autonews-segment-analysis"');
    expect(html).toContain('href="#source-wikipedia-geely"');
  });
});
