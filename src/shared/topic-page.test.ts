import { describe, expect, it } from "vitest";
import { renderTopicPage, type Topic } from "./topic-page";

function makeTopic(overrides: Partial<Topic> = {}): Topic {
  return {
    slug: "test-topic",
    title: "A test topic",
    sections: [{ render: () => "<section>hi</section>" }],
    sources: [{ id: "src-1", label: "Some Open Data Portal", url: "https://example.org", retrieved: "2026-07-01" }],
    ...overrides,
  };
}

describe("renderTopicPage", () => {
  it("refuses to render a page with no sources", () => {
    expect(() => renderTopicPage(makeTopic({ sources: [] }))).toThrow(/no sources/);
  });

  it("refuses to render a page with no sections", () => {
    expect(() => renderTopicPage(makeTopic({ sections: [] }))).toThrow(/no sections/);
  });

  it("includes the title, each section, and a numbered footnote per source", () => {
    const html = renderTopicPage(
      makeTopic({
        sources: [
          { id: "a", label: "Source A", url: "https://a.example", retrieved: "2026-01-01" },
          { id: "b", label: "Source B", url: "https://b.example", retrieved: "2026-02-01" },
        ],
      }),
    );
    expect(html).toContain("A test topic");
    expect(html).toContain("<section>hi</section>");
    expect(html).toContain('id="source-a"');
    expect(html).toContain('id="source-b"');
    expect(html).toContain("1.");
    expect(html).toContain("2.");
  });

  it("escapes title text so page copy can't break the surrounding markup", () => {
    const html = renderTopicPage(makeTopic({ title: "<script>alert(1)</script>" }));
    expect(html).not.toContain("<script>alert(1)</script>");
    expect(html).toContain("&lt;script&gt;");
  });
});
