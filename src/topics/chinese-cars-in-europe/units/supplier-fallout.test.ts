import { describe, expect, it } from "vitest";
import { renderSupplierFallout } from "./supplier-fallout";

describe("renderSupplierFallout", () => {
  it("renders exactly 14 icons for 350,000 jobs at 25,000/icon", () => {
    const html = renderSupplierFallout();
    expect(html).toContain("👷".repeat(14));
    expect(html).toContain('aria-label="350,000 jobs at risk"');
  });

  it("names the specific companies with announced cuts", () => {
    const html = renderSupplierFallout();
    expect(html).toContain("Bosch");
    expect(html).toContain("Continental");
    expect(html).toContain("ZF");
  });

  it("links both footnotes", () => {
    const html = renderSupplierFallout();
    expect(html).toContain('href="#source-clepa-jobs-study"');
    expect(html).toContain('href="#source-forbes-supplier-layoffs"');
  });
});
