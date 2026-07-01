import { describe, expect, it } from "vitest";
import { renderTimeline } from "./timeline";

describe("renderTimeline", () => {
  it("renders one list item per event, in the given order", () => {
    const html = renderTimeline([
      { year: "1903", label: "Ford founded" },
      { year: "1937", label: "Volkswagen founded" },
    ]);
    expect(html.indexOf("1903")).toBeLessThan(html.indexOf("1937"));
    expect(html).toContain("Ford founded");
    expect(html).toContain("Volkswagen founded");
  });

  it("escapes event text", () => {
    const html = renderTimeline([{ year: "<b>2024</b>", label: "<script>x</script>" }]);
    expect(html).not.toContain("<script>x</script>");
    expect(html).not.toContain("<b>2024</b>");
  });

  it("refuses to render an empty timeline", () => {
    expect(() => renderTimeline([])).toThrow(/at least one event/);
  });
});
