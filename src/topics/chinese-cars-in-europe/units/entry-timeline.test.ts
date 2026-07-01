import { describe, expect, it } from "vitest";
import { renderEntryTimeline } from "./entry-timeline";

describe("renderEntryTimeline", () => {
  it("orders entries from earliest to latest", () => {
    const html = renderEntryTimeline();
    expect(html.indexOf("Late 2019")).toBeLessThan(html.indexOf("BYD"));
    expect(html).toContain("MG");
    expect(html).toContain("Great Wall Motor");
  });

  it("links all three footnotes", () => {
    const html = renderEntryTimeline();
    expect(html).toContain('href="#source-mg-europe-relaunch"');
    expect(html).toContain('href="#source-autonews-china-europe-sales"');
    expect(html).toContain('href="#source-automotiveworld-gwm-offensive"');
  });
});
