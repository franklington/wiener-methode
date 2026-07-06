import { describe, expect, it } from "vitest";
import { renderSystemBasics } from "./system-basics";

describe("renderSystemBasics", () => {
  it("orders milestones from launch to the EU deadline", () => {
    const html = renderSystemBasics();
    expect(html.indexOf("1 Jan 2025")).toBeLessThan(html.indexOf("2027"));
    expect(html.indexOf("2027")).toBeLessThan(html.indexOf("2029"));
  });

  it("states the deposit amount and container scope", () => {
    const html = renderSystemBasics();
    expect(html).toContain("25-cent");
    expect(html).toContain("0.1 to 3 litres");
  });

  it("links both footnotes", () => {
    const html = renderSystemBasics();
    expect(html).toContain('href="#source-bottlebill-austria"');
    expect(html).toContain('href="#source-recycling-pfand-year-one"');
  });
});
