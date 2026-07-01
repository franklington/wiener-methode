import { describe, expect, it } from "vitest";
import { renderHeadlineShare } from "./headline-share";

describe("renderHeadlineShare", () => {
  it("renders 1 Chinese-brand car icon out of 10", () => {
    const html = renderHeadlineShare();
    expect(html).toContain('aria-label="10 percent"');
    expect(html).toContain("🚗" + "🚙".repeat(9));
  });

  it("links both footnotes", () => {
    const html = renderHeadlineShare();
    expect(html).toContain('href="#source-autonews-10-percent-december"');
    expect(html).toContain('href="#source-jato-chinese-ascent"');
  });
});
