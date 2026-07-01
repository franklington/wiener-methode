import { describe, expect, it } from "vitest";
import { renderBydHistory } from "./byd-history";

describe("renderBydHistory", () => {
  it("orders BYD's milestones from founding to overtaking Tesla", () => {
    const html = renderBydHistory();
    expect(html.indexOf("1995")).toBeLessThan(html.indexOf("2003"));
    expect(html.indexOf("2003")).toBeLessThan(html.indexOf("Q4 2023"));
    expect(html).toContain("battery");
    expect(html).toContain("Tesla");
  });

  it("links both footnotes", () => {
    const html = renderBydHistory();
    expect(html).toContain('href="#source-cnn-byd-explainer"');
    expect(html).toContain('href="#source-wikipedia-byd-auto"');
  });
});
