import { describe, expect, it } from "vitest";
import { renderCountryContrast } from "./country-contrast";

function pictogramRows(html: string): string[] {
  return [...html.matchAll(/class="pictogram"[^>]*>([🚗🚙]*)</gu)].map((match) => match[1]);
}

describe("renderCountryContrast", () => {
  it("renders Norway's 17% as 9 of 50 icons", () => {
    const [norwayRow] = pictogramRows(renderCountryContrast());
    expect(norwayRow).toBe("🚗".repeat(9) + "🚙".repeat(41));
  });

  it("renders the EU-wide 10% as 5 of 50 icons", () => {
    const [, euRow] = pictogramRows(renderCountryContrast());
    expect(euRow).toBe("🚗".repeat(5) + "🚙".repeat(45));
  });

  it("links both footnotes", () => {
    const html = renderCountryContrast();
    expect(html).toContain('href="#source-xinhua-norway-share"');
    expect(html).toContain('href="#source-autonews-10-percent-december"');
  });
});
