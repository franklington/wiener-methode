import { describe, expect, it } from "vitest";
import { renderEuTariffs } from "./eu-tariffs";

function pictogramRows(html: string): string[] {
  return [...html.matchAll(/class="pictogram"[^>]*>(🧱*)</gu)].map((match) => match[1]);
}

describe("renderEuTariffs", () => {
  it("renders one row per company at 5 points/icon", () => {
    const [byd, geely, saic, tesla] = pictogramRows(renderEuTariffs());
    expect(byd).toBe("🧱".repeat(3)); // 17.4 / 5 -> 3
    expect(geely).toBe("🧱".repeat(4)); // 19.9 / 5 -> 4
    expect(saic).toBe("🧱".repeat(8)); // 37.6 / 5 -> 8
    expect(tesla).toBe("🧱".repeat(2)); // 9.0 / 5 -> 2
  });

  it("names every company", () => {
    const html = renderEuTariffs();
    expect(html).toContain("BYD");
    expect(html).toContain("Geely");
    expect(html).toContain("SAIC");
    expect(html).toContain("Tesla");
  });

  it("links the tariff footnote", () => {
    const html = renderEuTariffs();
    expect(html).toContain('href="#source-eu-access2markets-tariffs"');
  });
});
