export interface Source {
  /** Referenced from a unit's caption as #source-<id>. */
  id: string;
  label: string;
  url: string;
  /** ISO date the figure was pulled from the source, e.g. "2026-07-01". */
  retrieved: string;
}

export interface Section {
  /** Renders one infographic's HTML fragment. Keep this pure and small. */
  render: () => string;
}

export interface Topic {
  slug: string;
  title: string;
  subtitle?: string;
  sections: Section[];
  sources: Source[];
}

/**
 * Composes a topic's sections and footnotes into one page.
 * Throws instead of rendering an uncited page, because every claim on a
 * Wiener Methode page must trace back to an open data source.
 */
export function renderTopicPage(topic: Topic): string {
  if (topic.sources.length === 0) {
    throw new Error(
      `Topic "${topic.slug}" has no sources. Every page needs at least one cited source.`,
    );
  }
  if (topic.sections.length === 0) {
    throw new Error(`Topic "${topic.slug}" has no sections to render.`);
  }

  const sections = topic.sections.map((section) => section.render()).join("\n");
  const footnotes = topic.sources
    .map(
      (source, index) => `<li id="source-${source.id}">
        ${index + 1}. <a href="${source.url}">${escapeHtml(source.label)}</a>
        (retrieved ${source.retrieved})
      </li>`,
    )
    .join("\n");

  return `
    <article class="topic-page" data-topic="${topic.slug}">
      <h1>${escapeHtml(topic.title)}</h1>
      ${topic.subtitle ? `<p class="subtitle">${escapeHtml(topic.subtitle)}</p>` : ""}
      <div class="sections">${sections}</div>
      <footer class="sources">
        <h2>Sources</h2>
        <ol>${footnotes}</ol>
      </footer>
    </article>
  `;
}

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
