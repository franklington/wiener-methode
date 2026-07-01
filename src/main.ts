import { renderTopicPage } from "./shared/topic-page";
import { topics, defaultTopicSlug } from "./topics/registry";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("Missing #app mount element in index.html");
}

const requestedSlug = new URLSearchParams(location.search).get("topic");
const topic = topics[requestedSlug ?? defaultTopicSlug] ?? topics[defaultTopicSlug];

app.innerHTML = renderTopicPage(topic);
