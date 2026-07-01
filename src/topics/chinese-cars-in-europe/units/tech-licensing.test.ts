import { describe, expect, it } from "vitest";
import { renderTechLicensing } from "./tech-licensing";

describe("renderTechLicensing", () => {
  it("orders the deals from earliest to latest", () => {
    const html = renderTechLicensing();
    expect(html.indexOf("Jul 2023")).toBeLessThan(html.indexOf("Oct 2023"));
    expect(html).toContain("Volkswagen");
    expect(html).toContain("Xpeng");
    expect(html).toContain("Stellantis");
    expect(html).toContain("Leapmotor");
  });

  it("links both footnotes", () => {
    const html = renderTechLicensing();
    expect(html).toContain('href="#source-vw-group-xpeng-deal"');
    expect(html).toContain('href="#source-detroitnews-stellantis-leapmotor"');
  });
});
