import { escapeHtml } from "./topic-page";

export interface TimelineEvent {
  year: string;
  label: string;
}

/** Renders an ordered list of dated events, oldest first, as given. */
export function renderTimeline(events: TimelineEvent[]): string {
  if (events.length === 0) {
    throw new Error("renderTimeline needs at least one event");
  }
  const items = events
    .map(
      (event) =>
        `<li><span class="timeline-year">${escapeHtml(event.year)}</span> ${escapeHtml(event.label)}</li>`,
    )
    .join("\n");
  return `<ol class="timeline">${items}</ol>`;
}
